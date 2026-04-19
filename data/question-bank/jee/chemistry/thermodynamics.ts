export const jeeThermodynamicsQuestions = [
  {
    id: "jee-2026-chemistry-thermodynamics-001",
    exam: "JEE Main",
    subject: "Chemistry",
    chapter: "Thermodynamics",
    topic: "Maximum work from p-V graph",
    year: 2026,
    questionText:
      "Which of the following graphs between pressure (p) versus volume (V) represents the maximum work done?",
    options: ["Option A graph", "Option B graph", "Option C graph", "Option D graph"],
    correctAnswer: "Option D graph",
    explanation: {
      quick:
        "Work done in a p-V process equals the area under the p-V curve. So the graph with the largest enclosed area between the same volume limits gives maximum work. From the source figure, that is Option D.",
      standard:
        "In thermodynamics, work done by a gas is:\nW = ∫ p dV\n\nSo on a p-V graph, work done is the area under the curve.\nThe graph that gives the maximum work is the one with the largest area over the stated volume change.\nAccording to the source figure, that is Option D.",
      deep:
        "Let us understand the question from the beginning.\n\nOn a pressure-volume graph, the work done by a gas is equal to the area under the curve.\nThat is why p-V graphs are so important in thermodynamics.\n\nSo to find which process gives maximum work, we do not look only at pressure values or only at volume values.\nWe compare the total area under each curve over the same interval.\n\nFrom the source diagram, Option D clearly encloses the largest area among the given choices.\nTherefore, it represents the maximum work done.\n\nCommon mistake:\nStudents often pick the graph with the highest pressure at one point, but work depends on the full area, not a single point.\n\nTherefore, the correct answer is Option D graph."
    }
  }
];

export default jeeThermodynamicsQuestions;