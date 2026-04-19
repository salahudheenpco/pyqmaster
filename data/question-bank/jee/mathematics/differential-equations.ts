export const jeeDifferentialEquationsQuestions = [
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
    correctAnswer: "e^(π/4)/2 + π/4 - 1",
    explanation: {
      quick:
        "Rewrite as dy/dx + y/(1+x^2) = tan^(-1)x/(1+x^2). This is linear. Integrating factor is e^(∫dx/(1+x^2)) = e^(tan^(-1)x). Solving and using y(0)=1 gives y = tan^(-1)x - 1 + 2e^(-tan^(-1)x). Hence y(1) = π/4 - 1 + 2e^(-π/4).",
      standard:
        "Given:\n(1 + x^2)dy + (y - tan^(-1)x)dx = 0\n\nRewrite:\n(1 + x^2)dy/dx + y - tan^(-1)x = 0\n=> dy/dx + y/(1 + x^2) = tan^(-1)x/(1 + x^2)\n\nThis is a linear differential equation.\nSo,\nP(x) = 1/(1+x^2)\n\nIntegrating factor:\nI.F. = e^(∫dx/(1+x^2)) = e^(tan^(-1)x)\n\nTherefore,\ny e^(tan^(-1)x) = ∫ e^(tan^(-1)x) · tan^(-1)x/(1+x^2) dx + C\n\nPut t = tan^(-1)x, so dt = dx/(1+x^2)\nThen:\n∫ t e^t dt = e^t(t - 1) + C\n\nHence,\ny e^(tan^(-1)x) = e^(tan^(-1)x)(tan^(-1)x - 1) + C\n\nSo,\ny = tan^(-1)x - 1 + Ce^(-tan^(-1)x)\n\nUsing y(0) = 1:\n1 = 0 - 1 + C => C = 2\n\nThus,\ny = tan^(-1)x - 1 + 2e^(-tan^(-1)x)\n\nAt x = 1:\ny(1) = π/4 - 1 + 2e^(-π/4).",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\n (1 + x^2)dy + (y - tan^(-1)x)dx = 0\nwith initial condition:\n y(0) = 1\n\nWe need to find y(1).\n\nStep 1: Convert into standard linear form\n\nDivide the whole equation by dx:\n (1 + x^2)dy/dx + y - tan^(-1)x = 0\n\nRearrange:\n dy/dx + y/(1+x^2) = tan^(-1)x/(1+x^2)\n\nThis is of the standard form:\n dy/dx + P(x)y = Q(x)\n\nwhere:\n P(x) = 1/(1+x^2)\n Q(x) = tan^(-1)x/(1+x^2)\n\nStep 2: Find the integrating factor\n\nIntegrating factor is:\n I.F. = e^(∫P(x)dx)\n= e^(∫dx/(1+x^2))\n= e^(tan^(-1)x)\n\nStep 3: Multiply the equation by the integrating factor\n\nThen the left side becomes a product derivative:\n d/dx [y e^(tan^(-1)x)] = e^(tan^(-1)x) · tan^(-1)x/(1+x^2)\n\nSo,\n y e^(tan^(-1)x) = ∫ e^(tan^(-1)x) · tan^(-1)x/(1+x^2) dx + C\n\nStep 4: Substitute t = tan^(-1)x\n\nLet:\n t = tan^(-1)x\nThen:\n dt = dx/(1+x^2)\n\nSo the integral becomes:\n ∫ t e^t dt\n\nThis is a standard integration by parts result:\n ∫ t e^t dt = e^t(t - 1) + C\n\nTherefore,\n y e^(tan^(-1)x) = e^(tan^(-1)x)(tan^(-1)x - 1) + C\n\nDivide both sides by e^(tan^(-1)x):\n y = tan^(-1)x - 1 + Ce^(-tan^(-1)x)\n\nStep 5: Use the initial condition\n\nGiven y(0) = 1.\nNow tan^(-1)0 = 0, so:\n 1 = 0 - 1 + C\n=> C = 2\n\nHence,\n y = tan^(-1)x - 1 + 2e^(-tan^(-1)x)\n\nStep 6: Find y(1)\n\nSince tan^(-1)1 = π/4,\n y(1) = π/4 - 1 + 2e^(-π/4)\n\nCommon mistake:\nA common mistake is forgetting that dx/(1+x^2) becomes dt after putting t = tan^(-1)x. Another common mistake is using the integrating factor incorrectly.\n\nTherefore, the correct answer is π/4 - 1 + 2e^(-π/4)."
    }
  }
];

export default jeeDifferentialEquationsQuestions;