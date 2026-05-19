import { PYQQuestion } from "@/lib/types";

export const jeeVectorAlgebraQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-vector-algebra-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Vector Algebra",
    topic: "Dot product",
    year: 2026,
    questionText:
      "If two vectors a and b satisfy |a| = 2, |b| = 3 and a·b = 6, then the angle between them is:",
    options: ["0°", "60°", "90°", "180°"],
    correctAnswer: "0°",
    explanation: {
      quick:
        "a·b = |a||b|cosθ ⇒ 6 = 2×3×cosθ ⇒ cosθ = 1 ⇒ θ = 0°.",

      standard:
        "Given:\n|a| = 2, |b| = 3, a·b = 6\n\nUsing formula:\na·b = |a||b|cosθ\n\nSo:\n6 = 2×3×cosθ\n⇒ 6 = 6cosθ\n⇒ cosθ = 1\n\nTherefore:\nθ = 0°",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given two vectors a and b with magnitudes:\n|a| = 2 and |b| = 3\n\nAlso given:\na·b = 6\n\nStep 1: Recall dot product formula\n\nThe dot product of two vectors is:\n\na·b = |a||b|cosθ\n\nwhere θ is the angle between the vectors.\n\nStep 2: Substitute values\n\n6 = (2)(3)cosθ\n\nSo:\n6 = 6cosθ\n\nStep 3: Solve for cosθ\n\nDivide both sides by 6:\ncosθ = 1\n\nStep 4: Find angle\n\ncosθ = 1 ⇒ θ = 0°\n\nStep 5: Interpretation\n\nThis means the vectors are in the same direction (parallel).\n\nCommon mistakes:\n1. Forgetting the cosine formula\n2. Taking cosθ = 6 instead of dividing properly\n3. Choosing 180° instead of 0°\n\nTherefore, the correct answer is 0°."
    }
  },

  // 🔥 Q19 (Shift 2)
  {
    id: "jee-2026-mathematics-vector-algebra-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Vector Algebra",
    topic: "Scalar triple product / coplanarity",
    year: 2026,
    questionText:
      "If vectors a, b and c satisfy a · (b × c) = 0, then which of the following is true?",
    options: [
      "Vectors are coplanar",
      "Vectors are perpendicular",
      "Vectors are parallel",
      "None of these"
    ],
    correctAnswer: "Vectors are coplanar",
    explanation: {
      quick:
        "If scalar triple product is zero, vectors are coplanar.",

      standard:
        "Scalar triple product:\na · (b × c)\n\nIf this equals zero, it means volume of parallelepiped formed by the vectors is zero.\n\nHence, vectors lie in same plane ⇒ coplanar.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\na · (b × c) = 0\n\nThis expression is called the scalar triple product.\n\nStep 1: Understand scalar triple product\n\nThe scalar triple product a · (b × c) gives the volume of the parallelepiped formed by vectors a, b, and c.\n\nStep 2: Interpret the condition\n\nIf:\na · (b × c) = 0\n\nthen the volume of the parallelepiped is zero.\n\nStep 3: What does zero volume mean?\n\nIf the volume is zero, it means the three vectors do not form a 3D shape.\n\nInstead, they lie in the same plane.\n\nStep 4: Conclusion\n\nThus, the vectors a, b, and c are coplanar.\n\nCommon mistakes:\n1. Confusing scalar triple product with dot product\n2. Thinking zero means vectors are perpendicular\n3. Forgetting geometric interpretation (volume)\n\nTherefore, the correct answer is: Vectors are coplanar."
    }
  }
];

export default jeeVectorAlgebraQuestions;