import { PYQQuestion } from "@/lib/types";

export const bitsatBinomialTheoremQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-binomial-theorem-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    topic: "Coefficient of x^5 in a sum of binomial expansions",
    year: 2017,
    questionText: "The coefficient of x⁵ in the expansion of (1 + x)²¹ + (1 + x)²² + ... + (1 + x)³⁰ is",
    options: [
      "⁵¹C",
      "⁵₉C",
      "³¹C₆ - ²¹C₆",
      "³⁰C₅ + ²⁰C₅"
    ],
    correctAnswer: "³¹C₆ - ²¹C₆",
    explanation: {
      quick: "Use the main concept from Coefficient of x^5 in a sum of binomial expansions and apply it directly. The correct answer is ³¹C₆ - ²¹C₆.",
      standard: "We solve this using the main idea from Coefficient of x^5 in a sum of binomial expansions. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as ³¹C₆ - ²¹C₆.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Coefficient of x^5 in a sum of binomial expansions.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Coefficient of x^5 in a sum of binomial expansions and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as ³¹C₆ - ²¹C₆.\n\nExtra understanding:\nQuestions from Coefficient of x^5 in a sum of binomial expansions often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is ³¹C₆ - ²¹C₆."
    }
  },
  {
    id: "bitsat-2017-mathematics-binomial-theorem-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    topic: "Summation involving ratios of consecutive binomial coefficients",
    year: 2017,
    questionText: "The value of Σ[r = 1 to 10] r · (ⁿCᵣ₋₁ / ⁿCᵣ) is equal to",
    options: [
      "5(2n - 9)",
      "10n",
      "9(n - 4)",
      "None of these"
    ],
    correctAnswer: "5(2n - 9)",
    explanation: {
      quick: "Use the main concept from Summation involving ratios of consecutive binomial coefficients and apply it directly. The correct answer is 5(2n - 9).",
      standard: "We solve this using the main idea from Summation involving ratios of consecutive binomial coefficients. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 5(2n - 9).",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Summation involving ratios of consecutive binomial coefficients.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Summation involving ratios of consecutive binomial coefficients and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 5(2n - 9).\n\nExtra understanding:\nQuestions from Summation involving ratios of consecutive binomial coefficients often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 5(2n - 9)."
    }
  }
{
  id: "bitsat-2018-math-binomial-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Binomial Theorem",
  topic: "Coefficient",
  year: 2018,
  questionText: "The coefficient of x^(-n) in (1 + x)^n(1 + 1/x)^n is",
  options: ["0","1","2^n","2n"],
  correctAnswer: "1",
  explanation: {
    quick: "Expression becomes x^(-n)(1+x)^(2n).",
    standard: "Coefficient reduces to constant term of (1+x)^(2n).",
    deep: "Let us understand the question from the beginning…\n\n(1+1/x)^n = x^(-n)(1+x)^n\nSo expression = x^(-n)(1+x)^(2n)\n\nCoefficient of x^(-n) = constant term of (1+x)^(2n) = 1\n\nTherefore, answer is 1."
  }
},
{
  id: "bitsat-2018-math-binomial-004",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Binomial Theorem",
  topic: "Greatest Term",
  year: 2018,
  questionText: "The greatest term in √3(1 + 1/√3)^20 is",
  options: ["26840/9","24840/9","25840/9","None"],
  correctAnswer: "25840/9",
  explanation: {
    quick: "Use ratio method.",
    standard: "Greatest term occurs at r≈7.",
    deep: "Let us understand the question from the beginning…\n\nUsing greatest term formula r≈7\nSubstitute → gives 25840/9\n\nTherefore correct answer is 25840/9."
  }
}
];
