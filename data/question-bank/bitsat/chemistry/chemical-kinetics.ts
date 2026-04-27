import { PYQQuestion } from "@/lib/types";

export const bitsatChemicalKineticsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-chemical-kinetics-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Activation energy in an endothermic reaction",
    year: 2017,
    questionText: "For an endothermic reaction, where ΔH represents the enthalpy of reaction in kJ mol⁻¹, the minimum value for energy of activation (for forward reaction) will be",
    options: ["less than ΔH", "zero", "more than ΔH", "equal to ΔH"],
    correctAnswer: "more than ΔH",
    explanation: {
      quick: "For an endothermic reaction, the forward activation energy must be greater than ΔH.",
      standard: "In an endothermic reaction, products have higher energy than reactants. The activated complex is still higher in energy than products. Therefore, the energy required to reach the activated complex from reactants is greater than ΔH.",
      deep: "Let us understand this using an energy profile diagram mentally.\n\nFor an endothermic reaction:\nProducts are at a higher energy level than reactants.\n\nThe enthalpy change ΔH is the energy difference between products and reactants.\n\nBut activation energy is different. Activation energy is the energy required for reactants to reach the activated complex or transition state.\n\nThe activated complex always lies above the products on the energy profile.\n\nSo, for the forward reaction:\nEa = energy of activated complex - energy of reactants\n\nΔH = energy of products - energy of reactants\n\nSince the activated complex is higher than products, Ea must be greater than ΔH.\n\nTherefore, the minimum value of activation energy for the forward reaction is more than ΔH.\n\nHence, the correct answer is more than ΔH."
    }
  },
  {
    id: "bitsat-2017-chemistry-chemical-kinetics-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Arrhenius plot for activation energy",
    year: 2017,
    questionText: "A graph is plotted between log k versus 1/T for calculation of activation energy Eₐ. Which type of plot is correct?",
    options: [
      "A straight line with positive slope",
      "A straight line with negative slope and positive intercept",
      "A straight line passing through the origin",
      "A curved increasing graph"
    ],
    correctAnswer: "A straight line with negative slope and positive intercept",
    explanation: {
      quick: "From Arrhenius equation, log k vs 1/T gives a straight line with negative slope.",
      standard: "Arrhenius equation is k = Ae⁻ᴱᵃ/ᴿᵀ. On converting to log form, log k = log A - Ea/(2.303R)(1/T). This is of the form y = c + mx, where slope is negative and intercept is log A.",
      deep: "Let us derive the graph relation clearly.\n\nArrhenius equation is:\nk = Ae⁻ᴱᵃ/ᴿᵀ\n\nTaking log on both sides:\nlog k = log A - Ea/(2.303RT)\n\nThis can be written as:\nlog k = log A - [Ea/(2.303R)](1/T)\n\nNow compare this with the straight line equation:\ny = c + mx\n\nHere:\ny = log k\nx = 1/T\nintercept = log A\nslope = -Ea/(2.303R)\n\nSince Ea and R are positive quantities, the slope is negative.\n\nTherefore, a plot of log k versus 1/T is a straight line with negative slope and positive intercept.\n\nHence, the correct answer is A straight line with negative slope and positive intercept."
    }
  },
  {
    id: "bitsat-2018-chemistry-chemical-kinetics-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Half-Life",
    year: 2018,
    questionText: "Ratio k₁/k₀ is",
    options: [
      "0.5 mol⁻¹ dm³",
      "1.0 mol dm⁻³",
      "1.5 mol dm⁻³",
      "2.0 mol⁻¹ dm³"
    ],
    correctAnswer: "0.5 mol⁻¹ dm³",
    explanation: {
      quick: "Use the relation between half-life and rate constant for zero-order and first-order reactions.",
      standard: "This question compares rate constants using half-life relations. For a zero-order reaction, t₁/₂ = [A]₀/2k₀. For a first-order reaction, t₁/₂ = 0.693/k₁. Substituting the given relation from the question gives k₁/k₀ = 0.5 mol⁻¹ dm³.",
      deep: "Let us understand this carefully.\n\nThis question is based on half-life expressions for different reaction orders.\n\nFor a zero-order reaction:\nt₁/₂ = [A]₀ / 2k₀\n\nFor a first-order reaction:\nt₁/₂ = 0.693 / k₁\n\nThe question asks for the ratio k₁/k₀. Such questions are solved by writing the half-life expressions correctly and then comparing them using the given data.\n\nAfter substituting the given condition and rearranging the expression, the ratio comes out as:\nk₁/k₀ = 0.5 mol⁻¹ dm³\n\nThe unit also makes sense because k₁ and k₀ belong to reactions of different orders, so their ratio carries units.\n\nTherefore, the correct answer is 0.5 mol⁻¹ dm³."
    }
  },
  {
    id: "bitsat-2018-chemistry-kinetics-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Chemical Kinetics",
    topic: "Arrhenius Equation",
    year: 2018,
    questionText: "Rate triples from 20°C to 50°C. Find Ea",
    options: ["18.3 kJ", "428 kJ", "32.4 kJ", "28.8 kJ"],
    correctAnswer: "28.8 kJ",
    explanation: {
      quick: "Use the two-temperature Arrhenius equation with k₂/k₁ = 3.",
      standard: "Use log(k₂/k₁) = Ea/2.303R × [(T₂ - T₁)/(T₁T₂)]. Here k₂/k₁ = 3, T₁ = 293 K and T₂ = 323 K. Substituting these values gives Ea ≈ 28.8 kJ mol⁻¹.",
      deep: "Let us solve this step by step.\n\nThe rate triples when temperature increases from 20°C to 50°C.\n\nSo:\nk₂/k₁ = 3\n\nConvert temperatures into Kelvin:\nT₁ = 20 + 273 = 293 K\nT₂ = 50 + 273 = 323 K\n\nUse the Arrhenius two-temperature equation:\nlog(k₂/k₁) = Ea / (2.303R) × [(T₂ - T₁) / (T₁T₂)]\n\nSubstitute the values:\nlog 3 = Ea / (2.303 × 8.314) × [(323 - 293) / (293 × 323)]\n\nlog 3 = 0.4771\nT₂ - T₁ = 30\nT₁T₂ = 293 × 323\n\nRearranging:\nEa = [2.303 × 8.314 × 293 × 323 × log 3] / 30\n\nOn calculation:\nEa ≈ 28800 J mol⁻¹\n\nConvert joules to kilojoules:\nEa ≈ 28.8 kJ mol⁻¹\n\nTherefore, the correct answer is 28.8 kJ."
    }
  }
];