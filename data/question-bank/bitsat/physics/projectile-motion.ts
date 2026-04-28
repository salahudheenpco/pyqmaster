import { PYQQuestion } from "@/lib/types";

export const bitsatProjectileMotionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-projectile-motion-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Projectile Motion",
    topic: "Relation between maximum height and horizontal range",
    year: 2017,
    questionText: "At what angle to the horizontal should an object be projected so that the maximum height reached is equal to the horizontal range?",
    options: ["tan⁻¹(2)", "tan⁻¹(4)", "tan⁻¹(3/2)", "tan⁻¹(3)"],
    correctAnswer: "tan⁻¹(4)",
    explanation: {
      quick: "Use H = R condition.",
      standard: "H = u²sin²θ/(2g), R = u²sin2θ/g. Setting H = R gives tanθ = 4.",
      deep: "H = u²sin²θ/(2g)\nR = u²sin2θ/g\n\nSet H = R:\n\nsin²θ/2 = sin2θ\nsin²θ = 2(2sinθcosθ)\n\nDivide by sinθ:\nsinθ = 4cosθ\n\nThus:\ntanθ = 4\n\nθ = tan⁻¹(4)"
    }
  },
  {
    id: "bitsat-2017-physics-projectile-motion-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Projectile Motion",
    topic: "Horizontal projection from an aeroplane",
    year: 2017,
    questionText: "An aeroplane is flying in a horizontal direction with a velocity u and at a height of 2000 m. When it is vertically below a point A on the ground, a food packet is released from it. The packet strikes the ground at point B. If AB = 3 km and g = 10 m s⁻², then the value of u is",
    options: ["54 km h⁻¹", "540 km h⁻¹", "150 km h⁻¹", "300 km h⁻¹"],
    correctAnswer: "540 km h⁻¹",
    explanation: {
      quick: "Use t from vertical motion, then u = distance/t.",
      standard: "t = √(2h/g) = √(400) = 20 s. Distance = 3000 m. So u = 3000/20 = 150 m/s = 540 km/h.",
      deep: "Height = 2000 m\n\nt = √(2h/g) = √(400) = 20 s\n\nHorizontal distance = 3000 m\n\nu = 3000 / 20 = 150 m/s\n\nConvert:\n150 × 3.6 = 540 km/h\n\nTherefore, answer is 540 km/h."
    }
  },
  {
    id: "bitsat-2017-physics-projectile-motion-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Projectile Motion",
    topic: "Projectile with additional horizontal acceleration",
    year: 2017,
    questionText: "The horizontal range and maximum height attained by a projectile are R and H respectively. If a constant horizontal acceleration is imparted to the projectile due to wind, with a = g/4, then its horizontal range and maximum height will be",
    options: ["(R + H), H/2", "(R + H/2), 2H", "(R + 2H), H", "(R + H), H"],
    correctAnswer: "(R + H), H",
    explanation: {
      quick: "Horizontal acceleration affects range only.",
      standard: "Vertical motion unchanged → height same. Extra horizontal displacement = (1/2)(g/4)T² = H.",
      deep: "Vertical motion unchanged → H same\n\nTime of flight:\nT = 2u sinθ / g\n\nExtra horizontal displacement:\n(1/2)(g/4)T² = (1/8)gT²\n\nBut H = (u² sin²θ)/(2g) = (gT²)/8\n\nSo extra distance = H\n\nNew range = R + H\n\nThus: (R + H), H"
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-projectile-motion-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinematics",
    topic: "Projectile Motion",
    year: 2018,
    questionText: "A projectile explodes at highest point into 1 kg and 4 kg fragments. KE doubles. Separation when they reach ground is:",
    options: ["52.25 m", "44.25 m", "65.32 m", "78.76 m"],
    correctAnswer: "52.25 m",
    explanation: {
      quick: "Momentum conserved, velocity redistributes.",
      standard: "Explosion at top → vertical velocity zero. Use momentum + KE condition to find horizontal speeds.",
      deep: "At highest point:\nVertical velocity = 0\n\nMomentum conserved horizontally\n\nLet velocities be v₁, v₂\n\nSolve using KE doubling + momentum conservation\n\nFind time to ground same for both\n\nSeparation = (v₁ - v₂)t\n\nFinal answer = 52.25 m"
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-projectile-motion-005",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinematics",
    topic: "Projectile Motion",
    year: 2018,
    questionText: "A stone is projected with velocity 2√(gh), so that it just clears two walls of equal height h, at distance of 2h from each other. The time interval of passing between the two walls is",
    options: ["√(h/g)", "√(2h/g)", "2√(h/g)", "2h/g"],
    correctAnswer: "2√(h/g)",
    explanation: {
      quick: "Same height → quadratic roots difference.",
      standard: "Use y = ut − (1/2)gt² = h. Roots difference gives time interval.",
      deep: "At both walls:\ny = h\n\nEquation:\nh = ut − (1/2)gt²\n\nSolve quadratic → two roots t₁, t₂\n\nTime gap:\nΔt = t₂ − t₁ = 2√(h/g)\n\nTherefore answer is 2√(h/g)."
    }
  }
];