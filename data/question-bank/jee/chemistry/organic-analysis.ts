export const jeeOrganicAnalysisQuestions = [
  {
    id: "jee-2026-chemistry-organic-analysis-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Organic Analysis",
    topic: "Carius method for sulphur estimation",
    year: 2026,
    questionText:
      "In Carius method, 0.75 g of an organic compound gave 1.2 g of barium sulphate. Find percentage of sulphur. (Molar mass of S = 32 g mol^(-1), molar mass of BaSO4 = 233 g mol^(-1))",
    options: ["16.48%", "10.30%", "21.97%", "4.55%"],
    correctAnswer: "21.97%",
    explanation: {
      quick:
        "Mass of sulphur in 1.2 g BaSO4 = 1.2 × (32/233) = 0.1648 g. Percentage of sulphur = (0.1648/0.75) × 100 = 21.97%.",
      standard:
        "In Carius method, sulphur is converted into BaSO4.\n\nMass of sulphur present in 1.2 g BaSO4:\n= 1.2 × (32/233)\n= 0.1648 g\n\nNow percentage of sulphur in the sample:\n= (0.1648 / 0.75) × 100\n= 21.97%",
      deep:
        "Let us understand the question from the beginning.\n\nIn Carius method, sulphur present in the organic compound is finally converted into barium sulphate, BaSO4.\nSo if we know the mass of BaSO4 formed, we can find how much sulphur was originally present.\n\nStep 1: Find mass fraction of sulphur in BaSO4\n\nMolar mass of BaSO4 = 233 g/mol\nMass of sulphur in one mole of BaSO4 = 32 g\n\nSo the fraction of sulphur in BaSO4 is:\n32/233\n\nStep 2: Find mass of sulphur in 1.2 g BaSO4\n\nMass of sulphur = 1.2 × (32/233)\n= 0.1648 g approximately\n\nStep 3: Find percentage of sulphur in the original sample\n\nOriginal mass of organic compound = 0.75 g\n\nSo,\n%S = (mass of S / mass of sample) × 100\n= (0.1648 / 0.75) × 100\n= 21.97%\n\nStep 4: Final answer\n\nTherefore, the percentage of sulphur is 21.97%.\n\nCommon mistake:\nA common mistake is to divide by the molar mass of sulphur instead of the molar mass of BaSO4 when finding the fraction.\n\nTherefore, the correct answer is 21.97%."
    }
  }
];

export default jeeOrganicAnalysisQuestions;