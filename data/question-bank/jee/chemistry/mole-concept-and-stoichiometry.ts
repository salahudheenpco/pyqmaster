export const jeeMoleConceptAndStoichiometryQuestions = [
  {
    id: "jee-2026-chemistry-mole-concept-and-stoichiometry-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Mole Concept and Stoichiometry",
    topic: "Stoichiometry of Ca and HCl reaction",
    year: 2026,
    questionText:
      "14.0 g of calcium metal is allowed to react with excess HCl at 1.0 atm pressure and 273 K. Which of the following statements is incorrect? [Given: Molar mass in g mol^(-1) Ca = 40, Cl = 35.5, H = 1]",
    options: [
      "0.35 mol H2 gas is evolved",
      "7.84 L H2 gas is evolved",
      "The limiting reagent is calcium metal",
      "33.3 g of CaCl2 is produced"
    ],
    correctAnswer: "33.3 g of CaCl2 is produced",
    explanation: {
      quick:
        "Moles of Ca = 14/40 = 0.35 mol. Reaction: Ca + 2HCl → CaCl2 + H2. Since HCl is excess, Ca is limiting. So H2 formed = 0.35 mol and volume at STP = 0.35×22.4 = 7.84 L. CaCl2 formed = 0.35 mol, mass = 0.35×111 = 38.85 g, not 33.3 g. So that statement is incorrect.",
      standard:
        "Balanced equation:\nCa + 2HCl → CaCl2 + H2\n\nMoles of calcium:\n= 14.0 / 40 = 0.35 mol\n\nSince HCl is in excess, Ca is the limiting reagent.\n\nFrom stoichiometry:\n1 mol Ca gives 1 mol H2 and 1 mol CaCl2\nSo:\nH2 formed = 0.35 mol\nVolume of H2 at 273 K and 1 atm = 0.35 × 22.4 = 7.84 L\n\nNow molar mass of CaCl2 = 40 + 2×35.5 = 111 g/mol\nMass of CaCl2 = 0.35 × 111 = 38.85 g\n\nSo the incorrect statement is:\n33.3 g of CaCl2 is produced",
      deep:
        "Let us understand the question from the beginning.\n\nWe are told that calcium reacts with excess HCl.\nThe balanced reaction is:\nCa + 2HCl → CaCl2 + H2\n\nStep 1: Find moles of calcium\n\nMass of calcium = 14.0 g\nMolar mass of calcium = 40 g/mol\n\nSo,\nMoles of Ca = 14.0 / 40 = 0.35 mol\n\nStep 2: Identify limiting reagent\n\nHCl is given to be in excess.\nTherefore calcium is the limiting reagent.\n\nSo statement:\n'The limiting reagent is calcium metal'\nis correct.\n\nStep 3: Find moles of hydrogen gas produced\n\nFrom the balanced equation:\n1 mol Ca → 1 mol H2\n\nSo,\n0.35 mol Ca → 0.35 mol H2\n\nThus statement:\n'0.35 mol H2 gas is evolved'\nis correct.\n\nStep 4: Find volume of hydrogen gas at STP\n\nAt 273 K and 1 atm, 1 mol gas occupies 22.4 L.\n\nSo,\nVolume of H2 = 0.35 × 22.4 = 7.84 L\n\nThus statement:\n'7.84 L H2 gas is evolved'\nis correct.\n\nStep 5: Find mass of CaCl2 produced\n\nAgain from stoichiometry:\n1 mol Ca → 1 mol CaCl2\n\nSo moles of CaCl2 formed = 0.35 mol\n\nMolar mass of CaCl2 = 40 + 2(35.5)\n= 40 + 71\n= 111 g/mol\n\nMass of CaCl2 = 0.35 × 111\n= 38.85 g\n\nSo the statement:\n'33.3 g of CaCl2 is produced'\nis incorrect.\n\nCommon mistake:\nA common mistake is using the wrong molar mass for CaCl2 or forgetting that one mole of Ca gives one mole of CaCl2.\n\nTherefore, the incorrect statement is:\n33.3 g of CaCl2 is produced."
    }
  }
];

export default jeeMoleConceptAndStoichiometryQuestions;