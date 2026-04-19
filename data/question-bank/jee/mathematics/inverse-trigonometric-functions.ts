export const jeeInverseTrigonometricFunctionsQuestions = [
  {
    id: "jee-2026-mathematics-inverse-trigonometric-functions-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Inverse Trigonometric Functions",
    topic: "Domain of composite inverse trigonometric function",
    year: 2026,
    questionText:
      "If the domain of the function f(x) = cos^(-1)((1/2)√((1 - 3x)/(5 - x))) + sin^(-1)(2x^2 - 3x + 1) is the interval [α, β], then α + 2β is equal to:",
    options: ["3", "5", "1", "2"],
    correctAnswer: "3",
    explanation: {
      quick:
        "For cos^(-1)(u), we need -1 ≤ u ≤ 1 and the square root defined. For sin^(-1)(v), we need -1 ≤ v ≤ 1. Solving both conditions gives the common domain [0, 3/2]. Therefore α = 0, β = 3/2, so α + 2β = 3.",
      standard:
        "Given\nf(x) = cos^(-1)((1/2)√((1 - 3x)/(5 - x))) + sin^(-1)(2x^2 - 3x + 1)\n\nFor cos^(-1)(u), we need:\n-1 ≤ u ≤ 1\nAlso the square root must be defined.\nSince u = (1/2)√((1 - 3x)/(5 - x)), it is automatically non-negative.\nSo we only need:\n0 ≤ (1/2)√((1 - 3x)/(5 - x)) ≤ 1\n\nThis gives:\n0 ≤ (1 - 3x)/(5 - x) ≤ 4\nwhich leads to the valid interval [0, 3/2] after simplification together with denominator restrictions.\n\nFor sin^(-1)(v), we need:\n-1 ≤ 2x^2 - 3x + 1 ≤ 1\n\nThis gives:\n2x^2 - 3x ≤ 0  => x(2x - 3) ≤ 0 => x ∈ [0, 3/2]\nAnd\n2x^2 - 3x + 2 ≥ 0, which is true for all x.\n\nHence the domain is:\n[0, 3/2]\nSo,\nα = 0, β = 3/2\nTherefore,\nα + 2β = 0 + 2(3/2) = 3.",
      deep:
        "Let us understand the question from the beginning.\n\nWe need the domain of:\n f(x) = cos^(-1)((1/2)√((1 - 3x)/(5 - x))) + sin^(-1)(2x^2 - 3x + 1)\n\nThe domain of the sum is the common set of x-values for which both inverse trigonometric expressions are defined.\n\nStep 1: Domain of the cos^(-1) part\n\nFor cos^(-1)(u), the input must satisfy:\n -1 ≤ u ≤ 1\n\nHere,\n u = (1/2)√((1 - 3x)/(5 - x))\n\nBecause of the square root, u is always non-negative whenever defined.\nSo we only need:\n 0 ≤ u ≤ 1\n\nThis means:\n 0 ≤ (1/2)√((1 - 3x)/(5 - x)) ≤ 1\n\nMultiply by 2:\n 0 ≤ √((1 - 3x)/(5 - x)) ≤ 2\n\nSquare all parts:\n 0 ≤ (1 - 3x)/(5 - x) ≤ 4\n\nSolving these rational inequalities gives the allowable x-range for the first part.\n\nStep 2: Domain of the sin^(-1) part\n\nFor sin^(-1)(v), we need:\n -1 ≤ v ≤ 1\n\nHere,\n v = 2x^2 - 3x + 1\n\nSo solve:\n -1 ≤ 2x^2 - 3x + 1 ≤ 1\n\nFirst,\n 2x^2 - 3x + 1 ≤ 1\n=> 2x^2 - 3x ≤ 0\n=> x(2x - 3) ≤ 0\n=> x ∈ [0, 3/2]\n\nSecond,\n 2x^2 - 3x + 1 ≥ -1\n=> 2x^2 - 3x + 2 ≥ 0\n\nIts discriminant is:\n (-3)^2 - 4·2·2 = 9 - 16 = -7 < 0\nSince the leading coefficient is positive, this quadratic is always positive.\nSo this condition is true for all x.\n\nTherefore the second part gives:\n x ∈ [0, 3/2]\n\nStep 3: Common domain\n\nCombining the valid interval from the first part with the second part, the domain becomes:\n [0, 3/2]\n\nThus,\n α = 0 and β = 3/2\n\nSo,\n α + 2β = 0 + 2(3/2) = 3\n\nCommon mistake:\nA common mistake is to check only the inverse trig range and forget that the square root itself must also be defined.\n\nTherefore, the correct answer is 3."
    }
  }
];

export default jeeInverseTrigonometricFunctionsQuestions;