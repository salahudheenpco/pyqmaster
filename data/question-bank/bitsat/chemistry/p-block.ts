import { PYQQuestion } from "@/lib/types";

export const bitsatPBlockQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-p-block-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "p-Block",
    topic: "Most acidic oxide of nitrogen",
    year: 2017,
    questionText: "The most acidic oxide for nitrogen is",
    options: ["NO₂","N₂O","NO","N₂O₅"],
    correctAnswer: "N₂O₅",
    explanation: {
      quick: "Highest oxidation state → most acidic oxide",
      standard: "N₂O₅ is anhydride of HNO₃ → strongest acid",
      deep: "Acidity of oxides increases with oxidation state.\n\nN₂O₅ corresponds to HNO₃ (strong acid).\n\nHence, it is the most acidic oxide."
    }
  },
  {
    id: "bitsat-2017-chemistry-p-block-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "p-Block",
    topic: "Product obtained when borax solution is acidified",
    year: 2017,
    questionText: "When aqueous solution of borax is acidified with HCl, we get",
    options: ["B₂H₆","H₃BO₃","B₂O₃","All of these"],
    correctAnswer: "H₃BO₃",
    explanation: {
      quick: "Borax + acid → boric acid",
      standard: "Na₂B₄O₇ + HCl → H₃BO₃ formation",
      deep: "Borax reacts with acid to give boric acid.\n\nHence, H₃BO₃ is formed."
    }
  },

  // ✅ FIXED COMMA ABOVE

  {
    id: "bitsat-2018-chemistry-pblock-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "p-Block",
    topic: "Lassaigne Test",
    year: 2018,
    questionText: "Compound giving blood red color",
    options: ["(NH2)2CO","H2N(C6H4)SO3H","C6H5SO3H","CHCl3"],
    correctAnswer: "H2N(C6H4)SO3H",
    explanation: {
      quick: "Nitrogen + Fe³⁺ → blood red complex",
      standard: "Lassaigne test forms Fe(SCN)²⁺ (blood red)",
      deep: "In Lassaigne test:\n\nNitrogen → NaCN → Fe³⁺ reacts → blood red complex.\n\nAromatic amines give positive test.\n\nHence correct answer is H2N(C6H4)SO3H."
    }
  },

  {
    id: "bitsat-2018-chemistry-pblock-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "p-Block",
    topic: "Boron Compounds",
    year: 2018,
    questionText: "Product formed when BCl3 reacts with H2 and NH3",
    options: ["B2O3","B3N3H6","H3BO3","B2H6"],
    correctAnswer: "B3N3H6",
    explanation: {
      quick: "BCl₃ + NH₃ → borazine",
      standard: "Borazine = inorganic benzene (B₃N₃H₆)",
      deep: "BCl₃ reacts with NH₃ and H₂ to form borazine.\n\nBorazine structure resembles benzene.\n\nHence product is B₃N₃H₆."
    }
  }
];