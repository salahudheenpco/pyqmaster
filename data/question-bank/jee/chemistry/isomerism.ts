export const jeeIsomerismQuestions = [
  {
    id: "jee-2026-chemistry-isomerism-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Isomerism",
    topic: "Functional, metameric and chain isomerism",
    year: 2026,
    questionText:
      "Identify correct statements from the following:\nA. Propanal and propanone are functional isomers.\nB. Ethoxyethane and methoxypropane are metamers.\nC. But-2-ene shows optical isomerism.\nD. But-1-ene and but-2-ene are functional isomers.\nE. Pentane and 2,2-dimethylpropane are chain isomers.\nChoose the correct answer from the options given below:",
    options: [
      "A, B and C only",
      "B, C and D only",
      "A, B and E only",
      "C, D and E only"
    ],
    correctAnswer: "A, B and E only",
    explanation: {
      quick:
        "A is true: aldehyde and ketone with same formula. B is true: ethers with different alkyl groups on either side are metamers. C is false: but-2-ene is not optically active. D is false: but-1-ene and but-2-ene are positional, not functional, isomers. E is true: pentane and neopentane are chain isomers. So the answer is A, B and E only.",
      standard:
        "Check each statement:\n\nA. Propanal and propanone both have formula C3H6O but different functional groups, so they are functional isomers. True.\n\nB. Ethoxyethane and methoxypropane are ethers with same molecular formula but different alkyl groups on either side of oxygen, so they are metamers. True.\n\nC. But-2-ene does not show optical isomerism because it has no chiral centre. False.\n\nD. But-1-ene and but-2-ene are positional isomers, not functional isomers. False.\n\nE. Pentane and 2,2-dimethylpropane differ in carbon skeleton, so they are chain isomers. True.\n\nHence correct statements are A, B and E only.",
      deep:
        "Let us understand the question from the beginning.\n\nThis question tests different kinds of structural isomerism.\n\nStep 1: Statement A\n\nPropanal is an aldehyde.\nPropanone is a ketone.\nBoth have the same molecular formula C3H6O but different functional groups.\nSo they are functional isomers.\n\nA is true.\n\nStep 2: Statement B\n\nEthoxyethane and methoxypropane are both ethers.\nThey have the same molecular formula but differ in the distribution of alkyl groups around the oxygen atom.\nThat is metamerism.\n\nB is true.\n\nStep 3: Statement C\n\nBut-2-ene does not have a chiral carbon.\nIt may show geometrical isomerism (cis-trans), but not optical isomerism.\n\nC is false.\n\nStep 4: Statement D\n\nBut-1-ene and but-2-ene both are alkenes.\nThe functional group is the same.\nOnly the position of the double bond changes.\nSo they are positional isomers, not functional isomers.\n\nD is false.\n\nStep 5: Statement E\n\nPentane and 2,2-dimethylpropane have the same molecular formula C5H12 but different carbon chain arrangements.\nThat is chain isomerism.\n\nE is true.\n\nSo the correct set is:\nA, B and E only.\n\nCommon mistake:\nStudents often confuse optical isomerism with geometrical isomerism in alkenes.\n\nTherefore, the correct answer is A, B and E only."
    }
  }
];

export default jeeIsomerismQuestions;