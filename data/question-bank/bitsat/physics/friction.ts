import { PYQQuestion } from "@/lib/types";

export const bitsatFrictionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-friction-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Friction",
    topic: "Maximum force for two blocks to move together",
    year: 2017,
    questionText: "Two blocks A and B are placed one over the other on a smooth horizontal surface. The maximum horizontal force that can be applied on the lower block A, so that A and B move without separation, is 49 N. The coefficient of friction between A and B is",
    options: ["0.2", "0.3", "0.5", "0.8"],
    correctAnswer: "0.5",
    explanation: {
      quick: "Max friction provides acceleration: F = μmg.",
      standard: "For no slipping, friction provides acceleration: f = ma. Maximum friction = μmg. Given max force 49 N = μ × mg → μ = 0.5.",
      deep: "Let’s solve step by step.\n\nLet mass of top block = m\n\nMaximum friction:\nf_max = μmg\n\nFor no slipping:\nF = total mass × acceleration\nBut acceleration of top block comes from friction.\n\nThus:\nf_max = m a\n\nGiven max force = 49 N\n⇒ μmg = 49\n\nSince mg = 98 N (approx),\nμ = 49 / 98 = 0.5\n\nTherefore, correct answer is 0.5."
    }
  },

  {
    id: "bitsat-2017-physics-friction-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Friction",
    topic: "Minimum force to move a block with friction at two contacts",
    year: 2017,
    questionText: "A block A of mass 100 kg rests on another block B of mass 200 kg and is tied to a wall. The coefficient of friction between A and B is 0.2 and that between B and the ground is 0.3. The minimum force required to move the block B is (g = 10 m s⁻²)",
    options: ["900 N", "200 N", "1100 N", "700 N"],
    correctAnswer: "1100 N",
    explanation: {
      quick: "Total opposing friction = sum of both frictions.",
      standard: "Friction between A-B = μ₁m₁g = 0.2×100×10 = 200 N. Ground friction = μ₂(m₁+m₂)g = 0.3×300×10 = 900 N. Total = 1100 N.",
      deep: "Let us calculate both frictions.\n\n1. Between A and B:\nf₁ = μ₁ m₁ g = 0.2 × 100 × 10 = 200 N\n\n2. Between B and ground:\nTotal mass = 100 + 200 = 300 kg\nf₂ = μ₂ × 300 × 10 = 0.3 × 300 × 10 = 900 N\n\nTotal force needed:\nF = f₁ + f₂ = 200 + 900 = 1100 N\n\nTherefore, correct answer is 1100 N."
    }
  },

  {
    id: "bitsat-2018-physics-friction-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Laws of Motion",
    topic: "Friction",
    year: 2018,
    questionText: "A car moving at 36 km/h climbs a 30° incline and stops. μ = 0.1. Find distance travelled.",
    options: ["12.53 m", "21.42 m", "15.43 m", "8.53 m"],
    correctAnswer: "12.53 m",
    explanation: {
      quick: "Use v² = u² − 2as with a = g(sinθ + μcosθ).",
      standard: "u = 10 m/s. a = g(sin30 + μcos30) = 10(0.5 + 0.1×0.866). Substitute in v² = u² − 2as to get s ≈ 12.53 m.",
      deep: "Let us solve step by step.\n\nInitial speed:\nu = 36 km/h = 10 m/s\n\nDeceleration:\na = g(sin30 + μcos30)\n= 10(0.5 + 0.1×0.866)\n≈ 10(0.5866) ≈ 5.866 m/s²\n\nUsing:\nv² = u² − 2as\n0 = 100 − 2×5.866×s\n\ns ≈ 100 / 11.732 ≈ 12.53 m\n\nTherefore, correct answer is 12.53 m."
    }
  },

  {
    id: "bitsat-2018-physics-friction-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Laws of Motion",
    topic: "Friction on Inclined Plane",
    year: 2018,
    questionText: "An object takes n times as much time to slide down a rough inclined plane as it takes to slide down a perfectly smooth 45° inclined plane. The coefficient of kinetic friction is",
    options: ["n² - 1", "1 - 1/n²", "n² + 1", "1 + 1/n²"],
    correctAnswer: "1 - 1/n²",
    explanation: {
      quick: "Time ratio → acceleration ratio.",
      standard: "Using s = (1/2)at², t ∝ 1/√a. Hence n² = a_smooth / a_rough. Solving gives μ = 1 - 1/n².",
      deep: "Let us derive properly.\n\nFrom s = (1/2)at²:\nt² ∝ 1/a\n\nSo:\n(t_rough / t_smooth)² = a_smooth / a_rough\n\nGiven:\nt_rough = n t_smooth\n⇒ n² = a_smooth / a_rough\n\nNow:\na_smooth = g sin45° = g/√2\n\na_rough = g(sin45° − μcos45°)\n= g(1 − μ)/√2\n\nSo:\nn² = 1/(1 − μ)\n\nThus:\nμ = 1 − 1/n²\n\nTherefore, correct answer is 1 − 1/n²."
    }
  }
];