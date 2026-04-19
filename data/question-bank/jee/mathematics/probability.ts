export const jeeProbabilityQuestions = [
  {
    id: "jee-2026-mathematics-probability-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Probability after determining unknown values from mean and variance",
    year: 2026,
    questionText:
      "Let the mean and variance of 7 observations 2, 4, 10, x, 12, 14, y be 8 and 16 respectively, where x > y. Two numbers are chosen from {1, 2, 3, x - 4, y, 5} one after another without replacement. Then the probability that the smaller number among the two chosen numbers is less than 4 is:",
    options: ["4/5", "3/5", "2/5", "1/3"],
    correctAnswer: "4/5",
    explanation: {
      quick:
        "Mean 8 gives x + y = 14. Variance 16 gives x² + y² = 100. So xy = 48 and with x > y, we get x = 8, y = 6. The set becomes {1,2,3,4,6,5} = {1,2,3,4,5,6}. Complement event: smaller number is at least 4, so both numbers must come from {4,5,6}. Probability = [3C2]/[6C2] = 3/15 = 1/5. Required probability = 1 - 1/5 = 4/5.",
      standard:
        "Observations are:\n2, 4, 10, x, 12, 14, y\n\nMean = 8, so total sum = 7 × 8 = 56\nHence,\n2 + 4 + 10 + 12 + 14 + x + y = 56\n=> 42 + x + y = 56\n=> x + y = 14 ...(1)\n\nVariance = 16:\n[(2-8)^2 + (4-8)^2 + (10-8)^2 + (12-8)^2 + (14-8)^2 + (x-8)^2 + (y-8)^2]/7 = 16\n\nThis gives:\n36 + 16 + 4 + 16 + 36 + (x-8)^2 + (y-8)^2 = 112\n=> (x-8)^2 + (y-8)^2 = 4\n\nExpanding and simplifying with x+y=14 gives:\nx^2 + y^2 = 100\n\nNow,\n(x+y)^2 = x^2 + y^2 + 2xy\n=> 196 = 100 + 2xy\n=> xy = 48\n\nThus x and y are roots of:\nt^2 - 14t + 48 = 0\n=> (t-8)(t-6) = 0\nSince x > y,\n x = 8, y = 6\n\nSo the set is:\n{1,2,3,x-4,y,5} = {1,2,3,4,6,5} = {1,2,3,4,5,6}\n\nWe need probability that the smaller chosen number is less than 4.\nComplement: smaller chosen number is at least 4, so both numbers are from {4,5,6}.\n\nProbability of complement = [3C2]/[6C2] = 3/15 = 1/5\nTherefore required probability = 1 - 1/5 = 4/5.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given 7 observations:\n 2, 4, 10, x, 12, 14, y\n\nTheir mean is 8 and variance is 16, with x > y.\nThen we choose two numbers from the set:\n {1, 2, 3, x-4, y, 5}\nwithout replacement.\nWe need the probability that the smaller of the two chosen numbers is less than 4.\n\nStep 1: Use the mean\n\nMean = 8\nSo total sum = 7 × 8 = 56\n\nNow add known terms:\n 2 + 4 + 10 + 12 + 14 = 42\n\nHence,\n 42 + x + y = 56\n=> x + y = 14 ...(1)\n\nStep 2: Use the variance\n\nVariance = 16 means:\n [Σ(xi - 8)^2]/7 = 16\n\nSo,\n (2-8)^2 + (4-8)^2 + (10-8)^2 + (12-8)^2 + (14-8)^2 + (x-8)^2 + (y-8)^2 = 112\n\nCompute known squares:\n 36 + 16 + 4 + 16 + 36 = 108\n\nTherefore,\n (x-8)^2 + (y-8)^2 = 112 - 108 = 4\n\nExpand:\n x^2 - 16x + 64 + y^2 - 16y + 64 = 4\n=> x^2 + y^2 - 16(x+y) + 128 = 4\n\nUsing x+y = 14:\n x^2 + y^2 - 224 + 128 = 4\n=> x^2 + y^2 = 100 ...(2)\n\nStep 3: Find xy\n\nUse:\n (x+y)^2 = x^2 + y^2 + 2xy\n\nSo,\n 14^2 = 100 + 2xy\n=> 196 = 100 + 2xy\n=> 2xy = 96\n=> xy = 48\n\nThus x and y satisfy:\n t^2 - 14t + 48 = 0\n\nFactorize:\n (t-8)(t-6) = 0\n\nSince x > y,\n x = 8, y = 6\n\nStep 4: Form the selection set\n\nGiven set:\n {1, 2, 3, x-4, y, 5}\n\nSubstitute x = 8 and y = 6:\n {1, 2, 3, 4, 6, 5}\nwhich is simply:\n {1, 2, 3, 4, 5, 6}\n\nStep 5: Required probability\n\nWe want the probability that the smaller of the two chosen numbers is less than 4.\n\nInstead of counting directly, use complement.\n\nComplement event:\n smaller number is at least 4\n\nThis can happen only if both chosen numbers are from:\n {4, 5, 6}\n\nTotal ways to choose 2 numbers from 6:\n 6C2 = 15\n\nFavourable ways for complement:\n 3C2 = 3\n\nSo complement probability:\n 3/15 = 1/5\n\nTherefore required probability:\n 1 - 1/5 = 4/5\n\nCommon mistake:\nA common mistake is to count ordered selections. Since the condition depends only on the chosen pair, combinations are easier and cleaner.\n\nTherefore, the correct answer is 4/5."
    }
  }
];

export default jeeProbabilityQuestions;