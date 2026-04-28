import { PYQQuestion } from "@/lib/types";

export const bitsatRotationalMotionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-rotational-motion-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Initial angular acceleration of a uniform rod about one end",
    year: 2017,
    questionText: "A uniform rod of length l and mass m is free to rotate in a vertical plane about one end A. The rod is initially in horizontal position and is released. The initial angular acceleration of the rod is (Moment of inertia of rod about A is ml²/3)",
    options: [
      "3g/2l",
      "3g/2",
      "2l/3g",
      "mg²/2l"
    ],
    correctAnswer: "3g/2l",
    explanation: {
      quick: "Use τ = Iα.",
      standard: "Torque about pivot = mg(l/2). Using I = ml²/3, α = τ/I = (mg(l/2)) / (ml²/3) = 3g/2l.",
      deep: "Torque about hinge at A is due to weight acting at centre:\n\nτ = mg(l/2)\n\nMoment of inertia about A:\nI = ml²/3\n\nUsing τ = Iα:\nα = τ/I = [mg(l/2)] / (ml²/3)\n= (mg l / 2) × (3 / ml²)\n= 3g / 2l\n\nTherefore, the correct answer is 3g/2l."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-rotational-motion-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Angular Momentum and Time Period",
    year: 2018,
    questionText: "If the time period is doubled, then the angular momentum of the body will (provided the moment of inertia of the body is constant)",
    options: [
      "remain constant",
      "quadruple",
      "become half",
      "double"
    ],
    correctAnswer: "become half",
    explanation: {
      quick: "L = Iω and ω ∝ 1/T.",
      standard: "Since ω = 2π/T, doubling T halves ω. With constant I, angular momentum halves.",
      deep: "Angular momentum:\nL = Iω\n\nAngular velocity:\nω = 2π/T\n\nIf T → 2T:\nω → ω/2\n\nThus:\nL → L/2\n\nTherefore, the correct answer is become half."
    }
  },

  {
    id: "bitsat-2018-physics-rotational-motion-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Variable Torque",
    year: 2018,
    questionText: "A pulley of radius 2 m is rotated about its axis by a force (20t − 5t²) newton (where t is measured in seconds) applied tangentially. If the moment of inertia of the pulley about its axis of rotation is 10 kg m², the number of rotation made by the pulley before its direction of motion is reversed is",
    options: [
      "more than 3 but less than 6",
      "more than 6 but less than 9",
      "more than 9",
      "less than 3"
    ],
    correctAnswer: "more than 3 but less than 6",
    explanation: {
      quick: "Integrate α twice.",
      standard: "α = 4t − t² → ω = 2t² − t³/3. At ω=0 → t=6. θ = 36 rad → 5.73 rotations.",
      deep: "Force:\nF = 20t − 5t²\n\nTorque:\nτ = rF = 2(20t − 5t²)\n= 40t − 10t²\n\nα = τ/I = (40t − 10t²)/10 = 4t − t²\n\nIntegrate:\nω = 2t² − t³/3\n\nSet ω = 0:\nt = 6 s\n\nθ = ∫ω dt = (2/3)t³ − t⁴/12\n\nAt t=6:\nθ = 36 rad\n\nRotations:\nn = 36/(2π) ≈ 5.73\n\nTherefore answer is between 3 and 6."
    }
  }
];