import { PYQQuestion } from "@/lib/types";

export const bitsatPermutationsAndCombinationsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-permutations-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Permutations and Combinations",
    topic: "Arrangements with restrictions",
    year: 2017,
    questionText: "In how many ways can the letters of the word 'LEVEL' be arranged?",
    options: [
      "60",
      "30",
      "20",
      "120"
    ],
    correctAnswer: "30",
    explanation: {
      quick: "The word LEVEL has 5 letters in total. If all 5 letters were different, the number of arrangements would be 5!, which is 120. But here some letters are repeated, so directly using 5! would overcount the same arrangement multiple times. In LEVEL, the letter L appears 2 times and the letter E appears 2 times, while V appears only once. For arrangements of letters with repetition, use the formula total arrangements = n!/(p!q!...), where p, q, and so on are the frequencies of repeated letters. Hence the number of distinct arrangements is 5!/(2! × 2!) = 120/(2 × 2) = 30. Therefore, the correct answer is 30.",
      standard: "This is a permutations question involving repeated letters. The word LEVEL contains 5 letters: L, E, V, E, L. If all these letters were distinct, then the number of ways to arrange them would be 5!, because we would have 5 choices for the first position, 4 for the second, 3 for the third, and so on. This gives 5! = 120 arrangements.\n\nHowever, the letters are not all distinct. The letter L occurs twice, and the letter E also occurs twice. When identical letters are interchanged among themselves, the visible word arrangement does not change. For example, swapping the two L letters gives the same arrangement because both letters are identical. Similarly, swapping the two E letters also gives the same arrangement. Therefore, the value 5! counts every distinct arrangement too many times.\n\nFor a word with repeated letters, the formula is:\n\nNumber of distinct arrangements = n!/(r₁!r₂!...),\n\nwhere n is the total number of letters, and r₁, r₂, etc. are the frequencies of repeated letters. Here n = 5, L is repeated 2 times, and E is repeated 2 times. So:\n\nNumber of arrangements = 5!/(2! × 2!).\n\nNow calculate: 5! = 120 and 2! × 2! = 2 × 2 = 4. Therefore, the required number of arrangements is 120/4 = 30. Hence, the correct answer is 30.",
      deep: "Let us understand the question from the beginning.\n\n1. Concept Introduction\nThis question is based on permutations of letters when some letters are repeated. If all letters in a word are different, then the number of arrangements of n letters is n!. But when letters repeat, some arrangements look exactly the same after interchanging identical letters. Therefore, we must divide by the factorials of the repeated-letter counts.\n\nThe formula is:\n\nNumber of distinct arrangements = n!/(r₁!r₂!r₃!...),\n\nwhere n is the total number of letters, and r₁, r₂, r₃, etc. are the numbers of times repeated letters occur.\n\n2. Given Information\nThe word is LEVEL.\n\nThe total number of letters is 5.\n\nThe letters are L, E, V, E, L.\n\nThe letter L appears 2 times.\n\nThe letter E appears 2 times.\n\nThe letter V appears 1 time.\n\nWe need to find the number of distinct arrangements of these letters.\n\n3. Strategy / Approach\nFirst, we will calculate the number of arrangements as if all 5 letters were different. Then we will correct the overcounting caused by repeated L letters and repeated E letters. Since L repeats 2 times and E repeats 2 times, we divide by 2! for L and 2! for E.\n\n4. Step-by-Step Solution\nIf all 5 letters were distinct, the number of arrangements would be:\n\n5!.\n\nNow calculate 5!:\n\n5! = 5 × 4 × 3 × 2 × 1 = 120.\n\nBut the two L letters are identical. Interchanging them does not create a new arrangement. So we divide by:\n\n2!.\n\nAlso, the two E letters are identical. Interchanging them also does not create a new arrangement. So we divide by another:\n\n2!.\n\nTherefore, the number of distinct arrangements is:\n\n5!/(2! × 2!).\n\nNow calculate the denominator:\n\n2! = 2,\n\nso:\n\n2! × 2! = 2 × 2 = 4.\n\nThus:\n\nNumber of arrangements = 120/4.\n\nNow divide:\n\n120/4 = 30.\n\n5. Key Insight\nThe main trick is to remember that repeated letters must be divided out. If we used only 5!, we would count the same arrangement multiple times because identical L letters and identical E letters cannot be distinguished.\n\n6. Final Answer\nTherefore, the correct answer is 30.\n\n7. Common Mistakes\nStudents often use 5! directly and get 120, forgetting that L and E are repeated.\n\nStudents may divide by only one 2!, correcting for either L or E but not both.\n\nStudents may count V as repeated, even though it occurs only once.\n\nStudents may confuse arrangements of letters with combinations, but order matters here, so permutations are used."
    }
  }
];

export default bitsatPermutationsAndCombinationsQuestions;