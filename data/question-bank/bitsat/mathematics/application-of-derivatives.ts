import { PYQQuestion } from "@/lib/types";

export const bitsatApplicationOfDerivativesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-aod-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    topic: "Increasing/decreasing function",
    year: 2017,
    questionText: "If f'(x) > 0 for all x in an interval, then f(x) is",
    options: [
      "decreasing",
      "increasing",
      "constant",
      "none of these"
    ],
    correctAnswer: "increasing",
    explanation: {
      quick: "Use the main concept from Increasing/decreasing function and apply it directly. The correct answer is increasing.",
      standard: "We solve this using the main idea from Increasing/decreasing function. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as increasing.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Increasing/decreasing function.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Increasing/decreasing function and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as increasing.\n\nExtra understanding:\nQuestions from Increasing/decreasing function often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is increasing."
    }
  }
{
  id: "bitsat-2018-math-aod-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Application of Derivatives",
  topic: "Related Rates",
  year: 2018,
  questionText: "Rate of rise of water level in cone",
  options: ["4/3π","3/4π","3π/4","4/3π"],
  correctAnswer: "4/(3π)",
  explanation: {
    quick: "Use volume differentiation.",
    standard: "V = (1/3)πr²h relation.",
    deep: "Let us understand the question from the beginning…\n\nUse similarity r/h = constant\nDifferentiate volume\nSubstitute values → answer = 4/(3π).\n\nTherefore correct answer is 4/(3π)."
  }
}
{
  id: "bitsat-2018-math-aod-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Application of Derivatives",
  topic: "Monotonicity",
  year: 2018,
  questionText: "For which interval is f(x) = -2x³ - 9x² - 12x + 1 decreasing?",
  options: ["(-2,∞)","(-2,-1)","(-∞,-1)","(-∞,-2) or (-1,∞)"],
  correctAnswer: "(-∞,-2) or (-1,∞)",
  explanation: {
    quick: "Check f'(x) < 0.",
    standard: "Find derivative and solve inequality.",
    deep: "Let us understand the question from the beginning…\n\nf'(x) = -6x² -18x -12\nSolve f'(x)<0\nGives (-∞,-2) ∪ (-1,∞)\n\nTherefore answer is option (d)."
  }
}
];
