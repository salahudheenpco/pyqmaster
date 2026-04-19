export const jeeAtomicStructureQuestions = [
  {
    id: "jee-2026-chemistry-atomic-structure-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Atomic Structure",
    topic: "Hydrogen spectrum statements",
    year: 2026,
    questionText:
      "Given below are two statements:\nStatement I: When an electric discharge is passed through gaseous hydrogen, the hydrogen molecules dissociate and the energetically excited hydrogen atoms produce electromagnetic radiation of discrete frequencies.\nStatement II: The frequency of second line of Balmer series obtained from He+ is equal to that of first line of Lyman series obtained from hydrogen atom.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Statement I is true but Statement II is false",
      "Both Statement I and Statement II are true",
      "Statement I is false but Statement II is true",
      "Both Statement I and Statement II are false"
    ],
    correctAnswer: "Both Statement I and Statement II are true",
    explanation: {
      quick:
        "Statement I is true because excited hydrogen atoms emit line spectra of discrete frequencies. Statement II is also true: for He+, second Balmer line is n=4→2 with frequency proportional to 4(1/2² - 1/4²) = 3/4, and first Lyman line for H is n=2→1 with frequency proportional to 1(1 - 1/4) = 3/4.",
      standard:
        "Statement I:\nElectric discharge dissociates hydrogen molecules and excites hydrogen atoms. These excited atoms emit radiation of discrete frequencies. So Statement I is true.\n\nStatement II:\nFor hydrogen-like species,\nν ∝ Z^2 (1/n1^2 - 1/n2^2)\n\nFor He+, second Balmer line means transition 4 → 2:\nν ∝ 2^2 (1/2^2 - 1/4^2)\n= 4(1/4 - 1/16)\n= 4(3/16)\n= 3/4\n\nFor H, first Lyman line means transition 2 → 1:\nν ∝ 1^2 (1 - 1/4)\n= 3/4\n\nSo Statement II is also true.\nHence both statements are true.",
      deep:
        "Let us understand the question from the beginning.\n\nThis question tests the hydrogen spectrum and hydrogen-like ions.\n\nStep 1: Statement I\n\nWhen electric discharge passes through hydrogen gas, energy is supplied.\nThis can:\n- dissociate H2 molecules into H atoms\n- excite the electrons in hydrogen atoms to higher energy levels\n\nWhen these excited electrons come back to lower levels, they emit photons of definite energies.\nThat produces a line spectrum with discrete frequencies.\n\nSo Statement I is true.\n\nStep 2: Statement II\n\nWe use the frequency relation for hydrogen-like species:\nν ∝ Z^2 (1/n1^2 - 1/n2^2)\n\nFor He+:\nZ = 2\nSecond Balmer line means transition from n = 4 to n = 2.\n\nSo,\nν_He+ ∝ 2^2 (1/2^2 - 1/4^2)\n= 4(1/4 - 1/16)\n= 4(3/16)\n= 3/4\n\nFor hydrogen atom:\nZ = 1\nFirst Lyman line means transition from n = 2 to n = 1.\n\nSo,\nν_H ∝ 1^2 (1 - 1/4)\n= 3/4\n\nThus both frequencies are equal.\nSo Statement II is true.\n\nStep 3: Final conclusion\n\nBoth Statement I and Statement II are true.\n\nCommon mistake:\nStudents often use the wrong upper level for the second Balmer line. Balmer series begins at 3→2, so the second line is 4→2.\n\nTherefore, the correct answer is: both statements are true."
    }
  }
];

export default jeeAtomicStructureQuestions;