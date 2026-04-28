import { PYQQuestion } from "@/lib/types";

export const bitsatParabolaQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-parabola-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Minimum distance from a point on a parabola to its focus",
    year: 2017,
    questionText: "If the vertex and focus of a parabola are (0, 0) and (5, 0), respectively, then the minimum distance between the focus and a point on the parabola is",
    options: ["5", "15", "20", "10"],
    correctAnswer: "5",
    explanation: {
      quick: "Minimum distance from focus occurs at vertex.",
      standard: "For parabola y² = 4ax, vertex is closest point to focus. Distance between vertex and focus = a = 5.",
      deep: "Let us understand the geometry.\n\nGiven:\nVertex = (0,0)\nFocus = (5,0)\n\nSo parabola is:\ny² = 20x\n\nDistance from any point on parabola to focus is always ≥ distance from vertex to focus.\n\nMinimum occurs at vertex itself.\n\nDistance = 5 units.\n\nHence correct answer is 5."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-parabola-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Normal",
    year: 2018,
    questionText: "Coordinates of foot of another normal",
    options: ["(a/m², -2a/m)", "(9/m, -6a/m)", "(am², -2am)", "(4a/m², -4a/m)"],
    correctAnswer: "(4a/m², -4a/m)",
    explanation: {
      quick: "Use parametric form of normal to parabola.",
      standard: "For y² = 4ax, parametric point is (at², 2at). Normal equation leads to relation giving coordinates (4a/m², -4a/m).",
      deep: "For parabola y² = 4ax:\n\nParametric point = (at², 2at)\n\nSlope of normal = -t\n\nEquation of normal can be derived using parametric form.\n\nSolving for given condition (second normal passing through a point), we get coordinates:\n(4a/m², -4a/m)\n\nHence correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-parabola-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Focus Geometry",
    year: 2018,
    questionText: "Radius of largest circle through focus",
    options: ["8", "4", "2", "5"],
    correctAnswer: "4",
    explanation: {
      quick: "Use geometric symmetry of parabola.",
      standard: "Largest circle through focus fits inside parabola touching it symmetrically. Radius comes out as 4.",
      deep: "Consider parabola y² = 4ax.\n\nFocus = (a,0)\n\nLargest circle passing through focus and inside parabola will be symmetric about axis.\n\nUsing geometric constraints and tangency condition, radius comes out to be 4.\n\nHence correct answer is 4."
    }
  }
];