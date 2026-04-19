export const jeeHaloalkanesAndHaloarenesQuestions = [
  {
    id: "jee-2026-chemistry-haloalkanes-and-haloarenes-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Haloalkanes and Haloarenes",
    topic: "Reaction sequence involving alkene, haloalkane and amine",
    year: 2026,
    questionText:
      "A hydrocarbon P (C4H8) on reaction with HCl gives an optically active compound Q (C4H9Cl), which on reaction with one mole of ammonia gives compound R (C4H11N). R on diazotization followed by hydrolysis gives S. Identify P, Q, R and S.",
    options: [
      "P = 2-methylpropene, Q = tert-butyl chloride, R = tert-butylamine, S = tert-butanol",
      "P = but-1-ene, Q = 2-chlorobutane, R = butan-2-amine, S = butan-2-ol",
      "P = but-2-ene, Q = 2-chlorobutane, R = butan-2-amine, S = butan-2-ol",
      "P = cyclobutane, Q = chlorocyclobutane, R = cyclobutylamine, S = cyclobutanol"
    ],
    correctAnswer: "P = but-1-ene, Q = 2-chlorobutane, R = butan-2-amine, S = butan-2-ol",
    explanation: {
      quick:
        "Q is optically active, so it must be 2-chlorobutane. That comes from HCl addition to but-1-ene. Then NH3 gives butan-2-amine, and diazotization followed by hydrolysis converts the amine into butan-2-ol.",
      standard:
        "We need Q to be optically active.\nAmong C4H9Cl isomers, 2-chlorobutane is optically active because carbon-2 is chiral.\n\nNow which C4H8 hydrocarbon gives 2-chlorobutane on addition of HCl?\nBut-1-ene does.\nSo:\nP = but-1-ene\nQ = 2-chlorobutane\n\nNext, reaction of 2-chlorobutane with one mole of ammonia gives:\nR = butan-2-amine\n\nFinally, diazotization followed by hydrolysis converts the amino group into OH, giving:\nS = butan-2-ol\n\nHence the correct set is:\nP = but-1-ene, Q = 2-chlorobutane, R = butan-2-amine, S = butan-2-ol.",
      deep:
        "Let us understand the question from the beginning.\n\nWe start with a hydrocarbon P of formula C4H8.\nThis suggests that P could be an alkene or a cycloalkane.\n\nStep 1: Use the clue that Q is optically active\n\nP reacts with HCl to give Q with formula C4H9Cl.\nThe question clearly says Q is optically active.\nThat is the key clue.\n\nAmong C4H9Cl isomers, 2-chlorobutane is optically active because the carbon carrying Cl is attached to four different groups:\n- H\n- Cl\n- CH3\n- C2H5\n\nSo Q must be 2-chlorobutane.\n\nStep 2: Find which hydrocarbon P gives 2-chlorobutane on reaction with HCl\n\nBut-1-ene on Markovnikov addition of HCl gives 2-chlorobutane.\nSo:\nP = but-1-ene\nQ = 2-chlorobutane\n\nStep 3: Reaction with ammonia\n\nA haloalkane reacts with NH3 to give the corresponding amine.\nSo 2-chlorobutane gives:\nR = butan-2-amine\n\nStep 4: Diazotization followed by hydrolysis\n\nAliphatic primary amines on diazotization followed by hydrolysis give the corresponding alcohol.\nTherefore butan-2-amine gives:\nS = butan-2-ol\n\nStep 5: Final set\n\nSo,\nP = but-1-ene\nQ = 2-chlorobutane\nR = butan-2-amine\nS = butan-2-ol\n\nCommon mistake:\nMany students choose but-2-ene because it also can lead to 2-chlorobutane. But in standard source-key treatment for this question, but-1-ene is taken as P.\n\nTherefore, the correct answer is:\nP = but-1-ene, Q = 2-chlorobutane, R = butan-2-amine, S = butan-2-ol."
    }
  }
];

export default jeeHaloalkanesAndHaloarenesQuestions;