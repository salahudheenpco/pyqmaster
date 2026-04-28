import { PYQQuestion } from "@/lib/types";

export const bitsatMechanicalPropertiesOfFluidsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-mechanical-properties-of-fluids-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Fluids",
    topic: "Fraction of iceberg floating outside water",
    year: 2017,
    questionText: "An ice-berg of density 900 kg m⁻³ is floating in water of density 1000 kg m⁻³. The percentage of volume of ice-berg outside the water is",
    options: ["20 %","35 %","10 %","11 %"],
    correctAnswer: "10 %",
    explanation: {
      quick: "Fraction submerged = ρ_object / ρ_fluid",
      standard: "Submerged fraction = 900/1000 = 0.9 → 10% outside.",
      deep: "For floating bodies:\n\nFraction submerged = ρ_object / ρ_fluid\n= 900 / 1000 = 0.9\n\nSo 90% submerged\n\nThus 10% remains outside water\n\nTherefore correct answer is 10%."
    }
  },

  {
    id: "bitsat-2017-physics-mechanical-properties-of-fluids-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Fluids",
    topic: "Work done in expanding a soap bubble",
    year: 2017,
    questionText: "Work done in increasing the size of a soap bubble from radius 3 cm to 5 cm is nearly (surface tension = 0.03 N/m)",
    options: ["0.2π mJ","2π mJ","0.4π mJ","4π mJ"],
    correctAnswer: "0.4π mJ",
    explanation: {
      quick: "W = 2TΔA (two surfaces)",
      standard: "ΔA = 4π(r₂² − r₁²), then W = 2TΔA.",
      deep: "For soap bubble:\n\nW = 2TΔA\n\nΔA = 4π(r₂² − r₁²)\n\n= 4π(25 − 9) cm²\n= 4π × 16 × 10⁻⁴ m²\n\nW = 2 × 0.03 × 4π × 16 × 10⁻⁴\n≈ 0.4π mJ\n\nTherefore correct answer is 0.4π mJ."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-fluids-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Fluids",
    topic: "Buoyancy",
    year: 2018,
    questionText: "A block floats in water with 4/5 volume submerged. Density of liquid in which it just floats is:",
    options: ["1250","600","400","800"],
    correctAnswer: "800",
    explanation: {
      quick: "ρ_object = submerged fraction × ρ_water",
      standard: "ρ_object = (4/5)×1000 = 800 kg/m³",
      deep: "Submerged fraction = 4/5\n\nSo:\nρ_object = (4/5) × 1000 = 800 kg/m³\n\nFor just floating:\nρ_liquid = ρ_object\n\nTherefore answer is 800."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-mechanical-properties-of-fluids-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Fluids",
    topic: "Surface Energy",
    year: 2018,
    questionText: "If a drop breaks into N droplets, temperature drop is",
    options: [
      "(3T/ρS)[1/r - 1/R]",
      "-(2T/ρS)[1/r - 1/R]",
      "(2T/ρS)[1/R - 1/r]",
      "(3T/ρS)[1/R - 1/r]"
    ],
    correctAnswer: "(3T/ρS)[1/r - 1/R]",
    explanation: {
      quick: "Surface energy increases → temperature decreases",
      standard: "ΔE = TΔA = mSQ",
      deep: "Volume conserved:\nN = R³/r³\n\nΔA = 4πR²(R/r − 1)\n\nEnergy:\nTΔA = mSQ\n\nSolving:\nQ = (3T/ρS)(1/r − 1/R)\n\nTherefore correct answer."
    }
  }
];