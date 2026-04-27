import { PYQQuestion } from "@/lib/types";

export const bitsatMoleConceptStoichiometryQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-mole-concept-stoichiometry-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Mole Concept and Stoichiometry",
    topic: "Equivalent weight from oxide composition",
    year: 2017,
    questionText: "4 g of copper was dissolved in concentrated HNO₃. The copper nitrate thus obtained gave 5 g of its oxide on strong heating. The equivalent weight of copper is",
    options: ["23", "32", "12", "20"],
    correctAnswer: "32",
    explanation: {
      quick: "The oxide contains 4 g copper and 1 g oxygen. Equivalent weight of Cu = mass of Cu combining with 8 g oxygen = 32.",
      standard: "The oxide obtained weighs 5 g and contains 4 g copper, so oxygen present = 1 g. If 1 g oxygen combines with 4 g copper, then 8 g oxygen will combine with 4 × 8 = 32 g copper. Hence, equivalent weight of copper is 32.",
      deep: "Let us solve it step by step.\n\nGiven:\nMass of copper = 4 g\nMass of oxide formed = 5 g\n\nSo, mass of oxygen in the oxide:\n5 - 4 = 1 g\n\nEquivalent weight means the mass of the element that combines with 8 g of oxygen.\n\nHere:\n1 g oxygen combines with 4 g copper.\n\nSo:\n8 g oxygen will combine with 4 × 8 = 32 g copper.\n\nTherefore, equivalent weight of copper is 32."
    }
  },
  {
    id: "bitsat-2017-chemistry-mole-concept-stoichiometry-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Mole Concept and Stoichiometry",
    topic: "Comparing number of moles from given masses",
    year: 2017,
    questionText: "Which of the following has the largest number of moles?",
    options: [
      "8 g of oxygen atoms",
      "16 g of oxygen gas",
      "14 g of nitrogen gas",
      "All have the same number of moles"
    ],
    correctAnswer: "All have the same number of moles",
    explanation: {
      quick: "Each option represents 0.5 mole.",
      standard: "8 g oxygen atoms = 8/16 = 0.5 mol. 16 g oxygen gas = 16/32 = 0.5 mol. 14 g nitrogen gas = 14/28 = 0.5 mol. Therefore, all have same number of moles.",
      deep: "Let us calculate each option carefully.\n\nFormula:\nNumber of moles = given mass / molar mass\n\n1. Oxygen atoms:\nAtomic mass of O = 16 g/mol\nMoles = 8/16 = 0.5 mol\n\n2. Oxygen gas:\nO₂ has molar mass = 32 g/mol\nMoles = 16/32 = 0.5 mol\n\n3. Nitrogen gas:\nN₂ has molar mass = 28 g/mol\nMoles = 14/28 = 0.5 mol\n\nAll three options contain 0.5 mole.\n\nTherefore, all have the same number of moles."
    }
  },
  {
    id: "bitsat-2018-chemistry-mole-concept-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Mole Concept and Stoichiometry",
    topic: "Empirical Formula",
    year: 2018,
    questionText: "Empirical formula CH₂O, molecular mass 180. Molecular formula is",
    options: ["C₉H₁₈O₉", "CH₂O", "C₆H₁₂O₆", "C₂H₄O₂"],
    correctAnswer: "C₆H₁₂O₆",
    explanation: {
      quick: "Empirical formula mass of CH₂O is 30. 180/30 = 6, so molecular formula is C₆H₁₂O₆.",
      standard: "First calculate empirical formula mass: C + 2H + O = 12 + 2 + 16 = 30. Given molecular mass = 180. Multiplying factor = 180/30 = 6. Therefore, molecular formula = (CH₂O)₆ = C₆H₁₂O₆.",
      deep: "Let us solve this step by step.\n\nEmpirical formula = CH₂O\n\nFirst calculate empirical formula mass:\nC = 12\nH₂ = 2 × 1 = 2\nO = 16\n\nTotal empirical formula mass = 12 + 2 + 16 = 30\n\nGiven molecular mass = 180\n\nNow find multiplying factor:\nFactor = molecular mass / empirical formula mass\nFactor = 180 / 30 = 6\n\nSo multiply every atom in empirical formula by 6:\n(CH₂O)₆ = C₆H₁₂O₆\n\nTherefore, the molecular formula is C₆H₁₂O₆."
    }
  }
];