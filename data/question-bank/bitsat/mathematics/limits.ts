import { PYQQuestion } from "@/lib/types";

export const bitsatLimitsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-limits-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Limits",
    topic: "Limit of rational function",
    year: 2017,
    questionText: "lim(x→∞) (2x + 1)/(x + 3) =",
    options: [
      "2",
      "1",
      "0",
      "∞"
    ],
    correctAnswer: "2",
    explanation: {
      quick: "Use the main concept from Limit of rational function and apply it directly. The correct answer is 2.",
      standard: "We solve this using the main idea from Limit of rational function. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Limit of rational function.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Limit of rational function and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 2.\n\nExtra understanding:\nQuestions from Limit of rational function often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 2."
    }
  }
];
