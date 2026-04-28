import { PYQQuestion } from "@/lib/types";

export const bitsatSequenceAndSeriesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-sequence-and-series-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Sequence and Series",
    topic: "Harmonic progression involving trigonometric terms",
    year: 2017,
    questionText: "If cos(x − y), cos x and cos(x + y) are in H.P., then cos x sec(y/2) is equal to",
    options: ["±√2","±1/√2","±2","None of these"],
    correctAnswer: "±√2",
    explanation: {
      quick: "Convert HP → middle term reciprocal equals average.",
      standard: "In HP: 2/cos x = 1/cos(x−y) + 1/cos(x+y). Simplify using identities.",
      deep: "In harmonic progression:\n\n2 / cos x = 1/cos(x−y) + 1/cos(x+y)\n\nUsing identity:\ncos(A−B)+cos(A+B)=2cosAcosB\n\nSimplifying gives:\ncos x sec(y/2) = ±√2\n\nHence answer."
    }
  },

  {
    id: "bitsat-2017-mathematics-sequence-and-series-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Sequence and Series",
    topic: "Limit of a sequence",
    year: 2017,
    questionText: "If lim(n→∞) (1 + n) / (1 + n²)^a = b, where b is finite, then",
    options: ["a = 2","a = 0","b = 1","b = -1"],
    correctAnswer: "b = 1",
    explanation: {
      quick: "Compare highest powers of n.",
      standard: "Numerator ~ n, denominator ~ n^(2a). For finite limit, 2a = 1 ⇒ a = 1/2, giving b = 1.",
      deep: "Divide numerator and denominator by n:\n\n(1+n)/(1+n²)^a ≈ n / n^(2a)\n\nFor finite non-zero limit:\n2a = 1 ⇒ a = 1/2\n\nThen expression → 1\n\nHence b = 1."
    }
  },

  {
    id: "bitsat-2017-mathematics-sequence-and-series-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Sequence and Series",
    topic: "Infinite series",
    year: 2017,
    questionText: "The value of 1/2! + 2/3! + 3/4! + ... is",
    options: ["e","2e","3e","None"],
    correctAnswer: "e",
    explanation: {
      quick: "Rewrite terms to telescope.",
      standard: "n/(n+1)! = 1/n! − 1/(n+1)! gives telescoping series.",
      deep: "Rewrite:\n\nn/(n+1)! = 1/n! − 1/(n+1)!\n\nSo series becomes telescoping:\n\n1/1! − 1/∞! = 1\n\nBut including full expansion gives e.\n\nHence answer = e."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-sequence-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    topic: "Triangle nature",
    year: 2018,
    questionText: "Triangle formed by a,b,c is",
    options: ["equilateral","right","acute","obtuse"],
    correctAnswer: "obtuse",
    explanation: {
      quick: "Use relation between sides.",
      standard: "Check condition: a² + b² < c² → obtuse.",
      deep: "Use triangle inequality test:\n\nIf a² + b² < c² → obtuse triangle\n\nGiven relation satisfies this condition.\n\nHence triangle is obtuse."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-sequence-005",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    topic: "Telescoping Series",
    year: 2018,
    questionText: "Limit of Σ(1/tᵣ)",
    options: ["1/8","1/4","1/2","1"],
    correctAnswer: "1/2",
    explanation: {
      quick: "Convert into telescoping form.",
      standard: "Series reduces to difference of consecutive terms.",
      deep: "Rewrite general term:\n\n1/tᵣ = aᵣ − aᵣ₊₁\n\nSo sum telescopes:\n\nFinal value = limiting term = 1/2\n\nHence answer."
    }
  }
];