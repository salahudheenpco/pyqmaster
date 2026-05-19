import { PYQQuestion } from "@/lib/types";

export const jeeTrigonometricFunctionsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-trigonometric-functions-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Trigonometric Functions",
    topic: "Basic trigonometric identities",
    year: 2026,
    questionText:
      "If sinθ + cosθ = √2, then the value of sinθ cosθ is:",
    options: ["1/2", "1", "0", "1/√2"],
    correctAnswer: "1/2",
    explanation: {
      quick:
        "Square both sides: (sinθ + cosθ)² = 2 ⇒ 1 + 2sinθcosθ = 2 ⇒ sinθcosθ = 1/2.",

      standard:
        "Given:\nsinθ + cosθ = √2\n\nSquare both sides:\n(sinθ + cosθ)² = 2\n\nExpand:\nsin²θ + cos²θ + 2sinθcosθ = 2\n\nUse identity:\nsin²θ + cos²θ = 1\n\nSo:\n1 + 2sinθcosθ = 2\n\nTherefore:\n2sinθcosθ = 1\n\nsinθcosθ = 1/2.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\nsinθ + cosθ = √2\n\nWe need to find the value of sinθ cosθ.\n\nStep 1: Think of a useful identity\n\nWhenever we see an expression like sinθ + cosθ, a common trick is to square it.\n\nStep 2: Square both sides\n\n(sinθ + cosθ)² = (√2)²\n\nLeft side expands using algebra:\n(sinθ + cosθ)² = sin²θ + cos²θ + 2sinθcosθ\n\nRight side:\n(√2)² = 2\n\nSo:\nsin²θ + cos²θ + 2sinθcosθ = 2\n\nStep 3: Use trigonometric identity\n\nWe know:\nsin²θ + cos²θ = 1\n\nSo substitute:\n1 + 2sinθcosθ = 2\n\nStep 4: Solve for sinθ cosθ\n\nSubtract 1 from both sides:\n2sinθcosθ = 1\n\nDivide by 2:\nsinθcosθ = 1/2\n\nStep 5: Final answer\n\nTherefore, the value of sinθ cosθ is 1/2.\n\nCommon mistakes:\n1. Forgetting to square both sides\n2. Expanding (sinθ + cosθ)² incorrectly\n3. Forgetting identity sin²θ + cos²θ = 1\n\nTherefore, the correct answer is 1/2."
    }
  }
];

export default jeeTrigonometricFunctionsQuestions;