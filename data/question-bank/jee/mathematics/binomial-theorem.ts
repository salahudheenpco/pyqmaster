import { PYQQuestion } from "@/lib/types";

export const jeeBinomialTheoremQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-binomial-theorem-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    topic: "General term and coefficient",
    year: 2026,
    questionText:
      "If the coefficient of x^5 in the expansion of (1 + x)^n is 252, then n is equal to:",
    options: ["10", "9", "8", "7"],
    correctAnswer: "10",
    explanation: {
      quick:
        "Coefficient of x^5 is nC5. So nC5 = 252 ⇒ n = 10.",
      standard:
        "The coefficient of x^5 in (1 + x)^n is nC5.\n\nGiven nC5 = 252.\nWe know 10C5 = 252.\n\nHence n = 10.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the expansion of (1 + x)^n.\n\nFrom binomial theorem, the general term is:\nT_(r+1) = nCr x^r\n\nSo the coefficient of x^5 is:\nnC5\n\nWe are given:\nnC5 = 252\n\nNow we check standard combinations:\n10C5 = 252\n\nSo n = 10.\n\nCommon mistake:\nStudents sometimes use wrong r value. Remember exponent of x gives r directly.\n\nTherefore, the correct answer is 10."
    }
  }
];

export default jeeBinomialTheoremQuestions;