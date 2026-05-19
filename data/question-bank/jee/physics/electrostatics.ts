import { PYQQuestion } from "@/lib/types";

export const jeeElectrostaticsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-physics-electrostatics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Electric field due to point charge",
    year: 2026,
    questionText:
      "A point charge produces an electric field of 9 × 10^3 N/C at a distance of 3 m. The charge is:",
    options: ["1 μC", "3 μC", "9 μC", "27 μC"],
    correctAnswer: "1 μC",
    explanation: {
      quick:
        "Use E = kQ/r². Substitute values and solve for Q. Answer = 1 μC.",
      standard:
        "Using E = kQ/r², Q = Er²/k = (9 × 10^3 × 9)/(9 × 10^9) = 1 × 10^(-6) C.",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nElectric field due to a point charge is given by E = kQ / r².\n\n2. Given Information\n\nE = 9 × 10^3 N/C, r = 3 m.\n\n3. Strategy / Approach\n\nRearrange the formula to find Q.\n\n4. Step-by-Step Solution\n\nQ = Er² / k = (9 × 10^3 × 9)/(9 × 10^9) = 1 × 10^(-6) C.\n\n5. Key Insight\n\nElectric field depends inversely on square of distance.\n\n6. Final Answer\n\nTherefore, the correct answer is 1 μC.\n\n7. Common Mistakes\n\n• Forgetting square of distance\n• Unit conversion errors"
    }
  },

  {
    id: "jee-2026-physics-electrostatics-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Electrostatics",
    topic: "Electrostatic potential energy and energy conservation",
    year: 2026,
    questionText:
      "Consider two identical metallic spheres of radius R each having charge Q and mass m. Their centers have an initial separation of 4R. Both the spheres are given an initial speed u towards each other. The minimum value of u, so that they can just touch each other is: (Take k = 1/(4πε₀) and assume kQ² > Gm² where G is the Gravitational constant)",
    options: [
      "√[kQ²/(4mR) (1 − Gm²/kQ²)]",
      "√[kQ²/(2mR) (1 − Gm²/kQ²)]",
      "√[kQ²/(2mR) (1 − Gm²/(2kQ²))]",
      "√[kQ²/(4mR) (1 + Gm²/kQ²)]"
    ],
    correctAnswer: "√[kQ²/(4mR) (1 − Gm²/kQ²)]",
    explanation: {
      quick:
        "Use energy conservation. Total KE = mu². Change in potential = (kQ² − Gm²)/(4R). So u = √[kQ²/(4mR)(1 − Gm²/kQ²)].",

      standard:
        "Initial KE = mu².\n\nNet potential energy U = (kQ² − Gm²)/r.\n\nChange in U from 4R to 2R:\nΔU = (kQ² − Gm²)/(4R).\n\nUsing energy conservation:\nmu² = (kQ² − Gm²)/(4R)\n\nu = √[(kQ² − Gm²)/(4mR)].",

      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question uses conservation of mechanical energy combining electrostatic and gravitational interactions.\n\nElectrostatic potential energy:\nUe = kQ²/r\n\nGravitational potential energy:\nUg = −Gm²/r\n\nTotal:\nU = (kQ² − Gm²)/r\n\n2. Given Information\n\nInitial separation = 4R\nFinal separation = 2R\nEach sphere speed = u\n\n3. Strategy / Approach\n\nInitial KE converts into increase in potential energy.\n\n4. Step-by-Step Solution\n\nInitial KE = 2 × (1/2)mu² = mu²\n\nUi = (kQ² − Gm²)/(4R)\nUf = (kQ² − Gm²)/(2R)\n\nmu² = Uf − Ui\n= (kQ² − Gm²)/(4R)\n\nu² = (kQ² − Gm²)/(4mR)\n\n5. Key Insight\n\nBoth spheres move → total KE = mu²\nTouching distance = 2R\n\n6. Final Answer\n\nTherefore, the correct answer is √[kQ²/(4mR) (1 − Gm²/kQ²)].\n\n7. Common Mistakes\n\n• Taking distance as R instead of 2R\n• Forgetting gravitational term\n• Taking KE as (1/2)mu² instead of mu²"
    }
  }
];

export default jeeElectrostaticsQuestions;