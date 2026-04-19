import type { ExplanationDepth, PYQQuestion, QuestionOption } from "@/lib/types";

function isOptionObject(option: string | QuestionOption): option is QuestionOption {
  return typeof option === "object" && option !== null;
}

function getQuestionText(question: PYQQuestion): string {
  const legacyQuestion = (question as PYQQuestion & { question?: string }).question;
  return question.questionText || legacyQuestion || "Question text not available.";
}

function getCorrectAnswerText(question: PYQQuestion): string {
  const correct = question.correctAnswer;

  if (!question.options || question.options.length === 0) {
    return correct;
  }

  const matchedOption = question.options.find((option) => {
    if (typeof option === "string") {
      return option === correct;
    }

    return option.id === correct || option.text === correct;
  });

  if (!matchedOption) {
    return correct;
  }

  return isOptionObject(matchedOption) ? matchedOption.text : matchedOption;
}

function buildQuick(question: PYQQuestion): string {
  const concept = question.topic || question.chapter || question.subject || "this concept";
  const correctOption = getCorrectAnswerText(question);

  return `Use the main concept from ${concept} and apply it directly. The correct answer is ${question.correctAnswer}${correctOption !== question.correctAnswer ? ` (${correctOption})` : ""}.`;
}

function buildStandard(question: PYQQuestion): string {
  const concept = question.topic || question.chapter || question.subject || "this topic";
  const correctOption = getCorrectAnswerText(question);

  return `We solve this using the main idea from ${concept}. First identify what the question is asking, then apply the correct rule, formula, or concept step by step. After using the given information carefully, we get the final answer as ${question.correctAnswer}${correctOption !== question.correctAnswer ? ` (${correctOption})` : ""}.`;
}

function buildDeep(question: PYQQuestion): string {
  const concept = question.topic || question.chapter || question.subject || "this topic";
  const correctOption = getCorrectAnswerText(question);

  return [
    "Let us understand the question from the beginning.",
    "",
    `This question belongs to ${question.subject}, and the main concept involved is ${concept}.`,
    "",
    "The first step in such questions is to understand exactly what is given and what we need to find.",
    "",
    `Here, we should focus on the idea behind ${concept} and apply the correct rule or formula carefully.`,
    "",
    "So the correct method is:",
    "1. Identify the concept being tested.",
    "2. Recall the correct rule, definition, or formula.",
    "3. Match the given values or facts with that rule.",
    "4. Solve step by step without skipping logic.",
    "",
    `When we do that carefully for this question, we get the correct answer as ${question.correctAnswer}${correctOption !== question.correctAnswer ? ` (${correctOption})` : ""}.`,
    "",
    "Extra understanding:",
    `Questions from ${concept} often become easier when you first identify the core idea before trying to calculate or compare options.`,
    "",
    "Common mistake:",
    "Students often rush into the options or use the wrong concept before understanding what the question is really asking.",
    "",
    `Therefore, the correct answer is ${question.correctAnswer}${correctOption !== question.correctAnswer ? ` (${correctOption})` : ""}.`,
  ].join("\n");
}

export function ensureExplanation(question: PYQQuestion): PYQQuestion {
  const hasQuick =
    typeof question.explanation === "object" &&
    question.explanation !== null &&
    "quick" in question.explanation &&
    typeof question.explanation.quick === "string" &&
    question.explanation.quick.trim().length > 0;

  const hasStandard =
    typeof question.explanation === "object" &&
    question.explanation !== null &&
    "standard" in question.explanation &&
    typeof question.explanation.standard === "string" &&
    question.explanation.standard.trim().length > 0;

  const hasDeep =
    typeof question.explanation === "object" &&
    question.explanation !== null &&
    "deep" in question.explanation &&
    typeof question.explanation.deep === "string" &&
    question.explanation.deep.trim().length > 0;

  if (hasQuick && hasStandard && hasDeep) {
    return question;
  }

  const existingExplanation =
    typeof question.explanation === "object" && question.explanation !== null
      ? question.explanation
      : undefined;

  return {
    ...question,
    explanation: {
      quick: hasQuick ? existingExplanation!.quick : buildQuick(question),
      standard: hasStandard ? existingExplanation!.standard : buildStandard(question),
      deep: hasDeep ? existingExplanation!.deep : buildDeep(question),
    },
  };
}

export function getSmartExplanation(
  question: PYQQuestion,
  depth: ExplanationDepth = "standard"
): string {
  if (!question.explanation) {
    const generated = ensureExplanation(question).explanation;

    if (typeof generated === "string") {
      return generated;
    }

    return generated[depth] || generated.standard || generated.quick || "No explanation available yet.";
  }

  if (typeof question.explanation === "string") {
    return question.explanation;
  }

  return (
    question.explanation[depth] ||
    question.explanation.standard ||
    question.explanation.quick ||
    "No explanation available yet."
  );
}