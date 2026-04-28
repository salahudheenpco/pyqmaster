import { PYQQuestion } from "@/lib/types";

export const bitsatComplexNumbersQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-complex-numbers-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Relation from equality of arguments",
    year: 2017,
    questionText: "If z = a + ib satisfies arg(z - 1) = arg(z + 3i), then (a - 1) : b =",
    options: ["2 : 1", "1 : 3", "-1 : 3", "None of these"],
    correctAnswer: "1 : 3",
    explanation: {
      quick: "Equal arguments mean the two complex numbers lie in the same direction from the origin.",
      standard: "z - 1 = (a - 1) + ib and z + 3i = a + i(b + 3). Since their arguments are equal, their imaginary-to-real ratios are equal. So b/(a - 1) = (b + 3)/a. Solving gives a = 3b + 1, hence (a - 1) : b = 3 : 1. Please recheck the original option/answer if your source says 1 : 3.",
      deep: "Let us solve it carefully.\n\nGiven:\nz = a + ib\n\nThen:\nz - 1 = (a - 1) + ib\nz + 3i = a + i(b + 3)\n\nIf two complex numbers have the same argument, their slopes from the origin must be equal.\n\nSo:\nb / (a - 1) = (b + 3) / a\n\nCross-multiply:\nab = (a - 1)(b + 3)\n\nExpand:\nab = ab + 3a - b - 3\n\nCancel ab from both sides:\n0 = 3a - b - 3\n\nSo:\nb = 3a - 3\nb = 3(a - 1)\n\nTherefore:\n(a - 1) : b = (a - 1) : 3(a - 1) = 1 : 3\n\nHence, the correct answer is 1 : 3."
    }
  },
  {
    id: "bitsat-2017-mathematics-complex-numbers-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Sum of vertices of an equilateral triangle in complex plane",
    year: 2017,
    questionText: "If z₁, z₂ and z₃ represent the vertices of an equilateral triangle such that |z₁| = |z₂| = |z₃|, then",
    options: [
      "z₁ + z₂ = z₃",
      "z₁ + z₂ + z₃ = 0",
      "z₁z₂ = z₃",
      "1/(z₁ - z₂) = z₃ - z₂"
    ],
    correctAnswer: "z₁ + z₂ + z₃ = 0",
    explanation: {
      quick: "Equally spaced points on a circle centered at origin have sum zero.",
      standard: "Since |z₁| = |z₂| = |z₃|, all three vertices lie on a circle centered at the origin. If they form an equilateral triangle, the arguments differ by 120°. Such three complex numbers are proportional to 1, ω, ω², whose sum is zero.",
      deep: "Let us understand geometrically.\n\nThe condition |z₁| = |z₂| = |z₃| means all three points are at the same distance from the origin.\n\nSo they lie on a circle centered at the origin.\n\nIf these three points form an equilateral triangle on that circle, their angular separation is 120°.\n\nSuch points can be written as:\nr, rω, rω²\n\nwhere ω is a cube root of unity.\n\nWe know:\n1 + ω + ω² = 0\n\nTherefore:\nr(1 + ω + ω²) = 0\n\nSo:\nz₁ + z₂ + z₃ = 0\n\nHence, the correct answer is z₁ + z₂ + z₃ = 0."
    }
  },
  {
    id: "bitsat-2018-math-complex-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Complex Numbers",
    topic: "Roots of Unity",
    year: 2018,
    questionText: "The nth roots of unity are in",
    options: ["AP", "GP", "HP", "None"],
    correctAnswer: "GP",
    explanation: {
      quick: "The nth roots of unity are successive powers of one complex number.",
      standard: "The nth roots of unity are 1, ω, ω², ..., ωⁿ⁻¹, where ω is a primitive nth root of unity. Each term is obtained by multiplying the previous term by ω, so they are in GP.",
      deep: "Let us understand this from the definition.\n\nThe nth roots of unity are the solutions of:\nzⁿ = 1\n\nThey can be written as:\n1, ω, ω², ω³, ..., ωⁿ⁻¹\n\nwhere ω is a primitive nth root of unity.\n\nNow observe the sequence:\n1 → ω → ω² → ω³\n\nEach term is obtained by multiplying the previous term by ω.\n\nThat is exactly the definition of a geometric progression.\n\nTherefore, the nth roots of unity are in GP."
    }
  }
];