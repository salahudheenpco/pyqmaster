import { PYQQuestion } from "@/lib/types";

export const bitsatTrigonometricEquationsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-trigonometric-equations-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometric Equations",
    topic: "General solution of a trigonometric equation",
    year: 2017,
    questionText: "The general solution of sinx − 3sin2x + sin3x = cosx − 3cos2x + cos3x is",
    options: [
      "x = nπ + π/8",
      "x = nπ/2 + π/8",
      "x = π + nπ/2 + π/8",
      "x = 2nπ + cos⁻¹(2/3)"
    ],
    correctAnswer: "x = nπ/2 + π/8",
    explanation: {
      quick: "Use the main concept from General solution of a trigonometric equation and apply it directly. The correct answer is x = nπ/2 + π/8.",
      standard: "We solve this using the main idea from General solution of a trigonometric equation. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as x = nπ/2 + π/8.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is General solution of a trigonometric equation.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind General solution of a trigonometric equation and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as x = nπ/2 + π/8.\n\nExtra understanding:\nQuestions from General solution of a trigonometric equation often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is x = nπ/2 + π/8."
    }
  }
{
  id: "bitsat-2018-math-trigonometry-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Trigonometry",
  topic: "Determinant + Identity",
  year: 2018,
  questionText: "Evaluate 4x² + x sin(3π/2) + 5",
  options: ["13−√2","13+√2","√2−13","Both"],
  correctAnswer: "Both",
  explanation: {
    quick: "x²=2 → x=±√2",
    standard: "Substitute and evaluate both cases.",
    deep: "Let us understand the question from the beginning…\n\nx=±√2 → gives both answers.\n\nTherefore correct answer is Both."
  }
}
{
  id: "bitsat-2018-math-trigonometry-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Trigonometry",
  topic: "Infinite Series",
  year: 2018,
  questionText: "The value of S = Σ tan⁻¹(2n/(n⁴+n²+2)) is",
  options: ["π/2","π","π/4","None"],
  correctAnswer: "π/4",
  explanation: {
    quick: "Use telescoping tan⁻¹ identity.",
    standard: "Convert into tan⁻¹(a) − tan⁻¹(b) form.",
    deep: "Let us understand the question from the beginning…\n\nExpression telescopes using tan⁻¹ identity.\nFinal sum converges to π/4.\n\nTherefore answer is π/4."
  }
},
{
  id: "bitsat-2018-math-trigonometry-004",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Trigonometry",
  topic: "Trigonometric Identity",
  year: 2018,
  questionText: "If sinx + cos(t+x) + cos(t−x) = 2 has real solution, sin t can be",
  options: ["1/2","1/3","3/4","-3/4"],
  correctAnswer: "1/2",
  explanation: {
    quick: "Use cos(A+B)+cos(A−B)=2cosAcosB.",
    standard: "Equation reduces to sinx + 2cost cosx = 2.",
    deep: "Let us understand the question from the beginning…\n\nUsing identity:\ncos(t+x)+cos(t−x)=2cost cosx\n\nSo equation becomes:\nsinx + 2cost cosx = 2\n\nMax value possible gives sint = 1/2.\n\nTherefore answer is 1/2."
  }
}
{
  id: "bitsat-2018-math-trigonometry-005",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Trigonometry",
  topic: "Angle Relations",
  year: 2018,
  questionText: "If α+β=π/2, then (cosα + cosβ + cosγ)² equals",
  options: ["1+sin2α","1−sin2α","1+cos2α","None"],
  correctAnswer: "1+sin2α",
  explanation: {
    quick: "Use α+β=π/2 ⇒ cosβ=sinα.",
    standard: "Expression simplifies using identities.",
    deep: "Let us understand the question from the beginning…\n\nUsing α+β=π/2 ⇒ cosβ = sinα\nSimplifying gives result = 1+sin2α\n\nTherefore answer is 1+sin2α."
  }
}
];
