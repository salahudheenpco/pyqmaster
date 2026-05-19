import { PYQQuestion } from "@/lib/types";

export const jeeComplexNumbersQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-complex-numbers-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Cube roots of unity, power sums",
    year: 2026,
    questionText:
      "Let ω ≠ 1 be a cube root of unity. If α = (1 + ω)^6 + (1 + ω^2)^6, then α is equal to:",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
    explanation: {
      quick:
        "Use ω³ = 1 and 1 + ω + ω² = 0. Then 1 + ω = -ω² and 1 + ω² = -ω. So α = (-ω²)^6 + (-ω)^6 = ω¹² + ω⁶ = 1 + 1 = 2.",
      standard:
        "We are given ω is a cube root of unity, so:\nω³ = 1 and 1 + ω + ω² = 0\n\nFrom this:\n1 + ω = -ω²\n1 + ω² = -ω\n\nNow substitute into the expression:\nα = (1 + ω)^6 + (1 + ω^2)^6\n= (-ω²)^6 + (-ω)^6\n\nNow simplify powers:\n(-ω²)^6 = ω^12\n(-ω)^6 = ω^6\n\nSince ω³ = 1:\nω^6 = 1\nω^12 = 1\n\nSo,\nα = 1 + 1 = 2.",
      deep:
        "Let us understand the question from the beginning...\n\n(Your deep explanation is already correct)"
    }
  },
  {
    id: "jee-2026-mathematics-complex-numbers-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Argand plane and maximum argument",
    year: 2026,
    questionText:
      "Let z be the complex number satisfying |z - 5| ≤ 3 and having maximum positive principal argument. Then 34 |(5iz + 16)/(5z - 12)|^2 is equal to:",
    options: ["12", "16", "26", "20"],
    correctAnswer: "20",
    explanation: {
      quick:
        "Max argument occurs at tangent point → z = 16/5 + 12/5 i → result = 20.",
      standard:
        "Using tangent condition and substitution, value comes as 20.",
      deep:
        "Let us understand the question from the beginning...\n\n(Your deep explanation is already correct)"
    }
  }
];

export default jeeComplexNumbersQuestions;