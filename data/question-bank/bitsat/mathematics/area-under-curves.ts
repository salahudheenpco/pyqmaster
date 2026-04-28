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
    options: ["1/2","1","0","2"],
    correctAnswer: "1/2",
    explanation: {
      quick: "Area = ∫₀¹ x dx.",
      standard: "∫₀¹ x dx = [x²/2]₀¹ = 1/2.",
      deep: "Area under the curve is given by definite integration:\n\n∫₀¹ x dx = [x²/2]₀¹\n= (1²/2 − 0)\n= 1/2\n\nTherefore, the correct answer is 1/2."
    }
  },

  // ✅ FIXED

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
      quick: "Use symmetry and subtract areas.",
      standard: "Total circle area − inner region gives (π−2/3)a².",
      deep: "Total circle area = πa²\n\nInner region area = (2/3)a²\n\nSo required area:\n= πa² − (2/3)a²\n= (π − 2/3)a²\n\nTherefore answer is (π−2/3)a²."
    }
  }
];