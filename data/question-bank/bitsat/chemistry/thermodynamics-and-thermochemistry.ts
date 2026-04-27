import { PYQQuestion } from "@/lib/types";

export const bitsatThermodynamicsAndThermochemistryQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-thermodynamics-and-thermochemistry-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Thermodynamics and Thermochemistry",
    topic: "Processes involving absorption of energy",
    year: 2017,
    questionText: "Which of the following reactions does not involve absorption of energy?\n\nI. O(g) + e⁻ → O⁻(g)\nII. S(g) + e⁻ → S⁻(g)\nIII. O⁻(g) + e⁻ → O²⁻(g)\nIV. Cl(g) + e⁻ → Cl⁻(g)",
    options: ["Only II","I and III","I, II and III","I, II and IV"],
    correctAnswer: "I, II and IV",
    explanation: {
      quick: "First electron affinity is exothermic; second is endothermic.",
      standard: "First electron affinity of O, S and Cl releases energy (exothermic). However, adding second electron to O⁻ is endothermic due to electron-electron repulsion. Hence only process III absorbs energy.",
      deep: "Let us analyze each:\n\nI: O + e⁻ → O⁻ → first EA → exothermic\nII: S + e⁻ → S⁻ → exothermic\nIII: O⁻ + e⁻ → O²⁻ → second EA → endothermic (repulsion)\nIV: Cl + e⁻ → Cl⁻ → exothermic\n\nSo only III absorbs energy.\n\nHence processes NOT involving absorption are I, II and IV."
    }
  },
  {
    id: "bitsat-2017-chemistry-thermodynamics-and-thermochemistry-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Thermodynamics and Thermochemistry",
    topic: "Processes showing increase in entropy",
    year: 2017,
    questionText: "Which of the following show an increase in entropy?\n\nI. Boiling of water\nII. Melting of ice\nIII. Freezing of water\nIV. Formation of hydrogen gas from water",
    options: ["I and II","Only III","I, II and IV","III and IV"],
    correctAnswer: "I, II and IV",
    explanation: {
      quick: "Entropy increases with disorder.",
      standard: "Boiling and melting increase disorder. Formation of gas increases entropy. Freezing decreases entropy.",
      deep: "Entropy measures disorder.\n\nI: liquid → gas → increase\nII: solid → liquid → increase\nIII: liquid → solid → decrease\nIV: gas formation → increase\n\nSo correct: I, II and IV."
    }
  },
  {
    id: "bitsat-2017-chemistry-thermodynamics-and-thermochemistry-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Thermodynamics and Thermochemistry",
    topic: "Relation between ΔH and ΔE",
    year: 2017,
    questionText: "For the reaction N₂O₄(g) → 2NO₂(g),",
    options: ["ΔH > ΔE","ΔH < ΔE","ΔH = ΔE","ΔH = 0"],
    correctAnswer: "ΔH > ΔE",
    explanation: {
      quick: "ΔH = ΔE + ΔnRT",
      standard: "Number of moles increases (1 → 2), so Δn > 0 → ΔH > ΔE",
      deep: "Formula:\nΔH = ΔE + ΔnRT\n\nHere:\nΔn = 2 − 1 = +1\n\nSo ΔH > ΔE."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-thermodynamics-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    topic: "Enthalpy of Combustion",
    year: 2018,
    questionText: "Enthalpy of combustion of methane and ethane are −210 kcal/mol and −368 kcal/mol respectively. Enthalpy of combustion of decane is",
    options: ["−1582 kcal","−1632 kcal","−1700 kcal","−1480 kcal"],
    correctAnswer: "−1632 kcal",
    explanation: {
      quick: "Each −CH₂ adds ~−158 kcal",
      standard: "Difference between CH₄ and C₂H₆ is −158 kcal; extend to decane",
      deep: "CH₄ → −210\nC₂H₆ → −368\nDifference = −158 per CH₂\n\nDecane (C₁₀H₂₂) has 8 extra CH₂ units:\nΔH = −210 − (8 × 158)\n= −1632 kcal"
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-thermodynamics-005",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    topic: "Gibbs Free Energy",
    year: 2018,
    questionText: "Determine spontaneity at 25°C",
    options: ["reversible","spontaneous","non-spontaneous","irreversible"],
    correctAnswer: "spontaneous",
    explanation: {
      quick: "ΔG < 0 → spontaneous",
      standard: "Use ΔG = ΔH − TΔS; negative ΔG means spontaneous",
      deep: "Formula:\nΔG = ΔH − TΔS\n\nIf ΔG < 0 → spontaneous reaction\n\nHence answer is spontaneous."
    }
  }
];