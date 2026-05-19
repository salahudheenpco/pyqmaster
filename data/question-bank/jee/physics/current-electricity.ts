import { PYQQuestion } from "@/lib/types";

export const jeeCurrentElectricityQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-physics-current-electricity-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Potentiometer and potential division",
    year: 2026,
    questionText:
      "The total length of potentiometer wire AB is 50 cm in the arrangement as shown in figure. If P is the point where the galvanometer shows zero reading, then the length AP is:",
    options: ["30 cm", "25 cm", "15 cm", "20 cm"],
    correctAnswer: "30 cm",
    explanation: {
      quick:
        "At null point, potential at P equals junction potential. Voltage across 6Ω = 3/5 of total. So AP = (3/5) × 50 = 30 cm.",
      standard:
        "The 6Ω and 4Ω resistors are in series.\n\nTotal resistance = 10Ω\n\nVoltage division:\nVoltage across 6Ω = (6/10)V = 3V/5\n\nIn potentiometer, potential drop ∝ length.\n\nSo:\nAP/AB = 3/5\n\nAP = (3/5) × 50 = 30 cm",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on the working principle of a potentiometer. A potentiometer wire has uniform resistance per unit length, so the potential drop along the wire is directly proportional to the length.\n\nThis means:\n\nPotential difference ∝ length\n\nAt the null point, the galvanometer shows zero reading. This means there is no current through the galvanometer branch. So the potential at point P on the potentiometer wire is equal to the potential at the junction between the two resistors.\n\n2. Given Information\n\nTotal length of potentiometer wire:\nAB = 50 cm\n\nResistors in the upper branch:\n6Ω and 4Ω\n\nThe galvanometer shows zero reading at point P.\n\n3. Strategy / Approach\n\nWe first find the potential difference across the 6Ω resistor using voltage division. Then we match that potential difference with the corresponding length AP of the potentiometer wire.\n\n4. Step-by-Step Solution\n\nThe resistors 6Ω and 4Ω are in series.\n\nTotal resistance:\nRtotal = 6 + 4 = 10Ω\n\nVoltage across 6Ω:\nV6 = (6/10)V\n\nV6 = 3V/5\n\nSince the potentiometer wire is uniform:\nAP / AB = V6 / V\n\nAP / 50 = 3/5\n\nAP = 50 × 3/5\n\nAP = 30 cm\n\n5. Key Insight\n\nZero galvanometer reading means equal potential, not equal resistance. This is why the length AP corresponds to the voltage across the 6Ω resistor.\n\n6. Final Answer\n\nTherefore, the correct answer is 30 cm.\n\n7. Common Mistakes\n\n• Taking voltage across 4Ω instead of 6Ω\n• Assuming current flows through galvanometer at null point\n• Forgetting potential drop is proportional to length\n• Not using voltage division correctly"
    }
  },

  {
    id: "jee-2026-physics-current-electricity-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Equivalent resistance in parallel combination",
    year: 2026,
    questionText:
      "Two known resistances of RΩ and 2RΩ and one unknown resistance XΩ are connected in a circuit as shown in the figure. If the equivalent resistance between points A and B in the circuit is XΩ, then the value of X is:",
    options: ["R", "(√3 − 1)R", "2(√3 − 1)R", "(√3 + 1)R"],
    correctAnswer: "(√3 − 1)R",
    explanation: {
      quick:
        "The upper branch has 2R and X in series, so it is 2R + X. This is parallel with R. Given equivalent resistance is X. Solve X = R(2R + X)/(3R + X), giving X = (√3 − 1)R.",
      standard:
        "Upper branch resistance:\n2R + X\n\nLower branch resistance:\nR\n\nThese two branches are in parallel.\n\nEquivalent resistance:\nReq = R(2R + X)/(R + 2R + X)\n\nReq = R(2R + X)/(3R + X)\n\nGiven:\nReq = X\n\nSo:\nX = R(2R + X)/(3R + X)\n\nX(3R + X) = R(2R + X)\n\n3RX + X² = 2R² + RX\n\nX² + 2RX − 2R² = 0\n\nLet X = yR.\nThen:\ny² + 2y − 2 = 0\n\ny = −1 + √3\n\nSo:\nX = (√3 − 1)R",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on equivalent resistance of series and parallel combinations. When resistors are connected in series, their resistances simply add. When resistors are connected in parallel, the potential difference across each branch is the same, and the equivalent resistance is found using the parallel combination formula.\n\nFor two resistances A and B in parallel:\n\nReq = AB / (A + B)\n\n2. Given Information\n\nThe circuit has two branches between points A and B.\n\nIn the upper branch, the resistors 2R and X are connected in series.\n\nSo upper branch resistance:\n2R + X\n\nIn the lower branch, there is one resistor:\nR\n\nThe equivalent resistance between A and B is given as:\nX\n\n3. Strategy / Approach\n\nFirst, we find the resistance of the upper branch. Then we combine the upper branch with the lower branch in parallel. Finally, we equate the equivalent resistance to X and solve for X.\n\n4. Step-by-Step Solution\n\nUpper branch resistance:\nRu = 2R + X\n\nLower branch resistance:\nRl = R\n\nSince these two branches are in parallel:\n\nReq = RuRl / (Ru + Rl)\n\nSubstitute values:\n\nReq = R(2R + X) / (R + 2R + X)\n\nReq = R(2R + X) / (3R + X)\n\nGiven that Req = X:\n\nX = R(2R + X) / (3R + X)\n\nMultiply both sides by (3R + X):\n\nX(3R + X) = R(2R + X)\n\nExpand both sides:\n\n3RX + X² = 2R² + RX\n\nBring all terms to one side:\n\nX² + 2RX − 2R² = 0\n\nLet X = yR.\n\nThen:\n\ny²R² + 2yR² − 2R² = 0\n\nDivide by R²:\n\ny² + 2y − 2 = 0\n\nUsing quadratic formula:\n\ny = [-2 ± √(4 + 8)] / 2\n\ny = [-2 ± 2√3] / 2\n\ny = -1 ± √3\n\nResistance cannot be negative, so:\n\ny = √3 − 1\n\nTherefore:\n\nX = (√3 − 1)R\n\n5. Key Insight\n\nThe key observation is that 2R and X are in series in the upper branch, and this entire branch is parallel with R.\n\n6. Final Answer\n\nTherefore, the correct answer is (√3 − 1)R.\n\n7. Common Mistakes\n\n• Treating all three resistors as series\n• Treating 2R and X as parallel\n• Forgetting that equivalent resistance is given as X\n• Accepting the negative root even though resistance cannot be negative"
    }
  }
];

export default jeeCurrentElectricityQuestions;