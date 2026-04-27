import { PYQQuestion } from "@/lib/types";

export const bitsatWaveOpticsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-wave-optics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Wave Optics",
    topic: "Coincidence of bright fringes in YDSE",
    year: 2017,
    questionText: "In Young's double slit experiment, the slits are 2 mm apart and are illuminated by photons of two wavelengths λ₁ = 12000 Å and λ₂ = 10000 Å. At what minimum distance from the common central bright fringe on the screen, which is 2 m from the slits, will a bright fringe from one interference pattern coincide with a bright fringe from the other?",
    options: [
      "8 mm",
      "6 mm",
      "4 mm",
      "3 mm"
    ],
    correctAnswer: "6 mm",
    explanation: {
      quick: "Use the main concept from Coincidence of bright fringes in YDSE and apply it directly. The correct answer is 6 mm.",
      standard: "We solve this using the main idea from Coincidence of bright fringes in YDSE. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 6 mm.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Coincidence of bright fringes in YDSE.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Coincidence of bright fringes in YDSE and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 6 mm.\n\nExtra understanding:\nQuestions from Coincidence of bright fringes in YDSE often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 6 mm."
    }
  },
  {
    id: "bitsat-2017-physics-wave-optics-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Wave Optics",
    topic: "Intensity at a point between bright fringes",
    year: 2017,
    questionText: "The ratio of intensity at the centre of a bright fringe to the intensity at a point at a distance equal to one-fourth of the distance between two successive bright fringes is",
    options: [
      "4",
      "3",
      "2",
      "1"
    ],
    correctAnswer: "2",
    explanation: {
      quick: "Use the main concept from Intensity at a point between bright fringes and apply it directly. The correct answer is 2.",
      standard: "We solve this using the main idea from Intensity at a point between bright fringes. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Intensity at a point between bright fringes.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Intensity at a point between bright fringes and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 2.\n\nExtra understanding:\nQuestions from Intensity at a point between bright fringes often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 2."
    }
  }
{
  id: "bitsat-2018-physics-wave-optics-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Wave Optics",
  topic: "Young's Double Slit Experiment",
  year: 2018,
  questionText: "In Young's double slit experiment, intensity at a point is (1/4) of the maximum intensity. Angular position of this point is",
  options: [
    "sin⁻¹(λ/d)",
    "sin⁻¹(λ/2d)",
    "sin⁻¹(λ/3d)",
    "sin⁻¹(λ/4d)"
  ],
  correctAnswer: "sin⁻¹(λ/3d)",
  explanation: {
    quick: "Use I = Imax cos²(φ/2). Set I = Imax/4 and solve for path difference.",
    standard: "For YDSE, I = Imax cos²(φ/2). If I = Imax/4, then cos²(φ/2) = 1/4, so φ = 2π/3. Therefore path difference is λ/3 and d sinθ = λ/3. Hence θ = sin⁻¹(λ/3d).",
    deep: "Let us understand the question from the beginning…\n\nIn Young’s double slit experiment, the intensity at a point is given by:\nI = Imax cos²(φ/2)\n\nWe are told:\nI = Imax / 4\n\nSo:\ncos²(φ/2) = 1/4\n\nTaking the principal value:\ncos(φ/2) = 1/2\n\nHence:\nφ/2 = π/3\nso,\nφ = 2π/3\n\nNow phase difference and path difference are related by:\nφ = (2π/λ) Δx\n\nThus:\n2π/3 = (2π/λ) Δx\n\nSo:\nΔx = λ/3\n\nIn YDSE:\nΔx = d sinθ\n\nTherefore:\nd sinθ = λ/3\n\nHence:\nsinθ = λ/(3d)\n\nSo the angular position is:\nθ = sin⁻¹(λ/3d)\n\nTherefore, the correct answer is sin⁻¹(λ/3d)."
  }
}
];
