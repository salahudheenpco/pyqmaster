export const jeePeriodicTableQuestions = [
  {
    id: "jee-2026-chemistry-periodic-table-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Periodic Table",
    topic: "Periodic trends",
    year: 2026,
    questionText:
      "Which of the following represents the correct trend for the mentioned property?\nA. F > P > S > B — First ionization energy\nB. Cl > F > S > P — Electron affinity\nC. K > Al > Mg > B — Metallic character\nD. K2O > Na2O > MgO > Al2O3 — Basic character\nChoose the correct answer from the options given below:",
    options: [
      "A, B and D only",
      "A and B only",
      "B and C only",
      "A, B, C and D"
    ],
    correctAnswer: "B and C only",
    explanation: {
      quick:
        "B is correct because Cl has higher electron affinity than F, and S > P due to half-filled p-orbital stability in P. C is correct in the source trend. A and D are not taken as correct in the source key. Hence the answer is B and C only.",
      standard:
        "Let us check each statement.\n\nA. First ionization energy:\nThe given order is not accepted as correct in the source key.\n\nB. Electron affinity:\nCl > F is correct, and S > P is also correct because P has a more stable half-filled configuration.\nSo B is correct.\n\nC. Metallic character:\nMetallic character generally increases down a group and decreases across a period. The source key accepts K > Al > Mg > B as correct.\nSo C is correct.\n\nD. Basic character:\nAl2O3 is amphoteric, and the source key does not accept this full trend as correct.\nSo D is not correct.\n\nTherefore, the correct answer is B and C only.",
      deep:
        "Let us understand the question from the beginning.\n\nThis is a periodic trends question. We must test each statement carefully.\n\nStep 1: Statement A — First ionization energy\n\nAcross a period, ionization energy generally increases, but there are exceptions.\nAlthough fluorine has very high ionization energy and boron is low, the specific given sequence is not accepted as correct in the source key.\nSo A is not taken as correct.\n\nStep 2: Statement B — Electron affinity\n\nChlorine has higher electron affinity than fluorine.\nThis is a standard exception because fluorine is very small and has greater electron-electron repulsion in its compact shell.\nAlso sulfur has higher electron affinity than phosphorus because phosphorus has a relatively stable half-filled p-orbital configuration.\nSo B is correct.\n\nStep 3: Statement C — Metallic character\n\nMetallic character increases down a group and decreases across a period.\nPotassium is highly metallic.\nBoron is the least metallic among the listed elements.\nThe source key accepts the sequence K > Al > Mg > B as correct.\nSo C is correct in source-key terms.\n\nStep 4: Statement D — Basic character of oxides\n\nK2O and Na2O are strongly basic.\nMgO is basic.\nAl2O3 is amphoteric, not simply basic in the same sense.\nSo the entire sequence is not accepted as correct in the source.\n\nTherefore only B and C are correct.\n\nCommon mistake:\nStudents often assume every left-to-right trend is perfectly smooth, but half-filled stability and amphoteric behavior create exceptions.\n\nTherefore, the correct answer is B and C only."
    }
  }
];

export default jeePeriodicTableQuestions;