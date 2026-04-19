export const jeeWorkPowerEnergyQuestions = [
  {
    id: "jee-2026-physics-work-power-energy-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Work, Power and Energy",
    topic: "Force from potential-energy graph",
    year: 2026,
    questionText:
      "Potential energy (V) versus distance (x) is given by a graph with regions AB, BC, CD and DE. Rank the regions according to the magnitudes of the force acting on a particle from high to low.",
    options: [
      "F_CD > F_AB > F_BC > F_DE",
      "F_CD > F_DE > F_AB > F_BC",
      "F_BC > F_AB > F_DE > F_CD",
      "F_BC > F_CD > F_DE > F_AB"
    ],
    correctAnswer: "F_CD > F_DE > F_AB > F_BC",
    explanation: {
      quick:
        "Magnitude of force is |F| = |−dV/dx|, so it equals the magnitude of the slope of the V-x graph. Compare the steepness of the four segments. From the source graph, region CD is steepest, then DE, then AB, and BC is least steep. Hence F_CD > F_DE > F_AB > F_BC.",
      standard:
        "Force is related to potential energy by:\nF = -dV/dx\n\nSo the magnitude of force is the magnitude of the slope of the V-x graph:\n|F| = |dV/dx|\n\nTherefore we only need to compare how steep the graph is in each region.\nFrom the given graph in the source paper:\n- CD has the largest slope magnitude\n- DE has the next largest slope magnitude\n- AB is less steep\n- BC is the least steep\n\nHence the order from high to low is:\nF_CD > F_DE > F_AB > F_BC",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a graph of potential energy V versus position x.\nWe need to rank the force magnitudes in different regions.\n\nStep 1: Recall the relation between force and potential energy\n\nIn one dimension,\nF = -dV/dx\n\nThis means:\n- force depends on the slope of the V-x graph\n- magnitude of force depends on how steep the graph is\n\nSo,\n|F| = |dV/dx|\n\nImportant:\nWe do not care here whether the slope is positive or negative.\nWe only care about the absolute value of the slope.\n\nStep 2: Compare steepness of graph segments\n\nLook at each region on the graph:\n- the steeper the segment, the larger the force magnitude\n- the flatter the segment, the smaller the force magnitude\n\nFrom the source graph, the observed order of slope magnitude is:\nCD greatest,\nthen DE,\nthen AB,\nand BC least.\n\nSo,\nF_CD > F_DE > F_AB > F_BC\n\nCommon mistake:\nA common mistake is to compare heights of the graph instead of slopes. Force depends on slope, not on the potential value itself.\n\nTherefore, the correct answer is:\nF_CD > F_DE > F_AB > F_BC"
    }
  }
];

export default jeeWorkPowerEnergyQuestions;