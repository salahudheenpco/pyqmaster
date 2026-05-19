import { PYQQuestion } from "@/lib/types";

export const jeeContinuityAndDifferentiabilityQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-continuity-and-differentiability-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    topic: "Basic differentiability",
    year: 2026,
    questionText:
      "If f(x) is differentiable at x = a, which of the following must be true?",
    options: [
      "f(x) is continuous at x = a",
      "f(x) is not continuous at x = a",
      "f(x) has a maximum at x = a",
      "f(x) has a minimum at x = a"
    ],
    correctAnswer: "f(x) is continuous at x = a",
    explanation: {
      quick: "Differentiability implies continuity.",
      standard:
        "If a function is differentiable at a point, then it must be continuous at that point.",
      deep:
        "Let us understand the question from the beginning. Differentiability is a stronger condition than continuity. If a function has a derivative at a point, it means the function behaves smoothly around that point, which automatically guarantees continuity. Therefore, the correct answer is: f(x) is continuous at x = a."
    }
  },
  {
    id: "jee-2026-mathematics-continuity-and-differentiability-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Continuity and Differentiability",
    topic: "Derivatives with unknown constants",
    year: 2026,
    questionText:
      "Let f(x) = x^3 + x^2f'(1) + 2xf''(2) + f'''(3), x ∈ R. Then the value of f'(5) is:",
    options: ["62/5", "657/5", "2/5", "117/5"],
    correctAnswer: "117/5",
    explanation: {
      quick:
        "Let A = f'(1), B = f''(2), C = f'''(3). Solve system → A = -27/5, B = 6/5. Then f'(5) = 117/5.",
      standard:
        "Let A = f'(1), B = f''(2), C = f'''(3).\n\nThen f(x) = x³ + Ax² + 2Bx + C.\n\nDifferentiate:\nf'(x) = 3x² + 2Ax + 2B\nf''(x) = 6x + 2A\nf'''(x) = 6\n\nSo C = 6.\n\nB = f''(2) = 12 + 2A\nA = f'(1) = 3 + 2A + 2B\n\nSubstitute B:\nA = 3 + 2A + 24 + 4A\nA = 27 + 6A\n-5A = 27 → A = -27/5\n\nB = 12 - 54/5 = 6/5\n\nf'(5) = 75 - 54 + 12/5 = 117/5.",
      deep:
        "Let us understand the question from the beginning.\n\nWe define A = f'(1), B = f''(2), C = f'''(3).\n\nSo f(x) = x³ + Ax² + 2Bx + C.\n\nDifferentiating:\nf'(x) = 3x² + 2Ax + 2B\nf''(x) = 6x + 2A\nf'''(x) = 6\n\nThus C = 6.\n\nUsing B = f''(2):\nB = 12 + 2A\n\nUsing A = f'(1):\nA = 3 + 2A + 2B\n\nSubstitute B:\nA = 3 + 2A + 24 + 4A\nA = 27 + 6A\n-5A = 27 → A = -27/5\n\nThen B = 6/5.\n\nNow f'(5):\n= 75 - 54 + 12/5 = 117/5\n\nTherefore, the correct answer is 117/5."
    }
  }
];

export default jeeContinuityAndDifferentiabilityQuestions;