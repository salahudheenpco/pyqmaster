import { PYQQuestion } from "@/lib/types";

export const bitsatElectrostaticsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-electrostatics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Charged particle suspended in a uniform electric field",
    year: 2017,
    questionText: "Two metal plates having a potential difference of 800 V are 2 cm apart. It is found that a particle of mass 1.96 × 10⁻¹⁵ kg remains suspended in the region between the plates. The charge on the particle must be (e = 1.6 × 10⁻¹⁹ C)",
    options: [
      "2e",
      "3e",
      "6e",
      "8e"
    ],
    correctAnswer: "3e",
    explanation: {
      quick: "Use the main concept from Charged particle suspended in a uniform electric field and apply it directly. The correct answer is 3e.",
      standard: "We solve this using the main idea from Charged particle suspended in a uniform electric field. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 3e.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Charged particle suspended in a uniform electric field.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Charged particle suspended in a uniform electric field and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 3e.\n\nExtra understanding:\nQuestions from Charged particle suspended in a uniform electric field often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 3e."
    }
  },
  {
    id: "bitsat-2017-physics-electrostatics-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Force on a charge at a vertex of an equilateral triangle",
    year: 2017,
    questionText: "Three charges are placed at the three vertices of an equilateral triangle of side a as shown in the figure. The force experienced by the charge placed at the vertex A in a direction normal to BC is",
    options: [
      "Q² / (4πϵ₀a²)",
      "-Q² / (4πϵ₀a²)",
      "zero",
      "Q² / (2πϵ₀a²)"
    ],
    correctAnswer: "zero",
    explanation: {
      quick: "Use the main concept from Force on a charge at a vertex of an equilateral triangle and apply it directly. The correct answer is zero.",
      standard: "We solve this using the main idea from Force on a charge at a vertex of an equilateral triangle. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as zero.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Force on a charge at a vertex of an equilateral triangle.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Force on a charge at a vertex of an equilateral triangle and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as zero.\n\nExtra understanding:\nQuestions from Force on a charge at a vertex of an equilateral triangle often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is zero."
    }
  }
{
  id: "bitsat-2018-physics-electrostatics-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Electrostatics",
  topic: "Capacitor with Dielectric",
  year: 2018,
  questionText: "A parallel plate capacitor C with plates of unit area and separation d is filled with a liquid of dielectric constant K = 2, the level of liquid is d/3 initially. Suppose, the liquid level decreases at a constant speed v, the time constant as a function of time is:",
  options: [
    "(6ε₀R)/(5d + 3vt)",
    "((15d + 9vt)ε₀R)/(2d³ − 3dvt − 9v²t²)",
    "(6ε₀R)/(5d − 3vt)",
    "((15d − 9vt)ε₀R)/(2d³ + 3dvt − 9v²t²)"
  ],
  correctAnswer: "(6ε₀R)/(5d − 3vt)",
  explanation: {
    quick: "Time constant τ = RC, capacitance varies as dielectric level changes.",
    standard: "Capacitance is combination of two regions (with and without dielectric). As liquid level decreases, effective capacitance changes with time, leading to τ = RC variation.",
    deep: "Let us understand the question from the beginning…\n\nThe capacitor is partially filled with dielectric.\nSo it behaves as two capacitors in parallel:\n- One with dielectric\n- One without dielectric\n\nAs liquid level decreases at speed v:\nHeight = (d/3 − vt)\n\nCapacitance varies accordingly.\nTime constant τ = RC\nAfter simplifying expression of C(t), we get:\nτ = (6ε₀R)/(5d − 3vt)\n\nTherefore, the correct answer is (6ε₀R)/(5d − 3vt)."
  }
}
];
