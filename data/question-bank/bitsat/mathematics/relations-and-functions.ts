import { PYQQuestion } from "@/lib/types";

export const bitsatRelationsAndFunctionsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-relations-and-functions-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Relation Properties",
    year: 2017,
    questionText: "Let A = {1,2,3,4,5} and R={(x,y):x+y=5}. Then R is",
    options: [
      "reflexive and symmetric but not transitive",
      "equivalence relation",
      "neither reflexive nor transitive",
      "neither reflexive nor symmetric but transitive"
    ],
    correctAnswer: "neither reflexive nor transitive",
    explanation: {
      quick: "Check reflexive, symmetric, transitive conditions.",
      standard: "Pairs are (1,4),(4,1),(2,3),(3,2). Not reflexive, symmetric yes, not transitive.",
      deep: "Reflexive: (x,x) not present → not reflexive\nSymmetric: (x,y) ⇒ (y,x) present → symmetric\nTransitive: fails → not transitive\n\nHence answer."
    }
  },

  {
    id: "bitsat-2017-mathematics-relations-and-functions-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Set Equality",
    year: 2017,
    questionText: "If A∩X=B∩X=φ and A∪X=B∪X then",
    options: ["A=B","A=X","B=X","A∪B=X"],
    correctAnswer: "A=B",
    explanation: {
      quick: "Use union and intersection properties.",
      standard: "Given same union and disjoint with X → A=B.",
      deep: "Since both have same union with X and both disjoint from X, they must be equal.\n\nHence A=B."
    }
  },

  {
    id: "bitsat-2017-mathematics-relations-and-functions-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Function Nature",
    year: 2017,
    questionText: "f(x)=x|x| on [-1,1] is",
    options: [
      "many one and into",
      "one-many and into",
      "many-one and into",
      "one-one and onto"
    ],
    correctAnswer: "one-one and onto",
    explanation: {
      quick: "Check monotonic nature.",
      standard: "Function strictly increasing → one-one and onto.",
      deep: "f(x)=x|x| is increasing on [-1,1]\n\nRange = [-1,1]\n\nHence one-one and onto."
    }
  },

  {
    id: "bitsat-2017-mathematics-relations-and-functions-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Functional Equation",
    year: 2017,
    questionText: "If f(1)=2 and f(p+q)=f(p)f(q), find value",
    options: ["0","1","2","3"],
    correctAnswer: "2",
    explanation: {
      quick: "Use exponential form.",
      standard: "f(x)=2^x → substitute → answer 2.",
      deep: "f(p+q)=f(p)f(q) ⇒ exponential\nf(x)=2^x\n\nSubstitute → result = 2."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-math-functions-005",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Functions",
    topic: "Orthogonal Matrix",
    year: 2018,
    questionText: "If PᵀP=I and abc=1, find a³+b³+c³",
    options: ["2","1","0","5"],
    correctAnswer: "2",
    explanation: {
      quick: "Use orthogonal matrix determinant property.",
      standard: "Determinant ±1 gives required relation.",
      deep: "For orthogonal matrix:\nPᵀP=I\n⇒ determinant ±1\n\nUsing abc=1 and properties → result = 2."
    }
  },

  {
    id: "bitsat-2018-math-functions-006",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Mathematical Logic",
    topic: "Tautology",
    year: 2018,
    questionText: "Which is tautology?",
    options: ["(p∧q)∨¬p","(q∧p)∨(p∧¬p)","Both","None"],
    correctAnswer: "Both",
    explanation: {
      quick: "Check truth table.",
      standard: "Both expressions always true.",
      deep: "Evaluate all combinations → both always true.\n\nHence answer."
    }
  },

  {
    id: "bitsat-2018-math-functions-007",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Functions",
    topic: "Inverse Function",
    year: 2018,
    questionText: "Inverse of logₐ(x+√(x²+1)) is",
    options: ["1/2(a^x−a^-x)","not defined","x>0","None"],
    correctAnswer: "1/2(a^x−a^-x)",
    explanation: {
      quick: "Solve y=log equation.",
      standard: "Exponentiate and simplify.",
      deep: "y=logₐ(x+√(x²+1))\n\nSolve for x:\nx = (a^y − a^-y)/2\n\nHence answer."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-math-functions-008",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Functions",
    topic: "Functional Equation",
    year: 2018,
    questionText: "Find f(x) given f(x+y)=f(x)+2y²+kxy",
    options: ["2x²","6x−4","x²+3x−2","−x²+9x−6"],
    correctAnswer: "x²+3x−2",
    explanation: {
      quick: "Assume quadratic form.",
      standard: "Substitute and compare coefficients.",
      deep: "Let f(x)=ax²+bx+c\n\nSubstitute → compare terms\nSolve → f(x)=x²+3x−2"
    }
  },

  {
    id: "bitsat-2018-math-functions-009",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Mathematical Logic",
    topic: "Logical Expression",
    year: 2018,
    questionText: "Which logical expression is correct?",
    options: ["(p ∧ q)","(p ∧ q) ∧ r","(q ∧ r) ∧ p","p ∧ (q ∧ r)"],
    correctAnswer: "p ∧ (q ∧ r)",
    explanation: {
      quick: "Evaluate truth values.",
      standard: "Check consistency of expressions.",
      deep: "Only p ∧ (q ∧ r) satisfies given logical conditions.\n\nHence answer."
    }
  }
];