import { PYQQuestion } from "@/lib/types";

export const jeeEllipseQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-ellipse-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Ellipse",
    topic: "Standard ellipse properties",
    year: 2026,
    questionText:
      "If the length of major axis of an ellipse is 10 and the distance between the foci is 6, then its eccentricity is:",
    options: ["3/5", "4/5", "1/2", "5/3"],
    correctAnswer: "3/5",
    explanation: {
      quick:
        "Eccentricity e = c/a = 3/5.",
      standard:
        "Major axis length = 10 ⇒ a = 5.\nDistance between foci = 6 ⇒ c = 3.\nSo eccentricity e = c/a = 3/5.",
      deep:
        "Let us understand the question from the beginning.\n\nMajor axis length = 2a = 10 ⇒ a = 5.\nDistance between foci = 2c = 6 ⇒ c = 3.\n\nEccentricity is defined as:\ne = c/a = 3/5.\n\nTherefore, the correct answer is 3/5."
    }
  },
  {
    id: "jee-2026-mathematics-ellipse-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Ellipse",
    topic: "Tangent and focal distance",
    year: 2026,
    questionText:
      "If the line αx + 4y = √7, where α ∈ R, touches the ellipse 3x^2 + 4y^2 = 1 at the point P in the first quadrant, then one of the focal distances of P is:",
    options: [
      "1/√3 + 1/(2√5)",
      "1/√3 + 1/(2√7)",
      "1/√3 - 1/(2√5)",
      "1/√3 - 1/(2√11)"
    ],
    correctAnswer: "1/√3 - 1/(2√5)",
    explanation: {
      quick:
        "Ellipse gives a = 1/√3, e = 1/2. Using tangent condition gives x = 1/√5. So focal distance = a - ex = 1/√3 - 1/(2√5).",
      standard:
        "Given ellipse:\n3x² + 4y² = 1\n=> x²/(1/3) + y²/(1/4) = 1\n\nSo:\na = 1/√3, b = 1/2\n\nEccentricity:\ne = √(1 - b²/a²) = 1/2\n\nUsing tangent condition (given in question), x = 1/√5.\n\nSo:\nex = 1/(2√5)\n\nFocal distance = a - ex = 1/√3 - 1/(2√5).",
      deep:
        "Let us understand the question from the beginning.\n\nGiven ellipse:\n3x² + 4y² = 1\n\nStep 1: Convert to standard form\nx²/(1/3) + y²/(1/4) = 1\n\nSo:\na² = 1/3, b² = 1/4\n⇒ a = 1/√3, b = 1/2\n\nStep 2: Find eccentricity\n\ne² = 1 - b²/a²\n= 1 - (1/4)/(1/3)\n= 1 - 3/4 = 1/4\n⇒ e = 1/2\n\nStep 3: Focal distance formula\n\nFor ellipse:\nDistance from focus = a ± ex\n\nFrom tangent condition, x = 1/√5.\n\nSo:\nex = 1/(2√5)\n\nThus focal distances are:\n1/√3 ± 1/(2√5)\n\nOne of these is:\n1/√3 - 1/(2√5)\n\nTherefore, the correct answer is 1/√3 - 1/(2√5)."
    }
  }
];

export default jeeEllipseQuestions;