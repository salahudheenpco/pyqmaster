import { PYQQuestion } from "@/lib/types";

export const jeeNumberTheoryQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-number-theory-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Number Theory",
    topic: "Highest power of a prime in factorial",
    year: 2026,
    questionText:
      "The largest n ∈ N, for which 7^n divides 101!, is:",
    options: ["15", "19", "16", "18"],
    correctAnswer: "16",
    explanation: {
      quick:
        "Highest power of 7 in 101! is floor(101/7) + floor(101/49) = 14 + 2 = 16.",
      standard:
        "We need the largest n such that 7^n divides 101!.\n\nThis means we need the exponent of 7 in the prime factorization of 101!.\n\nUsing Legendre's formula:\nExponent of 7 in 101! = floor(101/7) + floor(101/7²) + floor(101/7³) + ...\n\nNow:\nfloor(101/7) = 14\nfloor(101/49) = 2\nfloor(101/343) = 0\n\nSo the exponent is:\n14 + 2 = 16\n\nTherefore, the largest n is 16.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are asked to find the largest natural number n such that:\n7^n divides 101!\n\nThis means we need to count how many factors of 7 are present inside 101!.\n\nStep 1: Understand 101!\n\n101! means:\n101! = 1 × 2 × 3 × 4 × ... × 101\n\nWe need to know how many times 7 appears in the prime factorization of this product.\n\nStep 2: Use Legendre's formula\n\nFor a prime number p, the exponent of p in n! is:\n\nfloor(n/p) + floor(n/p²) + floor(n/p³) + ...\n\nHere:\np = 7\nn = 101\n\nSo exponent of 7 in 101! is:\nfloor(101/7) + floor(101/7²) + floor(101/7³) + ...\n\nStep 3: Count multiples of 7\n\nFirst:\nfloor(101/7) = 14\n\nThis counts numbers like:\n7, 14, 21, ..., 98\n\nEach of these contributes at least one factor of 7.\n\nStep 4: Count extra factors from multiples of 49\n\nSome numbers contain more than one factor of 7.\n\nFor example:\n49 = 7²\n98 = 2 × 7²\n\nThese numbers have already been counted once in floor(101/7), but each contains one extra factor of 7.\n\nSo we add:\nfloor(101/49) = 2\n\nStep 5: Check higher powers\n\nNext power:\n7³ = 343\n\nSince 343 > 101:\nfloor(101/343) = 0\n\nSo no further contribution exists.\n\nStep 6: Add all contributions\n\nTotal exponent of 7 in 101! is:\n14 + 2 = 16\n\nThis means:\n7^16 divides 101!\n\nbut:\n7^17 does not divide 101!\n\nCommon mistakes:\n1. Counting only floor(101/7) = 14 and forgetting extra factors from 49 and 98.\n2. Adding multiples incorrectly.\n3. Thinking 101/7 gives the final answer directly.\n4. Forgetting that factorial prime powers require Legendre's formula.\n\nTherefore, the correct answer is 16."
    }
  }
];

export default jeeNumberTheoryQuestions;