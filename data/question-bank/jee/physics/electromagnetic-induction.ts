export const jeeElectromagneticInductionQuestions = [
  {
    id: "jee-2026-physics-electromagnetic-induction-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    topic: "Thermal energy dissipated in a loop",
    year: 2026,
    questionText:
      "A conducting circular loop of area 1.0 m^2 is placed perpendicular to a magnetic field which varies as B = sin(100t) tesla. If the resistance of the loop is 100 Ω, then the thermal energy dissipated in the loop in one period is:",
    options: ["π J", "2π J", "π/2 J", "2/π J"],
    correctAnswer: "π J",
    explanation: {
      quick:
        "Flux Φ = BA = sin(100t). Induced emf e = -dΦ/dt = -100 cos(100t). Power dissipated = e^2/R = 10000 cos^2(100t)/100 = 100 cos^2(100t). One period is T = 2π/100 = π/50. Energy = ∫Pdt over one period = 100 × (T/2) = 100 × (π/100) = π J.",
      standard:
        "Area of loop:\nA = 1.0 m^2\nMagnetic field:\nB = sin(100t)\nSo magnetic flux is:\nΦ = BA = sin(100t)\n\nInduced emf:\ne = -dΦ/dt = -100 cos(100t)\n\nThus,\ne^2 = 10000 cos^2(100t)\n\nPower dissipated in the resistor:\nP = e^2 / R = 10000 cos^2(100t) / 100 = 100 cos^2(100t)\n\nThe period of sin(100t) is:\nT = 2π / 100 = π/50\n\nEnergy dissipated in one period:\nE = ∫ P dt over one period\nAverage value of cos^2 over one period = 1/2\nSo,\nE = 100 × T × 1/2\n= 100 × (π/50) × 1/2\n= π J",
      deep:
        "Let us understand the question from the beginning.\n\nA loop is placed in a magnetic field that changes with time.\nBecause the magnetic field is changing, magnetic flux through the loop changes.\nThat induces an emf in the loop.\nBecause the loop has resistance, electrical energy is converted into heat.\n\nStep 1: Write magnetic flux\n\nFlux through the loop is:\nΦ = BA cosθ\n\nThe loop is perpendicular to the magnetic field, so θ = 0 and cosθ = 1.\nAlso area A = 1.0 m^2.\n\nSo,\nΦ = B × 1 = sin(100t)\n\nStep 2: Find induced emf\n\nBy Faraday's law,\ne = -dΦ/dt\n\nSo,\ne = -d/dt [sin(100t)]\n= -100 cos(100t)\n\nThe minus sign only tells direction. For heat calculation, we need e^2.\n\nThus,\ne^2 = 10000 cos^2(100t)\n\nStep 3: Find power dissipated\n\nPower in a resistor is:\nP = e^2 / R\n\nGiven R = 100 Ω,\nP = 10000 cos^2(100t) / 100\n= 100 cos^2(100t)\n\nStep 4: Find one period\n\nThe magnetic field is sin(100t), so angular frequency is ω = 100.\nHence period is:\nT = 2π/ω = 2π/100 = π/50\n\nStep 5: Find thermal energy in one period\n\nEnergy dissipated is:\nE = ∫ P dt over one period\n\nNow cos^2 averaged over one full period is 1/2.\nSo average power is:\nP_avg = 100 × 1/2 = 50\n\nTherefore,\nE = P_avg × T\n= 50 × (π/50)\n= π J\n\nCommon mistake:\nA common mistake is to use the peak emf directly instead of integrating or using the average value of cos^2.\n\nTherefore, the correct answer is π J."
    }
  },
  {
    id: "jee-2026-physics-electromagnetic-induction-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electromagnetic Induction",
    topic: "Motional emf and force on sliding rod",
    year: 2026,
    questionText:
      "A long metal rod AB completes the circuit as shown in the figure. The plane of the circuit is perpendicular to a magnetic field of 0.10 T. If the resistance of the total circuit is 2 Ω, then the force needed to move the rod towards right with constant speed 1.5 m/s is:",
    options: [
      "5.7 × 10^(-2) N",
      "7.5 × 10^(-3) N",
      "7.5 × 10^(-2) N",
      "5.7 × 10^(-3) N"
    ],
    correctAnswer: "7.5 × 10^(-3) N",
    explanation: {
      quick:
        "Motional emf = Blv = 0.10 × 1 × 1.5 = 0.15 V. Current I = e/R = 0.15/2 = 0.075 A. Magnetic force on rod = BIl = 0.10 × 0.075 × 1 = 7.5×10^(-3) N. External force required equals this.",
      standard:
        "Given:\nB = 0.10 T\nl = 1 m\nv = 1.5 m/s\nR = 2 Ω\n\nInduced emf in moving rod:\ne = Blv = 0.10 × 1 × 1.5 = 0.15 V\n\nCurrent in circuit:\nI = e/R = 0.15/2 = 0.075 A\n\nMagnetic force on the rod:\nF = BIl = 0.10 × 0.075 × 1 = 0.0075 N\n= 7.5 × 10^(-3) N\n\nTo move it with constant speed, external force must equal this force.",
      deep:
        "Let us understand the question from the beginning.\n\nA conducting rod is moving in a magnetic field while completing a circuit.\nWhen a conductor moves through a magnetic field, motional emf is produced.\nThat emf drives current through the circuit.\nBecause the rod carries current in a magnetic field, a magnetic force opposes the motion.\nTo keep speed constant, we must apply an external force equal to this opposing force.\n\nStep 1: Find induced emf\n\nThe formula for motional emf is:\ne = Blv\n\nGiven:\nB = 0.10 T\nl = 1 m\nv = 1.5 m/s\n\nSo,\ne = 0.10 × 1 × 1.5 = 0.15 V\n\nStep 2: Find current in the circuit\n\nTotal resistance is 2 Ω.\nSo,\nI = e/R = 0.15/2 = 0.075 A\n\nStep 3: Find magnetic force on the rod\n\nForce on a current-carrying conductor in magnetic field is:\nF = BIl\n\nSo,\nF = 0.10 × 0.075 × 1 = 0.0075 N\n\nThus,\nF = 7.5 × 10^(-3) N\n\nStep 4: External force needed\n\nTo move the rod with constant speed, acceleration must be zero.\nSo external force must exactly balance this magnetic force.\n\nTherefore, required force is:\n7.5 × 10^(-3) N\n\nCommon mistake:\nA common mistake is to use B^2l^2v/R directly without understanding. That formula gives the same result, but deriving via emf and current is clearer.\n\nTherefore, the correct answer is 7.5 × 10^(-3) N."
    }
  }
];

export default jeeElectromagneticInductionQuestions;