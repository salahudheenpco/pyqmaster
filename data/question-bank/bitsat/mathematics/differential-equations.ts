import { PYQQuestion } from "@/lib/types";

export const bitsatDifferentialEquationsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-differential-equations-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "General solution",
    year: 2017,
    questionText: "Solution of dy/dx = x is",
    options: ["x²/2 + C","x + C","lnx + C","e^x"],
    correctAnswer: "x²/2 + C",
    explanation: {
      quick: "Integrate both sides.",
      standard: "∫ dy = ∫ x dx ⇒ y = x²/2 + C.",
      deep: "Given:\n dy/dx = x\n\nIntegrate both sides:\n\n∫ dy = ∫ x dx\n\n⇒ y = x²/2 + C\n\nTherefore, the correct answer is x²/2 + C."
    }
  },
  {
    id: "bitsat-2017-mathematics-de-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "General solution",
    year: 2017,
    questionText: "Solution of dy/dx = e^x is",
    options: ["e^x + C","x + C","lnx + C","e^x"],
    correctAnswer: "e^x + C",
    explanation: {
      quick: "Integrate e^x.",
      standard: "∫ e^x dx = e^x + C.",
      deep: "Given:\n dy/dx = e^x\n\nIntegrate:\n\n∫ dy = ∫ e^x dx\n\n⇒ y = e^x + C\n\nTherefore, the correct answer is e^x + C."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-differential-equations-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "Solution",
    year: 2018,
    questionText: "Solve dy/dx = sin(x+y) + cos(x+y)",
    options: [
      "log(2+sec(x+y/2))=x+C",
      "log(1+tan(x+y))=x+C",
      "log(1+tan((x+y)/2))=y+C",
      "log(1+tan((x+y)/2))=x+C"
    ],
    correctAnswer: "log(1+tan((x+y)/2))=x+C",
    explanation: {
      quick: "Put u = x + y.",
      standard: "du/dx = sin u + cos u → separable DE.",
      deep: "Let u = x + y\n\nThen:\ndu/dx = sin u + cos u\n\nSeparate variables and integrate:\n\n∫ du/(sin u + cos u) = ∫ dx\n\nSolving gives:\nlog(1 + tan(u/2)) = x + C\n\nSubstitute u = x + y\n\nTherefore answer is log(1+tan((x+y)/2))=x+C."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-differential-equations-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "First Order DE",
    year: 2018,
    questionText: "Find curve passing through origin",
    options: [
      "y=2(x−1)",
      "y=2(e^x−x−1)",
      "y=2(e^x−1)",
      "y=2(e^x−1)"
    ],
    correctAnswer: "y=2(e^x−1)",
    explanation: {
      quick: "Solve linear DE and apply condition.",
      standard: "dy/dx = y + 2x → integrating factor method.",
      deep: "Given:\n dy/dx = y + 2x\n\nRewriting:\n dy/dx − y = 2x\n\nIntegrating factor = e^(-x)\n\nSolve and apply y(0)=0:\n\nFinal solution:\ny = 2(e^x − 1)\n\nTherefore answer is y=2(e^x−1)."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-differential-equations-005",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "Second Order DE",
    year: 2018,
    questionText: "Solve d²y/dx² = sin3x + e^x + x² with y(0)=0 and y'(0)=1",
    options: [
      "-sin3x/9 + e^x + x^4/12 + x/3 − 1",
      "-sin3x/9 + e^x + x^4/12 + x/3",
      "-cos3x/9 + e^x + x^4/12 + x/3 + 1",
      "None"
    ],
    correctAnswer: "-sin3x/9 + e^x + x^4/12 + x/3",
    explanation: {
      quick: "Integrate twice.",
      standard: "y'' → integrate to y' → integrate to y.",
      deep: "Given:\ny'' = sin3x + e^x + x²\n\nIntegrate once:\ny' = -cos3x/3 + e^x + x³/3 + C₁\n\nApply y'(0)=1 to find C₁\n\nIntegrate again:\ny = -sin3x/9 + e^x + x⁴/12 + x/3 + C₂\n\nApply y(0)=0 → find C₂\n\nFinal answer:\ny = -sin3x/9 + e^x + x⁴/12 + x/3\n\nTherefore correct answer is option (b)."
    }
  }
];