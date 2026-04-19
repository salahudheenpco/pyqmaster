export const jeeDefiniteIntegralsQuestions = [
  {
    id: "jee-2026-mathematics-definite-integrals-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Definite Integrals",
    topic: "Modulus with trigonometric definite integral",
    year: 2026,
    questionText:
      "The value of ∫ from -π/6 to π/6 of [π / {1 - sin(|x| + π/6)}] dx is equal to:",
    options: ["8π", "2π", "6π", "4π"],
    correctAnswer: "4π",
    explanation: {
      quick:
        "Use symmetry because |x| makes the denominator even. So the integral becomes 2π∫ from 0 to π/6 [1 / {1 - sin(x + π/6)}] dx. Put u = x + π/6, so limits become π/6 to π/3. Rationalizing gives 1/(1 - sin u) = (1 + sin u)/cos²u = sec²u + sec u tan u. Integrating gives tan u + sec u. Evaluating from π/6 to π/3 gives 2, hence the value is 2π × 2 = 4π.",
      standard:
        "Let\nI = ∫[-π/6 to π/6] π / [1 - sin(|x| + π/6)] dx\n\nSince the denominator contains |x|, the function\nf(x) = 1 / [1 - sin(|x| + π/6)]\nis even.\n\nTherefore,\nI = π ∫[-π/6 to π/6] f(x) dx = 2π ∫[0 to π/6] 1 / [1 - sin(x + π/6)] dx\n\nNow put:\nu = x + π/6\nThen du = dx\nWhen x = 0, u = π/6\nWhen x = π/6, u = π/3\n\nSo,\nI = 2π ∫[π/6 to π/3] 1 / (1 - sin u) du\n\nRationalize:\n1 / (1 - sin u) = (1 + sin u) / (1 - sin²u)\n= (1 + sin u) / cos²u\n= sec²u + sec u tan u\n\nHence,\nI = 2π ∫[π/6 to π/3] (sec²u + sec u tan u) du\n= 2π [tan u + sec u] from π/6 to π/3\n\nNow,\nat u = π/3: tan u + sec u = √3 + 2\nat u = π/6: tan u + sec u = 1/√3 + 2/√3 = √3\n\nDifference = (√3 + 2) - √3 = 2\n\nTherefore,\nI = 2π × 2 = 4π.",
      deep:
        "Let us understand the question from the beginning.\n\nWe need to evaluate:\nI = ∫ from -π/6 to π/6 [π / {1 - sin(|x| + π/6)}] dx\n\nAt first glance, the modulus inside sine may look messy, but the key idea is symmetry.\n\nStep 1: Identify symmetry\n\nLook at the function:\nf(x) = π / [1 - sin(|x| + π/6)]\n\nBecause of |x|, we have:\n|−x| = |x|\n\nSo,\nf(−x) = π / [1 - sin(|−x| + π/6)] = π / [1 - sin(|x| + π/6)] = f(x)\n\nThat means the integrand is an even function.\n\nFor an even function,\n∫ from -a to a f(x) dx = 2∫ from 0 to a f(x) dx\n\nSo,\nI = 2π ∫ from 0 to π/6 [1 / {1 - sin(x + π/6)}] dx\n\nStep 2: Use substitution\n\nLet:\nu = x + π/6\nThen,\ndu = dx\n\nNow change limits:\nWhen x = 0, u = π/6\nWhen x = π/6, u = π/3\n\nSo the integral becomes:\nI = 2π ∫ from π/6 to π/3 [1 / (1 - sin u)] du\n\nStep 3: Simplify the integrand\n\nThe standard trick is to rationalize the denominator:\n1 / (1 - sin u)\n\nMultiply numerator and denominator by (1 + sin u):\n1 / (1 - sin u) = (1 + sin u) / [(1 - sin u)(1 + sin u)]\n\nNow use:\n1 - sin²u = cos²u\n\nSo,\n1 / (1 - sin u) = (1 + sin u) / cos²u\n= 1/cos²u + sin u/cos²u\n= sec²u + sec u tan u\n\nStep 4: Integrate\n\nTherefore,\nI = 2π ∫ from π/6 to π/3 (sec²u + sec u tan u) du\n\nNow use standard integrals:\n∫ sec²u du = tan u\n∫ sec u tan u du = sec u\n\nSo,\nI = 2π [tan u + sec u] from π/6 to π/3\n\nStep 5: Evaluate at the limits\n\nAt u = π/3:\ntan(π/3) = √3\nsec(π/3) = 2\nSo,\ntan(π/3) + sec(π/3) = √3 + 2\n\nAt u = π/6:\ntan(π/6) = 1/√3\nsec(π/6) = 2/√3\nSo,\ntan(π/6) + sec(π/6) = 1/√3 + 2/√3 = 3/√3 = √3\n\nNow subtract:\n(√3 + 2) - √3 = 2\n\nThus,\nI = 2π × 2 = 4π\n\nCommon mistake:\nA very common mistake is forgetting that the entire integrand is even and trying to split the modulus into two cases from -π/6 to 0 and 0 to π/6. That works too, but it becomes longer. Another mistake is rationalizing incorrectly and missing that (1 - sin²u) becomes cos²u.\n\nTherefore, the correct answer is 4π."
    }
  }
];

export default jeeDefiniteIntegralsQuestions;