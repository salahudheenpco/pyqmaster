import { PYQQuestion } from "@/lib/types";

export const bitsatGravitationQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-gravitation-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Gravitation",
    topic: "Time period of a satellite near Earth",
    year: 2017,
    questionText: "A geostationary satellite orbits around the earth in a circular orbit of radius 36000 km. Then, the time period of a satellite orbiting a few 100 km above the earth's surface will approximately be (R = 6400 km)",
    options: ["h/2", "h", "2 h", "4 h"],
    correctAnswer: "2 h",
    explanation: {
      quick: "Use T ∝ r^(3/2).",
      standard: "Geostationary satellite (r ≈ 36000 km) has T = 24 h. For low orbit (r ≈ 6400 km), T ≈ 24 × (6400/36000)^(3/2) ≈ 2 h.",
      deep: "Using Kepler’s third law:\n\nT² ∝ r³ ⇒ T ∝ r^(3/2)\n\nFor geostationary satellite:\nr₁ ≈ 36000 km, T₁ = 24 h\n\nFor near Earth satellite:\nr₂ ≈ 6400 km\n\nSo:\nT₂ = 24 × (6400/36000)^(3/2)\n≈ 24 × (0.177)^(3/2)\n≈ 24 × 0.07 ≈ 2 h\n\nTherefore, correct answer is 2 h."
    }
  },

  // ✅ FIXED COMMA

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
      quick: "Use energy conservation.",
      standard: "Apply E_initial = E_final using gravitational potential energy.",
      deep: "Initial energy:\nE_i = (1/2)mv_i² - GM_em/(10R_e)\n\nFinal energy:\nE_f = (1/2)mv_f² - GM_em/R_e\n\nEquating:\n(1/2)m(v_f² - v_i²) = GM_em(1/R_e - 1/(10R_e))\n\nSimplifying:\nv_f² = v_i² + (2GM_e/R_e)(1 - 1/10)\n\nTherefore, correct answer."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-physics-gravitation-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Gravitation",
    topic: "Gravitational Field Variation",
    year: 2018,
    questionText: "A spherically symmetric gravitational system has density ρ = ρ₀ for r ≤ R and 0 outside. Speed of a particle in circular motion varies as:",
    options: ["Graph a", "Graph b", "Graph c", "Graph d"],
    correctAnswer: "Graph c",
    explanation: {
      quick: "Inside: v ∝ r, outside: v ∝ 1/√r.",
      standard: "Mass inside varies as r³, outside constant → velocity relation changes.",
      deep: "Inside sphere:\nM(r) ∝ r³\n\nSo:\nv² = GM(r)/r ⇒ v ∝ r\n\nOutside sphere:\nM = constant\n\nSo:\nv² = GM/r ⇒ v ∝ 1/√r\n\nThus graph rises linearly then decreases.\n\nHence Graph c."
    }
  }
];