import { PYQQuestion } from "@/lib/types";

export const bitsatCurrentElectricityQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-current-electricity-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Resistance-temperature relation",
    year: 2017,
    questionText: "The resistance of a wire at 20°C is 20 Ω and at 500°C is 60 Ω. At which temperature will its resistance be 25 Ω?",
    options: ["50°C", "60°C", "70°C", "80°C"],
    correctAnswer: "80°C",
    explanation: {
      quick: "Use linear relation R = R₀(1 + αT).",
      standard: "Assume resistance varies linearly with temperature. Use two given points to find α and then solve for required temperature.",
      deep: "Given:\nR₁ = 20Ω at 20°C\nR₂ = 60Ω at 500°C\n\nUsing linear relation:\nR = R₀(1 + αT)\n\nForm two equations and eliminate R₀ and α.\nThen substitute R = 25Ω.\n\nSolving gives T = 80°C.\n\nTherefore, correct answer is 80°C."
    }
  },
  {
    id: "bitsat-2017-physics-current-electricity-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Heating effect in a resistor network",
    year: 2017,
    questionText: "In the circuit shown, the heat produced in the 5 Ω resistor is 10 cal s⁻¹. The heat produced per second in the 4 Ω resistor will be",
    options: ["1 cal", "2 cal", "3 cal", "4 cal"],
    correctAnswer: "2 cal",
    explanation: {
      quick: "Use P = I²R relation.",
      standard: "Since resistors share same current or voltage (based on circuit), use proportional relation of power.",
      deep: "Power dissipated:\nP = I²R\n\nCompare resistors using circuit condition.\nUsing given heat rate for 5Ω, find current.\nThen apply to 4Ω resistor.\n\nResult = 2 cal/s.\n\nTherefore correct answer is 2 cal."
    }
  },

  // ✅ FIX: comma added above

  {
    id: "bitsat-2018-physics-current-electricity-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Wheatstone Bridge",
    year: 2018,
    questionText: "In the given circuit, find X such that potential difference between B and D is zero.",
    options: ["9 Ω", "8 Ω", "4 Ω", "6 Ω"],
    correctAnswer: "6 Ω",
    explanation: {
      quick: "Bridge must be balanced.",
      standard: "Apply Wheatstone condition R1/R2 = R3/R4.",
      deep: "For zero potential difference:\nBridge must be balanced.\n\nR1/R2 = R3/R4\n\nSolving gives X = 6Ω.\n\nTherefore correct answer is 6 Ω."
    }
  },

  // ✅ FIX: comma added here

  {
    id: "bitsat-2018-physics-current-electricity-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Galvanometer Sensitivity",
    year: 2018,
    questionText: "To increase the current sensitivity of a moving coil galvanometer by 50%, its resistance is increased, so that new resistance becomes twice its initial resistance, by what factor does its voltage sensitivity change?",
    options: [
      "Increases by 15%",
      "Decreases by 15%",
      "Increases by 25%",
      "Decreases by 25%"
    ],
    correctAnswer: "Decreases by 25%",
    explanation: {
      quick: "Voltage sensitivity ∝ current sensitivity / resistance.",
      standard: "New VS = (1.5/2) = 0.75 → decreases by 25%.",
      deep: "Voltage sensitivity = current sensitivity / resistance\n\nNew current sensitivity = 1.5×\nNew resistance = 2×\n\nVS_new = 1.5/2 = 0.75\n\nDecrease = 25%\n\nTherefore correct answer is Decreases by 25%."
    }
  },

  {
    id: "bitsat-2018-physics-current-electricity-005",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Bridge Circuit Condition",
    year: 2018,
    questionText: "In the given circuit, it is observed that the current I is independent of the value of resistance R₅. Then, the resistance value must satisfy",
    options: [
      "1/R₃ + 1/R₆ = 1/(R₁ + R₂) + 1/(R₃ + R₄)",
      "R₁R₄ = R₂R₃",
      "R₁R₂R₅ = R₃R₄R₆",
      "R₁R₃ = R₂R₄ = R₅R₆"
    ],
    correctAnswer: "R₁R₄ = R₂R₃",
    explanation: {
      quick: "Bridge must be balanced.",
      standard: "No current through R₅ ⇒ Wheatstone balance condition.",
      deep: "If current is independent of R₅, no current flows through it.\n\nSo bridge is balanced:\nR₁/R₂ = R₃/R₄\n\n⇒ R₁R₄ = R₂R₃\n\nTherefore correct answer is R₁R₄ = R₂R₃."
    }
  }
];