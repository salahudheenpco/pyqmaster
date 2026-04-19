export const jeeCapacitanceQuestions = [
  {
    id: "jee-2026-physics-capacitance-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Capacitance",
    topic: "Parallel plate capacitor with dielectric slab",
    year: 2026,
    questionText:
      "A parallel plate capacitor has capacitance C when there is vacuum between the plates. A sheet having thickness equal to one-third of the separation between the plates and relative permittivity K is introduced between the plates. The new capacitance is:",
    options: [
      "3KC / (2K + 1)",
      "KC(2K + 1)",
      "3KC / (3K - 1)",
      "CK / (2K + 1)"
    ],
    correctAnswer: "3KC / (2K + 1)",
    explanation: {
      quick:
        "Treat the arrangement as two capacitors in series: one with dielectric thickness d/3 and permittivity Kε0, and one vacuum part with thickness 2d/3 and permittivity ε0. Then 1/Ceq = (d/3)/(Kε0A) + (2d/3)/(ε0A). Using C = ε0A/d gives Ceq = 3KC/(2K+1).",
      standard:
        "Let original separation be d and plate area be A.\nThen original capacitance is:\nC = ε0A / d\n\nA dielectric slab of thickness d/3 and dielectric constant K is inserted.\nSo the capacitor behaves like two capacitors in series:\n\n1) dielectric region:\nC1 = Kε0A / (d/3) = 3KC\n\n2) vacuum region of thickness 2d/3:\nC2 = ε0A / (2d/3) = 3C/2\n\nNow for series combination:\n1/Ceq = 1/C1 + 1/C2\n= 1/(3KC) + 2/(3C)\n\nTaking LCM:\n1/Ceq = (1 + 2K)/(3KC)\n\nSo,\nCeq = 3KC / (2K + 1)",
      deep:
        "Let us understand the question from the beginning.\n\nOriginally the capacitor has vacuum between the plates, so:\nC = ε0A / d\n\nwhere:\nA = area of plates\nd = separation between plates\n\nNow a dielectric sheet of thickness d/3 is inserted.\nIts dielectric constant is K.\nThat means the space between the plates is now divided into two regions:\n\nRegion 1:\nthickness = d/3\npermittivity = Kε0\n\nRegion 2:\nthickness = d - d/3 = 2d/3\npermittivity = ε0\n\nThese two regions behave like two capacitors in series.\n\nStep 1: Capacitance of dielectric part\n\nC1 = Kε0A / (d/3)\n= 3Kε0A/d\n= 3KC\n\nStep 2: Capacitance of vacuum part\n\nC2 = ε0A / (2d/3)\n= 3ε0A / 2d\n= 3C/2\n\nStep 3: Combine in series\n\nFor series combination:\n1/Ceq = 1/C1 + 1/C2\n\nSo,\n1/Ceq = 1/(3KC) + 1/(3C/2)\n= 1/(3KC) + 2/(3C)\n\nTake common denominator 3KC:\n1/Ceq = [1 + 2K] / (3KC)\n\nTherefore,\nCeq = 3KC / (2K + 1)\n\nCommon mistake:\nA common mistake is to think the dielectric simply multiplies the whole capacitance by K. That only happens when the full gap is filled uniformly.\n\nTherefore, the correct answer is 3KC / (2K + 1)."
    }
  }
];

export default jeeCapacitanceQuestions;