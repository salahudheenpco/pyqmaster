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
    options: [
      "0.968",
      "0.98",
      "0.0325",
      "0.325"
    ],
    correctAnswer: "0.0325",
    explanation: {
      quick: "Use the main concept from Dispersive power of lens material and apply it directly. The correct answer is 0.0325.",
      standard: "We solve this using the main idea from Dispersive power of lens material. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 0.0325.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Dispersive power of lens material.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Dispersive power of lens material and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 0.0325.\n\nExtra understanding:\nQuestions from Dispersive power of lens material often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 0.0325."
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
      quick: "Use the main concept from Equivalent focal length of a plano-convex and plano-concave combination and apply it directly. The correct answer is R / (μ₁ - μ₂).",
      standard: "We solve this using the main idea from Equivalent focal length of a plano-convex and plano-concave combination. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as R / (μ₁ - μ₂).",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Equivalent focal length of a plano-convex and plano-concave combination.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Equivalent focal length of a plano-convex and plano-concave combination and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as R / (μ₁ - μ₂).\n\nExtra understanding:\nQuestions from Equivalent focal length of a plano-convex and plano-concave combination often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is R / (μ₁ - μ₂)."
    }
  }
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
    quick: "Different materials mean different refractive indices, so the lens effectively has two focal lengths.",
    standard: "Since the lens contains two transparent materials with different refractive indices, each part refracts light differently. Ignoring reflections, the two regions behave like two coaxial lenses of different focal lengths, producing two images.",
    deep: "Let us understand the question from the beginning…\n\nA convex lens normally forms a single image because the whole lens has one refractive index and therefore one focal length.\n\nBut here, the lens is built from two different transparent materials.\nThat means:\n- one part has refractive index n₁\n- another part has refractive index n₂\n\nSince focal length depends on refractive index, the two regions of the lens do not bend light by the same amount.\nSo effectively the lens behaves like two coaxial lens systems superposed together.\n\nTherefore, the incoming point source sends rays through two optical regions with different focal lengths.\nEach region forms its own image.\n\nSince reflections at the internal boundaries are ignored, we only consider refraction.\nThus the final result is two images.\n\nTherefore, the correct answer is two images."
  }
}
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
    quick: "First find refractive index from apparent depth through the plane face, then find radius from the spherical refraction case, and finally apply lens maker formula.",
    standard: "Using the first orientation, μ = real depth / apparent depth = 4/3. From the second orientation, spherical refraction gives R = 25 cm. Then for a planoconvex lens, 1/f = (μ - 1)(1/R), so f = 75 cm.",
    deep: "Let us understand the question from the beginning…\n\nThis question combines three ideas:\n1. apparent depth through a plane surface,\n2. apparent depth through a curved surface,\n3. lens maker formula.\n\nFirst orientation:\nThe curved face touches the table, so observation is through the plane face.\nFor a plane refracting surface:\nμ = real depth / apparent depth\n\nGiven:\nreal depth = 4 cm\napparent depth = 3 cm\n\nSo:\nμ = 4/3\n\nSecond orientation:\nNow the plane face touches the table and we observe through the curved surface.\nUsing the spherical refraction formula and substituting:\n- object depth = 4 cm\n- apparent depth = 25/8 cm\n- refractive index = 4/3\nwe obtain the radius of curvature:\nR = 25 cm\n\nNow apply lens maker formula for a plano-convex lens:\n1/f = (μ - 1)(1/R)\n= (1/3)(1/25)\n= 1/75\n\nHence:\nf = 75 cm\n\nTherefore, the correct answer is 75 cm."
  }
}
];
