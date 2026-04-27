import { PYQQuestion } from "@/lib/types";

export const bitsatSolutionsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-solutions-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Molarity calculation",
    year: 2017,
    questionText: "Molarity of a solution containing 1 mole solute in 1 litre solution is",
    options: [
      "1 M",
      "0.5 M",
      "2 M",
      "10 M"
    ],
    correctAnswer: "1 M",
    explanation: {
      quick: "Use the main concept from Molarity calculation and apply it directly. The correct answer is 1 M.",
      standard: "We solve this using the main idea from Molarity calculation. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 1 M.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Chemistry, and the main concept involved is Molarity calculation.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Molarity calculation and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 1 M.\n\nExtra understanding:\nQuestions from Molarity calculation often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 1 M."
    }
  }
{
  id: "bitsat-2018-chemistry-solutions-002",
  exam: "BITSAT",
  subject: "Chemistry",
  chapter: "Solutions",
  topic: "Equilibrium Shift",
  year: 2018,
  questionText: "New equilibrium pressures after doubling volume",
  options: ["0.064 & 0.095","0.64 & 0.095","0.095 & 0.632","0.095 & 0.64"],
  correctAnswer: "0.095 & 0.64",
  explanation: {
    quick: "Use Le Chatelier principle",
    standard: "System shifts toward more moles",
    deep: "Let us understand the question from the beginning…\n\nVolume increase shifts equilibrium to side with more moles.\nApplying gives pressures 0.095 and 0.64 atm.\n\nTherefore, correct answer is option (d)."
  }
}
{
  id: "bitsat-2018-chemistry-solutions-003",
  exam: "BITSAT",
  subject: "Chemistry",
  chapter: "Ionic Equilibrium",
  topic: "Ksp",
  year: 2018,
  questionText: "pH of saturated solution of Ba(OH)₂ is 12. Find Ksp",
  options: ["3.3×10⁻⁷","5.0×10⁻⁷","4.0×10⁻⁶","5.0×10⁻⁶"],
  correctAnswer: "5.0×10⁻⁶",
  explanation: {
    quick: "pH → [OH⁻], then use Ksp = 4s³",
    standard: "pH=12 → pOH=2 → [OH⁻]=10⁻². s=5×10⁻³, Ksp=4s³",
    deep: "Let us understand the question from the beginning…\n\npH = 12 → pOH = 2\n[OH⁻] = 10⁻²\n\nFor Ba(OH)₂:\nBa(OH)₂ → Ba²⁺ + 2OH⁻\nSo s = 5×10⁻³\n\nKsp = s(2s)² = 4s³ = 5×10⁻⁶\n\nTherefore, the correct answer is 5.0×10⁻⁶."
  }
}
];
