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
    options: ["σ²", "ασ²", "α²σ²", "ασ"],
    correctAnswer: "α²σ²",
    explanation: {
      quick: "Variance gets multiplied by the square of the scaling factor.",
      standard: "If each observation is multiplied by α, then variance is multiplied by α². Therefore, the new variance is α²σ².",
      deep: "Variance measures squared deviation from the mean.\n\nIf every observation xᵢ is changed to αxᵢ, then every deviation from the mean also gets multiplied by α.\n\nSince variance uses square of deviations, the variance gets multiplied by α².\n\nSo if original variance is σ², new variance is:\nα²σ²\n\nHence, the correct answer is α²σ²."
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
    options: ["0", "1", "1.3", "2.5"],
    correctAnswer: "0",
    explanation: {
      quick: "Use CV = (standard deviation / mean) × 100.",
      standard: "For first distribution, SD = 50 × 30 / 100 = 15. For second distribution, SD = 60 × 25 / 100 = 15. Difference = 0.",
      deep: "Coefficient of variation formula:\n\nCV = (standard deviation / mean) × 100\n\nSo:\nstandard deviation = (CV × mean) / 100\n\nFor first distribution:\nSD₁ = (50 × 30) / 100 = 15\n\nFor second distribution:\nSD₂ = (60 × 25) / 100 = 15\n\nDifference:\nSD₁ − SD₂ = 15 − 15 = 0\n\nTherefore, the correct answer is 0."
    }
  },
  {
    id: "bitsat-2018-math-statistics-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Statistics",
    topic: "Mean Transformation",
    year: 2018,
    questionText: "If mean is X, new mean after transformation is",
    options: ["X/a", "(X+10)/a", "(X+10a)/a", "aX+10"],
    correctAnswer: "(X+10a)/a",
    explanation: {
      quick: "Mean changes according to the same linear transformation.",
      standard: "If each observation is transformed as y = x/a + 10, then new mean = X/a + 10 = (X + 10a)/a.",
      deep: "Let the original mean be X.\n\nFor a linear transformation, mean transforms in the same way as the observations.\n\nIf the new variable is:\ny = x/a + 10\n\nThen the new mean is:\nȳ = X/a + 10\n\nWrite with common denominator:\nȳ = (X + 10a)/a\n\nTherefore, the correct answer is (X+10a)/a."
    }
  }
];