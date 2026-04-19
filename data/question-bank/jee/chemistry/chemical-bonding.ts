export const jeeChemicalBondingQuestions = [
  {
    id: "jee-2026-chemistry-chemical-bonding-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Molecular geometry and incomplete octet",
    year: 2026,
    questionText:
      "Given below are two statements:\nStatement I: The number of species among SF4, NH4+, [NiCl4]2−, XeF4, [PtCl4]2−, SeF4 and [Ni(CN)4]2− that have tetrahedral geometry is 3.\nStatement II: In the set {NO2, BeH2, BF3, AlCl3}, all the molecules have incomplete octet around central atom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Statement I and Statement II are true",
      "Both Statement I and Statement II are false",
      "Statement I is false but Statement II is true",
      "Statement I is true but Statement II is false"
    ],
    correctAnswer: "Statement I is true but Statement II is false",
    explanation: {
      quick:
        "Tetrahedral species among the listed set are NH4+, [NiCl4]2− and [Ni(CN)4]2− as treated in the source key, so Statement I is taken true. Statement II is false because the set does not uniformly satisfy the incomplete-octet criterion in the source interpretation. Hence the answer is: Statement I is true but Statement II is false.",
      standard:
        "Statement I:\nFrom the source key, the count of tetrahedral species is taken as 3.\nSo Statement I is true.\n\nStatement II:\nThe set {NO2, BeH2, BF3, AlCl3} is not accepted as all having incomplete octet around the central atom in the source-key treatment.\nSo Statement II is false.\n\nTherefore, the correct answer is:\nStatement I is true but Statement II is false.",
      deep:
        "Let us understand the question from the beginning.\n\nThis is a mixed question involving molecular geometry and octet rule exceptions.\n\nStep 1: Statement I\n\nWe check the geometries in the listed set.\nAccording to the source-key treatment, the number of tetrahedral species is 3.\nSo Statement I is taken as true.\n\nStep 2: Statement II\n\nThe species listed are:\nNO2, BeH2, BF3, AlCl3\n\nSome of these are standard octet-deficient species such as BeH2 and BF3.\nHowever, the source-key treatment does not accept the statement that all of them uniformly have incomplete octet around the central atom in the required sense.\nSo Statement II is false.\n\nStep 3: Final conclusion\n\nTherefore the correct answer is:\nStatement I is true but Statement II is false.\n\nAccuracy note:\nThis question is source-key sensitive because the exact interpretation of the listed species in the source is what determines the final option. This file preserves the source-key answer.\n\nTherefore, the correct answer is:\nStatement I is true but Statement II is false."
    }
  }
];

export default jeeChemicalBondingQuestions;
