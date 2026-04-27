import { PYQQuestion } from "@/lib/types";

export const bitsatGravitationQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-gravitation-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Gravitation",
    topic: "Time period of a satellite near geostationary orbit",
    year: 2017,
    questionText: "A geostationary satellite orbits around the earth in a circular orbit of radius 36000 km. Then, the time period of a satellite orbiting a few 100 km above the earth's surface will approximately be (R = 6400 km)",
    options: [
      "h/2",
      "h",
      "2 h",
      "4 h"
    ],
    correctAnswer: "2 h",
    explanation: {
      quick: "Use the main concept from Time period of a satellite near geostationary orbit and apply it directly. The correct answer is 2 h.",
      standard: "We solve this using the main idea from Time period of a satellite near geostationary orbit. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 2 h.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Time period of a satellite near geostationary orbit.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Time period of a satellite near geostationary orbit and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 2 h.\n\nExtra understanding:\nQuestions from Time period of a satellite near geostationary orbit often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 2 h."
    }
  }
{
  id: "bitsat-2018-physics-gravitation-002",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Gravitation",
  topic: "Energy Conservation in Gravitational Field",
  year: 2018,
  questionText: "An asteroid of mass m is approaching earth, initially at a distance 10R_e, with speed v_i. It hits earth with a speed v_f. If R_e and M_e are radius and mass of earth, then",
  options: [
    "v_f² = v_i² + (2Gm/R_e)(1 + 1/10)",
    "v_f² = v_i² + (2GM_e/R_e)(1 + 1/10)",
    "v_f² = v_i² + (2GM_e/R_e)(1 - 1/10)",
    "v_f² = v_i² + (2Gm/R_e)(1 - 1/10)"
  ],
  correctAnswer: "v_f² = v_i² + (2GM_e/R_e)(1 - 1/10)",
  explanation: {
    quick: "Apply conservation of mechanical energy between r = 10R_e and r = R_e.",
    standard: "Initial energy = (1/2)mv_i² - GM_em/(10R_e), final energy = (1/2)mv_f² - GM_em/R_e. Equating gives v_f² = v_i² + (2GM_e/R_e)(1 - 1/10).",
    deep: "Let us understand the question from the beginning…\n\nThe asteroid moves under gravity, so mechanical energy is conserved.\n\nInitial position:\nr_i = 10R_e\nInitial energy:\nE_i = (1/2)mv_i² - GM_em/(10R_e)\n\nFinal position when it reaches Earth’s surface:\nr_f = R_e\nFinal energy:\nE_f = (1/2)mv_f² - GM_em/R_e\n\nNow apply conservation of energy:\n(1/2)mv_i² - GM_em/(10R_e) = (1/2)mv_f² - GM_em/R_e\n\nRearrange:\n(1/2)m(v_f² - v_i²) = GM_em(1/R_e - 1/(10R_e))\n\nCancel m and simplify:\nv_f² - v_i² = (2GM_e/R_e)(1 - 1/10)\n\nSo:\nv_f² = v_i² + (2GM_e/R_e)(1 - 1/10)\n\nTherefore, the correct answer is v_f² = v_i² + (2GM_e/R_e)(1 - 1/10)."
  }
}
{
  id: "bitsat-2018-physics-gravitation-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Gravitation",
  topic: "Gravitational Field inside and outside a Uniform Sphere",
  year: 2018,
  questionText: "A spherically symmetric gravitational system of particles has mass density ρ = ρ₀ for r ≤ R and ρ = 0 for r > R, where ρ₀ is a constant. A test mass can undergo circular motion under the influence of the gravitational field of particles. Its speed as a function of distance r from the centre of the system is represented by",
  options: ["Graph a", "Graph b", "Graph c", "Graph d"],
  correctAnswer: "Graph c",
  explanation: {
    quick: "Inside the sphere, enclosed mass varies as r³ so v ∝ r. Outside, enclosed mass is constant so v ∝ 1/√r.",
    standard: "For r < R, M(r) ∝ r³ and circular motion gives v²/r = GM(r)/r², so v ∝ r. For r > R, total mass is constant, so v = √(GM/r), hence v ∝ 1/√r. The graph that rises linearly up to R and then falls like 1/√r is graph c.",
    deep: "Let us understand the question from the beginning…\n\nWe have a sphere of uniform density ρ₀ up to radius R.\n\nCase 1: Inside the sphere, r < R\nThe enclosed mass is:\nM(r) = (4/3)πr³ρ₀\n\nFor circular motion:\nmv²/r = GM(r)m/r²\n\nSo:\nv² = GM(r)/r\n\nSince M(r) ∝ r³,\nv² ∝ r²\nHence:\nv ∝ r\n\nSo inside the sphere, speed increases linearly with distance from the centre.\n\nCase 2: Outside the sphere, r > R\nNow the entire sphere acts like a point mass at the centre.\nTotal mass M is constant.\nThus:\nmv²/r = GMm/r²\n\nSo:\nv² = GM/r\nHence:\nv ∝ 1/√r\n\nTherefore the graph must:\n- start from zero at r = 0\n- rise linearly up to r = R\n- then decrease as 1/√r for r > R\n\nThat corresponds to graph c.\n\nTherefore, the correct answer is Graph c."
  }
}
];
