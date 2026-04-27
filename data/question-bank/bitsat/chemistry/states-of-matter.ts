import { PYQQuestion } from "@/lib/types";

export const bitsatStatesOfMatterQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-states-of-matter-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "States of Matter",
    topic: "Deviation from ideal gas behaviour",
    year: 2017,
    questionText: "Real gases deviate from ideal behaviour at",
    options: [
      "low pressure and high temperature",
      "high pressure and low temperature",
      "low pressure and low temperature",
      "high pressure and high temperature"
    ],
    correctAnswer: "high pressure and low temperature",
    explanation: {
      quick: "Real gases deviate most from ideal behaviour at high pressure and low temperature.",
      standard: "At high pressure, gas molecules come very close to each other, so their actual volume becomes significant. At low temperature, intermolecular attractions become important. These two factors cause real gases to deviate from ideal behaviour.",
      deep: "Let us understand this concept clearly.\n\nAn ideal gas assumes two things:\n1. Gas molecules have negligible volume.\n2. There are no intermolecular forces between gas molecules.\n\nBut real gases do not perfectly follow these assumptions.\n\nAt high pressure, gas molecules are compressed and come very close to each other. In this situation, the actual volume of gas molecules can no longer be ignored.\n\nAt low temperature, molecules move more slowly. Because of this, intermolecular attractive forces become more effective.\n\nSo, real gases deviate most from ideal behaviour when:\n- pressure is high\n- temperature is low\n\nTherefore, the correct answer is high pressure and low temperature."
    }
  },
  {
    id: "bitsat-2018-chemistry-states-of-matter-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "States of Matter",
    topic: "van der Waals Constants",
    year: 2018,
    questionText: "Four gases P, Q, R and S have almost same values of b but their a values are in the order Q < R < S < P. The most easily liquifiable gas is",
    options: ["P", "Q", "R", "S"],
    correctAnswer: "P",
    explanation: {
      quick: "Higher van der Waals constant a means stronger intermolecular attraction, so the gas liquefies more easily.",
      standard: "The van der Waals constant a represents intermolecular attraction. Since b values are almost the same, the deciding factor is a. The order is Q < R < S < P, so P has the highest a value and strongest attractions. Hence P is the most easily liquifiable gas.",
      deep: "Let us understand the question from the beginning.\n\nThe van der Waals equation uses two constants: a and b.\n\nThe constant a represents the magnitude of attractive forces between gas molecules. Higher value of a means stronger intermolecular attraction.\n\nThe constant b represents the effective volume occupied by gas molecules.\n\nIn this question, the gases P, Q, R and S have almost the same b values. So molecular volume is not the deciding factor here.\n\nThe a values are given in the order:\nQ < R < S < P\n\nThis means P has the maximum value of a.\n\nA gas with stronger intermolecular attraction can be liquefied more easily because its molecules are already more strongly attracted to one another.\n\nTherefore, gas P will liquefy most easily.\n\nHence, the correct answer is P."
    }
  }
];