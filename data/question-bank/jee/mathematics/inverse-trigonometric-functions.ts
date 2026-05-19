import { PYQQuestion } from "@/lib/types";

export const jeeInverseTrigonometricFunctionsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-inverse-trigonometric-functions-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Inverse Trigonometric Functions",
    topic: "Principal values and identities",
    year: 2026,
    questionText:
      "The value of sin⁻¹(1/2) + cos⁻¹(1/2) is:",
    options: ["π/2", "π/3", "2π/3", "π"],
    correctAnswer: "π/2",
    explanation: {
      quick:
        "Use standard values: sin⁻¹(1/2) = π/6 and cos⁻¹(1/2) = π/3. Their sum is π/2.",

      standard:
        "We are given:\n\nsin⁻¹(1/2) + cos⁻¹(1/2)\n\nWe recall standard inverse trigonometric values:\n\nsin⁻¹(1/2) = π/6\ncos⁻¹(1/2) = π/3\n\nNow add:\n\nπ/6 + π/3 = π/6 + 2π/6 = 3π/6 = π/2\n\nHence, the required value is π/2.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are asked to evaluate the expression:\n\nsin⁻¹(1/2) + cos⁻¹(1/2)\n\nStep 1: Understand inverse trigonometric functions\n\nThe function sin⁻¹(x), also written as arcsin(x), gives the angle whose sine is x.\nSimilarly, cos⁻¹(x), or arccos(x), gives the angle whose cosine is x.\n\nHowever, inverse trigonometric functions give only the principal values, meaning the angle is restricted to a specific interval.\n\nFor sin⁻¹(x): the principal value lies in [-π/2, π/2]\nFor cos⁻¹(x): the principal value lies in [0, π]\n\nStep 2: Recall standard values\n\nWe know:\nsin(π/6) = 1/2\nSo:\nsin⁻¹(1/2) = π/6\n\nSimilarly:\ncos(π/3) = 1/2\nSo:\ncos⁻¹(1/2) = π/3\n\nStep 3: Add the two values\n\nsin⁻¹(1/2) + cos⁻¹(1/2)\n= π/6 + π/3\n\nConvert to common denominator:\nπ/6 + 2π/6 = 3π/6 = π/2\n\nStep 4: Final answer\n\nTherefore, the value of the expression is:\nπ/2\n\nCommon mistakes:\n1. Confusing sin⁻¹(x) with 1/sin(x)\n2. Using incorrect angle values (like 30° and 60° without converting to radians)\n3. Ignoring principal value ranges\n\nTherefore, the correct answer is π/2."
    }
  }
];

export default jeeInverseTrigonometricFunctionsQuestions;