import { PYQQuestion } from "@/lib/types";

export const jeeDefiniteIntegralsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-definite-integrals-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Definite Integrals",
    topic: "Basic definite integral properties",
    year: 2026,
    questionText:
      "Evaluate the definite integral ∫₀^π sin²x dx.",
    options: [
      "π/2",
      "π",
      "π/4",
      "2π"
    ],
    correctAnswer: "π/2",
    explanation: {
      quick:
        "Use identity sin²x = (1 - cos2x)/2. Integral becomes π/2.",
      standard:
        "Using identity:\nsin²x = (1 - cos2x)/2\n\nSo:\n∫₀^π sin²x dx = ∫₀^π (1 - cos2x)/2 dx\n= (1/2)[∫₀^π 1 dx - ∫₀^π cos2x dx]\n\n= (1/2)[π - 0]\n= π/2",
      deep:
        "Let us understand the question from the beginning.\n\nWe need to evaluate:\n∫₀^π sin²x dx\n\nStep 1: Use identity\n\nsin²x = (1 - cos2x)/2\n\nStep 2: Substitute\n\n∫₀^π sin²x dx = ∫₀^π (1 - cos2x)/2 dx\n\n= (1/2)[∫₀^π 1 dx - ∫₀^π cos2x dx]\n\nStep 3: Evaluate\n\n∫₀^π 1 dx = π\n∫₀^π cos2x dx = 0\n\nSo result:\n= (1/2)(π)\n= π/2\n\nCommon mistake:\nStudents forget to apply identity and try direct integration.\n\nTherefore, the correct answer is π/2."
    }
  }
];

export default jeeDefiniteIntegralsQuestions;