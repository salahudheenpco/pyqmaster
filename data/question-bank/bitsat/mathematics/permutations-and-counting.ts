import { PYQQuestion } from "@/lib/types";

export const bitsatPermutationsAndCountingQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-permutations-and-counting-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Permutations and Counting",
    topic: "Counting 5-digit numbers greater than 50000 without repetition",
    year: 2017,
    questionText: "The number of integers greater than 50000 that can be formed with the digits 0, 1, 2, 3, 4, 5 without repetition is",
    options: [
      "120",
      "96",
      "48",
      "72"
    ],
    correctAnswer: "96",
    explanation: {
      quick: "Use the main concept from Counting 5-digit numbers greater than 50000 without repetition and apply it directly. The correct answer is 96.",
      standard: "We solve this using the main idea from Counting 5-digit numbers greater than 50000 without repetition. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 96.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Counting 5-digit numbers greater than 50000 without repetition.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Counting 5-digit numbers greater than 50000 without repetition and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 96.\n\nExtra understanding:\nQuestions from Counting 5-digit numbers greater than 50000 without repetition often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 96."
    }
  }
{
  id: "bitsat-2018-math-permutation-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Permutations and Combinations",
  topic: "Counting",
  year: 2018,
  questionText: "Number of parallelograms formed",
  options: ["mC2×mC2","2(m+2C2)","(m+2C2)^2","None"],
  correctAnswer: "(m+2C2)^2",
  explanation: {
    quick: "Choose 2 lines from each direction.",
    standard: "Total lines = m+2.",
    deep: "Let us understand the question from the beginning…\n\nTotal = C(m+2,2)^2\n\nTherefore answer is (m+2C2)^2."
  }
}
];
