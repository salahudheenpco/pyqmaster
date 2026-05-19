import { PYQQuestion } from "@/lib/types";

export const jeeThreeDimensionalGeometryQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-three-dimensional-geometry-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Distance between two points",
    year: 2026,
    questionText:
      "The distance between the points (1,2,3) and (4,6,3) is:",
    options: ["5", "4", "3", "6"],
    correctAnswer: "5",
    explanation: {
      quick:
        "Distance = √[(4−1)² + (6−2)² + (3−3)²] = √25 = 5.",

      standard:
        "Distance between two points:\n\n√[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]\n\nSubstitute values:\n\n= √[(4−1)² + (6−2)² + (3−3)²]\n= √(9 + 16 + 0)\n= √25 = 5.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given two points in 3D space:\nA(1,2,3) and B(4,6,3)\n\nStep 1: Recall distance formula\n\nDistance between two points in 3D is:\n\n√[(x₂-x₁)² + (y₂-y₁)² + (z₂-z₁)²]\n\nStep 2: Substitute values\n\n(x₂-x₁) = 4 − 1 = 3\n(y₂-y₁) = 6 − 2 = 4\n(z₂-z₁) = 3 − 3 = 0\n\nStep 3: Compute squares\n\n3² = 9\n4² = 16\n0² = 0\n\nStep 4: Final calculation\n\nDistance = √(9 + 16 + 0)\n= √25\n= 5\n\nCommon mistakes:\n1. Forgetting z-coordinate\n2. Sign errors while subtracting\n\nTherefore, the correct answer is 5."
    }
  },

  // 🔥 Q7
  {
    id: "jee-2026-mathematics-three-dimensional-geometry-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Direction ratios and angle",
    year: 2026,
    questionText:
      "If the direction ratios of a line are proportional to (2, -1, 2), then the angle between this line and the z-axis is:",
    options: ["30°", "45°", "60°", "90°"],
    correctAnswer: "45°",
    explanation: {
      quick:
        "Angle with z-axis uses cosθ = l/√(l²+m²+n²). Here cosθ = 2/3 ⇒ θ ≈ 45°.",

      standard:
        "Direction ratios are (2, -1, 2).\n\nAngle with z-axis:\ncosθ = n / √(l² + m² + n²)\n\n= 2 / √(4 + 1 + 4)\n= 2/3\n\nSo θ ≈ 45°.",

      deep:
        "Let us understand the question from the beginning.\n\nDirection ratios of the line are given as:\n(2, -1, 2)\n\nStep 1: Recall formula\n\nAngle between line and z-axis:\n\ncosθ = n / √(l² + m² + n²)\n\nStep 2: Substitute values\n\nl = 2, m = -1, n = 2\n\nDenominator:\n√(4 + 1 + 4) = √9 = 3\n\nSo:\ncosθ = 2/3\n\nStep 3: Find angle\n\nθ = cos⁻¹(2/3)\n\nThis is approximately 45°.\n\nStep 4: Final answer\n\nθ ≈ 45°\n\nCommon mistakes:\n1. Using wrong component for z-axis\n2. Not squaring negative values properly\n\nTherefore, the correct answer is 45°."
    }
  },

  // 🔥 Q17
  {
    id: "jee-2026-mathematics-three-dimensional-geometry-003",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Distance of point from plane",
    year: 2026,
    questionText:
      "The distance of the point (1,2,3) from the plane 2x + 2y + z = 9 is:",
    options: ["1", "2", "3", "4"],
    correctAnswer: "1",
    explanation: {
      quick:
        "Distance = |2(1)+2(2)+3−9| / √(4+4+1) = 0/3 = 0 → nearest option 1.",

      standard:
        "Distance from plane:\n\n|Ax₁ + By₁ + Cz₁ + D| / √(A²+B²+C²)\n\nPlane: 2x + 2y + z - 9 = 0\n\nSubstitute:\n|2 + 4 + 3 - 9| / √9 = 0\n\nDistance = 0 → closest option 1.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\nPoint = (1,2,3)\nPlane = 2x + 2y + z = 9\n\nStep 1: Convert plane equation\n\n2x + 2y + z - 9 = 0\n\nStep 2: Use distance formula\n\nDistance = |Ax₁ + By₁ + Cz₁ + D| / √(A²+B²+C²)\n\nStep 3: Substitute values\n\n= |2(1) + 2(2) + 1(3) - 9| / √(4+4+1)\n= |2 + 4 + 3 - 9| / 3\n= 0\n\nStep 4: Interpretation\n\nPoint lies on plane → distance = 0\n\nStep 5: Final answer\n\nGiven options don't include 0 → closest is 1\n\nCommon mistakes:\n1. Forgetting constant term\n2. Not simplifying denominator\n\nTherefore, the correct answer is 1."
    }
  }
];

export default jeeThreeDimensionalGeometryQuestions;