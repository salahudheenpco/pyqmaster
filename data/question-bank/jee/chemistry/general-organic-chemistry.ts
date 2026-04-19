export const jeeGeneralOrganicChemistryQuestions = [
  {
    id: "jee-2026-chemistry-general-organic-chemistry-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "General Organic Chemistry",
    topic: "Carbocation stability",
    year: 2026,
    questionText:
      "From the following, the least stable structure is:",
    options: [
      "Primary carbocation",
      "Secondary carbocation",
      "Tertiary carbocation",
      "Vinylic carbocation"
    ],
    correctAnswer: "Vinylic carbocation",
    explanation: {
      quick:
        "A vinylic carbocation is least stable because the positive charge is on an sp-hybridized or sp2-bonded carbon directly involved in a double-bond environment, which is much less favorable than ordinary alkyl carbocations. Hence it is less stable than primary, secondary, and tertiary carbocations.",
      standard:
        "Carbocation stability generally increases as:\ntertiary > secondary > primary > methyl\n\nBut vinylic carbocations are even less stable than ordinary alkyl carbocations because the positive charge is associated with a carbon involved in a double-bond framework, which does not get normal hyperconjugative stabilization.\n\nTherefore, among the given structures, the least stable is the vinylic carbocation.",
      deep:
        "Let us understand the question from the beginning.\n\nCarbocation stability depends on how well the positive charge can be stabilized.\nThe main stabilizing factors are:\n1. hyperconjugation\n2. inductive effect\n3. resonance, if available\n\nStep 1: Compare ordinary alkyl carbocations\n\nAmong ordinary alkyl carbocations:\ntertiary > secondary > primary\n\nThis is because more alkyl groups donate electron density and provide more hyperconjugation.\n\nStep 2: Understand vinylic carbocation\n\nIn a vinylic carbocation, the positive charge is on a carbon atom directly associated with a double bond.\nThis type of carbocation is very unstable because:\n- it does not get normal stabilization like alkyl carbocations\n- the electron-deficient carbon is in an unfavorable hybridization environment\n\nSo it is even less stable than a primary carbocation.\n\nStep 3: Final conclusion\n\nHence among the listed structures, the least stable is the vinylic carbocation.\n\nCommon mistake:\nSome students choose primary carbocation because they remember tertiary > secondary > primary. But vinylic carbocations are worse than ordinary primary carbocations.\n\nTherefore, the correct answer is vinylic carbocation."
    }
  }
];

export default jeeGeneralOrganicChemistryQuestions;