import { PYQQuestion } from "@/lib/types";

export const bitsatElectromagneticInductionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-electromagnetic-induction-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    topic: "Induced emf in a shrinking circular loop",
    year: 2017,
    questionText: "A conducting circular loop is placed in a uniform magnetic field B = 0.025 T, with its plane perpendicular to the field. The radius of the loop is made to shrink at a constant rate of 1 mm s⁻¹. The induced emf when the radius is 2 cm is",
    options: ["2π μV", "π μV", "(π/2) μV", "2 μV"],
    correctAnswer: "π μV",
    explanation: {
      quick: "Use ε = B |dA/dt| and A = πr².",
      standard: "Magnetic flux Φ = BA = Bπr². Induced emf ε = |dΦ/dt| = B·2πr|dr/dt|. Substituting B = 0.025 T, r = 0.02 m, and dr/dt = 10⁻³ m/s gives ε = π × 10⁻⁶ V = π μV.",
      deep: "Let us solve it step by step.\n\nThe magnetic flux through the circular loop is:\nΦ = BA\n\nSince the loop is circular:\nA = πr²\n\nSo:\nΦ = Bπr²\n\nInduced emf is:\nε = |dΦ/dt|\n\nε = B × d(πr²)/dt\nε = B × 2πr × |dr/dt|\n\nGiven:\nB = 0.025 T\nr = 2 cm = 0.02 m\n|dr/dt| = 1 mm/s = 10⁻³ m/s\n\nSubstitute:\nε = 0.025 × 2π × 0.02 × 10⁻³\nε = π × 10⁻⁶ V\n\nSince 10⁻⁶ V = 1 μV,\nε = π μV\n\nTherefore, the correct answer is π μV."
    }
  },
  {
    id: "bitsat-2018-physics-electromagnetic-induction-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    topic: "Inductors in Parallel",
    year: 2018,
    questionText: "Two inductors L₁ and L₂ are connected in parallel and a time-varying current flows as shown. The ratio of currents i₁/i₂ at any time is:",
    options: [
      "L₂ / L₁",
      "L₁ / L₂",
      "(L₁ + L₂) / (2L₂)",
      "(L₁ + L₂) / (2L₁)"
    ],
    correctAnswer: "L₂ / L₁",
    explanation: {
      quick: "For parallel inductors, the same voltage appears across each inductor.",
      standard: "For an inductor, V = L(di/dt). In parallel, voltage is same for both, so L₁(di₁/dt) = L₂(di₂/dt). Hence di₁/di₂ = L₂/L₁, and the current ratio is i₁/i₂ = L₂/L₁.",
      deep: "Let us understand the circuit relation.\n\nFor an inductor:\nV = L di/dt\n\nSince L₁ and L₂ are connected in parallel, the voltage across both inductors is the same.\n\nSo:\nL₁ di₁/dt = L₂ di₂/dt\n\nRearrange:\n(di₁/dt)/(di₂/dt) = L₂/L₁\n\nIf currents start from the same initial condition, the same ratio holds for the currents:\ni₁/i₂ = L₂/L₁\n\nTherefore, the current through an inductor is inversely proportional to its inductance.\n\nHence, the correct answer is L₂ / L₁."
    }
  },
  {
    id: "bitsat-2018-physics-electromagnetic-induction-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    topic: "Motional EMF and Terminal Velocity",
    year: 2018,
    questionText: "A copper rod of mass m slides under gravity on two smooth parallel rails l distance apart and set at an angle θ to the horizontal. At the bottom, the rails are joined by a resistance R as shown in figure. There is a uniform magnetic field B perpendicular to the plane of the rails. The terminal velocity of rod is",
    options: [
      "mgR tanθ / (B²l²)",
      "mgR cotθ / (B²l²)",
      "mgR sinθ / (B²l²)",
      "mgR cosθ / (B²l²)"
    ],
    correctAnswer: "mgR sinθ / (B²l²)",
    explanation: {
      quick: "At terminal velocity, magnetic retarding force balances mg sinθ.",
      standard: "Induced emf = Blv, current = Blv/R, magnetic force = BIl = B²l²v/R. At terminal velocity, mg sinθ = B²l²v/R, so v = mgR sinθ/(B²l²).",
      deep: "Let us solve this step by step.\n\nAs the rod slides down the inclined rails, it cuts magnetic field lines.\n\nThe motional emf induced is:\nε = Blv\n\nCurrent in the circuit:\nI = ε/R = Blv/R\n\nThe magnetic force on the rod is:\nF = BIl\n\nSubstitute I:\nF = B × (Blv/R) × l\nF = B²l²v/R\n\nThis force opposes the motion of the rod.\n\nThe component of weight pulling the rod down the incline is:\nmg sinθ\n\nAt terminal velocity, acceleration is zero, so:\nmg sinθ = B²l²v/R\n\nSolving for v:\nv = mgR sinθ / (B²l²)\n\nTherefore, the terminal velocity is mgR sinθ / (B²l²)."
    }
  }
];