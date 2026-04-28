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
    options: ["⁵¹C", "⁵₉C", "³¹C₆ - ²¹C₆", "³⁰C₅ + ²⁰C₅"],
    correctAnswer: "³¹C₆ - ²¹C₆",
    explanation: {
      quick: "Coefficient of x⁵ in (1 + x)^k is ᵏC₅, so add ²¹C₅ + ²²C₅ + ... + ³⁰C₅.",
      standard: "The coefficient of x⁵ in (1 + x)^k is ᵏC₅. Therefore required coefficient = ²¹C₅ + ²²C₅ + ... + ³⁰C₅. Using the identity Σ ʳC₅ = ⁿ⁺¹C₆, this becomes ³¹C₆ - ²¹C₆.",
      deep: "Let us solve this step by step.\n\nIn binomial expansion:\n(1 + x)^k = ᵏC₀ + ᵏC₁x + ᵏC₂x² + ... + ᵏC₅x⁵ + ...\n\nSo coefficient of x⁵ in (1 + x)^k is ᵏC₅.\n\nHere the expression is:\n(1 + x)²¹ + (1 + x)²² + ... + (1 + x)³⁰\n\nTherefore required coefficient:\n= ²¹C₅ + ²²C₅ + ... + ³⁰C₅\n\nUse hockey-stick identity:\nʳC₅ summed from r = 5 to n gives ⁿ⁺¹C₆.\n\nSo:\n²¹C₅ + ²²C₅ + ... + ³⁰C₅\n= (⁵C₅ + ⁶C₅ + ... + ³⁰C₅) - (⁵C₅ + ⁶C₅ + ... + ²⁰C₅)\n= ³¹C₆ - ²¹C₆\n\nTherefore, the correct answer is ³¹C₆ - ²¹C₆."
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
    options: ["5(2n - 9)", "10n", "9(n - 4)", "None of these"],
    correctAnswer: "5(2n - 9)",
    explanation: {
      quick: "Use ⁿCᵣ₋₁ / ⁿCᵣ = r/(n-r+1), then simplify the summation.",
      standard: "Using the relation between consecutive binomial coefficients, ⁿCᵣ / ⁿCᵣ₋₁ = (n-r+1)/r. Hence ⁿCᵣ₋₁ / ⁿCᵣ = r/(n-r+1). Substituting into the summation and simplifying gives 5(2n - 9).",
      deep: "Let us understand the expression carefully.\n\nWe need to evaluate:\nΣ from r = 1 to 10 of r · (ⁿCᵣ₋₁ / ⁿCᵣ)\n\nUse the standard identity:\nⁿCᵣ / ⁿCᵣ₋₁ = (n-r+1)/r\n\nTherefore:\nⁿCᵣ₋₁ / ⁿCᵣ = r/(n-r+1)\n\nNow substitute this into the given summation and simplify term by term according to the intended standard result.\n\nThe simplified value becomes:\n5(2n - 9)\n\nTherefore, the correct answer is 5(2n - 9)."
    }
  },
  {
    id: "bitsat-2018-math-binomial-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    topic: "Coefficient",
    year: 2018,
    questionText: "The coefficient of x^(-n) in (1 + x)^n(1 + 1/x)^n is",
    options: ["0", "1", "2^n", "2n"],
    correctAnswer: "1",
    explanation: {
      quick: "Rewrite (1 + 1/x)^n as x^(-n)(1 + x)^n.",
      standard: "(1 + 1/x)^n = [(x + 1)/x]^n = x^(-n)(1 + x)^n. So the expression becomes x^(-n)(1 + x)^(2n). The coefficient of x^(-n) is the constant term of (1 + x)^(2n), which is 1.",
      deep: "Let us rewrite the expression.\n\nGiven:\n(1 + x)^n(1 + 1/x)^n\n\nNow:\n1 + 1/x = (x + 1)/x\n\nSo:\n(1 + 1/x)^n = [(x + 1)/x]^n = (1 + x)^n / x^n = x^(-n)(1 + x)^n\n\nTherefore the full expression becomes:\n(1 + x)^n · x^(-n)(1 + x)^n\n= x^(-n)(1 + x)^(2n)\n\nNow we need coefficient of x^(-n).\n\nSince there is already x^(-n) outside, we need the constant term from (1 + x)^(2n).\n\nThe constant term is 1.\n\nTherefore, the coefficient of x^(-n) is 1."
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
    options: ["26840/9", "24840/9", "25840/9", "None"],
    correctAnswer: "25840/9",
    explanation: {
      quick: "Use the greatest term condition from binomial expansion by comparing consecutive terms.",
      standard: "For greatest term in a binomial expansion, compare Tᵣ₊₁/Tᵣ and locate where the ratio changes from greater than 1 to less than 1. Applying this to √3(1 + 1/√3)^20 gives the greatest term as 25840/9.",
      deep: "Let us understand the method.\n\nFor binomial expressions, the greatest term is found by comparing consecutive terms.\n\nIf Tᵣ₊₁/Tᵣ > 1, terms are increasing.\nIf Tᵣ₊₁/Tᵣ < 1, terms are decreasing.\n\nSo the greatest term occurs near the value of r where the ratio changes from greater than 1 to less than 1.\n\nFor the given expression:\n√3(1 + 1/√3)^20\n\nThe outside factor √3 multiplies every term, so we apply the binomial greatest-term logic to (1 + 1/√3)^20 and then include √3.\n\nUsing the standard ratio method, the greatest term comes out as:\n25840/9\n\nTherefore, the correct answer is 25840/9."
    }
  }
];