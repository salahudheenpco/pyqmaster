export const jeeWaveOpticsQuestions = [
  {
    id: "jee-2026-physics-wave-optics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Wave Optics",
    topic: "YDSE fringe shift due to thin transparent sheet",
    year: 2026,
    questionText:
      "In a double slit experiment, the distance between the slits is 0.1 cm and the screen is placed at 50 cm from the slit plane. When one slit is covered with a transparent sheet having refractive index n = 1.5, the central fringe shifts by 0.2 cm. The thickness t of the sheet is:",
    options: [
      "8 × 10^(-4) cm",
      "6.0 × 10^(-3) cm",
      "5.0 × 10^(-3) cm",
      "5.6 × 10^(-4) cm"
    ],
    correctAnswer: "8 × 10^(-4) cm",
    explanation: {
      quick:
        "Fringe shift in YDSE due to a sheet is x = D(n-1)t/d. Hence t = xd / [D(n-1)] = (0.2×0.1) / [50×0.5] = 0.02/25 = 8×10^(-4) cm.",
      standard:
        "In Young's double slit experiment, when a thin sheet is placed before one slit, the central fringe shift is:\n x = D(n - 1)t / d\n\nSo,\n t = xd / [D(n - 1)]\n\nGiven:\nx = 0.2 cm\nd = 0.1 cm\nD = 50 cm\nn = 1.5\n\nThus,\nt = (0.2 × 0.1) / [50 × 0.5]\n= 0.02 / 25\n= 8 × 10^(-4) cm",
      deep:
        "Let us understand the question from the beginning.\n\nIn Young's double slit experiment, if a transparent sheet is inserted in front of one slit, the optical path of that slit increases.\nThis causes the entire fringe pattern to shift.\n\nStep 1: Recall the shift formula\n\nThe central fringe shift is:\n x = D(n - 1)t / d\n\nwhere:\nx = fringe shift\nD = distance of screen from slits\nn = refractive index of sheet\nt = thickness of sheet\nd = slit separation\n\nStep 2: Rearrange for thickness\n\nWe need t, so:\n t = xd / [D(n - 1)]\n\nStep 3: Substitute values\n\nGiven:\n x = 0.2 cm\n d = 0.1 cm\n D = 50 cm\n n = 1.5\n\nThus,\n t = (0.2 × 0.1) / [50 × (1.5 - 1)]\n= 0.02 / (50 × 0.5)\n= 0.02 / 25\n= 0.0008 cm\n= 8 × 10^(-4) cm\n\nCommon mistake:\nA common mistake is to use n instead of (n - 1). The shift depends on the extra optical path, which is proportional to (n - 1)t.\n\nTherefore, the correct answer is 8 × 10^(-4) cm."
    }
  }
];

export default jeeWaveOpticsQuestions;