import { PYQQuestion } from "@/lib/types";

export const bitsatStatisticsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-statistics-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Statistics",
    topic: "Variance under scaling transformation",
    year: 2017,
    questionText: "If the variance of the observations x₁, x₂, ..., xₙ is σ², then the variance of αx₁, αx₂, ..., αxₙ, where α ≠ 0, is",
    options: [
      "σ²",
      "ασ²",
      "α²σ²",
      "ασ"
    ],
    correctAnswer: "α²σ²",
    explanation: {
      quick: "Use the main concept from Variance under scaling transformation and apply it directly. The correct answer is α²σ².",
      standard: "We solve this using the main idea from Variance under scaling transformation. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as α²σ².",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Variance under scaling transformation.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Variance under scaling transformation and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as α²σ².\n\nExtra understanding:\nQuestions from Variance under scaling transformation often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is α²σ²."
    }
  },
  {
    id: "bitsat-2017-mathematics-statistics-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Statistics",
    topic: "Difference of standard deviations from coefficients of variation",
    year: 2017,
    questionText: "Coefficient of variation of two distributions are 50 and 60, and their arithmetic means are 30 and 25, respectively. Difference of their standard deviations is",
    options: [
      "0",
      "1",
      "1.3",
      "2.5"
    ],
    correctAnswer: "0",
    explanation: {
      quick: "Use the main concept from Difference of standard deviations from coefficients of variation and apply it directly. The correct answer is 0.",
      standard: "We solve this using the main idea from Difference of standard deviations from coefficients of variation. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 0.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Difference of standard deviations from coefficients of variation.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Difference of standard deviations from coefficients of variation and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 0.\n\nExtra understanding:\nQuestions from Difference of standard deviations from coefficients of variation often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 0."
    }
  }
{
  id: "bitsat-2018-math-statistics-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Statistics",
  topic: "Mean Transformation",
  year: 2018,
  questionText: "If mean is X, new mean after transformation is",
  options: ["X/a","(X+10)/a","(X+10a)/a","aX+10"],
  correctAnswer: "(X+10a)/a",
  explanation: {
    quick: "Apply linear transformation.",
    standard: "Mean transforms linearly.",
    deep: "Let us understand the question from the beginning…\n\nNew variable = (x/a)+10\nMean transforms accordingly\n\nMean = (X+10a)/a\n\nTherefore answer is option (c)."
  }
}
];
