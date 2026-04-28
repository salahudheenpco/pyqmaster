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
    options: ["decreasing","increasing","constant","none of these"],
    correctAnswer: "increasing",
    explanation: {
      quick: "f'(x) > 0 ⇒ function increasing.",
      standard: "If derivative is positive throughout an interval, function is strictly increasing in that interval.",
      deep: "A function is increasing where its derivative is positive.\n\nGiven:\nf'(x) > 0 for all x in an interval\n\nThis means slope is always positive → function always rises.\n\nHence, f(x) is increasing."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-aod-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    topic: "Related Rates",
    year: 2018,
    questionText: "Rate of rise of water level in cone",
    options: ["4/(3π)","3/(4π)","3π/4","4/3π"],
    correctAnswer: "4/(3π)",
    explanation: {
      quick: "Use V = (1/3)πr²h and differentiate.",
      standard: "Using similarity r/h constant, express V in terms of h and differentiate to find dh/dt.",
      deep: "Volume of cone:\nV = (1/3)πr²h\n\nUsing similarity:\nr = kh\n\nSo:\nV = (1/3)πk²h³\n\nDifferentiate:\ndV/dt = πk²h² dh/dt\n\nSolve for dh/dt → gives 4/(3π)\n\nTherefore answer is 4/(3π)."
    }
  },

  // ✅ FIXED

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
      quick: "Find f'(x) and check where it is negative.",
      standard: "f'(x) = -6x² -18x -12. Solve f'(x) < 0.",
      deep: "Given:\nf(x) = -2x³ - 9x² - 12x + 1\n\nDerivative:\nf'(x) = -6x² -18x -12\n\nFactor:\n= -6(x² + 3x + 2)\n= -6(x+1)(x+2)\n\nFor decreasing:\nf'(x) < 0\n\nSo:\n(x+1)(x+2) > 0\n\nHence:\nx < -2 OR x > -1\n\nTherefore interval:\n(-∞, -2) ∪ (-1, ∞)"
    }
  }
];