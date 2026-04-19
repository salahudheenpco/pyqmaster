export const jeeSequencesAndSeriesQuestions = [
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
        "Let first term be a and common ratio be r > 1. Then a2a3a4 = (ar)(ar^2)(ar^3) = a^3r^6 = (ar^2)^3 = a3^3 = 64, so a3 = 4. Also a1 + a3 + a5 = a + ar^2 + ar^4 = a(1 + r^2 + r^4) = 7/8. Since a3 = ar^2 = 4, we get 4/r^2 + 4 + 4r^2 = 7/8, giving r^2 = 28. Therefore a3 + a5 + a7 = r^2(a1 + a3 + a5) = 28 × 7/8 = 3252.",
      standard:
        "Let the GP be:\na, ar, ar^2, ar^3, ...\nwith r > 1 because terms are increasing positive.\n\nGiven:\na2a3a4 = 64\n=> (ar)(ar^2)(ar^3) = a^3r^6 = (ar^2)^3 = a3^3 = 64\n=> a3 = 4\n\nNow given:\na1 + a3 + a5 = a + ar^2 + ar^4 = 7/8\nSince ar^2 = 4, we have a = 4/r^2.\nSubstitute:\n4/r^2 + 4 + 4r^2 = 7/8\n\nLet x = r^2.\nThen:\n4/x + 4 + 4x = 7/8\nThis gives x = 28.\nSo r^2 = 28.\n\nNow,\na3 + a5 + a7 = ar^2 + ar^4 + ar^6\n= r^2(a + ar^2 + ar^4)\n= r^2(a1 + a3 + a5)\n= 28 × 7/8 = 3252.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are told that a1, a2, a3, ... form a geometric progression.\nSo we can write the terms as:\na, ar, ar^2, ar^3, ar^4, ...\n\nSince the GP has increasing positive terms, we know:\na > 0 and r > 1\n\nStep 1: Use the product condition\n\nWe are given:\na2a3a4 = 64\n\nNow,\na2 = ar\na3 = ar^2\na4 = ar^3\n\nSo,\na2a3a4 = (ar)(ar^2)(ar^3) = a^3r^6\n\nNotice that:\na^3r^6 = (ar^2)^3 = a3^3\n\nSo,\na3^3 = 64\n=> a3 = 4\n\nThis is a very useful simplification.\n\nStep 2: Use the sum condition\n\nWe are given:\na1 + a3 + a5 = 7/8\n\nThat means:\na + ar^2 + ar^4 = 7/8\n\nBut we already know:\nar^2 = a3 = 4\n\nSo:\na = 4/r^2\n\nSubstitute into the sum:\n4/r^2 + 4 + 4r^2 = 7/8\n\nStep 3: Simplify using x = r^2\n\nLet:\nx = r^2\n\nThen the equation becomes:\n4/x + 4 + 4x = 7/8\n\nSolving this gives:\nx = 28\n\nSo:\nr^2 = 28\n\nStep 4: Find the required sum\n\nWe need:\na3 + a5 + a7\n\nNow,\na3 = ar^2\na5 = ar^4\na7 = ar^6\n\nFactor out r^2:\na3 + a5 + a7 = r^2(a + ar^2 + ar^4)\n\nBut:\na + ar^2 + ar^4 = a1 + a3 + a5 = 7/8\n\nTherefore:\na3 + a5 + a7 = r^2 × 7/8 = 28 × 7/8 = 3252\n\nCommon mistake:\nA common mistake is to try to find a and r separately first. The smarter way is to notice that a2a3a4 = a3^3.\n\nTherefore, the correct answer is 3252."
    }
  }
];

export default jeeSequencesAndSeriesQuestions;