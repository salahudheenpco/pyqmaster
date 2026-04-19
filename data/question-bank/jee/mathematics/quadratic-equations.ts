export const jeeQuadraticEquationsQuestions = [
  {
    id: "jee-2026-mathematics-quadratic-equations-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    topic: "Equation involving modulus",
    year: 2026,
    questionText:
      "The sum of all the roots of the equation (x - 1)^2 - 5|x - 1| + 6 = 0 is:",
    options: ["5", "3", "4", "1"],
    correctAnswer: "4",
    explanation: {
      quick:
        "Put y = |x - 1|. Then y ≥ 0 and the equation becomes y^2 - 5y + 6 = 0, so y = 2 or 3. Hence |x - 1| = 2 gives x = 3, -1 and |x - 1| = 3 gives x = 4, -2. Sum = 3 + (-1) + 4 + (-2) = 4.",
      standard:
        "Let\ny = |x - 1|\nThen y ≥ 0.\n\nThe equation becomes:\ny^2 - 5y + 6 = 0\n=> (y - 2)(y - 3) = 0\n\nSo,\ny = 2 or y = 3\n\nCase 1:\n|x - 1| = 2\n=> x - 1 = 2 or x - 1 = -2\n=> x = 3 or x = -1\n\nCase 2:\n|x - 1| = 3\n=> x - 1 = 3 or x - 1 = -3\n=> x = 4 or x = -2\n\nThus all roots are:\n3, -1, 4, -2\n\nTheir sum is:\n3 - 1 + 4 - 2 = 4",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\n (x - 1)^2 - 5|x - 1| + 6 = 0\n\nThis equation contains a modulus, so the best approach is substitution.\n\nStep 1: Substitute the modulus term\n\nLet:\n y = |x - 1|\n\nSince modulus is always non-negative,\n y ≥ 0\n\nAlso notice that:\n (x - 1)^2 = |x - 1|^2 = y^2\n\nSo the equation becomes:\n y^2 - 5y + 6 = 0\n\nStep 2: Solve the quadratic in y\n\nFactorize:\n y^2 - 5y + 6 = (y - 2)(y - 3)\n\nSo,\n y = 2 or y = 3\n\nStep 3: Convert back to x\n\nCase 1:\n |x - 1| = 2\nThis means:\n x - 1 = 2 or x - 1 = -2\nHence,\n x = 3 or x = -1\n\nCase 2:\n |x - 1| = 3\nThis means:\n x - 1 = 3 or x - 1 = -3\nHence,\n x = 4 or x = -2\n\nSo all roots are:\n 3, -1, 4, -2\n\nStep 4: Find their sum\n\nSum = 3 + (-1) + 4 + (-2)\n= 4\n\nCommon mistake:\nMany students solve only x - 1 = 2 and x - 1 = 3, forgetting the negative cases. Every modulus equation |A| = k gives two possibilities when k > 0.\n\nTherefore, the correct answer is 4."
    }
  }
];

export default jeeQuadraticEquationsQuestions;