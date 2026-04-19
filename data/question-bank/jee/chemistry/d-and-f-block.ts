export const jeeDAndFBlockQuestions = [
  {
    id: "jee-2026-chemistry-d-and-f-block-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "d-and-f-Block Elements",
    topic: "Disproportionation of manganate",
    year: 2026,
    questionText:
      "MnO4^2−, in acidic medium, disproportionates to:",
    options: [
      "Mn2O7 and MnO",
      "Mn2O7 and MnO2",
      "MnO4− and MnO",
      "MnO4− and MnO2"
    ],
    correctAnswer: "MnO4− and MnO2",
    explanation: {
      quick:
        "In MnO4^2−, Mn is in +6 oxidation state. In acidic medium it disproportionates: one part gets oxidized to +7 in MnO4− and the other gets reduced to +4 in MnO2. So the products are MnO4− and MnO2.",
      standard:
        "Find oxidation state of Mn in MnO4^2−:\nLet oxidation state be x.\nThen,\nx + 4(-2) = -2\n=> x = +6\n\nIn disproportionation, the same species undergoes oxidation and reduction.\nSo Mn(+6) can:\n- oxidize to Mn(+7) in MnO4−\n- reduce to Mn(+4) in MnO2\n\nHence the products are MnO4− and MnO2.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the manganate ion:\nMnO4^2−\n\nStep 1: Find oxidation state of manganese\n\nLet oxidation state of Mn be x.\nEach oxygen is -2.\nSo,\nx + 4(-2) = -2\nx - 8 = -2\nx = +6\n\nSo manganese is in +6 oxidation state here.\n\nStep 2: Meaning of disproportionation\n\nIn a disproportionation reaction, the same species is simultaneously oxidized and reduced.\nThat means the manganese in +6 state must split into:\n- a higher oxidation state product\n- a lower oxidation state product\n\nStep 3: Identify the products\n\nHigher oxidation state than +6 is +7, which is found in permanganate:\nMnO4−\n\nLower oxidation state than +6 is +4, which is found in manganese dioxide:\nMnO2\n\nSo manganate disproportionates into:\nMnO4− and MnO2\n\nStep 4: Final answer\n\nTherefore, the correct products are:\nMnO4− and MnO2\n\nCommon mistake:\nA common mistake is choosing MnO, where Mn is +2, but in the standard acidic disproportionation of manganate, MnO2 is the expected reduced product here.\n\nTherefore, the correct answer is MnO4− and MnO2."
    }
  }
];

export default jeeDAndFBlockQuestions;