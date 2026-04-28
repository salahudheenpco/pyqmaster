import { PYQQuestion } from "@/lib/types";

export const bitsatStraightLinesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-straight-lines-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Equation of third side of an isosceles triangle",
    year: 2017,
    questionText: "Two equal sides of an isosceles triangle are 7x − y + 3 = 0 and x + y − 3 = 0, and its third side passes through the point (1, −10). The equation of the third side is",
    options: [
      "x − 3y = −31",
      "x − 3y = 31",
      "x + 3y = 31",
      "x + 3y = −31"
    ],
    correctAnswer: "x − 3y = 31",
    explanation: {
      quick: "Third side is angle bisector of the two equal sides.",
      standard: "In an isosceles triangle, third side lies along angle bisector of the angle between equal sides. Use angle bisector formula.",
      deep: "Given lines:\nL₁: 7x − y + 3 = 0\nL₂: x + y − 3 = 0\n\nThird side is angle bisector of these lines.\n\nAngle bisector formula:\n(7x − y + 3)/√(7²+(-1)²) = ±(x + y − 3)/√(1²+1²)\n\nSimplify → get two possible lines.\n\nCheck which passes through (1, −10):\n\nSubstitute → valid equation:\nx − 3y = 31\n\nHence correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-straight-lines-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Locus",
    year: 2018,
    questionText: "Equation of line BC passing through (1,2)",
    options: [
      "x+7y+13=0 or 7x+y+9=0",
      "x+7y+13=0 or 7x+2y+7=0",
      "x−7y+13=0 or 7x+y−9=0",
      "None"
    ],
    correctAnswer: "x+7y+13=0 or 7x+y+9=0",
    explanation: {
      quick: "Use locus condition giving two possible lines.",
      standard: "Apply geometric constraint (distance/symmetry condition) leading to two valid line equations.",
      deep: "From given condition, the point must satisfy a symmetric relation with respect to two lines.\n\nThis leads to two possible linear equations.\n\nSubstituting (1,2) and simplifying, we obtain:\n\nx + 7y + 13 = 0\nor\n7x + y + 9 = 0\n\nHence correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-straight-lines-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Perpendicular Lines",
    year: 2018,
    questionText: "Find λ such that lines are perpendicular",
    options: ["1","-4","-5","-3"],
    correctAnswer: "-3",
    explanation: {
      quick: "Product of slopes = -1.",
      standard: "Find slope of both lines and equate m₁·m₂ = -1.",
      deep: "Step 1: Convert both equations into slope form.\n\nStep 2: Find slopes m₁ and m₂.\n\nStep 3: Use perpendicular condition:\nm₁ × m₂ = -1\n\nSolve equation for λ:\nλ = -3\n\nHence correct answer."
    }
  }
];