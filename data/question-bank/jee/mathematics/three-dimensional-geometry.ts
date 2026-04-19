export const jeeThreeDimensionalGeometryQuestions = [
  {
    id: "jee-2026-mathematics-three-dimensional-geometry-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Three-Dimensional Geometry",
    topic: "Foot of perpendicular and vector projection",
    year: 2026,
    questionText:
      "Let (α, β, γ) be the coordinates of the foot of the perpendicular drawn from the point (5, 4, 2) on the line r = (-i + 3j + k) + λ(2i + 3j - k). Then the length of the projection of the vector αi + βj + γk on the vector 6i + 2j + 3k is:",
    options: ["3", "15/7", "18/7", "4"],
    correctAnswer: "18/7",
    explanation: {
      quick:
        "A general point on the line is (-1 + 2λ, 3 + 3λ, 1 - λ). Let this be the foot F(α,β,γ). Since PF is perpendicular to direction vector (2,3,-1), we get [(α-5),(β-4),(γ-2)]·(2,3,-1)=0, which gives λ = 1. So F = (1,6,0). Projection length of (1,6,0) on (6,2,3) is |(1,6,0)·(6,2,3)| / √(6^2+2^2+3^2) = 18/7.",
      standard:
        "The line is:\nr = (-1,3,1) + λ(2,3,-1)\n\nSo a general point on the line is:\nF = (-1 + 2λ, 3 + 3λ, 1 - λ)\n\nThis is the foot of the perpendicular from P = (5,4,2).\nSo,\nPF = (-1 + 2λ - 5, 3 + 3λ - 4, 1 - λ - 2)\n= (2λ - 6, 3λ - 1, -λ - 1)\n\nDirection vector of the line is d = (2,3,-1).\nSince PF ⟂ d,\n(2λ - 6, 3λ - 1, -λ - 1) · (2,3,-1) = 0\n\nThis gives:\n2(2λ - 6) + 3(3λ - 1) + (-1)(-λ - 1) = 0\n=> 4λ - 12 + 9λ - 3 + λ + 1 = 0\n=> 14λ - 14 = 0\n=> λ = 1\n\nHence foot is:\nF = (1,6,0)\nSo α = 1, β = 6, γ = 0\n\nVector v = αi + βj + γk = (1,6,0)\nVector w = (6,2,3)\n\nProjection length of v on w = |v·w| / |w|\n= |1×6 + 6×2 + 0×3| / √(36+4+9)\n= 18 / 7\n\nTherefore the answer is 18/7.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the line:\n r = (-i + 3j + k) + λ(2i + 3j - k)\n\nIn coordinate form, this means the line passes through the point:\n A = (-1, 3, 1)\n\nand has direction vector:\n d = (2, 3, -1)\n\nWe also have the point:\n P = (5, 4, 2)\n\nThe foot of the perpendicular from P to the line is F(α, β, γ).\n\nStep 1: Write a general point on the line\n\nA general point on the line is:\n F = (-1 + 2λ, 3 + 3λ, 1 - λ)\n\nSo,\n α = -1 + 2λ\n β = 3 + 3λ\n γ = 1 - λ\n\nStep 2: Use perpendicular condition\n\nSince F is the foot of the perpendicular, the vector PF must be perpendicular to the direction vector d.\n\nSo first write PF:\n PF = F - P\n= (-1 + 2λ - 5, 3 + 3λ - 4, 1 - λ - 2)\n= (2λ - 6, 3λ - 1, -λ - 1)\n\nNow impose:\n PF · d = 0\n\nSo,\n (2λ - 6, 3λ - 1, -λ - 1) · (2, 3, -1) = 0\n\nCompute the dot product:\n 2(2λ - 6) + 3(3λ - 1) + (-1)(-λ - 1) = 0\n\nExpand:\n 4λ - 12 + 9λ - 3 + λ + 1 = 0\n 14λ - 14 = 0\n λ = 1\n\nStep 3: Find the coordinates of the foot\n\nPut λ = 1 into the point on the line:\n α = -1 + 2(1) = 1\n β = 3 + 3(1) = 6\n γ = 1 - 1 = 0\n\nSo the foot is:\n F = (1, 6, 0)\n\nStep 4: Form the vector whose projection is needed\n\nVector:\n v = αi + βj + γk = (1, 6, 0)\n\nThe vector on which we project is:\n w = 6i + 2j + 3k = (6, 2, 3)\n\nStep 5: Use projection formula\n\nLength of projection of v on w is:\n |v · w| / |w|\n\nFirst calculate the dot product:\n v · w = 1×6 + 6×2 + 0×3 = 6 + 12 = 18\n\nNow magnitude of w:\n |w| = √(6^2 + 2^2 + 3^2)\n= √(36 + 4 + 9)\n= √49 = 7\n\nTherefore projection length:\n = 18/7\n\nCommon mistake:\nA common mistake is to project PF instead of the vector αi + βj + γk. Another common mistake is forgetting the absolute value in projection length.\n\nTherefore, the correct answer is 18/7."
    }
  }
];

export default jeeThreeDimensionalGeometryQuestions;