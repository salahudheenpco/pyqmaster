import { PYQQuestion } from "@/lib/types";

export const jeeParabolaQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-parabola-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Standard parabola properties",
    year: 2026,
    questionText:
      "The focus of the parabola y² = 4ax is:",
    options: ["(a,0)", "(0,a)", "(−a,0)", "(0,−a)"],
    correctAnswer: "(a,0)",
    explanation: {
      quick:
        "For y² = 4ax, focus is (a,0).",

      standard:
        "The standard equation of a parabola opening right is:\ny² = 4ax\n\nFor this form, the focus is located at (a, 0).\n\nHence, the answer is (a,0).",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given the equation of a parabola:\ny² = 4ax\n\nStep 1: Identify the standard form\n\nThe standard form of a parabola that opens to the right is:\ny² = 4ax\n\nStep 2: Recall geometric properties\n\nFor this standard parabola:\n- Vertex is at (0,0)\n- Focus is at (a,0)\n- Directrix is x = -a\n\nStep 3: Final answer\n\nSo the focus is:\n(a,0)\n\nCommon mistake:\nStudents sometimes confuse the focus with (0,a), which is incorrect for this orientation.\n\nTherefore, the correct answer is (a,0)."
    }
  },

  // 🔥 Q13
  {
    id: "jee-2026-mathematics-parabola-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Length of latus rectum",
    year: 2026,
    questionText:
      "If the length of the latus rectum of the parabola y² = 8x is:",
    options: ["4", "8", "16", "2"],
    correctAnswer: "8",
    explanation: {
      quick:
        "For y² = 4ax, latus rectum = 4a. Here 4a = 8 ⇒ a = 2, so length = 8.",

      standard:
        "Given:\ny² = 8x\n\nCompare with standard form:\ny² = 4ax\n\nSo:\n4a = 8 ⇒ a = 2\n\nLength of latus rectum = 4a = 8.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given the equation:\ny² = 8x\n\nStep 1: Compare with standard form\n\nStandard equation of a parabola is:\ny² = 4ax\n\nComparing:\n4a = 8\n⇒ a = 2\n\nStep 2: Recall latus rectum formula\n\nThe length of the latus rectum of a parabola is:\n4a\n\nStep 3: Substitute value\n\n4a = 4 × 2 = 8\n\nStep 4: Final answer\n\nHence, the length of the latus rectum is 8.\n\nCommon mistake:\nStudents sometimes take 2a instead of 4a.\n\nTherefore, the correct answer is 8."
    }
  },

  // 🔥 Q14
  {
    id: "jee-2026-mathematics-parabola-003",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Equation of tangent",
    year: 2026,
    questionText:
      "The equation of the tangent to the parabola y² = 4ax at point (x₁, y₁) is:",
    options: [
      "yy₁ = 2a(x + x₁)",
      "yy₁ = 2a(x - x₁)",
      "y = mx + c",
      "None of these"
    ],
    correctAnswer: "yy₁ = 2a(x + x₁)",
    explanation: {
      quick:
        "Tangent to y² = 4ax at (x₁,y₁) is yy₁ = 2a(x + x₁).",

      standard:
        "For the parabola y² = 4ax, the equation of the tangent at point (x₁, y₁) is:\n\nT = 0 ⇒ yy₁ = 2a(x + x₁)\n\nHence, the correct answer is yy₁ = 2a(x + x₁).",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given the parabola:\ny² = 4ax\n\nStep 1: Understand tangent equation\n\nFor conic sections, there is a shortcut method called the T = 0 form.\n\nStep 2: Apply T = 0 rule\n\nReplace:\ny² → yy₁\nx → (x + x₁)/2\n\nSo the tangent equation becomes:\nyy₁ = 2a(x + x₁)\n\nStep 3: Final answer\n\nThus, the equation of tangent is:\nyy₁ = 2a(x + x₁)\n\nCommon mistakes:\n1. Writing slope form instead of standard tangent form\n2. Forgetting T = 0 rule\n\nTherefore, the correct answer is yy₁ = 2a(x + x₁)."
    }
  }
];

export default jeeParabolaQuestions;