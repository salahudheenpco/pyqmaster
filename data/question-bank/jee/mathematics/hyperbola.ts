import { PYQQuestion } from "@/lib/types";

export const jeeHyperbolaQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-hyperbola-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Standard equation of hyperbola",
    year: 2026,
    questionText:
      "If the transverse axis of a hyperbola is along the x-axis and its equation is x^2/9 - y^2/16 = 1, then its eccentricity is:",
    options: ["5/3", "3/5", "4/3", "√5"],
    correctAnswer: "5/3",
    explanation: {
      quick:
        "For hyperbola, e = √(1 + b²/a²). Here a² = 9 and b² = 16, so e = √(1 + 16/9) = 5/3.",

      standard:
        "The given equation is:\n\nx²/9 - y²/16 = 1\n\nThis matches the standard form of a hyperbola:\n\nx²/a² - y²/b² = 1\n\nSo,\na² = 9 ⇒ a = 3\nb² = 16 ⇒ b = 4\n\nFor a hyperbola, eccentricity is given by:\n\ne = √(1 + b²/a²)\n\nSubstitute values:\n\ne = √(1 + 16/9)\n= √(25/9)\n= 5/3",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given the equation of a hyperbola:\n\nx²/9 - y²/16 = 1\n\nStep 1: Identify the standard form\n\nThe standard equation of a hyperbola with transverse axis along the x-axis is:\n\nx²/a² - y²/b² = 1\n\nComparing with the given equation:\n\na² = 9 and b² = 16\n\nSo:\n\na = 3 and b = 4\n\nStep 2: Recall the formula for eccentricity\n\nFor a hyperbola, eccentricity is defined as:\n\ne = √(1 + b²/a²)\n\nThis formula is different from ellipse, where we use e = √(1 - b²/a²).\n\nStep 3: Substitute values\n\nb²/a² = 16/9\n\nSo:\n\ne = √(1 + 16/9)\n= √(25/9)\n= 5/3\n\nStep 4: Final answer\n\nSo the eccentricity of the hyperbola is:\n\n5/3\n\nCommon mistakes:\n1. Using ellipse formula instead of hyperbola formula\n2. Forgetting that hyperbola always has e > 1\n3. Mixing up a² and b² from the equation\n\nTherefore, the correct answer is 5/3."
    }
  }
];

export default jeeHyperbolaQuestions;