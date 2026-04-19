export const jeeComplexNumbersQuestions = [
  {
    id: "jee-2026-mathematics-complex-numbers-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Cube roots of unity, power sums",
    year: 2026,
    questionText:
      "Let ω ≠ 1 be a cube root of unity. If α = (1 + ω)^6 + (1 + ω^2)^6, then α is equal to:",
    options: ["0", "1", "2", "3"],
    correctAnswer: "2",
    explanation: {
      quick:
        "Use ω³ = 1 and 1 + ω + ω² = 0. Then 1 + ω = -ω² and 1 + ω² = -ω. So α = (-ω²)^6 + (-ω)^6 = ω¹² + ω⁶ = 1 + 1 = 2.",
      standard:
        "We are given ω is a cube root of unity, so:\nω³ = 1 and 1 + ω + ω² = 0\n\nFrom this:\n1 + ω = -ω²\n1 + ω² = -ω\n\nNow substitute into the expression:\nα = (1 + ω)^6 + (1 + ω^2)^6\n= (-ω²)^6 + (-ω)^6\n\nNow simplify powers:\n(-ω²)^6 = (-1)^6 (ω²)^6 = ω^12\n(-ω)^6 = (-1)^6 ω^6 = ω^6\n\nSince ω³ = 1:\nω^6 = (ω³)^2 = 1\nω^12 = (ω³)^4 = 1\n\nSo,\nα = 1 + 1 = 2.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given that ω is a cube root of unity and ω ≠ 1.\n\nThis means ω satisfies:\nω³ = 1\n\nAlso, a very important identity for cube roots of unity is:\n1 + ω + ω² = 0\n\nFrom this identity, we can rearrange:\n1 + ω = -ω²\nand\n1 + ω² = -ω\n\nNow the given expression is:\nα = (1 + ω)^6 + (1 + ω^2)^6\n\nStep 1: Substitute the simplified forms\n\nα = (-ω²)^6 + (-ω)^6\n\nStep 2: Simplify powers\n\n(-ω²)^6 = (-1)^6 × (ω²)^6 = 1 × ω^12 = ω^12\n\n(-ω)^6 = (-1)^6 × ω^6 = 1 × ω^6 = ω^6\n\nSo now,\nα = ω^12 + ω^6\n\nStep 3: Use ω³ = 1\n\nWe reduce powers using ω³ = 1:\n\nω^6 = (ω³)^2 = 1^2 = 1\n\nω^12 = (ω³)^4 = 1^4 = 1\n\nStep 4: Final calculation\n\nα = 1 + 1 = 2\n\nCommon mistake:\nMany students try expanding (1 + ω)^6 using binomial theorem, which becomes very lengthy. The smart approach is to use the identity 1 + ω + ω² = 0 to simplify immediately.\n\nTherefore, the correct answer is 2."
    }
  }
];

export default jeeComplexNumbersQuestions;