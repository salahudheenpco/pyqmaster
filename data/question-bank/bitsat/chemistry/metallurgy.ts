import { PYQQuestion } from "@/lib/types";

export const bitsatMetallurgyQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-metallurgy-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Metallurgy",
    topic: "Identification of calcination process",
    year: 2017,
    questionText: "Which of the following reactions is an example of calcination process?",
    options: [
      "2Ag + 2HCl + [O] → 2AgCl + H₂O",
      "2Zn + O₂ → 2ZnO",
      "2ZnS + 3O₂ → 2ZnO + 2SO₂",
      "MgCO₃ → MgO + CO₂"
    ],
    correctAnswer: "MgCO₃ → MgO + CO₂",
    explanation: {
      quick: "Calcination involves heating carbonate ores in absence of air to form oxide + CO₂.",
      standard: "Calcination is the process of heating carbonate ores in limited or no air to remove volatile components like CO₂. MgCO₃ decomposes into MgO and CO₂, which is a classic example of calcination.",
      deep: "Let us understand this clearly.\n\nCalcination is a metallurgical process in which an ore is heated in absence or limited supply of air.\n\nIt is mainly used for carbonate ores and hydrated ores.\n\nDuring calcination:\n- Carbonates lose CO₂\n- Hydroxides lose H₂O\n\nNow look at the options:\n\nOption (d): MgCO₃ → MgO + CO₂\n\nThis shows decomposition of a carbonate into oxide and CO₂.\n\nThis is exactly what happens during calcination.\n\nOther options involve oxidation or roasting.\n\nTherefore, the correct answer is MgCO₃ → MgO + CO₂."
    }
  },
  {
    id: "bitsat-2017-chemistry-metallurgy-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Metallurgy",
    topic: "Metal extracted by cyanide process",
    year: 2017,
    questionText: "Which of the following metal is leached by cyanide process?",
    options: ["Ag", "Na", "Al", "Cu"],
    correctAnswer: "Ag",
    explanation: {
      quick: "Silver and gold are extracted using cyanide leaching process.",
      standard: "The cyanide process is used for extraction of noble metals like gold and silver. These metals form soluble complexes with cyanide ions, allowing them to be separated from ores.",
      deep: "Let us understand the cyanide process.\n\nThe cyanide process is used for extraction of precious metals like gold (Au) and silver (Ag).\n\nIn this process, the metal reacts with cyanide ion in presence of oxygen to form a soluble complex.\n\nFor silver:\n4Ag + 8CN⁻ + O₂ + 2H₂O → 4[Ag(CN)₂]⁻ + 4OH⁻\n\nThis soluble complex allows separation of silver from the ore.\n\nAmong the given options, only silver (Ag) is extracted using this method.\n\nTherefore, the correct answer is Ag."
    }
  },
  {
    id: "bitsat-2018-chemistry-metallurgy-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Metallurgy",
    topic: "Hall-Heroult Process",
    year: 2018,
    questionText: "Incorrect statement about Hall-Heroult process is",
    options: [
      "CO and CO₂ are produced",
      "Al₂O₃ + CaF₂ lowers melting point",
      "Al³⁺ reduced at cathode",
      "Na₃AlF₆ serves as electrolyte"
    ],
    correctAnswer: "Na₃AlF₆ serves as electrolyte",
    explanation: {
      quick: "Cryolite acts mainly as solvent, not the primary electrolyte.",
      standard: "In the Hall-Heroult process, Al₂O₃ is dissolved in molten cryolite (Na₃AlF₆). Cryolite lowers melting point and increases conductivity but Al₂O₃ provides the ions for electrolysis. Hence calling cryolite the electrolyte is incorrect.",
      deep: "Let us understand the Hall-Heroult process step by step.\n\nThis process is used for extraction of aluminium from alumina (Al₂O₃).\n\nPure Al₂O₃ has a very high melting point (~2000°C), so it is dissolved in molten cryolite (Na₃AlF₆).\n\nRole of cryolite:\n- Lowers melting point\n- Increases electrical conductivity\n- Acts as a solvent medium\n\nNow electrolysis occurs:\n\nAt cathode:\nAl³⁺ + 3e⁻ → Al (reduction)\n\nAt anode:\nO²⁻ reacts with carbon to form CO and CO₂\n\nSo statements (a), (b), and (c) are correct.\n\nBut saying Na₃AlF₆ acts as the electrolyte is incorrect, because the actual ions undergoing electrolysis come from Al₂O₃.\n\nTherefore, the incorrect statement is:\nNa₃AlF₆ serves as electrolyte."
    }
  }
];