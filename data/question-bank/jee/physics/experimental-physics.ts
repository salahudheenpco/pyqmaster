export const jeeExperimentalPhysicsQuestions = [
  {
    id: "jee-2026-physics-experimental-physics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Experimental Physics",
    topic: "Percentage error in equivalent spring constant",
    year: 2026,
    questionText:
      "In an experiment the values of two spring constants were measured as k1 = (10 ± 0.2) N/m and k2 = (20 ± 0.3) N/m. If these springs are connected in parallel, then the percentage error in equivalent spring constant is:",
    options: ["1.33%", "1.67%", "2.33%", "2.67%"],
    correctAnswer: "1.67%",
    explanation: {
      quick:
        "For parallel combination, keq = k1 + k2 = 30 N/m. Absolute errors add in a sum, so Δkeq = 0.2 + 0.3 = 0.5 N/m. Percentage error = (0.5/30)×100 = 1.67%.",
      standard:
        "For two springs in parallel:\nkeq = k1 + k2\n= 10 + 20 = 30 N/m\n\nFor addition, absolute errors add:\nΔkeq = Δk1 + Δk2\n= 0.2 + 0.3 = 0.5 N/m\n\nTherefore percentage error is:\n(Δkeq / keq) × 100\n= (0.5 / 30) × 100\n= 1.67%",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given two measured spring constants:\nk1 = (10 ± 0.2) N/m\nk2 = (20 ± 0.3) N/m\n\nThe springs are connected in parallel.\n\nStep 1: Equivalent spring constant in parallel\n\nFor springs in parallel, spring constants add directly:\nkeq = k1 + k2\n\nSo,\nkeq = 10 + 20 = 30 N/m\n\nStep 2: Error in the sum\n\nWhenever quantities are added, their absolute errors are added.\nSo,\nΔkeq = Δk1 + Δk2\n= 0.2 + 0.3\n= 0.5 N/m\n\nStep 3: Find percentage error\n\nPercentage error = (absolute error / measured value) × 100\n\nSo,\nPercentage error = (0.5 / 30) × 100\n= 1.666...\n≈ 1.67%\n\nCommon mistake:\nSome students incorrectly add percentage errors instead of absolute errors. For sums, always add absolute errors first.\n\nTherefore, the correct answer is 1.67%."
    }
  }
];

export default jeeExperimentalPhysicsQuestions;