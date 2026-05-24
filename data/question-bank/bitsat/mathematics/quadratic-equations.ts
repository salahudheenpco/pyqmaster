import { PYQQuestion } from "@/lib/types";

export const bitsatQuadraticEquationsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-quadratic-equations-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    topic: "Condition when one root is the square of the other",
    year: 2017,
    questionText: "For the equation 3x² + px + 3 = 0, if one of the roots is the square of the other, then p is equal to",
    options: [
      "2",
      "1/3",
      "3",
      "3/2"
    ],
    correctAnswer: "3",
    explanation: {
      quick: "Let the roots of the quadratic equation be α and α², because one root is the square of the other. For the equation 3x² + px + 3 = 0, the product of roots is c/a = 3/3 = 1. Therefore, α · α² = α³ = 1. The cube roots of unity are 1, ω, and ω². If α = 1, then both roots become 1 and p would be -6, which is not among the given options. The MCQ option that fits comes from the non-real cube roots α = ω and α² = ω². For cube roots of unity, ω + ω² = -1. By sum of roots, α + α² = -p/3. Hence -p/3 = -1, so p = 3. Therefore, the correct answer is 3.",
      standard: "Let the two roots of the quadratic equation be α and α², because the question says that one root is the square of the other. The given equation is 3x² + px + 3 = 0. For a quadratic equation ax² + bx + c = 0, the sum of roots is -b/a, and the product of roots is c/a.\n\nHere, a = 3, b = p, and c = 3. Therefore, the product of roots is 3/3 = 1. Since the roots are α and α², their product is α × α² = α³. So we get α³ = 1. This means α is a cube root of unity.\n\nThe cube roots of unity are 1, ω, and ω². If α = 1, then the roots are 1 and 1, and the sum of roots is 2. This would give -p/3 = 2, so p = -6. But -6 is not present among the options. The option-based answer therefore comes from the non-real cube roots of unity. If α = ω, then the other root is α² = ω². For cube roots of unity, we know ω + ω² = -1.\n\nNow use the sum of roots. For the given quadratic, sum of roots = -p/3. But from the roots ω and ω², sum = -1. Hence -p/3 = -1. Multiplying by -3 gives p = 3. Therefore, the correct answer is 3.",
      deep: "Let us understand the question from the beginning.\n\n1. Concept Introduction\nA quadratic equation ax² + bx + c = 0 has two roots. If the roots are r₁ and r₂, then by the standard relation between roots and coefficients, r₁ + r₂ = -b/a and r₁r₂ = c/a. These are very useful formulas because they connect the roots directly with the coefficients without solving the quadratic completely.\n\nThis question says that one root is the square of the other. So if one root is α, the other root can be written as α². Then we can apply the sum and product of roots formulas.\n\n2. Given Information\nThe equation is:\n\n3x² + px + 3 = 0.\n\nHere:\n\na = 3,\n\nb = p,\n\nc = 3.\n\nThe two roots are α and α².\n\nWe need to find the value of p from the given options.\n\n3. Strategy / Approach\nFirst, use the product of roots to get a condition on α. This will lead to α³ = 1, meaning α is a cube root of unity. Then use the sum of roots to find p. We must also compare with the given options because the real cube root case gives a value not listed in the MCQ options.\n\n4. Step-by-Step Solution\nFor the quadratic equation ax² + bx + c = 0, product of roots is:\n\nc/a.\n\nFor the given equation:\n\nproduct of roots = 3/3 = 1.\n\nSince the roots are α and α², their product is:\n\nα × α² = α³.\n\nSo:\n\nα³ = 1.\n\nThe solutions of α³ = 1 are the cube roots of unity:\n\n1, ω, and ω².\n\nIf α = 1, then the roots are 1 and 1. Their sum is 2. Using sum of roots:\n\n-p/3 = 2.\n\nSo:\n\np = -6.\n\nBut -6 is not among the given answer options.\n\nNow take the non-real cube root case. If α = ω, then α² = ω². The roots are:\n\nω and ω².\n\nA standard property of cube roots of unity is:\n\n1 + ω + ω² = 0.\n\nTherefore:\n\nω + ω² = -1.\n\nNow use the sum of roots formula for the given equation:\n\nsum of roots = -b/a = -p/3.\n\nSo:\n\n-p/3 = -1.\n\nMultiply both sides by 3:\n\n-p = -3.\n\nTherefore:\n\np = 3.\n\n5. Key Insight\nThe important trick is that α³ = 1 gives cube roots of unity. The option p = 3 comes from the non-real pair of cube roots, ω and ω², whose sum is -1.\n\n6. Final Answer\nTherefore, the correct answer is 3.\n\n7. Common Mistakes\nStudents often assume α = 1 only and get p = -6, but that value is not among the options.\n\nStudents may forget the relation ω + ω² = -1.\n\nStudents may use the sum of roots before using the product of roots and miss the cube-root condition.\n\nStudents may write product of roots as -c/a instead of c/a."
    }
  }
];

export default bitsatQuadraticEquationsQuestions;