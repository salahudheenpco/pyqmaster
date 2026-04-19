export const jeeThermalPropertiesQuestions = [
  {
    id: "jee-2026-physics-thermal-properties-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Thermal Properties",
    topic: "Linear expansion of composite rod",
    year: 2026,
    questionText:
      "An aluminium rod and a steel rod having same lengths and cross-sections are joined to make a total length of 120 cm at 30°C. The coefficients of linear expansion of aluminium and steel are 24 × 10^(-6)/°C and 1.2 × 10^(-5)/°C respectively. The length of this composite rod when its temperature is raised to 100°C is:",
    options: ["120.2 cm", "120.03 cm", "120.15 cm", "120.06 cm"],
    correctAnswer: "120.15 cm",
    explanation: {
      quick:
        "Each rod is 60 cm long initially. Temperature rise is 70°C. Expansion of aluminium = 60 × 24×10^(-6) × 70 = 0.1008 cm. Expansion of steel = 60 × 12×10^(-6) × 70 = 0.0504 cm. Total expansion = 0.1512 cm. Final length = 120 + 0.1512 = 120.15 cm.",
      standard:
        "Total length at 30°C = 120 cm.\nSince both rods have same initial length, each rod is 60 cm long.\n\nTemperature rise:\n ΔT = 100 - 30 = 70°C\n\nFor aluminium:\n ΔL_Al = L α ΔT\n= 60 × 24×10^(-6) × 70\n= 0.1008 cm\n\nFor steel:\n ΔL_S = 60 × 1.2×10^(-5) × 70\n= 60 × 12×10^(-6) × 70\n= 0.0504 cm\n\nTotal expansion:\n ΔL = 0.1008 + 0.0504 = 0.1512 cm\n\nFinal length:\n L = 120 + 0.1512 = 120.1512 cm ≈ 120.15 cm",
      deep:
        "Let us understand the question from the beginning.\n\nWe have two rods:\n1. aluminium\n2. steel\n\nThey are joined end to end to make a total length of 120 cm at 30°C.\nSince the rods have the same original lengths, each one must be:\n 120/2 = 60 cm\n\nWe need to find the new total length when temperature becomes 100°C.\n\nStep 1: Find temperature rise\n\nΔT = 100 - 30 = 70°C\n\nStep 2: Use linear expansion formula\n\nFor any rod,\n ΔL = L α ΔT\n\nwhere\n L = original length\n α = coefficient of linear expansion\n ΔT = rise in temperature\n\nStep 3: Expansion of aluminium rod\n\nGiven,\n α_Al = 24 × 10^(-6)/°C\n L = 60 cm\n ΔT = 70°C\n\nSo,\n ΔL_Al = 60 × 24 × 10^(-6) × 70\n= 0.1008 cm\n\nStep 4: Expansion of steel rod\n\nGiven,\n α_Steel = 1.2 × 10^(-5)/°C = 12 × 10^(-6)/°C\n\nSo,\n ΔL_Steel = 60 × 12 × 10^(-6) × 70\n= 0.0504 cm\n\nStep 5: Total expansion\n\nSince the rods are joined end to end, total expansion is the sum:\n ΔL_total = 0.1008 + 0.0504 = 0.1512 cm\n\nStep 6: Final length\n\nFinal length = original total length + total expansion\n= 120 + 0.1512\n= 120.1512 cm\n\nSo approximately,\n 120.15 cm\n\nCommon mistake:\nA common mistake is treating the whole 120 cm as aluminium and again as steel. Each rod expands according to its own material and its own initial length.\n\nTherefore, the correct answer is 120.15 cm."
    }
  },
  {
    id: "jee-2026-physics-thermal-properties-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Thermal Properties",
    topic: "Heating water using gas geyser",
    year: 2026,
    questionText:
      "A gas-based geyser heats water flowing at the rate of 5.0 litres per minute from 27°C to 87°C. If the heat of combustion of the gas is 5.0 × 10^4 J/g and specific heat capacity of water is 4200 J/kg°C, then the rate of consumption of the gas is:",
    options: ["0.21 g/s", "2.1 g/s", "0.42 g/s", "4.2 g/s"],
    correctAnswer: "4.2 g/s",
    explanation: {
      quick:
        "Water flow rate = 5 L/min = 5 kg/min = 1/12 kg/s. Temperature rise = 60°C. Heat needed per second = (1/12) × 4200 × 60 = 21000 J/s. Gas gives 5×10^4 J per gram. So gas needed per second = 21000 / (5×10^4) = 0.42 g/s.",
      standard:
        "Water flow = 5.0 litres/minute.\nSince density of water is 1 kg/L, this is 5 kg/minute.\nSo per second:\n mass flow rate = 5/60 = 1/12 kg/s\n\nTemperature rise:\n ΔT = 87 - 27 = 60°C\n\nHeat required per second:\n Q/t = m c ΔT\n= (1/12) × 4200 × 60\n= 21000 J/s\n\nHeat of combustion of gas = 5.0 × 10^4 J/g\nSo gas consumption rate = 21000 / (5×10^4)\n= 0.42 g/s",
      deep:
        "Let us understand the question from the beginning.\n\nA geyser is heating flowing water continuously.\nSo we must calculate how much heat is needed every second, and then find how much gas must burn every second to supply that heat.\n\nStep 1: Convert water flow rate into kg/s\n\nGiven water flow rate = 5.0 litres per minute\n\nSince 1 litre of water has mass about 1 kg,\nthis means 5 litres/minute = 5 kg/minute\n\nConvert to per second:\n 5/60 = 1/12 kg/s\n\nSo mass of water heated each second is:\n m = 1/12 kg\n\nStep 2: Find temperature rise\n\nInitial temperature = 27°C\nFinal temperature = 87°C\n\nSo,\n ΔT = 87 - 27 = 60°C\n\nStep 3: Find heat required per second\n\nUse the formula:\n Q = mcΔT\n\nHere,\n c = 4200 J/kg°C\n\nSo heat needed each second is:\n Q/t = (1/12) × 4200 × 60\n= 21000 J/s\n\nStep 4: Use heat of combustion of gas\n\nGiven,\n heat of combustion = 5.0 × 10^4 J per gram\n\nThis means 1 gram of gas gives 50000 J.\n\nSo gas needed per second is:\n gas rate = 21000 / 50000\n= 0.42 g/s\n\nStep 5: Final answer\n\nTherefore, the rate of consumption of the gas is:\n 0.42 g/s\n\nAccuracy note:\nThe source answer key visible in the PDF marks 4.2 g/s, but direct calculation gives 0.42 g/s. So this question appears inconsistent in the source. I kept the mathematically correct value in the explanation; change `correctAnswer` to `0.42 g/s` if you want strict physics accuracy in your bank.\n\nTherefore, the mathematically correct answer is 0.42 g/s."
    }
  }
];

export default jeeThermalPropertiesQuestions;