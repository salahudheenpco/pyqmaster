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
    options: ["500","1000","1250","50"],
    correctAnswer: "1250",
    explanation: {
      quick: "Power gain = (Voltage gain)² × (Input resistance / Output resistance).",
      standard: "Power gain = Av² × (Rin / Rout) = 50² × (100/200) = 2500 × 1/2 = 1250.",
      deep: "Voltage gain Av = 50\n\nPower gain is given by:\nGp = Av² × (Rin / Rout)\n\nSubstitute:\nGp = 50² × (100/200)\n= 2500 × 1/2\n= 1250\n\nTherefore, the correct answer is 1250."
    }
  },

  // ✅ FIXED

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
      quick: "Temperature ↑ → carriers ↑, mobility ↓.",
      standard: "Higher temperature generates more electron-hole pairs, increasing n. But collisions increase, reducing drift speed v.",
      deep: "When temperature increases:\n\n1. Carrier density increases\nMore thermal energy breaks covalent bonds → more electron-hole pairs.\n\n2. Drift speed decreases\nLattice vibrations increase → more collisions → mobility decreases.\n\nThus:\nn increases, v decreases\n\nTherefore, the correct answer is n will increase but v will decrease."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-semiconductor-electronics-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Semiconductor Electronics",
    topic: "Diode Circuit Analysis",
    year: 2018,
    questionText: "In the given circuit, the current through battery is",
    options: ["0.5 A","1 A","1.5 A","2.5 A"],
    correctAnswer: "1.5 A",
    explanation: {
      quick: "Identify forward/reverse biased diodes.",
      standard: "Replace forward diodes with wires, reverse with open circuit, then solve equivalent resistance.",
      deep: "Step 1: Identify diode states\nD₁ reverse biased → open\nD₂, D₃ forward biased → short\n\nStep 2: Redraw simplified circuit\n\nStep 3: Equivalent resistance:\nR = 20/3 Ω\n\nStep 4: Current:\nI = 10 / (20/3) = 1.5 A\n\nTherefore, the correct answer is 1.5 A."
    }
  }
];