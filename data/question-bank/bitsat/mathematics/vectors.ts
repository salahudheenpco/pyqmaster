import { PYQQuestion } from "@/lib/types";

export const bitsatVectorsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-vectors-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Vectors",
    topic: "Dot product and perpendicular condition",
    year: 2017,
    questionText: "If two vectors are perpendicular, then their dot product is",
    options: ["0","1","-1","∞"],
    correctAnswer: "0",
    explanation: {
      quick: "a·b = 0 for perpendicular vectors.",
      standard: "Dot product formula: a·b = |a||b|cosθ. For θ = 90°, cosθ = 0 → dot product = 0.",
      deep: "Dot product of two vectors:\n\n a·b = |a||b|cosθ\n\nIf vectors are perpendicular:\nθ = 90° ⇒ cos90° = 0\n\nThus:\n a·b = 0\n\nTherefore, the correct answer is 0."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-math-vectors-002",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Vectors",
    topic: "Angle Between Vectors",
    year: 2018,
    questionText: "Find sinθ + cosθ for given vectors",
    options: ["0","1/2","1","2"],
    correctAnswer: "1",
    explanation: {
      quick: "Use dot product to find cosθ.",
      standard: "Compute cosθ using dot product, then sinθ using identity.",
      deep: "Find cosθ using dot product formula.\n\nThen:\nsinθ = √(1 − cos²θ)\n\nAdd sinθ + cosθ → gives 1.\n\nTherefore answer is 1."
    }
  },

  {
    id: "bitsat-2018-math-vectors-003",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Vectors",
    topic: "Midpoint Vector",
    year: 2018,
    questionText: "Find AD in terms of BE and CF",
    options: ["BE+CF","BE−CF","CF−BE","−BE−CF"],
    correctAnswer: "BE+CF",
    explanation: {
      quick: "Use midpoint theorem in vectors.",
      standard: "Express all vectors in position vector form.",
      deep: "Using midpoint relations in vector geometry:\n\nAD = BE + CF\n\nTherefore, the correct answer is BE + CF."
    }
  },

  {
    id: "bitsat-2018-math-vectors-004",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Vectors",
    topic: "Parallelepiped",
    year: 2018,
    questionText: "Find value of 19h²",
    options: ["19","16","8","None"],
    correctAnswer: "16",
    explanation: {
      quick: "Use scalar triple product.",
      standard: "Volume = |a·(b×c)| → height from volume relation.",
      deep: "Volume of parallelepiped:\n\nV = |a·(b×c)|\n\nHeight = Volume / base area\n\nSubstituting values gives:\n\n19h² = 16\n\nTherefore, the correct answer is 16."
    }
  }
];