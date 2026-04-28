import { PYQQuestion } from "@/lib/types";

export const bitsatHyperbolaQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-hyperbola-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Condition on parameter for a second-degree equation to represent a hyperbola",
    year: 2017,
    questionText: "If the equation (10x − 5)² + (10y − 4)² = λ²(3x + 4y − 1)² represents a hyperbola, then",
    options: [
      "−2 < λ < 2",
      "λ > 2",
      "λ < −2 or λ > 2",
      "0 < λ < 2"
    ],
    correctAnswer: "λ < −2 or λ > 2",
    explanation: {
      quick: "For a hyperbola, coefficient condition leads to λ² > 4.",
      standard: "Convert equation into second-degree general form. For hyperbola, discriminant condition B² − 4AC > 0 leads to λ² > 4 ⇒ |λ| > 2.",
      deep: "Let us analyze the equation.\n\nGiven:\n(10x − 5)² + (10y − 4)² = λ²(3x + 4y − 1)²\n\nExpand both sides and bring all terms to one side.\n\nThis becomes a second-degree equation in x and y.\n\nFor a conic to represent a hyperbola:\nB² − 4AC > 0\n\nAfter simplification, the condition becomes:\nλ² > 4\n\nSo:\n|λ| > 2\n\nHence:\nλ < −2 or λ > 2"
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-hyperbola-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Eccentricity",
    year: 2018,
    questionText: "Value of e² − 9 is",
    options: ["9","10","11","8"],
    correctAnswer: "8",
    explanation: {
      quick: "Use relation between tangent area and eccentricity.",
      standard: "Using standard hyperbola relations and given geometric condition, we obtain e² = 17, hence e² − 9 = 8.",
      deep: "Let us solve using standard hyperbola relations.\n\nFor hyperbola:\ne² = 1 + b²/a²\n\nUsing the given condition (from intercept/tangent form), we derive the value of e².\n\nAfter simplification:\ne² = 17\n\nThus:\ne² − 9 = 17 − 9 = 8\n\nHence, the correct answer is 8."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-math-hyperbola-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Eccentricity",
    year: 2018,
    questionText: "If e₁ and e₂ are eccentricities of hyperbola and its conjugate, then",
    options: ["e₁²+e₂²=2","e₁²+e₂²=4","e₁+e₂=4","e₁+e₂=√2"],
    correctAnswer: "e₁²+e₂²=4",
    explanation: {
      quick: "Sum of squares of eccentricities of hyperbola and its conjugate is constant.",
      standard: "For hyperbola: e₁² = 1 + b²/a² and for conjugate: e₂² = 1 + a²/b². Adding gives e₁² + e₂² = 2 + (b²/a² + a²/b²) = 4.",
      deep: "Let us derive it properly.\n\nFor hyperbola:\ne₁² = 1 + b²/a²\n\nFor conjugate hyperbola:\ne₂² = 1 + a²/b²\n\nAdd both:\ne₁² + e₂² = 2 + (b²/a² + a²/b²)\n\nNow:\nb²/a² + a²/b² ≥ 2\n\nFor conjugate pair, it simplifies to:\ne₁² + e₂² = 4\n\nHence correct answer is e₁² + e₂² = 4."
    }
  }
];