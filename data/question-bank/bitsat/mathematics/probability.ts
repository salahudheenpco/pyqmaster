import { PYQQuestion } from "@/lib/types";

export const bitsatProbabilityQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-probability-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Probability of getting at least four heads in seven tosses",
    year: 2017,
    questionText: "A coin is tossed 7 times. Each time a man calls head. The probability that he wins the toss at least four times is",
    options: ["7/8", "1/8", "1/2", "5/16"],
    correctAnswer: "1/2",
    explanation: {
      quick: "Use binomial distribution and sum probabilities from 4 to 7 heads.",
      standard: "Required probability = P(X ≥ 4) = Σ from k=4 to 7 of ⁷Cₖ(1/2)⁷. Due to symmetry of binomial distribution, this equals 1/2.",
      deep: "Let X = number of heads in 7 tosses.\n\nThen:\nX ~ Binomial(n = 7, p = 1/2)\n\nWe need:\nP(X ≥ 4)\n\n= P(4) + P(5) + P(6) + P(7)\n\nUsing symmetry:\nP(X ≥ 4) = P(X ≤ 3)\n\nTotal probability = 1\nSo:\nP(X ≥ 4) = 1/2\n\nHence correct answer is 1/2."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-probability-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Binomial Distribution",
    year: 2018,
    questionText: "Find binomial distribution given mean + variance = 2.7",
    options: ["(0.2+0.8)^5", "(0.3+0.7)^5", "(0.4+0.6)^5", "None"],
    correctAnswer: "(0.3+0.7)^5",
    explanation: {
      quick: "Use mean = np and variance = npq.",
      standard: "Given np + npq = 2.7 → np(1+q) = 2.7 → solving gives p = 0.3.",
      deep: "Let X ~ Bin(n, p)\n\nMean = np\nVariance = npq\n\nGiven:\nnp + npq = 2.7\n\n⇒ np(1 + q) = 2.7\n\nBut q = 1 − p\nSo:\nnp(2 − p) = 2.7\n\nGiven n = 5 (from options), solving gives:\np = 0.3\n\nThus distribution:\n(0.3 + 0.7)^5\n\nHence correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-probability-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Independent Events",
    year: 2018,
    questionText: "If A and B are independent, P(A∩B)=1/6 and P(neither)=1/3, find P(A)",
    options: ["0 or 1", "1/2 or 1/3", "1/2 or 1/4", "1/3 or 1/4"],
    correctAnswer: "1/2 or 1/3",
    explanation: {
      quick: "Use independence and complement formula.",
      standard: "P(A∩B)=P(A)P(B)=1/6 and (1−P(A))(1−P(B))=1/3. Solving gives two possible values.",
      deep: "Let P(A)=a and P(B)=b\n\nGiven:\nab = 1/6\n\nAlso:\nP(neither) = (1−a)(1−b) = 1/3\n\nExpand:\n1 − a − b + ab = 1/3\n\nSubstitute ab = 1/6:\n1 − a − b + 1/6 = 1/3\n\nSimplify and solve system:\na = 1/2 or 1/3\n\nHence correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-probability-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Bayes Theorem",
    year: 2018,
    questionText: "Find probability that student knows answer given correct answer",
    options: ["27/29", "26/29", "25/29", "24/29"],
    correctAnswer: "26/29",
    explanation: {
      quick: "Apply Bayes theorem with conditional probabilities.",
      standard: "Use total probability for correct answer and apply Bayes formula.",
      deep: "Let events be:\nK = knows answer\nC = correct answer\n\nWe need P(K | C)\n\nUsing Bayes theorem:\nP(K|C) = P(C|K)P(K) / P(C)\n\nCompute P(C) using total probability:\nP(C) = P(C|K)P(K) + P(C|guess)P(guess)\n\nSubstitute values and simplify:\nResult = 26/29\n\nHence correct answer is 26/29."
    }
  }
];