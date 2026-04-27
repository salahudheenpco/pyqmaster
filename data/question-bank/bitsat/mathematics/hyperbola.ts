import { PYQQuestion } from "@/lib/types";

export const bitsatHyperbolaQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-hyperbola-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Condition on parameter for a second-degree equation to represent a hyperbola",
    year: 2017,
    questionText: "If the equation (10x − 5)² + (10y − 4)² = λ²(3x + 4y − 1)² represents a hyperbola, then",
    options: [
      "−2 < λ < 2",
      "λ > 2",
      "λ < −2 or λ > 2",
      "0 < λ < 2"
    ],
    correctAnswer: "λ < −2 or λ > 2",
    explanation: {
      quick: "Use the main concept from Condition on parameter for a second-degree equation to represent a hyperbola and apply it directly. The correct answer is λ < −2 or λ > 2.",
      standard: "We solve this using the main idea from Condition on parameter for a second-degree equation to represent a hyperbola. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as λ < −2 or λ > 2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Condition on parameter for a second-degree equation to represent a hyperbola.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Condition on parameter for a second-degree equation to represent a hyperbola and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as λ < −2 or λ > 2.\n\nExtra understanding:\nQuestions from Condition on parameter for a second-degree equation to represent a hyperbola often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is λ < −2 or λ > 2."
    }
  }
{
  id: "bitsat-2018-math-hyperbola-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Hyperbola",
  topic: "Eccentricity",
  year: 2018,
  questionText: "Value of e² − 9 is",
  options: ["9","10","11","8"],
  correctAnswer: "8",
  explanation: {
    quick: "Use tangent area formula.",
    standard: "Apply intercept form.",
    deep: "Let us understand the question from the beginning…\n\nSolving gives e²−9 = 8.\n\nTherefore answer is 8."
  }
}
{
  id: "bitsat-2018-math-hyperbola-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Hyperbola",
  topic: "Eccentricity",
  year: 2018,
  questionText: "If e₁ and e₂ are eccentricities of hyperbola and its conjugate, then",
  options: ["e₁²+e₂²=2","e₁²+e₂²=4","e₁+e₂=4","e₁+e₂=√2"],
  correctAnswer: "e₁²+e₂²=4",
  explanation: {
    quick: "Use relation of conjugate hyperbola.",
    standard: "e² = 1 + b²/a²",
    deep: "Let us understand the question from the beginning…\n\nFor hyperbola and conjugate,\nsum of squares = 4.\n\nTherefore answer is e₁²+e₂²=4."
  }
}
];
