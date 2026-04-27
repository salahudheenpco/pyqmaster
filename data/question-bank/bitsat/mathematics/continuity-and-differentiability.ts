import { PYQQuestion } from "@/lib/types";

export const bitsatContinuityAndDifferentiabilityQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-continuity-and-differentiability-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    topic: "Continuity and differentiability of a piecewise function involving modulus",
    year: 2017,
    questionText: "If f(x) = { e^x, x ≤ 0 ; |1 - x|, x > 0 }, then",
    options: [
      "f(x) is differentiable at x = 0",
      "f(x) is continuous at x = 0, 1",
      "f(x) is differentiable at x = 1",
      "None of the above"
    ],
    correctAnswer: "f(x) is continuous at x = 0, 1",
    explanation: {
      quick: "Use the main concept from Continuity and differentiability of a piecewise function involving modulus and apply it directly. The correct answer is f(x) is continuous at x = 0, 1.",
      standard: "We solve this using the main idea from Continuity and differentiability of a piecewise function involving modulus. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as f(x) is continuous at x = 0, 1.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Continuity and differentiability of a piecewise function involving modulus.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Continuity and differentiability of a piecewise function involving modulus and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as f(x) is continuous at x = 0, 1.\n\nExtra understanding:\nQuestions from Continuity and differentiability of a piecewise function involving modulus often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is f(x) is continuous at x = 0, 1."
    }
  },
  {
    id: "bitsat-2017-mathematics-continuity-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    topic: "Differentiability condition",
    year: 2017,
    questionText: "If left and right derivatives are equal, function is",
    options: [
      "continuous",
      "differentiable",
      "discontinuous",
      "none"
    ],
    correctAnswer: "differentiable",
    explanation: {
      quick: "Use the main concept from Differentiability condition and apply it directly. The correct answer is differentiable.",
      standard: "We solve this using the main idea from Differentiability condition. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as differentiable.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Differentiability condition.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Differentiability condition and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as differentiable.\n\nExtra understanding:\nQuestions from Differentiability condition often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is differentiable."
    }
  }
{
  id: "bitsat-2018-math-continuity-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Continuity and Differentiability",
  topic: "Differentiability",
  year: 2018,
  questionText: "f(x) is continuous but not differentiable at x=0 if",
  options: ["p<0","p=0","0<p≤1","p>1"],
  correctAnswer: "0<p≤1",
  explanation: {
    quick: "Use standard result.",
    standard: "Check differentiability condition.",
    deep: "Let us understand the question from the beginning…\n\nFor x^p sin(1/x), continuity always holds for p>0\nDifferentiability requires p>1\nThus non-differentiable when 0<p≤1\n\nTherefore answer is 0<p≤1."
  }
}
];
