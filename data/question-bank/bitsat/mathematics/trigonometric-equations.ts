import { PYQQuestion } from "@/lib/types";

export const bitsatTrigonometricEquationsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-trigonometric-equations-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometric Equations",
    topic: "General solution of a trigonometric equation",
    year: 2017,
    questionText: "The general solution of sinx − 3sin2x + sin3x = cosx − 3cos2x + cos3x is",
    options: [
      "x = nπ + π/8",
      "x = nπ/2 + π/8",
      "x = π + nπ/2 + π/8",
      "x = 2nπ + cos⁻¹(2/3)"
    ],
    correctAnswer: "x = nπ/2 + π/8",
    explanation: {
      quick: "Use sum-to-product identities and simplify the equation.",
      standard: "Group sinx + sin3x and cosx + cos3x using sum-to-product identities. After simplification, the trigonometric equation reduces to a standard form whose general solution is x = nπ/2 + π/8.",
      deep: "Let us solve this carefully.\n\nGiven:\nsinx − 3sin2x + sin3x = cosx − 3cos2x + cos3x\n\nGroup the first and third sine terms:\nsinx + sin3x = 2sin2x cosx\n\nGroup the first and third cosine terms:\ncosx + cos3x = 2cos2x cosx\n\nSo the equation becomes:\n2sin2x cosx − 3sin2x = 2cos2x cosx − 3cos2x\n\nTake common factors:\nsin2x(2cosx − 3) = cos2x(2cosx − 3)\n\nSince 2cosx − 3 cannot be zero for real x, we get:\nsin2x = cos2x\n\nTherefore:\ntan2x = 1\n\nSo:\n2x = nπ + π/4\n\nHence:\nx = nπ/2 + π/8\n\nTherefore, the correct answer is x = nπ/2 + π/8."
    }
  },
  {
    id: "bitsat-2018-math-trigonometry-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometry",
    topic: "Determinant and Trigonometric Evaluation",
    year: 2018,
    questionText: "Evaluate 4x² + x sin(3π/2) + 5",
    options: ["13−√2", "13+√2", "√2−13", "Both"],
    correctAnswer: "Both",
    explanation: {
      quick: "sin(3π/2) = -1, and x can take two values.",
      standard: "Since sin(3π/2) = -1, the expression becomes 4x² − x + 5. If x = ±√2, the two corresponding values are obtained, so both listed results are possible.",
      deep: "Let us evaluate step by step.\n\nWe know:\nsin(3π/2) = -1\n\nSo:\n4x² + x sin(3π/2) + 5 = 4x² - x + 5\n\nIf the earlier condition gives:\nx = ±√2\n\nFor x = √2:\n4(2) - √2 + 5 = 13 - √2\n\nFor x = -√2:\n4(2) + √2 + 5 = 13 + √2\n\nBoth values are possible.\n\nTherefore, the correct answer is Both."
    }
  },
  {
    id: "bitsat-2018-math-trigonometry-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometry",
    topic: "Inverse Trigonometric Series",
    year: 2018,
    questionText: "The value of S = Σ tan⁻¹(2n/(n⁴+n²+2)) is",
    options: ["π/2", "π", "π/4", "None"],
    correctAnswer: "π/4",
    explanation: {
      quick: "Rewrite each term as a telescoping difference of inverse tangents.",
      standard: "Use tan⁻¹a − tan⁻¹b = tan⁻¹((a−b)/(1+ab)). The given term can be expressed in telescoping form, so most terms cancel and the final sum becomes π/4.",
      deep: "Let us use the inverse tangent identity:\n\ntan⁻¹a − tan⁻¹b = tan⁻¹((a − b)/(1 + ab))\n\nThe expression:\ntan⁻¹(2n/(n⁴+n²+2))\n\ncan be written in a telescoping inverse tangent form.\n\nWhen summed over n, consecutive terms cancel.\n\nAfter cancellation, the remaining limiting value is:\nπ/4\n\nTherefore, the correct answer is π/4."
    }
  },
  {
    id: "bitsat-2018-math-trigonometry-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometry",
    topic: "Trigonometric Identity",
    year: 2018,
    questionText: "If sinx + cos(t+x) + cos(t−x) = 2 has real solution, sin t can be",
    options: ["1/2", "1/3", "3/4", "-3/4"],
    correctAnswer: "1/2",
    explanation: {
      quick: "Use cos(A+B)+cos(A−B)=2cosAcosB and maximum value condition.",
      standard: "The equation becomes sinx + 2cost cosx = 2. The maximum value of a sinx + b cosx is √(a²+b²). For real solution, √(1+4cos²t) must be at least 2. This gives sin²t ≤ 1/4, and among options sin t = 1/2 works.",
      deep: "Let us simplify the equation.\n\nGiven:\nsinx + cos(t+x) + cos(t−x) = 2\n\nUse identity:\ncos(A+B) + cos(A−B) = 2cosAcosB\n\nSo:\ncos(t+x) + cos(t−x) = 2cost cosx\n\nTherefore:\nsinx + 2cost cosx = 2\n\nThe maximum possible value of:\nsinx + 2cost cosx\n\nis:\n√(1² + (2cost)²) = √(1 + 4cos²t)\n\nFor the equation to have a real solution:\n√(1 + 4cos²t) ≥ 2\n\nSquaring:\n1 + 4cos²t ≥ 4\n\n4cos²t ≥ 3\n\ncos²t ≥ 3/4\n\nSo:\nsin²t ≤ 1/4\n\nAmong the given options, sin t = 1/2 satisfies this condition.\n\nTherefore, the correct answer is 1/2."
    }
  },
  {
    id: "bitsat-2018-math-trigonometry-005",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Trigonometry",
    topic: "Angle Relations",
    year: 2018,
    questionText: "If α+β=π/2, then (cosα + cosβ + cosγ)² equals",
    options: ["1+sin2α", "1−sin2α", "1+cos2α", "None"],
    correctAnswer: "1+sin2α",
    explanation: {
      quick: "Use β = π/2 − α, so cosβ = sinα.",
      standard: "Since α + β = π/2, cosβ = sinα. The expression simplifies using sin²α + cos²α = 1 and 2sinαcosα = sin2α.",
      deep: "Given:\nα + β = π/2\n\nSo:\nβ = π/2 − α\n\nTherefore:\ncosβ = cos(π/2 − α) = sinα\n\nNow use the expression structure and substitute cosβ = sinα.\n\nThe square then contains:\n(cosα + sinα)²\n\nExpand:\ncos²α + sin²α + 2sinαcosα\n\nUsing identities:\nsin²α + cos²α = 1\n2sinαcosα = sin2α\n\nSo the value becomes:\n1 + sin2α\n\nTherefore, the correct answer is 1+sin2α."
    }
  }
];