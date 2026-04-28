import { PYQQuestion } from "@/lib/types";

export const bitsatMovingChargesAndMagnetismQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-moving-charges-and-magnetism-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    topic: "Time taken by a charged particle to cross a magnetic field strip",
    year: 2017,
    questionText: "A positive charge is projected in a magnetic field of width mv/(2qB) with velocity v. Then, the time taken by the charged particle to emerge from the magnetic field is",
    options: [
      "m/(2qB)",
      "πm/(4qB)",
      "πm/(2qB)",
      "2πm/(qB)"
    ],
    correctAnswer: "πm/(4qB)",
    explanation: {
      quick: "Motion is circular in magnetic field → use angular motion.",
      standard: "Radius = mv/(qB). Given width = mv/(2qB) = R/2. So particle completes quarter circle → time = (T/4) = πm/(4qB).",
      deep: "In a uniform magnetic field, a charged particle moves in a circular path.\n\nRadius:\nR = mv/(qB)\n\nGiven width = mv/(2qB) = R/2\n\nSo particle travels a quarter circle before exiting.\n\nTime period:\nT = 2πm/(qB)\n\nTime for quarter circle:\nT/4 = πm/(4qB)\n\nTherefore, the correct answer is πm/(4qB)."
    }
  },
  {
    id: "bitsat-2017-physics-moving-charges-and-magnetism-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    topic: "Torque on a current-carrying equilateral triangular loop",
    year: 2017,
    questionText: "A coil in the shape of an equilateral triangle of side l is suspended between the pole pieces of a permanent magnet such that B is in the plane of the coil. If due to a current i in the triangle, a torque τ acts on it, the side of the triangle is",
    options: [
      "2√(τ / √3Bi)",
      "√(2τ / Bi)",
      "2√(τ / Bi√3)",
      "√(3τ / 2Bi)"
    ],
    correctAnswer: "2√(τ / √3Bi)",
    explanation: {
      quick: "Torque = iAB.",
      standard: "Area of equilateral triangle = (√3/4)l². So τ = iB(√3/4)l² → solve for l.",
      deep: "Torque on loop:\nτ = iAB\n\nArea of equilateral triangle:\nA = (√3/4)l²\n\nSo:\nτ = iB(√3/4)l²\n\nRearrange:\nl² = (4τ)/(√3Bi)\n\nl = 2√(τ/(√3Bi))\n\nTherefore, the correct answer is 2√(τ / √3Bi)."
    }
  },

  // ✅ FIXED (comma added)

  {
    id: "bitsat-2018-physics-moving-charges-and-magnetism-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    topic: "Magnetic Field at Centre of Current-Carrying Loop",
    year: 2018,
    questionText: "A current i flows through a loop as shown in the figure. The magnetic field at the centre O is",
    options: [
      "(7μ₀i)/(12r) acting downwards",
      "(5μ₀i)/(12r) acting upwards",
      "(7μ₀i)/(12r) acting upwards",
      "(5μ₀i)/(12r) acting downwards"
    ],
    correctAnswer: "(5μ₀i)/(12r) acting downwards",
    explanation: {
      quick: "Use arc formula B = μ₀iθ / (4πR).",
      standard: "Find contribution of each arc separately and add using direction rules.",
      deep: "Magnetic field due to arc:\nB = μ₀iθ / (4πR)\n\nCalculate contributions of both arcs:\n- radius r arc\n- radius 2r arc\n\nApply right-hand rule for direction.\n\nAfter adding:\nB = (5μ₀i)/(12r)\n\nDirection is downward.\n\nTherefore, correct answer is (5μ₀i)/(12r) downward."
    }
  }
];