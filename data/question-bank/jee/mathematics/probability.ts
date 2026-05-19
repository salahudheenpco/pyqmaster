import { PYQQuestion } from "@/lib/types";

export const jeeProbabilityQuestions: PYQQuestion[] = [
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
        "Mean and variance give x = 8, y = 6. The set becomes {1,2,3,4,5,6}. Required probability = 1 - P(both selected numbers are from {4,5,6}) = 1 - 3C2/6C2 = 4/5.",
      standard:
        "Mean = 8 gives total sum = 56.\n\nSo:\n2 + 4 + 10 + x + 12 + 14 + y = 56\n=> x + y = 14\n\nVariance = 16 gives:\n[(2-8)^2 + (4-8)^2 + (10-8)^2 + (x-8)^2 + (12-8)^2 + (14-8)^2 + (y-8)^2]/7 = 16\n\nThe known square deviations add to 108, so:\n(x-8)^2 + (y-8)^2 = 4\n\nExpanding and using x + y = 14 gives:\nx^2 + y^2 = 100\n\nNow:\n(x+y)^2 = x^2 + y^2 + 2xy\n196 = 100 + 2xy\nxy = 48\n\nThus x and y are 8 and 6. Since x > y, x = 8 and y = 6.\n\nThe set becomes:\n{1,2,3,x-4,y,5} = {1,2,3,4,6,5} = {1,2,3,4,5,6}\n\nWe need the probability that the smaller selected number is less than 4.\nUse complement:\nThe smaller number is not less than 4 only when both chosen numbers are from {4,5,6}.\n\nSo:\nP(complement) = 3C2/6C2 = 3/15 = 1/5\n\nRequired probability = 1 - 1/5 = 4/5.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given 7 observations:\n2, 4, 10, x, 12, 14, y\n\nTheir mean is 8 and variance is 16. We are also told that x > y.\nAfter finding x and y, we must form the set:\n{1, 2, 3, x - 4, y, 5}\n\nThen two numbers are selected without replacement. We need the probability that the smaller of the two selected numbers is less than 4.\n\nStep 1: Use the mean condition\n\nMean = total sum / number of observations\n\nHere mean = 8 and number of observations = 7.\nSo total sum must be:\n7 × 8 = 56\n\nNow add the known terms:\n2 + 4 + 10 + 12 + 14 = 42\n\nTherefore:\n42 + x + y = 56\n\nSo:\nx + y = 14 ...(1)\n\nStep 2: Use the variance condition\n\nVariance is the average of squared deviations from the mean.\n\nGiven variance = 16, so:\n[(2-8)^2 + (4-8)^2 + (10-8)^2 + (x-8)^2 + (12-8)^2 + (14-8)^2 + (y-8)^2] / 7 = 16\n\nMultiply both sides by 7:\nSum of squared deviations = 112\n\nNow calculate known squared deviations:\n(2-8)^2 = 36\n(4-8)^2 = 16\n(10-8)^2 = 4\n(12-8)^2 = 16\n(14-8)^2 = 36\n\nTotal known squared deviations:\n36 + 16 + 4 + 16 + 36 = 108\n\nSo the remaining part is:\n(x-8)^2 + (y-8)^2 = 112 - 108 = 4\n\nStep 3: Simplify this equation\n\nExpand:\n(x-8)^2 + (y-8)^2 = 4\n\nx^2 - 16x + 64 + y^2 - 16y + 64 = 4\n\nx^2 + y^2 - 16(x+y) + 128 = 4\n\nUsing x + y = 14:\nx^2 + y^2 - 16(14) + 128 = 4\n\nx^2 + y^2 - 224 + 128 = 4\n\nx^2 + y^2 = 100 ...(2)\n\nStep 4: Find xy\n\nUse the identity:\n(x+y)^2 = x^2 + y^2 + 2xy\n\nSubstitute values:\n14^2 = 100 + 2xy\n196 = 100 + 2xy\n2xy = 96\nxy = 48\n\nSo x and y are numbers whose sum is 14 and product is 48.\n\nThey are roots of:\nt^2 - 14t + 48 = 0\n\nFactorize:\n(t - 8)(t - 6) = 0\n\nThus the two values are 8 and 6.\nSince x > y:\nx = 8, y = 6\n\nStep 5: Build the set\n\nThe set is:\n{1, 2, 3, x - 4, y, 5}\n\nSubstitute x = 8 and y = 6:\n{1, 2, 3, 8 - 4, 6, 5}\n= {1, 2, 3, 4, 6, 5}\n= {1, 2, 3, 4, 5, 6}\n\nStep 6: Understand the probability event\n\nTwo numbers are chosen without replacement.\nWe want:\nsmaller number among the two chosen numbers is less than 4.\n\nInstead of counting this directly, use the complement.\n\nThe smaller number is NOT less than 4 means:\nsmaller number ≥ 4\n\nThis can happen only when both chosen numbers are from:\n{4, 5, 6}\n\nStep 7: Count using combinations\n\nTotal ways to choose 2 numbers from 6 numbers:\n6C2 = 15\n\nWays to choose both numbers from {4,5,6}:\n3C2 = 3\n\nSo:\nP(complement) = 3/15 = 1/5\n\nTherefore:\nRequired probability = 1 - 1/5 = 4/5\n\nCommon mistakes:\n1. Forgetting to use the variance formula correctly.\n2. Not using x > y after finding x and y.\n3. Counting ordered selections even though the event depends only on the selected pair.\n4. Trying to directly count favourable cases instead of using the complement.\n\nTherefore, the correct answer is 4/5."
    }
  },
  {
    id: "jee-2026-mathematics-probability-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Random variable mean and variance",
    year: 2026,
    questionText:
      "A random variable X takes values 0, 1, 2, 3 with probabilities (2a + 1)/30, (8a - 1)/30, (4a + 1)/30, b respectively, where a, b ∈ R. Let μ and σ respectively be the mean and standard deviation of X such that σ^2 + μ^2 = 2. Then a/b is equal to:",
    options: ["12", "3", "60", "30"],
    correctAnswer: "60",
    explanation: {
      quick:
        "Since σ² + μ² = E(X²), use E(X²) = 2. Also total probability gives 14a + 30b = 29. From E(X²) = 2, a = 2. Then b = 1/30, so a/b = 60.",
      standard:
        "The probabilities are:\nP(X=0) = (2a+1)/30\nP(X=1) = (8a-1)/30\nP(X=2) = (4a+1)/30\nP(X=3) = b\n\nStep 1: Use total probability\n\nSum of probabilities = 1:\n(2a+1)/30 + (8a-1)/30 + (4a+1)/30 + b = 1\n\nCombine the fractions:\n(14a + 1)/30 + b = 1\n\nMultiply by 30:\n14a + 1 + 30b = 30\n\nSo:\n14a + 30b = 29 ...(1)\n\nStep 2: Use σ² + μ²\n\nWe know:\nVariance = σ² = E(X²) - μ²\n\nSo:\nσ² + μ² = E(X²)\n\nGiven:\nσ² + μ² = 2\n\nTherefore:\nE(X²) = 2\n\nStep 3: Calculate E(X²)\n\nE(X²) = 0²P(X=0) + 1²P(X=1) + 2²P(X=2) + 3²P(X=3)\n\n= 0 + (8a-1)/30 + 4(4a+1)/30 + 9b\n\n= (8a - 1 + 16a + 4)/30 + 9b\n\n= (24a + 3)/30 + 9b\n\nSince E(X²) = 2:\n(24a + 3)/30 + 9b = 2\n\nMultiply by 30:\n24a + 3 + 270b = 60\n\nSo:\n24a + 270b = 57 ...(2)\n\nStep 4: Solve equations\n\nEquation (1):\n14a + 30b = 29\n\nMultiply equation (1) by 9:\n126a + 270b = 261 ...(3)\n\nEquation (2):\n24a + 270b = 57\n\nSubtract (2) from (3):\n102a = 204\n\nSo:\na = 2\n\nNow use equation (1):\n14(2) + 30b = 29\n28 + 30b = 29\n30b = 1\nb = 1/30\n\nTherefore:\na/b = 2 / (1/30) = 60.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a discrete random variable X. It takes values:\n0, 1, 2, 3\n\nThe probabilities are:\nP(X = 0) = (2a + 1)/30\nP(X = 1) = (8a - 1)/30\nP(X = 2) = (4a + 1)/30\nP(X = 3) = b\n\nWe are also given that μ is the mean and σ is the standard deviation of X.\nThe condition is:\nσ² + μ² = 2\n\nWe need to find:\na/b\n\nStep 1: Use the fact that total probability is 1\n\nFor any random variable, the sum of all probabilities must be 1.\n\nSo:\n(2a + 1)/30 + (8a - 1)/30 + (4a + 1)/30 + b = 1\n\nCombine the fractions:\n[(2a + 1) + (8a - 1) + (4a + 1)]/30 + b = 1\n\nSimplify numerator:\n2a + 8a + 4a = 14a\n1 - 1 + 1 = 1\n\nSo:\n(14a + 1)/30 + b = 1\n\nMultiply by 30:\n14a + 1 + 30b = 30\n\nTherefore:\n14a + 30b = 29 ...(1)\n\nStep 2: Understand the condition σ² + μ² = 2\n\nThis is the key shortcut.\n\nFor any random variable:\nVariance = σ² = E(X²) - [E(X)]²\n\nBut μ = E(X), so:\nσ² = E(X²) - μ²\n\nNow add μ² to both sides:\nσ² + μ² = E(X²)\n\nThe question gives:\nσ² + μ² = 2\n\nTherefore:\nE(X²) = 2\n\nThis saves us from separately calculating μ and σ.\n\nStep 3: Calculate E(X²)\n\nBy definition:\nE(X²) = Σ x²P(X=x)\n\nSo:\nE(X²) = 0²P(X=0) + 1²P(X=1) + 2²P(X=2) + 3²P(X=3)\n\nSubstitute probabilities:\nE(X²) = 0² × (2a+1)/30 + 1² × (8a-1)/30 + 2² × (4a+1)/30 + 3² × b\n\nNow simplify each term:\n0² term = 0\n1² term = (8a - 1)/30\n2² term = 4(4a + 1)/30\n3² term = 9b\n\nSo:\nE(X²) = (8a - 1)/30 + (16a + 4)/30 + 9b\n\nCombine fractions:\nE(X²) = (24a + 3)/30 + 9b\n\nSince E(X²) = 2:\n(24a + 3)/30 + 9b = 2\n\nMultiply by 30:\n24a + 3 + 270b = 60\n\nSo:\n24a + 270b = 57 ...(2)\n\nStep 4: Solve the two linear equations\n\nWe have:\n14a + 30b = 29 ...(1)\n24a + 270b = 57 ...(2)\n\nTo eliminate b, multiply equation (1) by 9:\n126a + 270b = 261 ...(3)\n\nNow subtract equation (2) from equation (3):\n(126a - 24a) + (270b - 270b) = 261 - 57\n\n102a = 204\n\nSo:\na = 2\n\nStep 5: Find b\n\nSubstitute a = 2 into equation (1):\n14a + 30b = 29\n\n14(2) + 30b = 29\n28 + 30b = 29\n30b = 1\nb = 1/30\n\nStep 6: Find a/b\n\nNow:\na/b = 2 / (1/30)\n\nDividing by a fraction means multiplying by its reciprocal:\na/b = 2 × 30 = 60\n\nCommon mistakes:\n1. Calculating variance directly even though σ² + μ² = E(X²) gives a shortcut.\n2. Forgetting that all probabilities must add to 1.\n3. Mixing up a/b and b/a.\n4. Forgetting to square the values 0, 1, 2, 3 while calculating E(X²).\n\nTherefore, the correct answer is 60."
    }
  }
];

export default jeeProbabilityQuestions;