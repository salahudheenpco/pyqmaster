import { PYQQuestion } from "@/lib/types";

export const bitsatChemicalBondingQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-chemical-bonding-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Nature of bond from electronegativity difference",
    year: 2017,
    questionText: "Two elements A and B have electronegativities 1.2 and 3.0 respectively. The nature of bond between A and B would be",
    options: ["ionic","covalent","co-ordinate","metallic"],
    correctAnswer: "ionic",
    explanation: {
      quick: "Large electronegativity difference → ionic bond",
      standard: "ΔEN = 3.0 − 1.2 = 1.8 → ionic character dominates",
      deep: "Electronegativity difference determines bond nature.\n\nGeneral rule:\n0–0.4 → nonpolar covalent\n0.4–1.7 → polar covalent\n>1.7 → ionic\n\nHere ΔEN = 1.8 → strong ionic nature.\n\nTherefore, the bond is ionic."
    }
  },
  {
    id: "bitsat-2017-chemistry-chemical-bonding-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Maximum bond order by molecular orbital theory",
    year: 2017,
    questionText: "Which of the following shows maximum bond order?",
    options: ["O₂","O₂⁻","O₂⁺","O₂²⁻"],
    correctAnswer: "O₂⁺",
    explanation: {
      quick: "Removing electron increases bond order",
      standard: "O₂⁺ has highest bond order among given species",
      deep: "Bond order = (Nb − Na)/2\n\nO₂ → 2\nO₂⁻ → 1.5\nO₂²⁻ → 1\nO₂⁺ → 2.5\n\nTherefore, O₂⁺ has maximum bond order."
    }
  },
  {
    id: "bitsat-2017-chemistry-chemical-bonding-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Lewis acid behaviour of BF₃",
    year: 2017,
    questionText: "BF₃ is an acid, according to",
    options: ["Lewis","Arrhenius","Bronsted and Lowry","All of the above"],
    correctAnswer: "Lewis",
    explanation: {
      quick: "BF₃ accepts electron pair → Lewis acid",
      standard: "BF₃ has incomplete octet, accepts electrons",
      deep: "BF₃ has only 6 electrons around boron.\n\nIt accepts lone pair from donors → electron pair acceptor.\n\nHence, it is a Lewis acid."
    }
  },
  {
    id: "bitsat-2017-chemistry-chemical-bonding-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Covalent character in alkali metal compounds",
    year: 2017,
    questionText: "Which of the following elements mostly forms covalent compounds?",
    options: ["Cs","Rb","K","Li"],
    correctAnswer: "Li",
    explanation: {
      quick: "Small cation → high polarising power",
      standard: "Li⁺ is smallest → more covalent character",
      deep: "According to Fajan’s rule:\n\nSmall cation → high polarisation → covalent character\n\nLi⁺ is smallest among alkali metals.\n\nHence, Li forms most covalent compounds."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-chemical-bonding-005",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Carbonate Ion",
    year: 2018,
    questionText: "Incorrect statement about CO₃²⁻ is",
    options: [
      "Planar structure",
      "One coordinate bond",
      "Three resonance structures",
      "Basic solution on hydrolysis"
    ],
    correctAnswer: "One coordinate bond",
    explanation: {
      quick: "All bonds are equivalent due to resonance",
      standard: "CO₃²⁻ has delocalised π bonding; no coordinate bond exists",
      deep: "Carbonate ion structure:\n\n- Trigonal planar\n- sp² hybridised carbon\n- Three resonance structures\n\nResonance makes all C–O bonds equivalent.\n\nThere is no coordinate bond in CO₃²⁻.\n\nTherefore, the incorrect statement is 'One coordinate bond'."
    }
  },

  {
    id: "bitsat-2018-chemistry-chemical-bonding-006",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Dipole Moment",
    year: 2018,
    questionText: "Which molecule has dipole moment?",
    options: ["CCl₄","CH₂Cl₂","C₂Cl₂","C₂Cl₄"],
    correctAnswer: "CH₂Cl₂",
    explanation: {
      quick: "Unsymmetrical molecule → net dipole",
      standard: "CH₂Cl₂ has tetrahedral but unsymmetrical structure",
      deep: "Dipole moment depends on geometry + symmetry.\n\nCCl₄ → symmetrical → μ = 0\nC₂Cl₂ → linear → μ = 0\nC₂Cl₄ → symmetrical → μ = 0\n\nCH₂Cl₂:\n- Tetrahedral\n- Two Cl and two H\n- Asymmetrical\n\nNet dipole ≠ 0\n\nTherefore, CH₂Cl₂ has dipole moment."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-chemical-bonding-007",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Bonding",
    topic: "Molecular Orbital Theory",
    year: 2018,
    questionText: "Which molecule is stabilised by removal of one electron?",
    options: ["C₂","CN","N₂","O₂"],
    correctAnswer: "O₂",
    explanation: {
      quick: "Removing antibonding electron increases stability",
      standard: "O₂ has electrons in antibonding orbital → removal increases bond order",
      deep: "In MO theory:\n\nIf electron is removed from antibonding orbital → bond order increases → stability increases.\n\nO₂ has electrons in π* orbitals.\n\nRemoving one electron:\nO₂ → O₂⁺\nBond order increases from 2 → 2.5\n\nHence stability increases.\n\nTherefore, O₂ is correct."
    }
  }
];