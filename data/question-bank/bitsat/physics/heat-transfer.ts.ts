import { PYQQuestion } from "@/lib/types";

export const bitsatheattransferQuestions: PYQQuestion[] = [
  {
  id: "bitsat-2018-physics-heat-transfer-001",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Heat Transfer",
  topic: "Steady State Conduction",
  year: 2018,
  questionText: "Three rods of identical cross-sectional area and made from the same metal form the sides of an isosceles triangle ABC right angled at B as shown in figure. The point A and B are maintained at temperature T and √2T respectively, in the steady state. Now, assuming that only heat conduction takes place, the temperature of point C will be",
  options: [
    "T/(√2 + 1)",
    "T/(√2 - 1)",
    "3T/(√2 + 1)",
    "√3T/(√2 + 1)"
  ],
  correctAnswer: "3T/(√2 + 1)",
  explanation: {
    quick: "Use thermal resistance proportional to rod length and apply steady-state heat balance at C.",
    standard: "Since all rods have same material and area, thermal resistance is proportional only to length. Let the equal perpendicular sides be x, then hypotenuse is √2x. At steady state, heat entering C through BC equals heat leaving through AC. Solving gives temperature at C as 3T/(√2 + 1).",
    deep: "Let us understand the question from the beginning…\n\nWe are told that the three sides of the triangle are conducting rods made of the same metal and having the same cross-sectional area. That means thermal resistance depends only on length:\nRth ∝ L\n\nNow look at the triangle:\n- AB = x\n- BC = x\n- AC = √2 x\nbecause it is an isosceles right triangle.\n\nGiven temperatures:\n- At A, temperature = T\n- At B, temperature = √2 T\n- At C, let temperature = θ\n\nAt steady state, the net heat accumulation at C is zero.\nSo:\nHeat flowing from B to C = Heat flowing from C to A\n\nUsing conduction law in resistance form:\n(√2T - θ) / x = (θ - T) / (√2x)\n\nMultiply both sides by x:\n√2T - θ = (θ - T)/√2\n\nMultiply through by √2:\n2T - √2θ = θ - T\n\nBring like terms together:\n3T = θ(√2 + 1)\n\nHence:\nθ = 3T / (√2 + 1)\n\nTherefore, the correct answer is 3T/(√2 + 1)."
  }
}
];
