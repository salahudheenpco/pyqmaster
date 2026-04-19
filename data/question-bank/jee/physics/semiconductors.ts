export const jeeSemiconductorsQuestions = [
  {
    id: "jee-2026-physics-semiconductors-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Semiconductors",
    topic: "Logic gate identification",
    year: 2026,
    questionText:
      "The given logic circuit works as:",
    options: ["NOR gate", "OR gate", "AND gate", "NAND gate"],
    correctAnswer: "OR gate",
    explanation: {
      quick:
        "From the source diagram, the output simplifies to A + B. Therefore the circuit behaves like an OR gate.",
      standard:
        "The logic circuit shown in the source simplifies to the Boolean expression:\nY = A + B\n\nThis is the standard output expression for an OR gate.\nHence the given circuit works as an OR gate.",
      deep:
        "Let us understand the question from the beginning.\n\nThis is a logic-gate simplification question.\nThe source paper contains the circuit diagram, and the output obtained from that diagram simplifies to:\nY = A + B\n\nNow recall the standard outputs:\n- OR gate: A + B\n- AND gate: AB\n- NOR gate: (A + B)'\n- NAND gate: (AB)'\n\nSince the simplified expression is A + B, the circuit behaves exactly like an OR gate.\n\nCommon mistake:\nA common mistake is to identify the circuit from only the first layer of gates and ignore the final combination.\n\nTherefore, the correct answer is OR gate."
    }
  }
];

export default jeeSemiconductorsQuestions;