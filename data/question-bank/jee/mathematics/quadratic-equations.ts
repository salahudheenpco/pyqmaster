import { PYQQuestion } from "@/lib/types";

export const jeeQuadraticEquationsQuestions: PYQQuestion[] = [
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
        "Put y = |x - 1|. Then y² - 5y + 6 = 0, so y = 2 or 3. Hence x = 3, -1, 4, -2. Sum = 4.",
      standard:
        "Let y = |x - 1|.\n\nThen y ≥ 0 and:\n(x - 1)^2 = |x - 1|^2 = y²\n\nSo the equation becomes:\ny² - 5y + 6 = 0\n\nFactorize:\n(y - 2)(y - 3) = 0\n\nSo:\ny = 2 or y = 3\n\nNow convert back to x.\n\nIf |x - 1| = 2:\nx - 1 = 2 or x - 1 = -2\nSo x = 3 or x = -1\n\nIf |x - 1| = 3:\nx - 1 = 3 or x - 1 = -3\nSo x = 4 or x = -2\n\nTherefore all roots are:\n3, -1, 4, -2\n\nSum = 3 - 1 + 4 - 2 = 4.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\n(x - 1)^2 - 5|x - 1| + 6 = 0\n\nThis equation contains both (x - 1)^2 and |x - 1|. Whenever we see this kind of expression, a useful method is to substitute the modulus expression with a new variable.\n\nStep 1: Substitute the modulus term\n\nLet:\ny = |x - 1|\n\nSince modulus is always non-negative:\ny ≥ 0\n\nAlso:\n(x - 1)^2 = |x - 1|^2 = y²\n\nSo the given equation becomes:\ny² - 5y + 6 = 0\n\nStep 2: Solve the quadratic equation in y\n\nFactorize:\ny² - 5y + 6 = 0\n\nWe need two numbers whose product is 6 and sum is 5. They are 2 and 3.\n\nSo:\ny² - 5y + 6 = (y - 2)(y - 3)\n\nTherefore:\ny = 2 or y = 3\n\nBoth values are allowed because y ≥ 0.\n\nStep 3: Convert y back to x\n\nSince y = |x - 1|, we solve two cases.\n\nCase 1:\n|x - 1| = 2\n\nThis means:\nx - 1 = 2 or x - 1 = -2\n\nSo:\nx = 3 or x = -1\n\nCase 2:\n|x - 1| = 3\n\nThis means:\nx - 1 = 3 or x - 1 = -3\n\nSo:\nx = 4 or x = -2\n\nStep 4: Add all roots\n\nAll roots are:\n3, -1, 4, -2\n\nSum = 3 + (-1) + 4 + (-2)\n= 4\n\nCommon mistakes:\n1. Solving only x - 1 = 2 and x - 1 = 3, and forgetting the negative cases.\n2. Forgetting that |A| = k gives two cases when k > 0.\n3. Treating |x - 1| as x - 1 directly without checking sign.\n\nTherefore, the correct answer is 4."
    }
  },
  {
    id: "jee-2026-mathematics-quadratic-equations-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Quadratic Equations",
    topic: "Position of roots",
    year: 2026,
    questionText:
      "Let α and β be the roots of the equation x^2 + 2ax + (3a + 10) = 0 such that α < 1 < β. Then the set of all possible values of a is:",
    options: [
      "(-∞, -11/5) ∪ (5,∞)",
      "(-∞, -3)",
      "(-∞, -2) ∪ (5,∞)",
      "(-∞, -11/5)"
    ],
    correctAnswer: "(-∞, -11/5)",
    explanation: {
      quick:
        "For 1 to lie between the two roots, f(1) must be negative because the quadratic opens upward. f(1) = 1 + 2a + 3a + 10 = 5a + 11. So 5a + 11 < 0, giving a < -11/5.",
      standard:
        "The quadratic equation is:\nf(x) = x² + 2ax + (3a + 10)\n\nIts roots are α and β, and we are given:\nα < 1 < β\n\nThis means x = 1 lies strictly between the two roots.\n\nSince the coefficient of x² is positive, the parabola opens upward. For an upward-opening quadratic, the value of the function is negative between its two real roots.\n\nTherefore, for 1 to lie between the roots, we need:\nf(1) < 0\n\nNow calculate f(1):\nf(1) = 1² + 2a(1) + (3a + 10)\n= 1 + 2a + 3a + 10\n= 5a + 11\n\nSo:\n5a + 11 < 0\n\nHence:\n5a < -11\n\na < -11/5\n\nTherefore, the required set of values of a is:\n(-∞, -11/5).",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a quadratic equation:\nx² + 2ax + (3a + 10) = 0\n\nIts roots are α and β, and the condition is:\nα < 1 < β\n\nThis means the number 1 lies strictly between the two roots of the quadratic.\n\nStep 1: Understand the graph idea\n\nLet:\nf(x) = x² + 2ax + (3a + 10)\n\nThis is a quadratic function. The coefficient of x² is 1, which is positive.\n\nSo the graph of f(x) is an upward-opening parabola.\n\nFor an upward-opening parabola:\n- f(x) is positive outside the interval between the roots\n- f(x) is negative between the two roots\n\nSince 1 lies between the roots α and β, we must have:\nf(1) < 0\n\nStep 2: Substitute x = 1\n\nNow calculate f(1):\nf(1) = 1² + 2a(1) + (3a + 10)\n\nSimplify:\nf(1) = 1 + 2a + 3a + 10\n= 5a + 11\n\nStep 3: Apply the condition\n\nSince 1 lies between the roots:\nf(1) < 0\n\nSo:\n5a + 11 < 0\n\nSubtract 11 from both sides:\n5a < -11\n\nDivide by 5:\na < -11/5\n\nStep 4: Final interval\n\nTherefore, all possible values of a are:\n(-∞, -11/5)\n\nStep 5: Why this also ensures real roots\n\nIf f(1) < 0 and the parabola opens upward, the graph must cross the x-axis on both sides of x = 1. That means two real roots automatically exist, with one root less than 1 and the other root greater than 1.\n\nSo we do not need to separately solve the discriminant condition here.\n\nCommon mistakes:\n1. Only checking discriminant > 0. That only tells us roots are real, not that 1 lies between them.\n2. Forgetting that the quadratic opens upward because coefficient of x² is positive.\n3. Using f(1) > 0 instead of f(1) < 0.\n4. Choosing a < -2 or a > 5 from the discriminant condition, which is incomplete for this question.\n\nTherefore, the correct answer is (-∞, -11/5)."
    }
  }
];

export default jeeQuadraticEquationsQuestions;