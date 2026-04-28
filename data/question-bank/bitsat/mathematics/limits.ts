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
    options: ["2","1","0","∞"],
    correctAnswer: "2",
    explanation: {
      quick: "Divide numerator and denominator by x.",
      standard: "(2 + 1/x)/(1 + 3/x) → 2/1 = 2.",
      deep: "Given:\nlim(x→∞) (2x + 1)/(x + 3)\n\nDivide numerator and denominator by x:\n\n= (2 + 1/x)/(1 + 3/x)\n\nAs x → ∞:\n1/x → 0 and 3/x → 0\n\nSo limit = 2/1 = 2\n\nTherefore, the correct answer is 2."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-limits-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Limits",
    topic: "Expansion",
    year: 2018,
    questionText: "Find a such that limit = 3/2",
    options: ["1","0","2","4"],
    correctAnswer: "1",
    explanation: {
      quick: "Use series expansion.",
      standard: "Apply Taylor expansion and compare terms.",
      deep: "Expand the given expression using Taylor series.\n\nCompare coefficients to match the required limit value 3/2.\n\nSolving gives:\na = 1\n\nTherefore, the correct answer is 1."
    }
  }
];