import { PYQQuestion } from "@/lib/types";

export const bitsatVectorsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-vectors-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Vectors",
    topic: "Dot product and perpendicular condition",
    year: 2017,
    questionText: "If two vectors are perpendicular, then their dot product is",
    options: [
      "0",
      "1",
      "-1",
      "∞"
    ],
    correctAnswer: "0",
    explanation: {
      quick: "Use the main concept from Dot product and perpendicular condition and apply it directly. The correct answer is 0.",
      standard: "We solve this using the main idea from Dot product and perpendicular condition. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 0.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Dot product and perpendicular condition.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Dot product and perpendicular condition and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 0.\n\nExtra understanding:\nQuestions from Dot product and perpendicular condition often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 0."
    }
  }
{
  id: "bitsat-2018-math-vectors-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Vectors",
  topic: "Angle Between Vectors",
  year: 2018,
  questionText: "Find sinθ + cosθ for given vectors",
  options: ["0","1/2","1","2"],
  correctAnswer: "1",
  explanation: {
    quick: "Use dot product.",
    standard: "Compute angle then evaluate.",
    deep: "Let us understand the question from the beginning…\n\nFind cosθ using dot product\nCompute sinθ\nAdd → gives 1\n\nTherefore answer is 1."
  }
},
{
  id: "bitsat-2018-math-vectors-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Vectors",
  topic: "Midpoint Vector",
  year: 2018,
  questionText: "Find AD in terms of BE and CF",
  options: ["BE+CF","BE−CF","CF−BE","−BE−CF"],
  correctAnswer: "BE+CF",
  explanation: {
    quick: "Use midpoint vector relation.",
    standard: "Write vectors in position form.",
    deep: "Let us understand the question from the beginning…\n\nUsing midpoint theorem in vectors:\nAD = BE + CF\n\nTherefore answer is BE + CF."
  }
},
{
  id: "bitsat-2018-math-vectors-004",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Vectors",
  topic: "Parallelepiped",
  year: 2018,
  questionText: "Find value of 19h²",
  options: ["19","16","8","None"],
  correctAnswer: "16",
  explanation: {
    quick: "Use scalar triple product.",
    standard: "Volume relation gives height.",
    deep: "Let us understand the question from the beginning…\n\nUse scalar triple product to find volume.\nDivide by base area to get height.\nCompute 19h² = 16\n\nTherefore answer is 16."
  }
}
];
