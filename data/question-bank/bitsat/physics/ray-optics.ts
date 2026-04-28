import { PYQQuestion } from "@/lib/types";

export const bitsatRayOpticsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-ray-optics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Ray Optics",
    topic: "Dispersive power of lens material",
    year: 2017,
    questionText: "The focal length of a thin convex lens for red and blue rays are 100 cm and 96.8 cm respectively. Then, the dispersive power of the material of the lens is",
    options: ["0.968", "0.98", "0.0325", "0.325"],
    correctAnswer: "0.0325",
    explanation: {
      quick: "ω = (f_r - f_b) / f_b",
      standard: "Using dispersive power formula, ω = (f_r - f_b)/f_b = (100 - 96.8)/96.8 ≈ 0.0325.",
      deep: "Dispersive power:\n\nω = (f_r - f_b)/f_b\n\nGiven:\nf_r = 100 cm\nf_b = 96.8 cm\n\nω = (100 - 96.8)/96.8\n≈ 3.2 / 96.8 ≈ 0.0325\n\nTherefore answer is 0.0325."
    }
  },
  {
    id: "bitsat-2017-physics-ray-optics-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Ray Optics",
    topic: "Equivalent focal length of a plano-convex and plano-concave combination",
    year: 2017,
    questionText: "A plano-convex lens fits exactly into a plano-concave lens. Their plane surfaces are parallel to each other. If the lenses are made of different materials of refractive indices μ₁ and μ₂, and R is the radius of curvature of the curved surface of the lenses, then the focal length of the combination is",
    options: [
      "R / [2(μ₁ + μ₂)]",
      "R / [2(μ₁ - μ₂)]",
      "R / (μ₁ - μ₂)",
      "2R / (μ₁ - μ₂)"
    ],
    correctAnswer: "R / (μ₁ - μ₂)",
    explanation: {
      quick: "Use lens maker combination.",
      standard: "Net power = (μ₁−1)/R − (μ₂−1)/R = (μ₁ − μ₂)/R ⇒ f = R/(μ₁ − μ₂).",
      deep: "Power of plano-convex:\nP₁ = (μ₁−1)/R\n\nPower of plano-concave:\nP₂ = −(μ₂−1)/R\n\nNet power:\nP = (μ₁ − μ₂)/R\n\nSo:\nf = 1/P = R/(μ₁ − μ₂)\n\nTherefore answer is R/(μ₁ − μ₂)."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-ray-optics-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Ray Optics",
    topic: "Lens with Multiple Refractive Indices",
    year: 2018,
    questionText: "A convex lens shown in the figure is made up of two types of transparent materials. A point source of light is placed on its principal axis. If reflections from the boundaries between layers are ignored, the lens will form",
    options: [
      "only one image",
      "two images",
      "infinite images",
      "no image at all"
    ],
    correctAnswer: "two images",
    explanation: {
      quick: "Different refractive indices → different focal lengths.",
      standard: "Lens behaves like two coaxial lenses → two images formed.",
      deep: "Two materials → two refractive indices\n\nThus two focal lengths\n\nEach region forms its own image\n\nTherefore two images are formed."
    }
  },

  {
    id: "bitsat-2018-physics-ray-optics-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Ray Optics",
    topic: "Apparent Depth and Lens Maker Formula",
    year: 2018,
    questionText: "A planoconvex lens has thickness of 4 cm. When placed on a horizontal table, with the curved surface in contact with it, the apparent depth of the bottom most point of the lens is found to be 3 cm. If the lens is inverted such that the plane face is in contact with the table, the apparent depth of the centre of the plane face is found to be 25/8 cm. The focal length of the lens is (assume thickness of lens to be negligible)",
    options: ["85 cm", "59 cm", "75 cm", "7.5 cm"],
    correctAnswer: "75 cm",
    explanation: {
      quick: "Find μ, then R, then f.",
      standard: "μ = 4/3, R = 25 cm, f = 75 cm.",
      deep: "From plane face:\nμ = 4/3\n\nFrom curved face:\nR = 25 cm\n\nLens formula:\n1/f = (μ − 1)/R = (1/3)/25 = 1/75\n\nThus f = 75 cm"
    }
  }
];