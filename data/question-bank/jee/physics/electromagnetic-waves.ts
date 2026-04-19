export const jeeElectromagneticWavesQuestions = [
  {
    id: "jee-2026-physics-electromagnetic-waves-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electromagnetic Waves",
    topic: "Magnetic field from electric field expression",
    year: 2026,
    questionText:
      "The electric field in a plane electromagnetic wave is given by Ey = 69 sin(0.6 × 10^3 x - 1.8 × 10^11 t) V/m. The expression for the magnetic field associated with this electromagnetic wave is:",
    options: [
      "Bz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T",
      "By = 69 sin(0.6 × 10^3 x + 1.8 × 10^11 t) T",
      "Bz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T",
      "By = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T"
    ],
    correctAnswer: "Bz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T",
    explanation: {
      quick:
        "For an EM wave, E and B are perpendicular and E = cB. Here E is along y-axis and wave travels along +x because phase is kx - ωt. So B must be along z-axis. Magnitude B0 = E0/c = 69/(3×10^8) = 2.3×10^(-7) T. Hence Bz = 2.3×10^(-7) sin(0.6×10^3 x - 1.8×10^11 t) T.",
      standard:
        "Given electric field:\nEy = 69 sin(0.6 × 10^3 x - 1.8 × 10^11 t) V/m\n\nFor a plane EM wave:\nE = cB\nSo,\nB0 = E0/c = 69 / (3 × 10^8)\n= 2.3 × 10^(-7) T\n\nNow determine direction:\n- E is along y-axis\n- phase is kx - ωt, so wave propagates along +x-axis\n- therefore B must be along z-axis so that E × B points along +x\n\nAlso E and B are in phase.\n\nHence,\nBz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the electric field of an electromagnetic wave:\nEy = 69 sin(0.6 × 10^3 x - 1.8 × 10^11 t) V/m\n\nWe need to find the corresponding magnetic field.\n\nStep 1: Use the relation between E and B\n\nFor an electromagnetic wave in vacuum or air,\nE0 = cB0\n\nwhere:\nE0 = amplitude of electric field\nB0 = amplitude of magnetic field\nc = speed of light = 3 × 10^8 m/s\n\nSo,\nB0 = E0 / c\n= 69 / (3 × 10^8)\n= 23 / (10^8)\n= 2.3 × 10^(-7) T\n\nStep 2: Find the direction of propagation\n\nThe phase is:\nkx - ωt\n\nA wave of the form:\nsin(kx - ωt)\ntravels in the +x direction.\n\nSo the wave is moving along +x.\n\nStep 3: Use mutual perpendicularity of E, B, and propagation direction\n\nIn an EM wave:\n- electric field E\n- magnetic field B\n- direction of propagation\nare all perpendicular to each other.\n\nHere E is along the y-axis because the field is Ey.\nPropagation is along +x.\nSo B must be along z-axis so that:\nE × B = direction of propagation\n\nThat is,\ny × z = x\nwhich matches the +x direction.\n\nStep 4: Write the full magnetic field expression\n\nE and B oscillate in phase, so the sine argument remains the same.\n\nTherefore,\nBz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T\n\nCommon mistake:\nA common mistake is to put B along y-axis or to change the sign in the phase. In a plane EM wave, E and B always have the same phase.\n\nTherefore, the correct answer is:\nBz = 2.3 × 10^(-7) sin(0.6 × 10^3 x - 1.8 × 10^11 t) T."
    }
  }
];

export default jeeElectromagneticWavesQuestions;