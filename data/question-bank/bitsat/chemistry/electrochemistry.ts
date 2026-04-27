import { PYQQuestion } from "@/lib/types";

export const bitsatElectrochemistryQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-electrochemistry-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    topic: "Electrode Potential",
    year: 2017,
    questionText: "Standard electrode potential is measured under:",
    options: [
      "1 atm, 298 K, 1M concentration",
      "1 atm, 300 K, 1M concentration",
      "2 atm, 298 K, 1M concentration",
      "1 atm, 273 K, 1M concentration"
    ],
    correctAnswer: "1 atm, 298 K, 1M concentration",
    explanation: {
      quick: "Standard conditions are 1 atm pressure, 298 K temperature, and 1M concentration.",
      standard: "Standard electrode potential is defined under standard conditions: 1 atm pressure, 298 K temperature, and 1 molar concentration of ions.",
      deep: "Standard electrode potential is measured under standard conditions.\n\nThese conditions are:\n- Temperature = 298 K (25°C)\n- Pressure = 1 atm\n- Concentration = 1 M\n\nThese standard conditions allow comparison between different electrodes.\n\nHence, correct answer is 1 atm, 298 K, 1M concentration."
    }
  },
  {
    id: "bitsat-2018-chemistry-electrochemistry-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Electrochemistry",
    topic: "Nernst Equation",
    year: 2018,
    questionText: "Nernst equation is used to calculate:",
    options: [
      "Current",
      "Resistance",
      "Electrode potential",
      "Charge"
    ],
    correctAnswer: "Electrode potential",
    explanation: {
      quick: "Nernst equation relates electrode potential with concentration.",
      standard: "Nernst equation helps calculate electrode potential under non-standard conditions using concentration terms.",
      deep: "The Nernst equation is given as:\n\nE = E° - (0.0591/n) log Q\n\nIt relates electrode potential to reaction quotient.\n\nIt is used when conditions are not standard.\n\nHence, it calculates electrode potential."
    }
  }
];