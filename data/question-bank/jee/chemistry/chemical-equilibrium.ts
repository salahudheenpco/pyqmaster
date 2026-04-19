export const jeeChemicalEquilibriumQuestions = [
  {
    id: "jee-2026-chemistry-chemical-equilibrium-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Chemical Equilibrium",
    topic: "N2O4 ⇌ 2NO2 and Gibbs free energy",
    year: 2026,
    questionText:
      "For the reaction N2O4 ⇌ 2NO2, the graph of Gibbs free energy change versus extent of reaction is given. Identify the correct statements:\nA. Standard free energy change for the reaction is -5.40 kJ mol^(-1)\nB. As ΔG° in the graph is positive, N2O4 will not dissociate into NO2 at all.\nC. Reverse reaction will go to completion.\nD. When 1 mole of N2O4 changes into equilibrium mixture, value of ΔG° is -0.84 kJ mol^(-1)\nE. When 2 mole of NO2 changes into equilibrium mixture, for equilibrium mixture ΔG° is -6.24 kJ mol^(-1)\nChoose the correct answer from the options given below:",
    options: [
      "B and C only",
      "A and D only",
      "D and E only",
      "C and E only"
    ],
    correctAnswer: "D and E only",
    explanation: {
      quick:
        "From the source graph, statements D and E are the correct ones. B is false because positive ΔG° does not mean reaction cannot occur at all. C is also false because equilibrium does not mean complete conversion. Hence the answer is D and E only.",
      standard:
        "This is a graph-based equilibrium question.\n\nThe key ideas are:\n- ΔG° indicates thermodynamic tendency under standard conditions.\n- A positive ΔG° does not mean the reaction never proceeds; it only means products are less favored under standard state.\n- At equilibrium, ΔG = 0, not that one side necessarily goes to completion.\n\nFrom the source graph and answer key, the correct statements are D and E only.",
      deep:
        "Let us understand the question from the beginning.\n\nThis question depends on interpreting a Gibbs free energy graph for the equilibrium:\nN2O4 ⇌ 2NO2\n\nThere are two major concepts here:\n1. ΔG° tells us the standard thermodynamic preference\n2. actual equilibrium condition is determined by ΔG = 0\n\nStep 1: Why B is false\n\nEven if ΔG° is positive, the reaction does not become impossible.\nA reaction can still proceed to some extent depending on composition and reaction quotient.\nSo the statement that N2O4 will not dissociate into NO2 at all is false.\n\nStep 2: Why C is false\n\nAt equilibrium, reactions generally do not go to completion in both directions. Instead, a balance is established.\nSo saying the reverse reaction will go to completion is false.\n\nStep 3: Source-graph outcome\n\nAccording to the source graph and the source key, the correct statements are D and E.\n\nAccuracy note:\nThis is a graph-reading question, so the file preserves the source-key interpretation.\n\nTherefore, the correct answer is D and E only."
    }
  }
];

export default jeeChemicalEquilibriumQuestions;