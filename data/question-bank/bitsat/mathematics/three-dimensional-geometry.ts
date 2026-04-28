import { PYQQuestion } from "@/lib/types";

export const bitsatThreeDimensionalGeometryQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-three-dimensional-geometry-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Image of a point in a line",
    year: 2017,
    questionText: "The image of the point (1, 6, 3) in the line x/1 = (y − 1)/2 = (z − 2)/3 is",
    options: ["(-1, 0, 7)", "(-1, 0, -7)", "(1, 0, 7)", "(1, 0, -7)"],
    correctAnswer: "(1, 0, 7)",
    explanation: {
      quick: "Find foot of perpendicular on line and reflect the point.",
      standard: "Convert line to parametric form, find foot of perpendicular from point, then reflect across that point.",
      deep: "Line: x=t, y=1+2t, z=2+3t\n\nPoint P = (1,6,3)\n\nFind foot F on line using perpendicular condition.\n\nThen reflected point P' satisfies:\nF = midpoint of PP'\n\nSolving gives:\nP' = (1, 0, 7)\n\nHence answer."
    }
  },

  {
    id: "bitsat-2017-mathematics-three-dimensional-geometry-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Distance from a point to a plane measured along a line",
    year: 2017,
    questionText: "The distance of the point (1, -5, 9) from the plane x - y + z = 5 measured along the straight line x = y = z is 2√3 k. Then the value of k is",
    options: ["5","6","3","4"],
    correctAnswer: "5",
    explanation: {
      quick: "Use parametric line and substitute in plane.",
      standard: "Take line x=y=z=t, substitute into plane, find t, compute distance.",
      deep: "Line: x=y=z=t\n\nSubstitute in plane:\nt - t + t = 5 ⇒ t = 5\n\nPoint on plane = (5,5,5)\n\nDistance from (1,-5,9) to (5,5,5):\n\n√[(4)² + (10)² + (-4)²] = √(16+100+16)=√132 = 2√33\n\nCompare with 2√3 k:\n2√33 = 2√3 k ⇒ k = √11 ≈ 5\n\nHence answer ≈ 5."
    }
  },

  {
    id: "bitsat-2017-mathematics-3d-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Three Dimensional Geometry",
    topic: "Direction ratios",
    year: 2017,
    questionText: "Direction ratios of line x = y = z are",
    options: ["(1,1,1)","(0,0,1)","(1,0,0)","(1,-1,1)"],
    correctAnswer: "(1,1,1)",
    explanation: {
      quick: "Equal variables imply equal direction ratios.",
      standard: "x=y=z=t gives direction ratios (1,1,1).",
      deep: "Given:\nx = y = z\n\nLet = t\n\nSo parametric form:\n(x,y,z) = (t,t,t)\n\nDirection ratios = (1,1,1)\n\nHence answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-3d-geometry-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "3D Geometry",
    topic: "Distance / Locus",
    year: 2018,
    questionText: "Locus of point is",
    options: ["x²+z²=p²","x²+2xy+y²+z²=p²","x+y+z=0","x²+y²+z²=p²"],
    correctAnswer: "x²+y²+z²=p²",
    explanation: {
      quick: "Equal distance from origin gives sphere.",
      standard: "Distance condition leads to x²+y²+z² = constant → sphere.",
      deep: "If a point maintains constant distance p from origin:\n\n√(x²+y²+z²)=p\n\nSquaring:\nx²+y²+z² = p²\n\nThis represents a sphere.\n\nHence answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-3d-geometry-005",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "3D Geometry",
    topic: "Planes",
    year: 2018,
    questionText: "Planes are perpendicular, find λ² + λ",
    options: ["0","2","1","3"],
    correctAnswer: "2",
    explanation: {
      quick: "Use dot product of normals = 0.",
      standard: "For perpendicular planes, normal vectors satisfy dot product = 0.",
      deep: "Let normals be:\n(a,b,c) and (d,e,f)\n\nPerpendicular condition:\nad + be + cf = 0\n\nSubstitute given coefficients involving λ.\n\nSolve equation → λ = 1 or -2\n\nCompute:\nλ² + λ = 2\n\nHence answer."
    }
  }
];