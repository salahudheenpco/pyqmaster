import type { PYQQuestion } from "@/lib/types";

export const bitsatSurfaceChemistryQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2018-chemistry-surface-chemistry-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Surface Chemistry",
    topic: "Freundlich Isotherm",
    year: 2018,
    questionText: "Which graph correctly represents Freundlich adsorption isotherm?",
    options: ["Graph A", "Graph B", "Graph C", "Graph D"],
    correctAnswer: "Graph B",
    explanation: {
      quick: "log(x/m) vs log(p) is a straight line with positive slope less than 1.",
      standard: "Freundlich equation is log(x/m) = log k + (1/n)log p, which represents a straight line with slope 1/n (0 < 1/n < 1).",
      deep: "Let us understand the question from the beginning…\n\nFreundlich adsorption isotherm is given by:\n\nx/m = k p^(1/n)\n\nTaking logarithm on both sides:\n\nlog(x/m) = log k + (1/n) log p\n\nThis is in the form of a straight line equation:\ny = mx + c\n\nHere:\n- y = log(x/m)\n- x = log p\n- slope = 1/n\n\nSince 1/n is less than 1, the slope is positive but less than unity.\n\nSo the correct graph is a straight line with a positive slope less than 1.\n\nTherefore, the correct answer is Graph B."
    }
  }
];

export default bitsatSurfaceChemistryQuestions;