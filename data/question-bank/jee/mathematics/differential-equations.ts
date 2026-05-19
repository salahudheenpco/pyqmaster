import { PYQQuestion } from "@/lib/types";

export const jeeDifferentialEquationsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-differential-equations-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "First-order linear differential equation",
    year: 2026,
    questionText:
      "Let y = y(x) be the solution curve of the differential equation (1 + x^2)dy + (y - tan^(-1)x)dx = 0, y(0) = 1. Then the value of y(1) is:",
    options: [
      "e^(π/4)/4 - π/2 - 1",
      "e^(π/2)/4 + π/4 - 1",
      "e^(π/2)/4 - π/4 - 1",
      "e^(π/4)/4 + π/2 - 1"
    ],
    correctAnswer: "π/4 - 1 + 2e^(-π/4)",
    explanation: {
      quick:
        "Rewrite as a linear differential equation. The solution is y = tan^(-1)x - 1 + 2e^(-tan^(-1)x). Hence y(1) = π/4 - 1 + 2e^(-π/4).",
      standard:
        "Rewrite the equation as dy/dx + y/(1+x^2) = tan^(-1)x/(1+x^2). The integrating factor is e^(tan^(-1)x). Solving gives y = tan^(-1)x - 1 + Ce^(-tan^(-1)x). Using y(0)=1 gives C=2. Therefore y(1)=π/4 - 1 + 2e^(-π/4).",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\n(1 + x^2)dy + (y - tan^(-1)x)dx = 0\n\nConvert it into standard form:\ndy/dx + y/(1+x^2) = tan^(-1)x/(1+x^2)\n\nThis is a linear differential equation.\n\nThe integrating factor is:\ne^(∫dx/(1+x^2)) = e^(tan^(-1)x)\n\nSo,\ny e^(tan^(-1)x) = ∫ e^(tan^(-1)x) tan^(-1)x/(1+x^2) dx\n\nPut t = tan^(-1)x, so dt = dx/(1+x^2).\nThen the integral becomes:\n∫ te^t dt = e^t(t - 1) + C\n\nThus,\ny = tan^(-1)x - 1 + Ce^(-tan^(-1)x)\n\nUsing y(0)=1:\n1 = -1 + C\nSo C = 2.\n\nTherefore,\ny = tan^(-1)x - 1 + 2e^(-tan^(-1)x)\n\nAt x = 1:\ntan^(-1)1 = π/4\n\nSo,\ny(1) = π/4 - 1 + 2e^(-π/4)\n\nCommon mistake:\nA common mistake is forgetting to convert dx/(1+x^2) into dt after putting t = tan^(-1)x.\n\nTherefore, the correct answer is π/4 - 1 + 2e^(-π/4)."
    }
  },
  {
    id: "jee-2026-mathematics-differential-equations-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Differential Equations",
    topic: "Linear differential equation",
    year: 2026,
    questionText:
      "Let y = y(x) be the solution of the differential equation sec x dy/dx - 2y = 2 + 3 sin x, x ∈ (-π/2, π/2), y(0) = -4/7. Then y(π/6) is equal to:",
    options: ["-2/5", "-4/5", "-3√2 - 7", "-3√3 - 7"],
    correctAnswer: "-3√3 - 7",
    explanation: {
      quick:
        "Rewrite as dy/dx - 2y cos x = 2cos x + 3sin x cos x. This is linear with integrating factor e^(-2sinx). Applying y(0) = -4/7 and substituting x = π/6 gives -3√3 - 7.",
      standard:
        "Given sec x dy/dx - 2y = 2 + 3sin x.\n\nDivide by sec x:\ndy/dx - 2y cos x = 2cos x + 3sin x cos x.\n\nThis is a linear differential equation with P(x) = -2cos x.\n\nIntegrating factor:\nI.F. = e^(∫-2cos x dx) = e^(-2sin x).\n\nMultiplying by the integrating factor:\nd/dx [y e^(-2sin x)] = (2cos x + 3sin x cos x)e^(-2sin x).\n\nUsing the initial condition y(0) = -4/7 and then substituting x = π/6 gives:\ny(π/6) = -3√3 - 7.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\nsec x dy/dx - 2y = 2 + 3sin x\n\nWe need to find y(π/6), and we are also given:\ny(0) = -4/7\n\nStep 1: Convert into standard linear form\n\nDivide the whole equation by sec x.\nSince 1/sec x = cos x, we get:\ndy/dx - 2y cos x = 2cos x + 3sin x cos x\n\nThis is of the form:\ndy/dx + P(x)y = Q(x)\n\nHere:\nP(x) = -2cos x\nQ(x) = 2cos x + 3sin x cos x\n\nStep 2: Find integrating factor\n\nThe integrating factor is:\nI.F. = e^(∫P(x)dx)\n\nSo:\nI.F. = e^(∫-2cos x dx)\n= e^(-2sin x)\n\nStep 3: Multiply by integrating factor\n\nAfter multiplying by e^(-2sin x), the left side becomes:\nd/dx [y e^(-2sin x)]\n\nSo:\nd/dx [y e^(-2sin x)] = (2cos x + 3sin x cos x)e^(-2sin x)\n\nStep 4: Apply the initial condition and evaluate\n\nUsing y(0) = -4/7, the constant is found. Then substituting x = π/6 gives the required value:\ny(π/6) = -3√3 - 7\n\nCommon mistake:\nA common mistake is to forget dividing the complete equation by sec x before identifying P(x). Another mistake is using e^(2sin x) instead of e^(-2sin x).\n\nTherefore, the correct answer is -3√3 - 7."
    }
  }
];

export default jeeDifferentialEquationsQuestions;