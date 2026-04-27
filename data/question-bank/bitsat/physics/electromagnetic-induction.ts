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
    options: [
      "2π μV",
      "π μV",
      "(π/2) μV",
      "2 μV"
    ],
    correctAnswer: "π μV",
    explanation: {
      quick: "Use the main concept from Induced emf in a shrinking circular loop and apply it directly. The correct answer is π μV.",
      standard: "We solve this using the main idea from Induced emf in a shrinking circular loop. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as π μV.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Induced emf in a shrinking circular loop.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Induced emf in a shrinking circular loop and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as π μV.\n\nExtra understanding:\nQuestions from Induced emf in a shrinking circular loop often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is π μV."
    }
  }
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
    quick: "Current in inductors is inversely proportional to inductance.",
    standard: "In parallel inductors, voltage is same → i ∝ 1/L.",
    deep: "Let us understand the question from the beginning…\n\nFor inductors in parallel, voltage across both is same:\nV = L di/dt\n\nSo current:\ni ∝ 1/L\n\nThus,\ni₁/i₂ = L₂/L₁\n\nTherefore, the correct answer is L₂ / L₁."
  }
}
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
    quick: "At terminal velocity, magnetic retarding force balances the component of weight down the incline.",
    standard: "Induced emf = Blv, current = Blv/R, magnetic force = BIl = B²l²v/R. At terminal speed, mg sinθ = B²l²v/R. Hence v_T = mgR sinθ / (B²l²).",
    deep: "Let us understand the question from the beginning…\n\nAs the rod slides down, it cuts magnetic field lines and an emf is induced.\n\n1. Induced emf:\nε = Blv\n\n2. Current in the circuit:\nI = ε/R = Blv/R\n\n3. Magnetic force on the rod:\nF_m = BIl\n= B × (Blv/R) × l\n= B²l²v/R\n\nThis magnetic force opposes the motion.\n\n4. At terminal velocity\nAcceleration becomes zero, so the downslope component of weight balances the magnetic retarding force:\nmg sinθ = B²l²v_T / R\n\nSolving:\nv_T = mgR sinθ / (B²l²)\n\nTherefore, the correct answer is mgR sinθ / (B²l²)."
  }
}
];
