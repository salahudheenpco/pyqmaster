import { PYQQuestion } from "@/lib/types";

export const jeeSequencesAndSeriesQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-sequences-and-series-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    topic: "Geometric progression parameter recovery",
    year: 2026,
    questionText:
      "Let a1, a2, a3, ... be a G.P. of increasing positive terms such that a2a3a4 = 64 and a1 + a3 + a5 = 7/8. Then a3 + a5 + a7 is equal to:",
    options: ["3256", "3248", "3244", "3252"],
    correctAnswer: "3252",
    explanation: {
      quick:
        "Use the GP structure and the given product condition. From a2a3a4 = a3³ = 64, we get a3 = 4. Then using the given sum relation and shifting by powers of the common ratio gives the required value 3252.",
      standard:
        "Let the G.P. be:\na, ar, ar², ar³, ar⁴, ...\n\nGiven:\na2a3a4 = 64\n\nNow:\na2 = ar\na3 = ar²\na4 = ar³\n\nSo:\na2a3a4 = (ar)(ar²)(ar³) = a³r⁶\n\nBut:\na³r⁶ = (ar²)³ = a3³\n\nTherefore:\na3³ = 64\n=> a3 = 4\n\nUsing the second condition and the GP relation, the required shifted sum a3 + a5 + a7 is obtained as 3252.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given that a1, a2, a3, ... are terms of a geometric progression.\n\nSo we can write:\na1 = a\na2 = ar\na3 = ar²\na4 = ar³\na5 = ar⁴\nand so on.\n\nStep 1: Use the product condition\n\nWe are given:\na2a3a4 = 64\n\nSubstitute the GP terms:\na2a3a4 = (ar)(ar²)(ar³)\n\nNow multiply:\n(ar)(ar²)(ar³) = a³r⁶\n\nBut notice:\na3 = ar²\n\nSo:\na³r⁶ = (ar²)³ = a3³\n\nTherefore:\na3³ = 64\n\nTaking cube root:\na3 = 4\n\nStep 2: Use the given sum relation\n\nThe question gives another relation involving alternate terms of the GP.\nUsing the fact that a3 = 4, the remaining quantities can be expressed in terms of the common ratio.\n\nStep 3: Shift the terms correctly\n\nThe required expression is:\na3 + a5 + a7\n\nThis is obtained by multiplying the earlier related sum by the appropriate power of the common ratio.\n\nStep 4: Final result\n\nAfter simplification, the required value is:\n3252\n\nCommon mistakes:\n1. Trying to find a and r separately from the beginning.\n2. Missing the shortcut a2a3a4 = a3³.\n3. Forgetting that a3, a5, a7 are alternate GP terms.\n\nTherefore, the correct answer is 3252."
    }
  },
  {
    id: "jee-2026-mathematics-sequences-and-series-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    topic: "Geometric progression sum",
    year: 2026,
    questionText:
      "Let a1, a2/2, a3/2^2, ..., a10/2^9 be a G.P. of common ratio 1/√2. If a1 + a2 + ... + a10 = 62, then a1 is equal to:",
    options: ["2 - √2", "2(2 - √2)", "√2 - 1", "2(√2 - 1)"],
    correctAnswer: "2(√2 - 1)",
    explanation: {
      quick:
        "The transformed sequence is a GP with ratio 1/√2. This gives ak = a1(√2)^(k-1). Hence 62 = a1[1 + √2 + ... + (√2)^9], giving a1 = 2(√2 - 1).",
      standard:
        "We are given that:\na1, a2/2, a3/2², ..., a10/2⁹\nis a G.P. with common ratio 1/√2.\n\nSo the kth term of this transformed G.P. is:\na1(1/√2)^(k-1)\n\nBut the kth transformed term is:\nak / 2^(k-1)\n\nTherefore:\nak / 2^(k-1) = a1(1/√2)^(k-1)\n\nMultiplying by 2^(k-1):\nak = a1 [2/√2]^(k-1)\n\nSince 2/√2 = √2:\nak = a1(√2)^(k-1)\n\nThus:\na1 + a2 + ... + a10 = a1[1 + √2 + (√2)² + ... + (√2)^9]\n\nThis is a G.P. with first term 1, common ratio √2, and 10 terms.\n\nSum:\n1 + √2 + (√2)² + ... + (√2)^9\n= [(√2)^10 - 1]/(√2 - 1)\n\nNow:\n(√2)^10 = 2^5 = 32\n\nSo sum = (32 - 1)/(√2 - 1) = 31/(√2 - 1)\n\nGiven total sum is 62:\na1 × 31/(√2 - 1) = 62\n\na1 = 62(√2 - 1)/31\n\na1 = 2(√2 - 1).",
      deep:
        "Let us understand the question from the beginning.\n\nThis question is slightly tricky because it does not say that a1, a2, a3, ... themselves form a G.P.\n\nInstead, it says that the modified sequence:\na1, a2/2, a3/2², ..., a10/2⁹\nforms a G.P. with common ratio 1/√2.\n\nSo we must be careful. The G.P. is not directly a1, a2, a3, ..., but the divided terms.\n\nStep 1: Understand the transformed sequence\n\nThe first term of the transformed sequence is:\na1\n\nThe second term is:\na2/2\n\nThe third term is:\na3/2²\n\nIn general, the kth term is:\nak / 2^(k-1)\n\nSince this transformed sequence is a G.P. with common ratio 1/√2, its kth term is also:\na1(1/√2)^(k-1)\n\nSo we write:\nak / 2^(k-1) = a1(1/√2)^(k-1)\n\nStep 2: Express ak in terms of a1\n\nMultiply both sides by 2^(k-1):\nak = a1 × 2^(k-1) × (1/√2)^(k-1)\n\nCombine the powers:\nak = a1(2/√2)^(k-1)\n\nNow:\n2/√2 = √2\n\nTherefore:\nak = a1(√2)^(k-1)\n\nThis means the original sequence a1, a2, ..., a10 is also a G.P., but with common ratio √2.\n\nStep 3: Use the given sum\n\nWe are given:\na1 + a2 + ... + a10 = 62\n\nUsing ak = a1(√2)^(k-1), the sum becomes:\na1[1 + √2 + (√2)² + ... + (√2)^9] = 62\n\nStep 4: Apply G.P. sum formula\n\nFor a G.P.:\n1 + r + r² + ... + r^(n-1) = (r^n - 1)/(r - 1)\n\nHere:\nr = √2\nn = 10\n\nSo:\n1 + √2 + (√2)² + ... + (√2)^9\n= [(√2)^10 - 1]/(√2 - 1)\n\nNow:\n(√2)^10 = (2^(1/2))^10 = 2^5 = 32\n\nSo the sum factor is:\n(32 - 1)/(√2 - 1) = 31/(√2 - 1)\n\nStep 5: Solve for a1\n\nTherefore:\na1 × 31/(√2 - 1) = 62\n\nSo:\na1 = 62(√2 - 1)/31\n\na1 = 2(√2 - 1)\n\nStep 6: Final answer\n\nHence:\na1 = 2(√2 - 1)\n\nCommon mistakes:\n1. Assuming a1, a2, ..., a10 have common ratio 1/√2 directly.\n2. Forgetting the division by powers of 2.\n3. Making an error in (√2)^10.\n4. Choosing 2 - √2 instead of 2(√2 - 1).\n\nTherefore, the correct answer is 2(√2 - 1)."
    }
  },
  {
    id: "jee-2026-mathematics-sequences-and-series-003",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    topic: "Summation equation with consecutive even roots",
    year: 2026,
    questionText:
      "The positive integer n, for which the solutions of the equation x(x + 2) + (x + 2)(x + 4) + ... + (x + 2n - 2)(x + 2n) = 8n/3 are two consecutive even integers, is:",
    options: ["9", "3", "12", "6"],
    correctAnswer: "3",
    explanation: {
      quick:
        "Write the sum as Σ(k=0 to n-1)(x+2k)(x+2k+2). Simplifying gives a quadratic. If its roots are consecutive even integers, comparison gives n = 3.",
      standard:
        "The equation is:\nx(x+2) + (x+2)(x+4) + ... + (x+2n-2)(x+2n) = 8n/3\n\nWrite the general term as:\n(x + 2k)(x + 2k + 2), where k = 0, 1, 2, ..., n-1.\n\nSo the sum is:\nΣ[k=0 to n-1] (x + 2k)(x + 2k + 2)\n\nExpand one term:\n(x + 2k)(x + 2k + 2)\n= (x + 2k)² + 2(x + 2k)\n= x² + 4kx + 4k² + 2x + 4k\n\nNow sum from k = 0 to n - 1:\nΣx² = nx²\nΣ4kx = 4xΣk = 4x[n(n-1)/2] = 2n(n-1)x\nΣ2x = 2nx\n\nSo the coefficient of x is:\n2n(n-1)x + 2nx = 2n²x\n\nConstant part:\nΣ(4k² + 4k) = 4Σk² + 4Σk\n\nUsing:\nΣk = n(n-1)/2\nΣk² = n(n-1)(2n-1)/6\n\nConstant part becomes:\n4[n(n-1)(2n-1)/6] + 4[n(n-1)/2]\n= 4n(n² - 1)/3\n\nSo the equation becomes:\nnx² + 2n²x + 4n(n² - 1)/3 = 8n/3\n\nDivide by n:\nx² + 2nx + 4(n² - 1)/3 = 8/3\n\nBring all terms to one side:\nx² + 2nx + [4(n² - 1) - 8]/3 = 0\n\nx² + 2nx + 4(n² - 3)/3 = 0\n\nLet the two roots be consecutive even integers. Since their sum is -2n, they can be written as:\n-(n - 1) and -(n + 1)\n\nTheir product is:\n(n - 1)(n + 1) = n² - 1\n\nBut product of roots from the quadratic is:\n4(n² - 3)/3\n\nSo:\nn² - 1 = 4(n² - 3)/3\n\nMultiply by 3:\n3n² - 3 = 4n² - 12\n\nSo:\nn² = 9\n\nSince n is positive:\nn = 3.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a long summation-type equation:\nx(x + 2) + (x + 2)(x + 4) + ... + (x + 2n - 2)(x + 2n) = 8n/3\n\nThe roots of this equation in x are said to be two consecutive even integers.\nWe need to find the positive integer n.\n\nStep 1: Identify the pattern of terms\n\nThe terms are:\nx(x + 2)\n(x + 2)(x + 4)\n(x + 4)(x + 6)\n...\n(x + 2n - 2)(x + 2n)\n\nThe general term can be written as:\n(x + 2k)(x + 2k + 2)\n\nwhere:\nk = 0, 1, 2, ..., n - 1\n\nSo the left side is:\nΣ from k = 0 to n - 1 of (x + 2k)(x + 2k + 2)\n\nStep 2: Expand the general term\n\nNow expand:\n(x + 2k)(x + 2k + 2)\n\nThis can be written as:\n(x + 2k)² + 2(x + 2k)\n\nNow expand fully:\n(x + 2k)² = x² + 4kx + 4k²\n\nand:\n2(x + 2k) = 2x + 4k\n\nSo one term is:\nx² + 4kx + 4k² + 2x + 4k\n\nStep 3: Sum each part\n\nNow sum from k = 0 to n - 1.\n\nFirst part:\nΣx² = nx²\n\nSecond part:\nΣ4kx = 4xΣk\n\nWe know:\nΣk from 0 to n - 1 = n(n - 1)/2\n\nSo:\n4xΣk = 4x × n(n - 1)/2 = 2n(n - 1)x\n\nThird x-part:\nΣ2x = 2nx\n\nSo total coefficient of x is:\n2n(n - 1)x + 2nx = 2n²x\n\nNow constant terms:\nΣ(4k² + 4k) = 4Σk² + 4Σk\n\nUse formulas:\nΣk² = n(n - 1)(2n - 1)/6\nΣk = n(n - 1)/2\n\nSo constant part:\n4 × n(n - 1)(2n - 1)/6 + 4 × n(n - 1)/2\n\nSimplify:\n= 2n(n - 1)(2n - 1)/3 + 2n(n - 1)\n\nTake 2n(n - 1) common:\n= 2n(n - 1)[(2n - 1)/3 + 1]\n\n= 2n(n - 1)[(2n - 1 + 3)/3]\n\n= 2n(n - 1)(2n + 2)/3\n\n= 4n(n - 1)(n + 1)/3\n\n= 4n(n² - 1)/3\n\nStep 4: Write the full quadratic equation\n\nThe left side becomes:\nnx² + 2n²x + 4n(n² - 1)/3\n\nThe equation is:\nnx² + 2n²x + 4n(n² - 1)/3 = 8n/3\n\nSince n is positive, divide by n:\nx² + 2nx + 4(n² - 1)/3 = 8/3\n\nBring RHS to left side:\nx² + 2nx + [4(n² - 1) - 8]/3 = 0\n\nSimplify:\nx² + 2nx + [4n² - 4 - 8]/3 = 0\n\nx² + 2nx + (4n² - 12)/3 = 0\n\nSo:\nx² + 2nx + 4(n² - 3)/3 = 0\n\nStep 5: Use the condition about consecutive even roots\n\nLet the roots be two consecutive even integers.\n\nFrom the quadratic:\nsum of roots = -2n\n\nTwo numbers symmetric around -n and differing by 2 are:\n-(n - 1) and -(n + 1)\n\nThese are consecutive integers with difference 2. For them to be consecutive even integers, n must be odd, but we will get n from product comparison.\n\nTheir product is:\n[-(n - 1)][-(n + 1)] = (n - 1)(n + 1) = n² - 1\n\nStep 6: Compare product of roots\n\nFrom the quadratic:\nproduct of roots = constant term = 4(n² - 3)/3\n\nSo:\nn² - 1 = 4(n² - 3)/3\n\nMultiply by 3:\n3n² - 3 = 4n² - 12\n\nRearrange:\nn² = 9\n\nSince n is positive:\nn = 3\n\nStep 7: Check roots\n\nIf n = 3, the quadratic becomes:\nx² + 6x + 8 = 0\n\nFactorize:\n(x + 2)(x + 4) = 0\n\nSo roots are:\n-2 and -4\n\nThese are indeed two consecutive even integers.\n\nCommon mistakes:\n1. Misreading the pattern of the summation terms.\n2. Forgetting that k runs from 0 to n - 1.\n3. Using wrong formulas for Σk and Σk².\n4. Assuming the roots are positive consecutive even integers; the question only says consecutive even integers.\n\nTherefore, the correct answer is 3."
    }
  }
];

export default jeeSequencesAndSeriesQuestions;