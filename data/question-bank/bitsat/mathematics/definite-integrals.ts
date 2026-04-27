import { PYQQuestion } from "@/lib/types";

export const bitsatDefiniteIntegralsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-definite-integrals-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Definite Integrals",
    topic: "Basic definite integral",
    year: 2017,
    questionText: "∫₀¹ x dx =",
    options: [
      "1/2",
      "1",
      "0",
      "2"
    ],
    correctAnswer: "1/2",
    explanation: {
      quick: "Use the main concept from Basic definite integral and apply it directly. The correct answer is 1/2.",
      standard: "We solve this using the main idea from Basic definite integral. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 1/2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Basic definite integral.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Basic definite integral and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 1/2.\n\nExtra understanding:\nQuestions from Basic definite integral often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 1/2."
    }
  }
{
  id: "bitsat-2018-math-integrals-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Integrals",
  topic: "Parameter Evaluation",
  year: 2018,
  questionText: "Find (A,B,C)",
  options: [
    "(tan⁻¹2,e,e²)",
    "(tan⁻¹e,e,2)",
    "(tan⁻¹1,2,1/e)",
    "(tan⁻¹1,e,1/e)"
  ],
  correctAnswer: "(tan⁻¹1,e,1/e)",
  explanation: {
    quick: "Solve integrals and compare.",
    standard: "Evaluate P(x), Q(x).",
    deep: "Let us understand the question from the beginning…\n\nEvaluate integrals carefully\nMatch constants → gives (tan⁻¹1,e,1/e)\n\nTherefore answer is option (d)."
  }
},
{
  id: "bitsat-2018-math-integrals-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Integrals",
  topic: "Definite Integral",
  year: 2018,
  questionText: "Evaluate ∫₀¹ cot⁻¹(1−x+x²) dx",
  options: ["log₂2","π/2−log₂2","π/2+log₂2","−log₂2"],
  correctAnswer: "π/2−log₂2",
  explanation: {
    quick: "Use substitution x→1−x.",
    standard: "Symmetry property.",
    deep: "Let us understand the question from the beginning…\n\nUse I + I substitution\nSimplify → π/2 − log2\n\nTherefore answer is π/2 − log₂2."
  }
}
];
