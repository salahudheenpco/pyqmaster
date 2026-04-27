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
    options: [
      "x²/2 + C",
      "x + C",
      "lnx + C",
      "e^x"
    ],
    correctAnswer: "x²/2 + C",
    explanation: {
      quick: "Use the main concept from General solution and apply it directly. The correct answer is x²/2 + C.",
      standard: "We solve this using the main idea from General solution. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as x²/2 + C.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is General solution.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind General solution and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as x²/2 + C.\n\nExtra understanding:\nQuestions from General solution often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is x²/2 + C."
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
    options: [
      "e^x + C",
      "x + C",
      "lnx + C",
      "e^x"
    ],
    correctAnswer: "e^x + C",
    explanation: {
      quick: "Use the main concept from General solution and apply it directly. The correct answer is e^x + C.",
      standard: "We solve this using the main idea from General solution. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as e^x + C.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is General solution.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind General solution and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as e^x + C.\n\nExtra understanding:\nQuestions from General solution often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is e^x + C."
    }
  }
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
    quick: "Use substitution u=x+y.",
    standard: "Separate variables.",
    deep: "Let us understand the question from the beginning…\n\nPut u=x+y → du/dx = sin u + cos u\nIntegrate → final form matches option.\n\nTherefore answer is log(1+tan((x+y)/2))=x+C."
  }
}
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
    quick: "Solve linear DE.",
    standard: "Integrate and apply initial condition.",
    deep: "Let us understand the question from the beginning…\n\nSolve dy/dx = y+2x\nApply condition y(0)=0\nGet y=2(e^x−1)\n\nTherefore answer is y=2(e^x−1)."
  }
}
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
    quick: "Integrate twice and apply conditions.",
    standard: "Find y' then y and substitute initial values.",
    deep: "Let us understand the question from the beginning…\n\nIntegrate twice:\ny'' → y' → y\nApply y(0)=0 and y'(0)=1\nSolve constants\n\nFinal solution matches option (b).\n\nTherefore correct answer is option (b)."
  }
}
];
