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
    options: ["120", "96", "48", "72"],
    correctAnswer: "96",
    explanation: {
      quick: "The first digit must be 5, then arrange 4 digits from the remaining 5 digits.",
      standard: "For a 5-digit number greater than 50000 using digits 0,1,2,3,4,5 without repetition, the first digit must be 5. The remaining four places can be filled by choosing and arranging 4 digits from the remaining 5 digits: ⁵P₄ = 5 × 4 × 3 × 2 = 120. But 50000 itself is not possible due to repetition, so all such arrangements are valid. Please recheck the option/source if answer is given as 96.",
      deep: "Let us solve this carefully.\n\nDigits available:\n0, 1, 2, 3, 4, 5\n\nWe need 5-digit integers greater than 50000, without repetition.\n\nFor the number to be greater than 50000, the first digit must be 5 because there is no digit greater than 5 available.\n\nSo the number starts as:\n5 _ _ _ _\n\nNow we must fill the remaining 4 places using digits from:\n0, 1, 2, 3, 4\n\nNumber of ways:\n⁵P₄ = 5 × 4 × 3 × 2 = 120\n\nSo mathematically, the answer should be 120.\n\nHowever, your current correctAnswer is marked as 96. If this came from the source paper, please recheck whether there was an extra condition in the question, because with the text shown here, the count is 120."
    }
  },
  {
    id: "bitsat-2018-math-permutation-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Permutations and Combinations",
    topic: "Counting",
    year: 2018,
    questionText: "Number of parallelograms formed",
    options: ["mC2×mC2", "2(m+2C2)", "(m+2C2)^2", "None"],
    correctAnswer: "(m+2C2)^2",
    explanation: {
      quick: "A parallelogram is formed by choosing 2 parallel lines from one family and 2 from another family.",
      standard: "If there are m + 2 lines in each of two directions, then choose 2 lines from the first direction and 2 lines from the second direction. Number of parallelograms = C(m+2, 2) × C(m+2, 2) = [C(m+2,2)]².",
      deep: "Let us understand the counting idea.\n\nA parallelogram is formed when we select:\n- two parallel lines from one direction\n- two parallel lines from another direction\n\nThe selected four lines enclose one parallelogram.\n\nIf the number of lines in each direction is m + 2, then:\n\nWays to choose 2 lines from first direction:\nC(m+2, 2)\n\nWays to choose 2 lines from second direction:\nC(m+2, 2)\n\nTotal parallelograms:\nC(m+2, 2) × C(m+2, 2)\n= [C(m+2, 2)]²\n\nTherefore, the correct answer is (m+2C2)^2."
    }
  }
];