import { PYQQuestion } from "@/lib/types";

export const jeeApplicationOfDerivativesQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-application-of-derivatives-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Application of Derivatives",
    topic: "Monotonicity using chain rule",
    year: 2026,
    questionText:
      "Let f : R → R be a twice differentiable function such that f''(x) > 0 for all x ∈ R and f'(a - 1) = 0, where a is a real number. Let g(x) = f(tan²x - 2tanx + a), 0 < x < π/2. Consider the following two statements: (I) g is increasing in (0, π/4). (II) g is decreasing in (π/4, π/2). Then:",
    options: [
      "Only (II) is True",
      "Only (I) is True",
      "Both (I) and (II) are True",
      "Neither (I) nor (II) is True"
    ],
    correctAnswer: "Neither (I) nor (II) is True",
    explanation: {
      quick:
        "Let h(x) = tan²x - 2tanx + a = (tanx - 1)² + a - 1. Since f'' > 0 and f'(a-1)=0, f'(h(x)) > 0 except at x = π/4. Also h'(x) is negative on (0,π/4) and positive on (π/4,π/2). Thus g decreases first and increases later. Both statements are false.",

      standard:
        "Let:\nh(x) = tan²x - 2tanx + a\n\nThen:\ng(x) = f(h(x))\n\nRewrite h(x):\nh(x) = tan²x - 2tanx + a\n= (tanx - 1)² + a - 1\n\nSince (tanx - 1)² ≥ 0, we get:\nh(x) ≥ a - 1\n\nEquality occurs when:\ntanx = 1\n=> x = π/4\n\nNow given:\nf''(x) > 0 for all x\n\nThis means f'(x) is strictly increasing.\n\nAlso:\nf'(a - 1) = 0\n\nSince h(x) ≥ a - 1, and h(x) > a - 1 except at x = π/4, we get:\nf'(h(x)) > 0 for x ≠ π/4\n\nNow differentiate g(x):\ng'(x) = f'(h(x)) · h'(x)\n\nFind h'(x):\nh(x) = tan²x - 2tanx + a\n\nh'(x) = 2tanx sec²x - 2sec²x\n= 2sec²x(tanx - 1)\n\nOn (0,π/4), tanx < 1, so h'(x) < 0.\nSince f'(h(x)) > 0, we get:\ng'(x) < 0\n\nSo g is decreasing on (0,π/4), not increasing.\n\nOn (π/4,π/2), tanx > 1, so h'(x) > 0.\nSince f'(h(x)) > 0, we get:\ng'(x) > 0\n\nSo g is increasing on (π/4,π/2), not decreasing.\n\nTherefore both statements are false.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given a function f : R → R such that:\nf''(x) > 0 for all real x\n\nWe are also given:\nf'(a - 1) = 0\n\nThen another function is defined as:\ng(x) = f(tan²x - 2tanx + a)\n\nwhere:\n0 < x < π/2\n\nWe need to decide whether g is increasing or decreasing in the intervals:\n(0, π/4) and (π/4, π/2)\n\nStep 1: Understand what f''(x) > 0 means\n\nIf f''(x) > 0 for all x, then f'(x) is strictly increasing.\n\nThis is very important.\n\nIt means as the input increases, the derivative f'(x) increases continuously.\n\nWe are also told:\nf'(a - 1) = 0\n\nSince f' is strictly increasing:\n- if input is greater than a - 1, then f'(input) > 0\n- if input is less than a - 1, then f'(input) < 0\n\nStep 2: Simplify the input of f\n\nLet:\nh(x) = tan²x - 2tanx + a\n\nComplete the square:\nh(x) = tan²x - 2tanx + 1 + a - 1\n\nSo:\nh(x) = (tanx - 1)² + a - 1\n\nSince square of any real number is non-negative:\n(tanx - 1)² ≥ 0\n\nTherefore:\nh(x) ≥ a - 1\n\nEquality happens when:\ntanx - 1 = 0\n\nSo:\ntanx = 1\n\nIn the interval (0, π/2), this happens at:\nx = π/4\n\nThus:\nh(x) = a - 1 only at x = π/4\nand\nh(x) > a - 1 everywhere else in the interval.\n\nStep 3: Determine sign of f'(h(x))\n\nSince f'(a - 1) = 0 and f' is strictly increasing:\n\nFor h(x) > a - 1:\nf'(h(x)) > 0\n\nSo on both intervals (0,π/4) and (π/4,π/2), we have:\nf'(h(x)) > 0\n\nAt x = π/4, f'(h(x)) = 0, but that single point is not inside either open interval as an interior point for monotonicity checking.\n\nStep 4: Differentiate g(x)\n\nSince:\ng(x) = f(h(x))\n\nBy chain rule:\ng'(x) = f'(h(x)) · h'(x)\n\nWe already know f'(h(x)) is positive on both open intervals.\n\nSo the sign of g'(x) depends on the sign of h'(x).\n\nStep 5: Find h'(x)\n\nh(x) = tan²x - 2tanx + a\n\nDifferentiate:\nh'(x) = 2tanx · sec²x - 2sec²x\n\nTake common factor:\nh'(x) = 2sec²x(tanx - 1)\n\nNow sec²x is always positive.\n\nSo sign of h'(x) depends only on:\ntanx - 1\n\nStep 6: Analyse interval (0, π/4)\n\nFor 0 < x < π/4:\ntanx < 1\n\nSo:\ntanx - 1 < 0\n\nTherefore:\nh'(x) < 0\n\nSince f'(h(x)) > 0:\ng'(x) = positive × negative = negative\n\nSo g is decreasing on (0,π/4).\n\nBut Statement I says g is increasing on (0,π/4).\n\nTherefore Statement I is false.\n\nStep 7: Analyse interval (π/4, π/2)\n\nFor π/4 < x < π/2:\ntanx > 1\n\nSo:\ntanx - 1 > 0\n\nTherefore:\nh'(x) > 0\n\nSince f'(h(x)) > 0:\ng'(x) = positive × positive = positive\n\nSo g is increasing on (π/4,π/2).\n\nBut Statement II says g is decreasing on (π/4,π/2).\n\nTherefore Statement II is false.\n\nStep 8: Final conclusion\n\nStatement I is false.\nStatement II is false.\n\nSo the correct option is:\nNeither (I) nor (II) is True.\n\nCommon mistakes:\n1. Thinking f''(x) > 0 means f itself is increasing. Actually it means f' is increasing.\n2. Forgetting to use the chain rule while differentiating g(x).\n3. Missing the completed square form (tanx - 1)² + a - 1.\n4. Assuming g is increasing just because f'(h(x)) is positive. We must also multiply by h'(x).\n5. Forgetting that tanx - 1 changes sign at x = π/4.\n\nTherefore, the correct answer is Neither (I) nor (II) is True."
    }
  }
];

export default jeeApplicationOfDerivativesQuestions;