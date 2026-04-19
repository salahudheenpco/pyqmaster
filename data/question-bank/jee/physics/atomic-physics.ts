export const jeeAtomicPhysicsQuestions = [
  {
    id: "jee-2026-physics-atomic-physics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Atomic Physics",
    topic: "Distance of closest approach in Rutherford scattering",
    year: 2026,
    questionText:
      "If an alpha particle with energy 7.7 MeV is bombarded on a thin gold foil, the closest distance from the nucleus it can reach is ____________. (Atomic number of gold = 79 and 1/(4πϵ0) = 9 × 10^9 SI units)",
    options: [
      "2.95 × 10^(-16) m",
      "3.85 × 10^(-14) m",
      "2.95 × 10^(-14) m",
      "3.85 × 10^(-16) m"
    ],
    correctAnswer: "2.95 × 10^(-14) m",
    explanation: {
      quick:
        "At closest approach, initial kinetic energy becomes electrostatic potential energy: E = k(2e)(79e)/r. Convert 7.7 MeV to joules and solve. This gives r ≈ 2.95 × 10^(-14) m.",
      standard:
        "For head-on Rutherford scattering, at the closest distance of approach:\nK.E. = electrostatic potential energy\n\nSo,\nE = k(2e)(Ze)/r\n\nHere,\nZ = 79,\nk = 9 × 10^9,\ne = 1.6 × 10^(-19) C,\nE = 7.7 MeV = 7.7 × 10^6 × 1.6 × 10^(-19) J\n= 1.232 × 10^(-12) J\n\nThus,\nr = k(2e)(79e)/E\n\nSubstituting:\nr = [9 × 10^9 × 2 × 79 × (1.6 × 10^(-19))^2] / [1.232 × 10^(-12)]\n≈ 2.95 × 10^(-14) m",
      deep:
        "Let us understand the question from the beginning.\n\nAn alpha particle is positively charged.\nA gold nucleus is also positively charged.\nSo as the alpha particle moves toward the nucleus, it slows down due to electrostatic repulsion.\n\nAt the point of closest approach, its entire initial kinetic energy gets converted into electrostatic potential energy.\n\nStep 1: Write the energy equation\n\nAt closest approach:\ninitial kinetic energy = electrostatic potential energy\n\nSo,\nE = k q1 q2 / r\n\nHere:\nq1 = charge of alpha particle = 2e\nq2 = charge of gold nucleus = 79e\n\nTherefore,\nE = k(2e)(79e)/r\n\nSo,\nr = k(2e)(79e)/E\n\nStep 2: Convert the given energy into joules\n\nGiven energy = 7.7 MeV\n\nWe know:\n1 eV = 1.6 × 10^(-19) J\n\nSo,\nE = 7.7 × 10^6 × 1.6 × 10^(-19)\n= 1.232 × 10^(-12) J\n\nStep 3: Substitute values\n\nk = 9 × 10^9\ne = 1.6 × 10^(-19) C\n\nThus,\nr = [9 × 10^9 × 2 × 79 × (1.6 × 10^(-19))^2] / [1.232 × 10^(-12)]\n\nNow,\n(1.6 × 10^(-19))^2 = 2.56 × 10^(-38)\n\nSo numerator becomes approximately:\n9 × 10^9 × 158 × 2.56 × 10^(-38)\n≈ 3.64 × 10^(-26)\n\nNow divide by 1.232 × 10^(-12):\n\nr ≈ 2.95 × 10^(-14) m\n\nStep 4: Final answer\n\nTherefore the closest distance of approach is:\n2.95 × 10^(-14) m\n\nCommon mistake:\nA common mistake is forgetting that the alpha particle has charge 2e, not e.\n\nTherefore, the correct answer is 2.95 × 10^(-14) m."
    }
  }
];

export default jeeAtomicPhysicsQuestions;