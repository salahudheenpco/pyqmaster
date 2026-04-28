import { PYQQuestion } from "@/lib/types";

export const bitsatCircleQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-circle-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Circle",
    topic: "Condition for two distinct chords to be bisected by x-axis",
    year: 2017,
    questionText: "If two distinct chords drawn from the point (p, q) on the circle x² + y² = px + qy (where pq ≠ 0) are bisected by the x-axis, then",
    options: ["p² = q²","p² = 8q²","p² < 8q²","p² > 8q²"],
    correctAnswer: "p² > 8q²",
    explanation: {
      quick: "Condition for two real chords gives discriminant > 0.",
      standard: "Equation of chords bisected by x-axis leads to quadratic in slope. For two distinct chords, discriminant must be positive → p² > 8q².",
      deep: "Let us solve this step by step.\n\nGiven circle:\nx² + y² = px + qy\n\nPoint (p, q) lies on circle.\n\nChords from this point are bisected by x-axis → midpoint y = 0.\n\nUsing chord condition and slope form, we get a quadratic equation in slope.\n\nFor two distinct chords:\nDiscriminant > 0\n\nSolving gives:\np² > 8q²\n\nHence correct answer is p² > 8q²."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-math-circles-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Circles",
    topic: "Area",
    year: 2018,
    questionText: "Area of triangle formed",
    options: ["3","4","5","6"],
    correctAnswer: "4",
    explanation: {
      quick: "Find intersection points and apply triangle area formula.",
      standard: "Solve equations to get coordinates of intersection points, then apply determinant formula for area of triangle.",
      deep: "To find the area of triangle:\n\nStep 1: Solve given equations to get intersection points.\nStep 2: Use area formula:\n\nArea = 1/2 |x₁(y₂−y₃)+x₂(y₃−y₁)+x₃(y₁−y₂)|\n\nAfter calculation, area = 4.\n\nHence correct answer is 4."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-math-circles-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    topic: "Square Geometry",
    year: 2018,
    questionText: "PQRS is a square and M, N are midpoints of PQ and QR. Ratio of areas of square and ΔOMN is",
    options: ["4:1","2:1","8:3","4:3"],
    correctAnswer: "4:1",
    explanation: {
      quick: "Triangle formed by midpoints gives 1/4 area of square.",
      standard: "Using coordinate geometry, place square conveniently and compute triangle OMN area. It comes out as one-fourth of square.",
      deep: "Let us assume square of side 'a' with one vertex at origin.\n\nCoordinates:\nO(0,0), P(a,0), Q(a,a), R(0,a)\n\nMidpoints:\nM(a/2,0), N(a,a/2)\n\nNow find area of triangle OMN using determinant formula.\n\nArea = a²/4\n\nSquare area = a²\n\nRatio = a² : a²/4 = 4:1\n\nHence correct answer is 4:1."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-math-circles-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Ellipse",
    topic: "Auxiliary Circle",
    year: 2018,
    questionText: "Area of triangle formed by A, M and origin",
    options: ["31/10","29/10","21/10","27/10"],
    correctAnswer: "29/10",
    explanation: {
      quick: "Use parametric form of ellipse and area formula.",
      standard: "Represent point using parametric form, find coordinates, and apply determinant formula.",
      deep: "For ellipse:\nx = a cosθ, y = b sinθ\n\nFind coordinates of point M using given condition.\n\nThen calculate area of triangle with origin using determinant formula.\n\nAfter simplification:\nArea = 29/10\n\nHence correct answer is 29/10."
    }
  }
];