import { PYQQuestion } from "@/lib/types";

export const bitsatStructureOfAtomQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-structure-of-atom-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    topic: "Orbital angular momentum in s-orbital",
    year: 2017,
    questionText: "The orbital angular momentum of an electron in 2s orbital is",
    options: ["h/4π","zero","h/2π","2h/2π"],
    correctAnswer: "zero",
    explanation: {
      quick: "For s-orbital, l = 0 → angular momentum = 0",
      standard: "Orbital angular momentum = √l(l+1) h/2π. For s-orbital, l = 0, so value becomes zero.",
      deep: "Angular momentum formula:\n\nL = √l(l+1) h/2π\n\nFor s-orbital:\nl = 0\n\nSo:\nL = √0(1) × h/2π = 0\n\nTherefore, orbital angular momentum is zero."
    }
  },
  {
    id: "bitsat-2017-chemistry-structure-of-atom-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    topic: "Isoelectronic species",
    year: 2017,
    questionText: "Which of the following are isoelectronic species?\n\nI. CH₃⁺\nII. NH₂⁻\nIII. NH₄⁺\nIV. NH₃",
    options: [
      "I, II and III",
      "II, III and IV",
      "I, II and IV",
      "II and I"
    ],
    correctAnswer: "II, III and IV",
    explanation: {
      quick: "Isoelectronic species have same number of electrons",
      standard: "NH₂⁻, NH₄⁺ and NH₃ all have 10 electrons",
      deep: "Count electrons:\n\nNH₂⁻ → 10 electrons\nNH₄⁺ → 10 electrons\nNH₃ → 10 electrons\n\nCH₃⁺ → 8 electrons\n\nSo correct set is II, III and IV."
    }
  },
  {
    id: "bitsat-2017-chemistry-structure-of-atom-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    topic: "Validity of quantum numbers",
    year: 2017,
    questionText: "Which of the following is an incorrect set of quantum numbers?",
    options: [
      "n = 2, l = 0, m = 0",
      "n = 1, l = 0, m = 0",
      "n = 3, l = 3, m = 0",
      "n = 2, l = 1, m = 1"
    ],
    correctAnswer: "n = 3, l = 3, m = 0",
    explanation: {
      quick: "l must be < n",
      standard: "For n = 3, l can be 0,1,2 (not 3)",
      deep: "Quantum number rules:\n\nl = 0 → n-1\n\nFor n = 3:\nl = 0,1,2\n\nGiven l = 3 → invalid\n\nHence incorrect set."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-structure-of-atom-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    topic: "Hydrogen-like Radius",
    year: 2018,
    questionText: "If (0.53 × 10⁻¹⁰ / 4) m is radius of smallest orbit, identify atom",
    options: ["H","He⁺","Li²⁺","Be³⁺"],
    correctAnswer: "Be³⁺",
    explanation: {
      quick: "r = a₀/Z → Z = 4",
      standard: "Given r = a₀/4 → Z = 4 → Be³⁺",
      deep: "Formula:\n\nr = a₀/Z\n\nGiven:\nr = a₀/4\n\nSo Z = 4\n\nHydrogen-like means single electron species.\n\nBe³⁺ has only one electron.\n\nHence answer is Be³⁺."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-structure-of-atom-005",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Structure of Atom",
    topic: "Uncertainty Principle",
    year: 2018,
    questionText: "Position uncertainty of electron is",
    options: ["1.5×10⁻⁴ m","5.10×10⁻³ m","1.92×10⁻³ m","3.84×10⁻³ m"],
    correctAnswer: "1.92×10⁻³ m",
    explanation: {
      quick: "Use Δx = h / (4πmΔv)",
      standard: "Substitute values in uncertainty formula",
      deep: "Uncertainty principle:\n\nΔx = h/(4πmΔv)\n\nAfter substitution:\nΔx = 1.92×10⁻³ m\n\nHence correct answer."
    }
  }
];