import type { PYQQuestion } from "@/lib/types";

export const bitsatAminesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2021-chemistry-amines-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Amines",
    topic: "Amines",
    year: 2021,
    questionText: "The most reactive amine towards reaction with dilute HCl is",
    options: ["CH3NH2", "(CH3)2NH", "(CH3)3N", "PhNH2"],
    correctAnswer: "(CH3)2NH",
    explanation: {
      quick:
        "Among the given amines, (CH3)2NH is the most reactive towards dilute HCl.",
      standard:
        "Reaction with dilute HCl depends on the basic character of the amine. In aqueous medium, secondary aliphatic amines are generally more basic than primary and tertiary aliphatic amines because of the combined +I effect and favorable solvation. Aniline is much less basic because the lone pair on nitrogen is delocalized into the benzene ring. Therefore, (CH3)2NH reacts most readily with dilute HCl.",
      deep:
        "Let us understand the question from the beginning…\n\nThis question is based on the basicity of amines and their reaction with dilute HCl. Amines react with HCl by accepting a proton, so the amine that is more basic will react more readily.\n\nNow let us compare the given options:\n\n1. CH3NH2 is a primary aliphatic amine.\n2. (CH3)2NH is a secondary aliphatic amine.\n3. (CH3)3N is a tertiary aliphatic amine.\n4. PhNH2 (aniline) is an aromatic amine.\n\nIn aqueous medium, the general order of basicity for simple aliphatic amines is usually:\nsecondary amine > primary amine > tertiary amine\n\nWhy?\n- Alkyl groups donate electron density to nitrogen by the +I effect, which increases basicity.\n- Secondary amines get a strong +I effect and are still well solvated in water.\n- Tertiary amines, although they have more alkyl groups, suffer from steric hindrance and less effective solvation of the protonated form.\n\nNow consider aniline, PhNH2.\nIts lone pair is partly delocalized into the benzene ring by resonance, so it is much less available for protonation. That makes aniline less basic than the aliphatic amines here.\n\nSo among all the options, (CH3)2NH is the most basic and therefore reacts most readily with dilute HCl.\n\nTherefore, the correct answer is (CH3)2NH.",
    },
  },
{
  id: "bitsat-2018-chemistry-amines-002",
  exam: "BITSAT",
  subject: "Chemistry",
  chapter: "Amines",
  topic: "Distinction Tests",
  year: 2018,
  questionText: "Which test is NOT used to distinguish 1°, 2°, 3° amines?",
  options: [
    "Hinsberg test",
    "Carbylamine test",
    "Azo dye test",
    "Nitrous acid test"
  ],
  correctAnswer: "Azo dye test",
  explanation: {
    quick: "Azo dye test is for aromatic amines",
    standard: "Not used for aliphatic classification",
    deep: "Let us understand the question from the beginning…\n\nAzo dye test applies to aromatic amines.\n\nTherefore, the correct answer is Azo dye test."
  }
}
];

export default bitsatAminesQuestions;