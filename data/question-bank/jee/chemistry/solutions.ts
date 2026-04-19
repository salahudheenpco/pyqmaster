export const jeeSolutionsQuestions = [
  {
    id: "jee-2026-chemistry-solutions-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Colligative properties and molar mass determination",
    year: 2026,
    questionText:
      "Elements P and Q form two types of non-volatile, non-ionizable compounds PQ and PQ2. When 1 g of PQ is dissolved in 50 g of solvent A, ΔTb = 1.176 K, and when 1 g of PQ2 is dissolved in 50 g of solvent A, ΔTb = 0.689 K. (Kb of A = 5 K kg mol^(-1)) The molar masses of elements P and Q respectively are:",
    options: ["70, 110", "60, 25", "25, 60", "65, 145"],
    correctAnswer: "25, 60",
    explanation: {
      quick:
        "Use ΔTb = Kb·m. For PQ: 1.176 = 5 × (1/MPQ)/0.05, so MPQ ≈ 85. For PQ2: 0.689 = 5 × (1/MPQ2)/0.05, so MPQ2 ≈ 145. Thus P + Q = 85 and P + 2Q = 145. Subtract to get Q = 60 and P = 25.",
      standard:
        "For a non-volatile non-ionizable solute:\nΔTb = Kb × m\nwhere m = moles of solute / kg of solvent\n\nFor PQ:\n1.176 = 5 × (1/MPQ) / 0.05\n=> 1.176 = 100 / MPQ\n=> MPQ ≈ 85\n\nFor PQ2:\n0.689 = 5 × (1/MPQ2) / 0.05\n=> 0.689 = 100 / MPQ2\n=> MPQ2 ≈ 145\n\nNow,\nP + Q = 85\nP + 2Q = 145\nSubtracting gives:\nQ = 60\nThen,\nP = 25\n\nTherefore the molar masses are 25 and 60.",
      deep:
        "Let us understand the question from the beginning.\n\nThis is a boiling point elevation problem.\nFor non-volatile, non-ionizable solutes, the formula is:\nΔTb = Kb m\n\nwhere m is molality.\n\nStep 1: Write molality in terms of molar mass\n\nMolality = moles of solute / kg of solvent\n\nSince 1 g solute is used and solvent is 50 g = 0.05 kg,\nfor a solute of molar mass M:\n\nm = (1/M) / 0.05 = 20/M\n\nTherefore,\nΔTb = Kb × 20/M\n\nGiven Kb = 5,\nΔTb = 100/M\n\nStep 2: For compound PQ\n\nGiven ΔTb = 1.176 K\nSo,\n1.176 = 100 / MPQ\n=> MPQ = 100 / 1.176\n≈ 85\n\nThus,\nM(P) + M(Q) = 85 ...(1)\n\nStep 3: For compound PQ2\n\nGiven ΔTb = 0.689 K\nSo,\n0.689 = 100 / MPQ2\n=> MPQ2 = 100 / 0.689\n≈ 145\n\nThus,\nM(P) + 2M(Q) = 145 ...(2)\n\nStep 4: Solve the two equations\n\nSubtract (1) from (2):\nQ = 145 - 85 = 60\n\nThen from (1):\nP = 85 - 60 = 25\n\nStep 5: Final answer\n\nSo the molar masses of P and Q are:\n25 and 60\n\nCommon mistake:\nA common mistake is forgetting to convert 50 g solvent into 0.05 kg when using molality.\n\nTherefore, the correct answer is 25, 60."
    }
  }
];

export default jeeSolutionsQuestions;