import { PYQQuestion } from "@/lib/types";

export const bitsatAreaUnderCurvesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-area-under-curves-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Area Under Curves",
    topic: "Area using integration",
    year: 2017,
    questionText: "Area under y = x from 0 to 1 is",
    options: [
      "1/2",
      "1",
      "0",
      "2"
    ],
    correctAnswer: "1/2",
    explanation: {
      quick: "Use the main concept from Area using integration and apply it directly. The correct answer is 1/2.",
      standard: "We solve this using the main idea from Area using integration. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 1/2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Area using integration.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Area using integration and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 1/2.\n\nExtra understanding:\nQuestions from Area using integration often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 1/2."
    }
  }
{
  id: "bitsat-2018-math-area-under-curves-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Area Under Curves",
  topic: "Region Area",
  year: 2018,
  questionText: "Area enclosed between circle and curve",
  options: [
    "(π−2/3)a²",
    "(2/3−π)a²",
    "(2/3)πa²",
    "(π+2/3)a²"
  ],
  correctAnswer: "(π−2/3)a²",
  explanation: {
    quick: "Use symmetry.",
    standard: "Integrate region.",
    deep: "Let us understand the question from the beginning…\n\nFind intersection region\nIntegrate in one quadrant and multiply\n\nArea = (π−2/3)a²\n\nTherefore answer is option (a)."
  }
}
];
