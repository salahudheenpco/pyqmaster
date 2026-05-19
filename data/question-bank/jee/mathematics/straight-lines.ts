import { PYQQuestion } from "@/lib/types";

export const jeeStraightLinesQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-straight-lines-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Distance between parallel lines",
    year: 2026,
    questionText:
      "The distance between the parallel lines 3x + 4y + 5 = 0 and 3x + 4y - 7 = 0 is:",
    options: ["12/5", "3", "4", "2"],
    correctAnswer: "12/5",
    explanation: {
      quick:
        "Distance = |c1 - c2| / √(a² + b²) = |5 - (-7)| / 5 = 12/5.",

      standard:
        "For two parallel lines:\nax + by + c1 = 0\nax + by + c2 = 0\n\nDistance between them is:\n|c1 - c2| / √(a² + b²)\n\nHere:\na = 3, b = 4\nc1 = 5, c2 = -7\n\nDistance = |5 - (-7)| / √(3² + 4²)\n= 12 / 5.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given two lines:\n\n3x + 4y + 5 = 0\n3x + 4y - 7 = 0\n\nStep 1: Check if lines are parallel\n\nBoth equations have same coefficients of x and y.\n\nSo slopes are same ⇒ lines are parallel.\n\nStep 2: Use distance formula\n\nDistance between parallel lines:\n\n|c1 - c2| / √(a² + b²)\n\nStep 3: Substitute values\n\nc1 = 5\nc2 = -7\n\nSo numerator:\n|5 - (-7)| = 12\n\nDenominator:\n√(3² + 4²) = √25 = 5\n\nStep 4: Final answer\n\nDistance = 12/5\n\nCommon mistakes:\n1. Forgetting absolute value\n2. Taking wrong order of c1 and c2\n3. Not simplifying √(3² + 4²)\n\nTherefore, the correct answer is 12/5."
    }
  },

  // 🔥 Q5 (Shift 2)
  {
    id: "jee-2026-mathematics-straight-lines-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Angle between lines",
    year: 2026,
    questionText:
      "If the lines x + y = 1 and x - y = 1 intersect at point P, then the angle between the two lines is:",
    options: ["0°", "45°", "90°", "60°"],
    correctAnswer: "90°",
    explanation: {
      quick:
        "Slopes are -1 and 1. Product = -1 ⇒ lines are perpendicular ⇒ angle = 90°.",

      standard:
        "Line 1: x + y = 1 ⇒ slope m1 = -1\n\nLine 2: x - y = 1 ⇒ slope m2 = 1\n\nAngle between lines:\n\ntanθ = |(m1 - m2)/(1 + m1m2)|\n\nHere:\nm1m2 = -1\n\nSo denominator becomes zero ⇒ θ = 90°.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given two lines:\n\nx + y = 1\nx - y = 1\n\nStep 1: Convert into slope-intercept form\n\nLine 1:\nx + y = 1 ⇒ y = -x + 1\n⇒ slope m1 = -1\n\nLine 2:\nx - y = 1 ⇒ y = x - 1\n⇒ slope m2 = 1\n\nStep 2: Use angle formula\n\nAngle between two lines:\n\ntanθ = |(m1 - m2)/(1 + m1m2)|\n\nSubstitute values:\n\nm1 - m2 = -1 - 1 = -2\nm1m2 = (-1)(1) = -1\n\nSo denominator:\n1 + m1m2 = 1 - 1 = 0\n\nStep 3: Interpretation\n\nWhen denominator = 0 ⇒ tanθ → ∞\n\nSo θ = 90°\n\nThis means the lines are perpendicular.\n\nStep 4: Final answer\n\nAngle = 90°\n\nCommon mistakes:\n1. Forgetting to convert to slope form\n2. Not recognizing perpendicular condition m1m2 = -1\n3. Trying to calculate tanθ numerically instead of identifying special case\n\nTherefore, the correct answer is 90°."
    }
  }
];

export default jeeStraightLinesQuestions;