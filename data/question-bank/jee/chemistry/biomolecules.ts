export const jeeBiomoleculesQuestions = [
  {
    id: "jee-2026-chemistry-biomolecules-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Biomolecules",
    topic: "Properties of amino acids",
    year: 2026,
    questionText:
      "Identify the correct statements:\nA. Arginine and Tryptophan are essential amino acids.\nB. Histidine does not contain heterocyclic ring in its structure.\nC. Proline is a six membered cyclic ring amino acid.\nD. Glycine does not have chiral centre.\nE. Cysteine has characteristic feature of side chain as MeS-CH2-CH2-\nChoose the correct answer from the options given below:",
    options: [
      "B and E only",
      "A and D only",
      "C and D only",
      "C and E only"
    ],
    correctAnswer: "A and D only",
    explanation: {
      quick:
        "A is true because arginine and tryptophan are treated as essential amino acids in standard exam context. D is true because glycine has two H atoms on the α-carbon, so it is achiral. B, C and E are false. Hence the answer is A and D only.",
      standard:
        "Check each statement:\n\nA. Arginine and tryptophan are treated as essential amino acids in standard exam context. True.\n\nB. Histidine contains an imidazole ring, which is a heterocyclic ring. False.\n\nC. Proline is a five-membered cyclic amino acid, not six-membered. False.\n\nD. Glycine has no chiral centre because its α-carbon is attached to two H atoms. True.\n\nE. The side chain given belongs to methionine, not cysteine. Cysteine has -CH2SH side chain. False.\n\nTherefore, the correct statements are A and D only.",
      deep:
        "Let us understand the question from the beginning.\n\nThis question checks standard facts about amino acids.\n\nStep 1: Statement A\n\nArginine and tryptophan are treated as essential amino acids in common entrance-exam treatment.\nSo A is true.\n\nStep 2: Statement B\n\nHistidine contains an imidazole ring.\nImidazole is a heterocyclic ring because it contains nitrogen atoms in the ring.\nSo B is false.\n\nStep 3: Statement C\n\nProline is a cyclic amino acid, but its ring is five-membered, not six-membered.\nSo C is false.\n\nStep 4: Statement D\n\nGlycine is NH2-CH2-COOH.\nIts α-carbon has two hydrogen atoms attached, so it is not chiral.\nTherefore D is true.\n\nStep 5: Statement E\n\nThe side chain MeS-CH2-CH2- belongs to methionine.\nCysteine has side chain -CH2SH.\nSo E is false.\n\nThus the correct set is A and D only.\n\nCommon mistake:\nStudents often confuse cysteine and methionine because both contain sulfur.\n\nTherefore, the correct answer is A and D only."
    }
  }
];

export default jeeBiomoleculesQuestions;