import { PYQQuestion } from "@/lib/types";

export const bitsatKineticTheoryAndThermodynamicsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-kinetic-theory-and-thermodynamics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinetic Theory and Thermodynamics",
    topic: "Volume change of an ideal gas",
    year: 2017,
    questionText: "A balloon is filled at 27°C and pressure 1 atm by 500 m³ of He. At -3°C and pressure 0.5 atm, the volume of He will be",
    options: ["700 m³","900 m³","1000 m³","500 m³"],
    correctAnswer: "900 m³",
    explanation: {
      quick: "Use PV/T = constant.",
      standard: "Convert temperature to Kelvin and apply combined gas law.",
      deep: "Given:\nT1 = 300K, T2 = 270K\nP1 = 1 atm, P2 = 0.5 atm\n\nUsing:\nP1V1/T1 = P2V2/T2\n\nV2 = V1 × (P1/P2) × (T2/T1)\n= 500 × (1/0.5) × (270/300)\n= 500 × 2 × 0.9 = 900 m³\n\nTherefore answer is 900 m³."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-ktt-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinetic Theory & Thermodynamics",
    topic: "Calorimetry",
    year: 2018,
    questionText: "Steam at 100°C is passed into 1.1 kg of water contained in a calorimeter of water equivalent 0.2 kg at 15°C till temperature rises to 80°C. The mass of steam condensed is:",
    options: ["0.130","0.065","0.260","0.135"],
    correctAnswer: "0.065",
    explanation: {
      quick: "Heat lost = heat gained.",
      standard: "mL + mcΔT = (water + calorimeter)cΔT",
      deep: "Heat lost by steam:\nmL + mc(100−80)\n\nHeat gained:\n(1.1 + 0.2)c(80−15)\n\nSolving gives m ≈ 0.065 kg."
    }
  },

  {
    id: "bitsat-2018-physics-ktt-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinetic Theory & Thermodynamics",
    topic: "Carnot Engine",
    year: 2018,
    questionText: "A reservoir is at 827°C and Carnot engine takes 1000 kcal heat and exhausts to sink at 27°C. Find work done and efficiency.",
    options: [
      "2.7×10^5 cal, 70.70%",
      "7.27×10^5 cal, 72.72%",
      "2.70×10^5 cal, 80.70%",
      "3.70×10^5 cal, 70.70%"
    ],
    correctAnswer: "7.27×10^5 cal, 72.72%",
    explanation: {
      quick: "η = 1 − Tc/Th",
      standard: "Convert to Kelvin and apply Carnot formula.",
      deep: "Th = 1100K, Tc = 300K\nη = 1 − 300/1100 = 0.7272\n\nWork = η × 1000 kcal = 727 kcal = 7.27×10^5 cal"
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-ktt-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinetic Theory & Thermodynamics",
    topic: "Thermodynamic Cycle",
    year: 2018,
    questionText: "Helium gas goes through a rectangular cycle. Efficiency is",
    options: ["15.4%","9.1%","10.5%","12.5%"],
    correctAnswer: "15.4%",
    explanation: {
      quick: "η = W/Q",
      standard: "Area gives work, Cp/Cv used for heat.",
      deep: "W = p₀V₀\nQ = (13/2)p₀V₀\nη = 2/13 ≈ 15.4%"
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-ktt-005",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinetic Theory & Thermodynamics",
    topic: "Degrees of Freedom",
    year: 2018,
    questionText: "C = 37.55 J/mol K, find degrees of freedom",
    options: ["2","3","5","7"],
    correctAnswer: "5",
    explanation: {
      quick: "C = (f/2)R relation.",
      standard: "Use C = C_V + process relation.",
      deep: "Using thermodynamic relation gives:\nC_V = (5/2)R\n\nSo f = 5"
    }
  }
];