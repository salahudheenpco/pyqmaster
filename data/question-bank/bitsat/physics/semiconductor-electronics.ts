import { PYQQuestion } from "@/lib/types";

export const bitsatSemiconductorElectronicsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-semiconductor-electronics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Semiconductor Electronics",
    topic: "Power gain of a common emitter amplifier",
    year: 2017,
    questionText: "A common emitter amplifier has a voltage gain of 50, an input impedance of 100 Ω and an output impedance of 200 Ω. The power gain of the amplifier is",
    options: [
      "500",
      "1000",
      "1250",
      "50"
    ],
    correctAnswer: "1250",
    explanation: {
      quick: "Use the main concept from Power gain of a common emitter amplifier and apply it directly. The correct answer is 1250.",
      standard: "We solve this using the main idea from Power gain of a common emitter amplifier. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 1250.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Power gain of a common emitter amplifier.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Power gain of a common emitter amplifier and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 1250.\n\nExtra understanding:\nQuestions from Power gain of a common emitter amplifier often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 1250."
    }
  }
{
  id: "bitsat-2018-physics-semiconductor-electronics-002",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Semiconductor Electronics",
  topic: "Charge Carrier Density and Drift Speed",
  year: 2018,
  questionText: "At a certain temperature, the number density of charge carriers in a semiconductor is n. When an electric field is applied to it, the charge carriers drift with an average speed v. If the temperature of the semiconductor is raised",
  options: [
    "n will increase but v will decrease",
    "n will decrease but v will increase",
    "Both n and v will increase",
    "Both n and v will decrease"
  ],
  correctAnswer: "n will increase but v will decrease",
  explanation: {
    quick: "Raising temperature increases intrinsic carriers, but increased collisions reduce drift speed.",
    standard: "In a semiconductor, higher temperature breaks more covalent bonds, increasing carrier density n. But lattice vibrations also increase, causing more frequent collisions, so mobility and hence drift speed v decrease.",
    deep: "Let us understand the question from the beginning…\n\nTwo things happen when the temperature of a semiconductor is increased:\n\n1. Number of charge carriers increases\nAt higher temperature, more covalent bonds break.\nThis produces more electron-hole pairs.\nSo the carrier number density n increases.\n\n2. Drift speed decreases\nDrift speed depends on mobility.\nWhen temperature rises, lattice vibrations increase.\nThat means the charge carriers suffer more collisions while moving through the crystal.\nSo their mobility decreases, and therefore the average drift speed v decreases for a given electric field.\n\nThus:\n- n increases\n- v decreases\n\nTherefore, the correct answer is n will increase but v will decrease."
  }
}
{
  id: "bitsat-2018-physics-semiconductor-electronics-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Semiconductor Electronics",
  topic: "Diode Circuit Analysis",
  year: 2018,
  questionText: "In the given circuit, the current through battery is",
  options: ["0.5 A", "1 A", "1.5 A", "2.5 A"],
  correctAnswer: "1.5 A",
  explanation: {
    quick: "Check the biasing of each diode first, then reduce the conducting path to an equivalent resistance.",
    standard: "From the polarity in the circuit, D₁ is reverse biased while D₂ and D₃ are forward biased. After replacing forward-biased diodes with short circuits and reverse-biased diode with open circuit, the equivalent resistance comes out to 20/3 Ω. Therefore battery current is 10 ÷ (20/3) = 1.5 A.",
    deep: "Let us understand the question from the beginning…\n\nIn diode problems, the first step is always to decide which diodes conduct.\n\nFrom the circuit orientation:\n- D₁ is reverse biased, so it behaves like an open circuit.\n- D₂ and D₃ are forward biased, so they behave like closed switches.\n\nNow redraw the circuit using these ideal diode replacements.\nThat leaves a simpler resistor network connected to the 10 V battery.\n\nOn simplifying the resistor combination, the effective resistance becomes:\nR_eq = 20/3 Ω\n\nHence the current through the battery is:\nI = V / R_eq\n= 10 / (20/3)\n= 10 × 3/20\n= 1.5 A\n\nTherefore, the correct answer is 1.5 A."
  }
}
];
