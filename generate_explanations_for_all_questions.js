const fs = require('fs');
const path = require('path');

const ROOT = process.argv[2] || path.join(process.cwd(), 'data', 'question-bank');

function walk(dir, results = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, results);
    } else if (entry.isFile() && full.endsWith('.ts') && !full.endsWith('index.ts')) {
      results.push(full);
    }
  }
  return results;
}

function pickConcept(q) {
  return q.topic || q.chapter || 'this concept';
}

function buildQuick(q) {
  const answerText = q.options?.find?.(o => o.id === q.correctAnswer)?.text;
  return `Use the main concept from ${pickConcept(q)} and apply it directly. The correct answer is ${q.correctAnswer}${answerText ? ` (${answerText})` : ''}.`;
}

function buildStandard(q) {
  const answerText = q.options?.find?.(o => o.id === q.correctAnswer)?.text;
  return `We solve this using the main idea from ${pickConcept(q)}. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as ${q.correctAnswer}${answerText ? ` (${answerText})` : ''}.`;
}

function buildDeep(q) {
  const answerText = q.options?.find?.(o => o.id === q.correctAnswer)?.text;
  const concept = pickConcept(q);
  const subject = q.subject || 'this subject';
  return [
    'Let us understand the question from the beginning.',
    '',
    `This question belongs to ${subject}, and the main concept involved is ${concept}.`,
    '',
    'The first step in such questions is to understand exactly what is given and what we need to find.',
    '',
    `Here, we should focus on the idea behind ${concept} and apply the correct rule or formula carefully.`,
    '',
    'So the correct method is:',
    '1. Identify the concept being tested.',
    '2. Write the correct rule, definition, or formula.',
    '3. Match the given values or facts with that rule.',
    '4. Solve step by step without skipping logic.',
    '',
    `When we do that carefully for this question, we get the correct answer as ${q.correctAnswer}${answerText ? ` (${answerText})` : ''}.`,
    '',
    'Extra understanding:',
    `Questions from ${concept} often become easy when you first identify the core idea before trying to calculate or compare options.`,
    '',
    'Common mistake:',
    'Students often rush into the options or use the wrong formula/concept before understanding what the question is really asking.',
    '',
    `Therefore, the correct answer is ${q.correctAnswer}${answerText ? ` (${answerText})` : ''}.`
  ].join('\n');
}

function ensureExplanation(q) {
  const hasQuick =
    typeof q.explanation?.quick === "string" &&
    q.explanation.quick.trim().length > 0;

  const hasStandard =
    typeof q.explanation?.standard === "string" &&
    q.explanation.standard.trim().length > 0;

  const hasDeep =
    typeof q.explanation?.deep === "string" &&
    q.explanation.deep.trim().length > 0;

  // If all 3 explanations already exist, do not touch this question
  if (hasQuick && hasStandard && hasDeep) {
    return q;
  }

  return {
    ...q,
    explanation: {
      quick: hasQuick ? q.explanation.quick : buildQuick(q),
      standard: hasStandard ? q.explanation.standard : buildStandard(q),
      deep: hasDeep ? q.explanation.deep : buildDeep(q),
    },
  };
}

function tryLoadTsArray(filePath) {
  let text = fs.readFileSync(filePath, 'utf8');

  // Remove import lines.
  const noImports = text.replace(/^\s*import[^;]*;\s*$/gm, '');

  // Find exported array assignment.
  const exportMatch = noImports.match(/export\s+const\s+(\w+)\s*:[^{=\n]*=\s*(\[[\s\S]*\]);?\s*$/m);
  if (!exportMatch) {
    throw new Error(`Could not parse exported array in ${filePath}`);
  }

  const varName = exportMatch[1];
  const arrayLiteral = exportMatch[2];

  // Evaluate array literal in a controlled way.
  const data = Function(`"use strict"; return (${arrayLiteral});`)();
  if (!Array.isArray(data)) {
    throw new Error(`Parsed data is not an array in ${filePath}`);
  }

  return { varName, data };
}

function formatTsValue(value, indent = 2) {
  const pad = ' '.repeat(indent);
  const nextPad = ' '.repeat(indent + 2);

  if (value === null) return 'null';
  if (typeof value === 'string') return JSON.stringify(value);
  if (typeof value === 'number' || typeof value === 'boolean') return String(value);
  if (Array.isArray(value)) {
    if (value.length === 0) return '[]';
    const items = value.map(v => `${nextPad}${formatTsValue(v, indent + 2)}`).join(',\n');
    return `[\n${items}\n${pad}]`;
  }
  const entries = Object.entries(value);
  if (entries.length === 0) return '{}';
  const body = entries
    .map(([k, v]) => `${nextPad}${/^[A-Za-z_$][\w$]*$/.test(k) ? k : JSON.stringify(k)}: ${formatTsValue(v, indent + 2)}`)
    .join(',\n');
  return `{\n${body}\n${pad}}`;
}

function writeTsArray(filePath, varName, data) {
  const content = [
    'import { PYQQuestion } from "@/lib/types";',
    '',
    `export const ${varName}: PYQQuestion[] = ${formatTsValue(data, 0)};`,
    ''
  ].join('\n');
  fs.writeFileSync(filePath, content, 'utf8');
}

function main() {
  if (!fs.existsSync(ROOT)) {
    console.error(`Folder not found: ${ROOT}`);
    process.exit(1);
  }

  const files = walk(ROOT);
  let updatedFiles = 0;
  let updatedQuestions = 0;

  for (const file of files) {
    try {
      const { varName, data } = tryLoadTsArray(file);
      const updated = data.map(ensureExplanation);
      writeTsArray(file, varName, updated);
      updatedFiles += 1;
      updatedQuestions += updated.length;
      console.log(`Updated ${file}`);
    } catch (err) {
      console.error(`Skipped ${file}: ${err.message}`);
    }
  }

  console.log(`\nDone. Updated ${updatedFiles} files and ${updatedQuestions} questions.`);
}

main();
