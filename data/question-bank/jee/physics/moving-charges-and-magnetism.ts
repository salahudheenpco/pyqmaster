export const jeeMovingChargesAndMagnetismQuestions = [
  {
    id: "jee-2026-physics-moving-charges-and-magnetism-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Moving Charges and Magnetism",
    topic: "Motion of charged particle along solenoid axis",
    year: 2026,
    questionText:
      "A current carrying solenoid is placed vertically and a particle of mass m with charge Q is released from rest. The particle moves along the axis of the solenoid. If g is acceleration due to gravity, then the acceleration a of the charged particle will satisfy:",
    options: ["0 < a < g", "a > g", "a = 0", "a = g"],
    correctAnswer: "a = g",
    explanation: {
      quick:
        "Magnetic force is Q(v × B). Along the axis of a solenoid, the magnetic field is also along the axis. Since the particle moves along the axis, v is parallel to B, so v × B = 0. Only gravity acts, so acceleration is g.",
      standard:
        "The magnetic force on a charged particle is:\nF = Q(v × B)\n\nInside a solenoid, the magnetic field is along the axis of the solenoid.\nThe particle is moving along the axis as well.\nSo v is parallel to B.\n\nHence,\nv × B = 0\nSo magnetic force is zero.\n\nTherefore only gravity acts on the particle.\nThus the acceleration is:\na = g",
      deep:
        "Let us understand the question from the beginning.\n\nA charged particle is released and moves along the axis of a current-carrying solenoid.\nWe are asked about its acceleration.\n\nStep 1: Recall magnetic force formula\n\nThe magnetic force on a moving charged particle is:\nF = Q(v × B)\n\nThis means the force depends on the cross product of velocity and magnetic field.\n\nStep 2: Direction of magnetic field in a solenoid\n\nInside a solenoid, the magnetic field is directed along its axis.\n\nSo if the particle is moving along the axis, then:\nvelocity v is parallel to magnetic field B\n\nStep 3: Evaluate the cross product\n\nIf two vectors are parallel, their cross product is zero.\nSo,\nv × B = 0\n\nTherefore,\nF_magnetic = 0\n\nStep 4: Determine actual acceleration\n\nSince the magnetic force is zero, the only force acting is gravity.\nThus the particle accelerates only due to gravity.\n\nSo,\na = g\n\nCommon mistake:\nA common mistake is to think that any charged particle inside a magnetic field must experience magnetic force. That is not true. The force is zero when velocity is parallel to the field.\n\nTherefore, the correct answer is a = g."
    }
  }
];

export default jeeMovingChargesAndMagnetismQuestions;