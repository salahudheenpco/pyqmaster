export const jeeElectrostaticsQuestions = [
  {
    id: "jee-2026-physics-electrostatics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Work done using electric potential",
    year: 2026,
    questionText:
      "A point charge of 10^(-8) C is placed at origin. The work done in moving a point charge of 2 μC from point A(4, 4, 2) m to B(2, 2, 1) m is:",
    options: ["45 × 10^(-6) J", "0", "30 × 10^(-6) J", "15 × 10^(-6) J"],
    correctAnswer: "30 × 10^(-6) J",
    explanation: {
      quick:
        "Distance of A from origin = √(4²+4²+2²) = 6 m. Distance of B from origin = √(2²+2²+1²) = 3 m. Potential due to charge 10^(-8) C: V = kQ/r. So VA = 15 V, VB = 30 V. Work done = q(VB - VA) = 2×10^(-6) × 15 = 30×10^(-6) J.",
      standard:
        "Given source charge at origin:\nQ = 10^(-8) C\nTest charge:\nq = 2 μC = 2 × 10^(-6) C\n\nDistance of A from origin:\nrA = √(4^2 + 4^2 + 2^2) = √36 = 6 m\n\nDistance of B from origin:\nrB = √(2^2 + 2^2 + 1^2) = √9 = 3 m\n\nPotential due to point charge:\nV = kQ/r, where k = 9 × 10^9\n\nSo,\nVA = (9 × 10^9 × 10^(-8))/6 = 15 V\nVB = (9 × 10^9 × 10^(-8))/3 = 30 V\n\nWork done in moving charge from A to B:\nW = q(VB - VA)\n= 2 × 10^(-6) × (30 - 15)\n= 30 × 10^(-6) J",
      deep:
        "Let us understand the question from the beginning.\n\nA point charge Q = 10^(-8) C is kept at the origin.\nWe need the work done in moving another charge q = 2 μC from point A to point B.\n\nStep 1: Use electric potential formula\n\nPotential due to a point charge is:\n V = kQ/r\nwhere:\n k = 9 × 10^9 SI unit\n Q = source charge\n r = distance from the source charge\n\nStep 2: Find distance of point A from origin\n\nA = (4, 4, 2)\nSo,\n rA = √(4^2 + 4^2 + 2^2)\n= √(16 + 16 + 4)\n= √36 = 6 m\n\nStep 3: Find distance of point B from origin\n\nB = (2, 2, 1)\nSo,\n rB = √(2^2 + 2^2 + 1^2)\n= √(4 + 4 + 1)\n= √9 = 3 m\n\nStep 4: Find potentials at A and B\n\nAt A:\n VA = kQ/rA\n= (9 × 10^9 × 10^(-8))/6\n= 90/6\n= 15 V\n\nAt B:\n VB = kQ/rB\n= (9 × 10^9 × 10^(-8))/3\n= 90/3\n= 30 V\n\nStep 5: Find work done\n\nWork done in moving charge q from A to B is:\n W = q(VB - VA)\n\nHere,\n q = 2 × 10^(-6) C\n VB - VA = 30 - 15 = 15 V\n\nSo,\n W = 2 × 10^(-6) × 15\n= 30 × 10^(-6) J\n\nCommon mistake:\nStudents often forget to calculate distance from the origin using all three coordinates. Another common mistake is reversing VA and VB.\n\nTherefore, the correct answer is 30 × 10^(-6) J."
    }
  }
];

export default jeeElectrostaticsQuestions;