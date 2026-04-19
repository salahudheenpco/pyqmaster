export const jeeFluidMechanicsQuestions = [
  {
    id: "jee-2026-physics-fluid-mechanics-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Fluid Mechanics",
    topic: "Bernoulli equation and continuity",
    year: 2026,
    questionText:
      "Water flows through a horizontal tube as shown in the figure. The difference in height between the water columns in the vertical tubes is 5 cm and the area of cross-sections at A and B are 6 cm^2 and 3 cm^2 respectively. The rate of flow will be:",
    options: [
      "200√6 cm^3/s",
      "100√3 cm^3/s",
      "200 cm^3/s",
      "200√3 cm^3/s"
    ],
    correctAnswer: "200√3 cm^3/s",
    explanation: {
      quick:
        "For horizontal flow, pressure difference is ρgh = ρg(0.05). By continuity, A_A v_A = A_B v_B, so with areas 6 and 3 cm², v_B = 2v_A. Bernoulli gives P_A - P_B = 1/2 ρ(v_B² - v_A²) = 1/2 ρ(4v_A² - v_A²) = 3/2 ρv_A². Hence ρg(0.05) = 3/2 ρv_A². Using g = 10, v_A = 1/√3 m/s. Flow rate Q = A_A v_A = 6×10^(-4) × 1/√3 = 2√3 × 10^(-4) m³/s = 200√3 cm³/s.",
      standard:
        "Given:\nheight difference h = 5 cm = 0.05 m\nArea at A = 6 cm² = 6 × 10^(-4) m²\nArea at B = 3 cm² = 3 × 10^(-4) m²\n\nBy continuity:\nA_A v_A = A_B v_B\n=> 6v_A = 3v_B\n=> v_B = 2v_A\n\nSince the tube is horizontal, Bernoulli gives:\nP_A + (1/2)ρv_A² = P_B + (1/2)ρv_B²\n=> P_A - P_B = (1/2)ρ(v_B² - v_A²)\n\nPressure difference from column heights:\nP_A - P_B = ρgh = ρ × 10 × 0.05 = 0.5ρ\n\nSo,\n0.5ρ = (1/2)ρ(4v_A² - v_A²)\n=> 0.5 = (3/2)v_A²\n=> v_A² = 1/3\n=> v_A = 1/√3 m/s\n\nNow flow rate:\nQ = A_A v_A\n= 6 × 10^(-4) × 1/√3\n= 2√3 × 10^(-4) m³/s\n= 200√3 cm³/s",
      deep:
        "Let us understand the question from the beginning.\n\nWater is flowing through a horizontal tube whose cross-sectional area changes.\nThe heights of the water columns in the side tubes tell us the pressure difference.\n\nStep 1: Use continuity equation\n\nFor incompressible flow,\nA_A v_A = A_B v_B\n\nGiven:\nA_A = 6 cm²\nA_B = 3 cm²\n\nSo,\n6v_A = 3v_B\n=> v_B = 2v_A\n\nStep 2: Use pressure difference from side columns\n\nThe difference in water levels is 5 cm = 0.05 m.\nSince the side tubes contain the same fluid, pressure difference is:\nP_A - P_B = ρgh\n= ρ × 10 × 0.05\n= 0.5ρ\n\nStep 3: Apply Bernoulli equation\n\nBecause the main tube is horizontal, both points are at the same height.\nSo Bernoulli equation becomes:\nP_A + (1/2)ρv_A² = P_B + (1/2)ρv_B²\n\nRearrange:\nP_A - P_B = (1/2)ρ(v_B² - v_A²)\n\nSubstitute v_B = 2v_A:\nP_A - P_B = (1/2)ρ(4v_A² - v_A²)\n= (3/2)ρv_A²\n\nNow equate with pressure difference from side tubes:\n0.5ρ = (3/2)ρv_A²\n\nCancel ρ:\n0.5 = 1.5v_A²\n=> v_A² = 1/3\n=> v_A = 1/√3 m/s\n\nStep 4: Find volume flow rate\n\nQ = A_A v_A\n= 6 × 10^(-4) × 1/√3\n= 2√3 × 10^(-4) m³/s\n\nConvert to cm³/s:\n1 m³ = 10^6 cm³\nSo,\nQ = 2√3 × 10^(-4) × 10^6\n= 200√3 cm³/s\n\nCommon mistake:\nA common mistake is to use the height difference directly as a speed relation. It actually represents pressure difference first.\n\nTherefore, the correct answer is 200√3 cm³/s."
    }
  }
];

export default jeeFluidMechanicsQuestions;