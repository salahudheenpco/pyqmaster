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
    options: ["2e", "3e", "6e", "8e"],
    correctAnswer: "3e",
    explanation: {
      quick: "For suspension: qE = mg.",
      standard: "Electric field E = V/d = 800 / 0.02 = 4 × 10⁴ N/C. For equilibrium, qE = mg ⇒ q = mg/E. Substituting values gives q = 3e.",
      deep: "Let us solve step by step.\n\nElectric field between plates:\nE = V/d = 800 / 0.02 = 4 × 10⁴ N/C\n\nFor suspension:\nElectric force = Weight\nqE = mg\n\nSo:\nq = mg / E\n\nSubstitute:\nm = 1.96 × 10⁻¹⁵ kg\ng = 9.8 m/s²\nE = 4 × 10⁴\n\nq = (1.96 × 10⁻¹⁵ × 9.8) / (4 × 10⁴)\n≈ 4.8 × 10⁻¹⁹ C\n\nSince e = 1.6 × 10⁻¹⁹ C:\nq = 3e\n\nTherefore, the correct answer is 3e."
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
      quick: "Symmetry → perpendicular components cancel.",
      standard: "Forces from charges at B and C are equal and symmetric. Their components perpendicular to BC cancel out.",
      deep: "Let us understand using symmetry.\n\nForces from B and C on A are equal in magnitude.\n\nResolve forces:\n- Components perpendicular to BC cancel due to symmetry\n- Only parallel components remain\n\nThus, net force perpendicular to BC = 0\n\nTherefore, the correct answer is zero."
    }
  },
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
      quick: "τ = RC, and C changes with dielectric height.",
      standard: "Capacitor behaves as two parallel capacitors: dielectric-filled and air-filled. As height decreases, effective capacitance changes, giving τ = (6ε₀R)/(5d − 3vt).",
      deep: "Let us solve carefully.\n\nInitially dielectric height = d/3\nAfter time t:\nHeight = d/3 − vt\n\nThe capacitor behaves as two capacitors in parallel:\n1. Region with dielectric\n2. Region without dielectric\n\nTotal capacitance = C₁ + C₂\n\nAs liquid level decreases, capacitance becomes time dependent.\n\nTime constant:\nτ = RC(t)\n\nAfter simplifying expression of capacitance,\nwe obtain:\nτ = (6ε₀R)/(5d − 3vt)\n\nTherefore, the correct answer is (6ε₀R)/(5d − 3vt)."
    }
  }
];