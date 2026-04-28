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
      quick: "Check continuity at break points x = 0 and x = 1.",
      standard: "For x ≤ 0, f(x) = e^x; for x > 0, f(x) = |1 - x|. At x = 0, LHL = e⁰ = 1 and RHL = |1 - 0| = 1 → continuous. At x = 1, modulus function is continuous, so function is continuous at both points.",
      deep: "Let us analyze both points carefully.\n\nAt x = 0:\nLHL = e⁰ = 1\nRHL = |1 - 0| = 1\nFunction value = 1\n\nSo function is continuous at x = 0.\n\nAt x = 1:\nf(x) = |1 - x|\n\nModulus function is continuous everywhere.\n\nHence function is continuous at x = 1 as well.\n\nDifferentiability fails at x = 1 because modulus has a sharp corner.\n\nTherefore, the correct answer is:\nf(x) is continuous at x = 0, 1."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2017-mathematics-continuity-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    topic: "Differentiability condition",
    year: 2017,
    questionText: "If left and right derivatives are equal, function is",
    options: ["continuous","differentiable","discontinuous","none"],
    correctAnswer: "differentiable",
    explanation: {
      quick: "Equal LHD and RHD ⇒ differentiable.",
      standard: "A function is differentiable at a point if both left-hand derivative and right-hand derivative exist and are equal.",
      deep: "For differentiability at a point:\n\n1. LHD must exist\n2. RHD must exist\n3. LHD = RHD\n\nIf all three are satisfied, function is differentiable.\n\nContinuity alone is not sufficient.\n\nHence correct answer is differentiable."
    }
  },

  // ✅ FIXED COMMA ABOVE

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
      quick: "Continuity requires p > 0, differentiability requires p > 1.",
      standard: "For functions like x^p sin(1/x), continuity at x=0 requires p > 0. Differentiability requires p > 1. Hence function is continuous but not differentiable when 0 < p ≤ 1.",
      deep: "Consider function of type:\nf(x) = x^p sin(1/x)\n\nContinuity at x = 0:\nlim x→0 x^p sin(1/x) = 0 only if p > 0\n\nDifferentiability at x = 0:\nRequires limit of derivative to exist → p > 1\n\nSo:\nIf 0 < p ≤ 1 → function is continuous but not differentiable\n\nHence correct answer is 0 < p ≤ 1."
    }
  }
];