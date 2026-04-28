import { PYQQuestion } from "@/lib/types";

export const bitsatMechanicalPropertiesOfSolidsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-mechanical-properties-of-solids-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Solids",
    topic: "Strain in a wire due to load at midpoint",
    year: 2017,
    questionText: "A mild steel wire of length 2L and cross-sectional area A is stretched, well within the elastic limit, horizontally between two pillars as shown in figure. A mass m is suspended from the mid-point of the wire. If the vertical displacement of the midpoint is x, then the strain in the wire is",
    options: ["x² / (2L²)", "x² / L", "x² / (2L)", "x² / (4L²)"],
    correctAnswer: "x² / (2L²)",
    explanation: {
      quick: "Use extension from geometry: new half-length = √(L² + x²).",
      standard: "Each half of the wire changes from length L to √(L² + x²). For small x, extension of each half ≈ x²/(2L). Total extension = x²/L. Original length = 2L, so strain = x²/(2L²).",
      deep: "Let us solve this geometrically.\n\nOriginal wire length = 2L.\n\nWhen the midpoint moves down by x, each half of the wire forms a right triangle.\n\nOriginal half-length = L\nNew half-length = √(L² + x²)\n\nIncrease in each half:\nΔl = √(L² + x²) − L\n\nFor small x:\n√(L² + x²) ≈ L + x²/(2L)\n\nSo extension of each half:\nΔl ≈ x²/(2L)\n\nTotal extension of wire:\n2Δl = x²/L\n\nStrain = change in length / original length\n= (x²/L) / (2L)\n= x²/(2L²)\n\nTherefore, the correct answer is x² / (2L²)."
    }
  },
  {
    id: "bitsat-2018-physics-mechanical-properties-of-solids-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Solids",
    topic: "Breaking Stress",
    year: 2018,
    questionText: "Breaking stress of a steel wire is p and the density of steel is ρ. The greatest length of steel wire that can hang vertically without breaking is",
    options: ["p/(ρg)", "p/(2ρg)", "2p/(ρg)", "None of these"],
    correctAnswer: "p/(ρg)",
    explanation: {
      quick: "Maximum stress at the top equals weight of wire divided by area.",
      standard: "For a vertical hanging wire, stress at the top = weight/area = ρlAg/A = ρlg. At breaking point, p = ρlg, so l = p/(ρg).",
      deep: "Let the wire have length l and cross-sectional area A.\n\nVolume of wire = Al\nMass of wire = ρAl\nWeight of wire = ρAlg\n\nThe top of the wire supports the weight of the entire wire.\n\nStress at the top:\nStress = Force / Area\n= ρAlg / A\n= ρlg\n\nFor the wire to be just about to break:\nρlg = p\n\nSo:\nl = p/(ρg)\n\nTherefore, the greatest length is p/(ρg)."
    }
  }
];