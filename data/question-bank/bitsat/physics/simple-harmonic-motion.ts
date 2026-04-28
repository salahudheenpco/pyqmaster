import { PYQQuestion } from "@/lib/types";

export const bitsatSimpleHarmonicMotionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-simple-harmonic-motion-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Simple Harmonic Motion",
    topic: "Maximum kinetic energy in SHM",
    year: 2017,
    questionText: "A body of mass 1 kg is executing simple harmonic motion. Its displacement at time t seconds is given by y (cm) = 6 sin(100t + π/4). Its maximum kinetic energy is",
    options: ["6 J","18 J","24 J","36 J"],
    correctAnswer: "18 J",
    explanation: {
      quick: "Kmax = (1/2)mω²A²",
      standard: "Amplitude = 6 cm = 0.06 m, ω = 100 rad/s → Kmax = 0.5×1×100²×(0.06)² = 18 J.",
      deep: "y = A sin(ωt + φ)\n\nA = 6 cm = 0.06 m\nω = 100 rad/s\n\nMaximum KE:\nKmax = (1/2)mω²A²\n= 0.5 × 1 × 100² × (0.06)²\n= 18 J\n\nTherefore answer is 18 J."
    }
  },
  {
    id: "bitsat-2017-physics-simple-harmonic-motion-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Simple Harmonic Motion",
    topic: "Oscillation of a floating block",
    year: 2017,
    questionText: "A rectangular block of mass m and area of cross-section A floats in a liquid of density ρ. If it is given a vertical displacement from equilibrium, it undergoes oscillation with a time period T. Then",
    options: ["T ∝ √ρ","T ∝ 1/√A","T ∝ 1/ρ","T ∝ 1/√m"],
    correctAnswer: "T ∝ 1/√A",
    explanation: {
      quick: "Restoring force ∝ displaced volume → ∝ A",
      standard: "Effective spring constant k = ρAg → T = 2π√(m/k) ∝ 1/√A.",
      deep: "Restoring force:\nF = ρAgx\n\nSo:\nk = ρAg\n\nTime period:\nT = 2π√(m/k)\n= 2π√(m/(ρAg))\n\nThus:\nT ∝ 1/√A\n\nTherefore answer is T ∝ 1/√A."
    }
  },
  {
    id: "bitsat-2017-physics-simple-harmonic-motion-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Simple Harmonic Motion",
    topic: "Simple pendulums in same sense",
    year: 2017,
    questionText: "Two simple pendulums of lengths 5 m and 20 m respectively are given small displacement in one direction at the same time. They will again be in the same sense when the pendulum of shorter length has completed n oscillations. Then, n is",
    options: ["5","1","2","3"],
    correctAnswer: "2",
    explanation: {
      quick: "T ∝ √l",
      standard: "T₂/T₁ = √(20/5) = 2 → shorter pendulum completes 2 oscillations.",
      deep: "T ∝ √l\n\nT₂/T₁ = √(20/5) = 2\n\nSo longer pendulum takes twice time.\n\nThus shorter completes 2 oscillations.\n\nTherefore answer is 2."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-simple-harmonic-motion-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Oscillations",
    topic: "Pendulum with Leaking Bob",
    year: 2018,
    questionText: "The bob of simple pendulum is a spherical hollow ball filled with water. A plugged hole near the bottom of the oscillating bob gets suddenly unplugged. During observation, till water is coming out, the time period of oscillation would",
    options: [
      "first increase and then decrease to the original value",
      "first decrease and then increase to the original value",
      "remain unchanged",
      "increase towards a saturation value"
    ],
    correctAnswer: "first increase and then decrease to the original value",
    explanation: {
      quick: "COM first goes down, then returns.",
      standard: "Effective length increases first then decreases.",
      deep: "Time period depends on COM.\n\nCOM shifts down → T increases\nLater COM rises → T returns\n\nTherefore answer is first increase then decrease."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-simple-harmonic-motion-005",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Oscillations",
    topic: "Invariants in SHM",
    year: 2018,
    questionText: "If x, v and a denote the displacement, the velocity and the acceleration of a particle executing SHM of time period T, then which of the following does not change with time?",
    options: [
      "x / aT",
      "aT + 2πv",
      "aT / v",
      "a²T² + 4π²v²"
    ],
    correctAnswer: "a²T² + 4π²v²",
    explanation: {
      quick: "Use SHM relations.",
      standard: "Expression reduces to constant.",
      deep: "Using SHM relations:\n\nExpression simplifies to constant value\n\nTherefore answer is invariant."
    }
  }
];