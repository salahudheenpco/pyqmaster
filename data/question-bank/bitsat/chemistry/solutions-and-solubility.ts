import { PYQQuestion } from "@/lib/types";

export const bitsatSolutionsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-solutions-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Raoult’s Law",
    year: 2017,
    questionText: "Which of the following solutions will show maximum deviation from Raoult’s law?",
    options: [
      "Ideal solution",
      "Solution with strong A–A and B–B interactions",
      "Solution with strong A–B interactions",
      "Dilute solution"
    ],
    correctAnswer: "Solution with strong A–B interactions",
    explanation: {
      quick: "Maximum deviation occurs when intermolecular interactions between components differ significantly, especially when A–B interactions are strong.",
      standard: "Raoult’s law is obeyed when A–A, B–B, and A–B interactions are similar. Strong A–B interactions disturb ideal behavior and lead to deviation. Hence, solutions with strong A–B interactions show maximum deviation.",
      deep: "Raoult’s law assumes that intermolecular forces between unlike molecules (A–B) are similar to those between like molecules (A–A and B–B).\n\nIf A–B interactions become much stronger, the molecules attract each other more strongly than expected.\n\nThis results in a negative deviation from Raoult’s law.\n\nThe greater the difference in interactions, the greater the deviation.\n\nHence, solution with strong A–B interactions shows maximum deviation."
    }
  },
  {
    id: "bitsat-2018-chemistry-solutions-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Solutions",
    topic: "Molarity",
    year: 2018,
    questionText: "Molarity of a solution is defined as:",
    options: [
      "Moles of solute per litre of solution",
      "Moles of solute per kg of solvent",
      "Mass of solute per litre of solution",
      "Moles of solute per mole of solvent"
    ],
    correctAnswer: "Moles of solute per litre of solution",
    explanation: {
      quick: "Molarity is number of moles of solute per litre of solution.",
      standard: "Molarity (M) is defined as the number of moles of solute present in one litre of solution. It depends on temperature because volume changes with temperature.",
      deep: "Molarity is one of the most commonly used concentration terms.\n\nIt is defined as:\nM = moles of solute / volume of solution in litres\n\nImportant points:\n- It depends on volume, so it changes with temperature\n- It is widely used in laboratory calculations\n\nTherefore, molarity is moles of solute per litre of solution."
    }
  }
];