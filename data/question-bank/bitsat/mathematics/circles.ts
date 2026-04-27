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
    options: [
      "p² = q²",
      "p² = 8q²",
      "p² < 8q²",
      "p² > 8q²"
    ],
    correctAnswer: "p² > 8q²",
    explanation: {
      quick: "Use the main concept from Condition for two distinct chords to be bisected by x-axis and apply it directly. The correct answer is p² > 8q².",
      standard: "We solve this using the main idea from Condition for two distinct chords to be bisected by x-axis. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as p² > 8q².",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Condition for two distinct chords to be bisected by x-axis.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Condition for two distinct chords to be bisected by x-axis and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as p² > 8q².\n\nExtra understanding:\nQuestions from Condition for two distinct chords to be bisected by x-axis often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is p² > 8q²."
    }
  }
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
    quick: "Use coordinate geometry.",
    standard: "Find intersection then area.",
    deep: "Let us understand the question from the beginning…\n\nSolving intersection gives area = 4.\n\nTherefore answer is 4."
  }
}
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
    quick: "Area reduces to 1/4 of square.",
    standard: "Use coordinates and midpoint formula.",
    deep: "Let us understand the question from the beginning…\n\nPlace square on coordinate axes.\nFind M and N midpoints.\nCompute triangle OMN area → equals 1/4 of square.\n\nTherefore ratio = 4:1."
  }
}
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
    quick: "Use parametric point of ellipse.",
    standard: "Find coordinates and use area formula.",
    deep: "Let us understand the question from the beginning…\n\nUsing ellipse parametric equations and auxiliary circle intersection,\narea evaluates to 29/10.\n\nTherefore answer is 29/10."
  }
}
];
