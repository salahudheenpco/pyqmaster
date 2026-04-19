export const jeeBinomialTheoremQuestions = [
  {
    id: "jee-2026-mathematics-binomial-theorem-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Binomial Theorem",
    topic: "Coefficient comparison in expansion",
    year: 2026,
    questionText:
      "If the coefficient of x in the expansion of (ax^2 + bx + c)(1 - 2x)^26 is -56 and the coefficients of x^2 and x^3 are both zero, then a + b + c is equal to:",
    options: ["1300", "1500", "1403", "1483"],
    correctAnswer: "1403",
    explanation: {
      quick:
        "Expand (1 - 2x)^26 up to x^3 terms: 1 - 52x + 1300x^2 - 20800x^3 + ... Then compare coefficients after multiplying by (ax^2 + bx + c). Solving the system gives c = 3, b = 100, a = 1300, so a + b + c = 1403.",
      standard:
        "We need coefficient comparison.\n\nFirst expand:\n(1 - 2x)^26 = 1 - 52x + 1300x^2 - 20800x^3 + ...\n\nNow multiply by (ax^2 + bx + c).\n\nCoefficient of x:\nFrom b·1 and c·(-52x), so\nb - 52c = -56 ...(1)\n\nCoefficient of x^2:\nFrom a·1, b·(-52x), c·(1300x^2), so\na - 52b + 1300c = 0 ...(2)\n\nCoefficient of x^3:\nFrom a·(-52x), b·(1300x^2), c·(-20800x^3), so\n-52a + 1300b - 20800c = 0 ...(3)\n\nFrom (1):\nb = 52c - 56\n\nSubstitute into (2):\na - 52(52c - 56) + 1300c = 0\na = 1404c - 2912\n\nSubstitute both into (3):\n-52(1404c - 2912) + 1300(52c - 56) - 20800c = 0\nSolving gives c = 3\n\nThen\nb = 52(3) - 56 = 100\na = 1404(3) - 2912 = 1300\n\nTherefore,\na + b + c = 1300 + 100 + 3 = 1403.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the expression:\n(ax^2 + bx + c)(1 - 2x)^26\n\nWe know three conditions:\n1. Coefficient of x is -56\n2. Coefficient of x^2 is 0\n3. Coefficient of x^3 is 0\n\nOur aim is to find a, b, c and then calculate a + b + c.\n\nStep 1: Expand (1 - 2x)^26 only up to the terms we need.\n\nBecause we only need coefficients up to x^3, we do not need the full expansion.\nUsing binomial theorem:\n(1 - 2x)^26 = 1 + 26(-2x) + C(26,2)(-2x)^2 + C(26,3)(-2x)^3 + ...\n\nNow calculate each term:\nConstant term = 1\nCoefficient of x = 26(-2) = -52\nCoefficient of x^2 = C(26,2) * 4 = 325 * 4 = 1300\nCoefficient of x^3 = C(26,3) * (-8) = 2600 * (-8) = -20800\n\nSo,\n(1 - 2x)^26 = 1 - 52x + 1300x^2 - 20800x^3 + ...\n\nStep 2: Multiply by (ax^2 + bx + c).\n\nSo we have:\n(ax^2 + bx + c)(1 - 52x + 1300x^2 - 20800x^3 + ...)\n\nNow compare coefficients carefully.\n\nStep 3: Coefficient of x\n\nTo get x, only two products matter:\n- b times 1 gives bx\n- c times (-52x) gives -52cx\n\nSo coefficient of x is:\nb - 52c\n\nGiven this is -56, we get:\nb - 52c = -56 ...(1)\n\nStep 4: Coefficient of x^2\n\nTo get x^2, the contributing terms are:\n- a times 1 gives ax^2\n- b times (-52x) gives -52bx^2\n- c times 1300x^2 gives 1300cx^2\n\nSo coefficient of x^2 is:\na - 52b + 1300c\n\nGiven this coefficient is 0:\na - 52b + 1300c = 0 ...(2)\n\nStep 5: Coefficient of x^3\n\nTo get x^3, the contributing terms are:\n- a times (-52x) gives -52ax^3\n- b times 1300x^2 gives 1300bx^3\n- c times (-20800x^3) gives -20800cx^3\n\nSo coefficient of x^3 is:\n-52a + 1300b - 20800c\n\nGiven this is 0:\n-52a + 1300b - 20800c = 0 ...(3)\n\nStep 6: Solve the equations\n\nFrom equation (1):\nb = 52c - 56\n\nPut this into equation (2):\na - 52(52c - 56) + 1300c = 0\na - 2704c + 2912 + 1300c = 0\na - 1404c + 2912 = 0\na = 1404c - 2912\n\nNow put both b and a into equation (3):\n-52(1404c - 2912) + 1300(52c - 56) - 20800c = 0\n\nExpand:\n-73008c + 151424 + 67600c - 72800 - 20800c = 0\n\nCombine like terms:\n(-73008 + 67600 - 20800)c + (151424 - 72800) = 0\n-26208c + 78624 = 0\n26208c = 78624\nc = 3\n\nNow find b:\nb = 52(3) - 56 = 156 - 56 = 100\n\nNow find a:\na = 1404(3) - 2912 = 4212 - 2912 = 1300\n\nStep 7: Find a + b + c\n\na + b + c = 1300 + 100 + 3 = 1403\n\nCommon mistake:\nA common mistake is to stop after reading the answer key and assume 1500, but direct coefficient comparison gives 1403. Another common mistake is using the wrong coefficient of x^3 in (1 - 2x)^26.\n\nTherefore, the correct answer is 1403."
    }
  }
];

export default jeeBinomialTheoremQuestions;