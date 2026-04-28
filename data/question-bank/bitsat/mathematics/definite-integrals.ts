import { PYQQuestion } from "@/lib/types";

export const bitsatDefiniteIntegralsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-definite-integrals-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Definite Integrals",
    topic: "Basic definite integral",
    year: 2017,
    questionText: "∫₀¹ x dx =",
    options: ["1/2","1","0","2"],
    correctAnswer: "1/2",
    explanation: {
      quick: "∫₀¹ x dx = [x²/2]₀¹.",
      standard: "Evaluating gives (1²/2 − 0) = 1/2.",
      deep: "Compute the definite integral:\n\n∫₀¹ x dx = [x²/2]₀¹\n= (1/2 − 0)\n= 1/2\n\nTherefore, the correct answer is 1/2."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-integrals-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Integrals",
    topic: "Parameter Evaluation",
    year: 2018,
    questionText: "Find (A,B,C)",
    options: [
      "(tan⁻¹2,e,e²)",
      "(tan⁻¹e,e,2)",
      "(tan⁻¹1,2,1/e)",
      "(tan⁻¹1,e,1/e)"
    ],
    correctAnswer: "(tan⁻¹1,e,1/e)",
    explanation: {
      quick: "Evaluate expressions and compare constants.",
      standard: "Solve given integrals step-by-step and match coefficients.",
      deep: "Evaluate each expression carefully and compare with standard forms.\n\nMatching constants gives:\n(A,B,C) = (tan⁻¹1, e, 1/e)\n\nTherefore, the correct answer is option (d)."
    }
  },

  {
    id: "bitsat-2018-math-integrals-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Integrals",
    topic: "Definite Integral",
    year: 2018,
    questionText: "Evaluate ∫₀¹ cot⁻¹(1−x+x²) dx",
    options: ["log₂2","π/2−log₂2","π/2+log₂2","−log₂2"],
    correctAnswer: "π/2−log₂2",
    explanation: {
      quick: "Use substitution x → 1 − x.",
      standard: "Use symmetry: I + I transformation.",
      deep: "Let I = ∫₀¹ cot⁻¹(1−x+x²) dx\n\nUse substitution x → 1−x and add:\n\n2I simplifies to π − 2log2\n\nThus:\nI = π/2 − log2\n\nTherefore, the correct answer is π/2 − log₂2."
    }
  }
];