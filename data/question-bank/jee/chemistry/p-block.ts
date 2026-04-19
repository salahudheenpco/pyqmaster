export const jeePBlockQuestions = [
  {
    id: "jee-2026-chemistry-p-block-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "p-Block Elements",
    topic: "Amphoteric oxides and BF3 properties",
    year: 2026,
    questionText:
      "Given below are two statements:\nStatement I: The number of pairs among [SiO2, CO2], [SnO, SnO2], [PbO, PbO2] and [GeO, GeO2], which contain oxides that are both amphoteric is 2.\nStatement II: BF3 is an electron deficient molecule, can act as a Lewis acid, forms adduct with NH3 and has trigonal planar geometry.\nIn the light of the above statements, choose the correct answer from the options given below:",
    options: [
      "Both Statement I and Statement II are false",
      "Statement I is true but Statement II is false",
      "Both Statement I and Statement II are true",
      "Statement I is false but Statement II is true"
    ],
    correctAnswer: "Statement I is false but Statement II is true",
    explanation: {
      quick:
        "Statement I is false because the number of pairs containing two amphoteric oxides is not 2. Statement II is true: BF3 is electron deficient, Lewis acidic, forms BF3·NH3 and is trigonal planar.",
      standard:
        "Check Statement I:\nSiO2 and CO2 are acidic oxides, not both amphoteric.\nSnO and SnO2 are amphoteric.\nPbO and PbO2 are amphoteric.\nGeO and GeO2 are also generally treated as amphoteric in this context.\nSo the number of such pairs is not 2.\nTherefore Statement I is false.\n\nCheck Statement II:\nBF3 has only 6 electrons around boron, so it is electron deficient.\nIt behaves as a Lewis acid.\nIt forms adduct with NH3.\nIts geometry is trigonal planar.\nSo Statement II is true.\n\nHence the correct answer is: Statement I is false but Statement II is true.",
      deep:
        "Let us understand the question from the beginning.\n\nThis question has two independent statements.\n\nStep 1: Statement I\n\nWe need to count how many listed pairs contain oxides that are both amphoteric.\n\nConsider the pairs:\n1. [SiO2, CO2]\nThese are acidic oxides, not both amphoteric.\n\n2. [SnO, SnO2]\nBoth are amphoteric.\n\n3. [PbO, PbO2]\nBoth are amphoteric.\n\n4. [GeO, GeO2]\nThese are also treated as amphoteric in this source context.\n\nSo the number is not 2.\nTherefore Statement I is false.\n\nStep 2: Statement II\n\nBF3 is electron deficient because boron has only 6 electrons in its valence shell.\nTherefore it can accept an electron pair and act as a Lewis acid.\nIt forms adduct with NH3, namely BF3·NH3.\nAlso, BF3 has sp2 hybridization and trigonal planar geometry.\n\nSo Statement II is true.\n\nStep 3: Final answer\n\nStatement I is false but Statement II is true.\n\nCommon mistake:\nStudents often forget that BF3 is one of the standard examples of an electron-deficient Lewis acid.\n\nTherefore, the correct answer is:\nStatement I is false but Statement II is true."
    }
  }
];

export default jeePBlockQuestions;