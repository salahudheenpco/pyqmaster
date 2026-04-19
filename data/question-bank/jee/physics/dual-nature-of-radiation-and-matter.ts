export const jeeDualNatureQuestions = [
  {
    id: "jee-2026-physics-dual-nature-of-radiation-and-matter-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Dual Nature of Radiation and Matter",
    topic: "Photoelectric effect with multiple frequencies",
    year: 2026,
    questionText:
      "A light wave described by E = 60[sin(3 × 10^15 t) + sin(12 × 10^15 t)] falls on a metal surface of work function 2.8 eV. The maximum kinetic energy of the ejected photoelectron is approximately:",
    options: ["3.8 eV", "5.1 eV", "6 eV", "7.8 eV"],
    correctAnswer: "5.1 eV",
    explanation: {
      quick:
        "There are two angular frequencies: 3×10^15 and 12×10^15 rad/s. Photoemission depends on the higher-frequency photons. Using E = ħω = hω/2π, for ω = 12×10^15 rad/s, photon energy ≈ 7.9 eV. So Kmax = 7.9 - 2.8 = 5.1 eV.",
      standard:
        "The incident light has two frequency components:\nω1 = 3 × 10^15 rad/s\nω2 = 12 × 10^15 rad/s\n\nFor photoelectric emission, the maximum kinetic energy is:\nKmax = hν - ϕ = ħω - ϕ\n\nSince ħω = hω / 2π, use the larger angular frequency because it gives the largest electron energy.\n\nFor ω2 = 12 × 10^15 rad/s:\nE = hω / 2π\n≈ (6.6 × 10^-34 × 12 × 10^15) / (2π)\n≈ 1.26 × 10^-18 J\n\nConvert to eV:\nE ≈ (1.26 × 10^-18) / (1.6 × 10^-19)\n≈ 7.9 eV\n\nNow subtract work function:\nKmax ≈ 7.9 - 2.8 = 5.1 eV",
      deep:
        "Let us understand the question from the beginning.\n\nThe electric field is:\nE = 60[sin(3 × 10^15 t) + sin(12 × 10^15 t)]\n\nThis means the light contains two frequency components.\nMore precisely, the given numbers are angular frequencies:\nω1 = 3 × 10^15 rad/s\nω2 = 12 × 10^15 rad/s\n\nIn the photoelectric effect, one electron absorbs one photon.\nSo we must find the photon energy corresponding to each component.\nThe larger frequency produces the larger maximum kinetic energy.\n\nStep 1: Use the photoelectric equation\n\nKmax = photon energy - work function\n\nSince angular frequency is given,\nphoton energy = ħω = hω / 2π\n\nStep 2: Use the larger angular frequency\n\nTake:\nω = 12 × 10^15 rad/s\n\nThen,\nE = hω / 2π\n= (6.6 × 10^-34 × 12 × 10^15) / (2π)\n\nThis is approximately:\nE ≈ 1.26 × 10^-18 J\n\nConvert into eV:\n1 eV = 1.6 × 10^-19 J\n\nSo,\nE ≈ (1.26 × 10^-18) / (1.6 × 10^-19)\n≈ 7.9 eV\n\nStep 3: Subtract the work function\n\nWork function = 2.8 eV\n\nTherefore,\nKmax = 7.9 - 2.8 = 5.1 eV\n\nStep 4: Why not use the smaller frequency?\n\nIf we use ω1 = 3 × 10^15 rad/s, the photon energy is only about 2.0 eV, which is less than the work function 2.8 eV.\nThat component cannot eject photoelectrons.\n\nCommon mistake:\nA common mistake is to add the two photon energies. That is not how the photoelectric effect works. One electron absorbs one photon, not two photons from separate frequency components in this type of question.\n\nTherefore, the correct answer is 5.1 eV."
    }
  }
];

export default jeeDualNatureQuestions;