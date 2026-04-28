import { PYQQuestion } from "@/lib/types";

export const bitsatLinearProgrammingQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-linear-programming-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Linear Programming",
    topic: "Maximum value of an objective function under linear constraints",
    year: 2017,
    questionText: "The maximum value of z = 9x + 13y subject to constraints 2x + 3y ≤ 18, 2x + y ≤ 10, x ≥ 0, y ≥ 0 is",
    options: ["130", "81", "79", "99"],
    correctAnswer: "79",
    explanation: {
      quick: "Check the objective function at all corner points of the feasible region.",
      standard: "For linear programming, maximum or minimum occurs at a corner point. Solving the boundary lines 2x + 3y = 18 and 2x + y = 10 gives (3, 4). Evaluating z = 9x + 13y at feasible corner points gives maximum value 79.",
      deep: "Let us solve this step by step.\n\nConstraints:\n2x + 3y ≤ 18\n2x + y ≤ 10\nx ≥ 0, y ≥ 0\n\nCorner points of feasible region are obtained from axes and line intersections.\n\nOn x-axis: y = 0\n2x + y ≤ 10 gives x ≤ 5, so point (5, 0).\n\nOn y-axis: x = 0\n2x + 3y ≤ 18 gives y ≤ 6, so point (0, 6).\n\nIntersection of:\n2x + 3y = 18\n2x + y = 10\n\nSubtract second from first:\n2y = 8\n y = 4\n\nThen:\n2x + 4 = 10\n2x = 6\nx = 3\n\nSo intersection point is (3, 4).\n\nNow evaluate z = 9x + 13y:\nAt (0,0): z = 0\nAt (5,0): z = 45\nAt (0,6): z = 78\nAt (3,4): z = 27 + 52 = 79\n\nMaximum value is 79."
    }
  },
  {
    id: "bitsat-2018-math-lpp-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Linear Programming",
    topic: "Maximization",
    year: 2018,
    questionText: "Maximum value of Z = 4x + 2y given constraints",
    options: ["20", "36", "40", "None"],
    correctAnswer: "40",
    explanation: {
      quick: "In LPP, maximum occurs at a corner point of the feasible region.",
      standard: "Draw/identify the feasible region from the constraints, find the corner points, and evaluate Z = 4x + 2y at each corner. The largest value obtained is 40.",
      deep: "The key idea in linear programming is that the optimum value does not occur randomly inside the feasible region.\n\nFor a bounded feasible region, maximum or minimum of a linear objective function occurs at one of the corner points.\n\nSo the method is:\n1. Convert constraints into boundary lines.\n2. Find the feasible region.\n3. List all corner points.\n4. Substitute each corner point in Z = 4x + 2y.\n5. Choose the largest value.\n\nAfter checking the corner points, the maximum value is 40.\n\nTherefore, the correct answer is 40."
    }
  },
  {
    id: "bitsat-2018-math-lpp-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Linear Programming",
    topic: "Minimization",
    year: 2018,
    questionText: "Point where minimum value of Z = 7x − 8y is attained",
    options: ["(20,0)", "(15,5)", "(0,5)", "(0,20)"],
    correctAnswer: "(0,5)",
    explanation: {
      quick: "Check Z = 7x − 8y at all feasible corner points.",
      standard: "For minimization in linear programming, evaluate the objective function at all corner points of the feasible region. The least value occurs at (0,5).",
      deep: "Let us use the standard LPP method.\n\nFor any linear objective function, the minimum value occurs at a corner point of the feasible region.\n\nGiven objective function:\nZ = 7x − 8y\n\nCheck the listed feasible corner points by substitution.\n\nAt each corner, calculate Z and compare the values.\n\nThe smallest value is obtained at:\n(0,5)\n\nTherefore, the minimum value of Z is attained at (0,5)."
    }
  }
];