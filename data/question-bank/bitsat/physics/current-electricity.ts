import { PYQQuestion } from "@/lib/types";

export const bitsatCurrentElectricityQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-current-electricity-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Resistance-temperature relation",
    year: 2017,
    questionText: "The resistance of a wire at 20°C is 20 Ω and at 500°C is 60 Ω. At which temperature will its resistance be 25 Ω?",
    options: [
      "50°C",
      "60°C",
      "70°C",
      "80°C"
    ],
    correctAnswer: "80°C",
    explanation: {
      quick: "Use the main concept from Resistance-temperature relation and apply it directly. The correct answer is 80°C.",
      standard: "We solve this using the main idea from Resistance-temperature relation. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 80°C.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Resistance-temperature relation.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Resistance-temperature relation and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 80°C.\n\nExtra understanding:\nQuestions from Resistance-temperature relation often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 80°C."
    }
  },
  {
    id: "bitsat-2017-physics-current-electricity-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Current Electricity",
    topic: "Heating effect in a resistor network",
    year: 2017,
    questionText: "In the circuit shown, the heat produced in the 5 Ω resistor is 10 cal s⁻¹. The heat produced per second in the 4 Ω resistor will be",
    options: [
      "1 cal",
      "2 cal",
      "3 cal",
      "4 cal"
    ],
    correctAnswer: "2 cal",
    explanation: {
      quick: "Use the main concept from Heating effect in a resistor network and apply it directly. The correct answer is 2 cal.",
      standard: "We solve this using the main idea from Heating effect in a resistor network. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 2 cal.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Heating effect in a resistor network.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Heating effect in a resistor network and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 2 cal.\n\nExtra understanding:\nQuestions from Heating effect in a resistor network often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 2 cal."
    }
  }
{
  id: "bitsat-2018-physics-current-electricity-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Current Electricity",
  topic: "Wheatstone Bridge",
  year: 2018,
  questionText: "In the given circuit, find X such that potential difference between B and D is zero.",
  options: ["9 Ω", "8 Ω", "4 Ω", "6 Ω"],
  correctAnswer: "6 Ω",
  explanation: {
    quick: "Bridge balanced condition.",
    standard: "Apply Wheatstone bridge rule.",
    deep: "Let us understand the question from the beginning…\n\nFor zero potential difference:\nBridge must be balanced.\n\nUsing ratio rule:\nR1/R2 = R3/R4\nSolving gives X = 6Ω\n\nTherefore, the correct answer is 6 Ω."
  }
}
{
  id: "bitsat-2018-physics-current-electricity-004",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Current Electricity",
  topic: "Galvanometer Sensitivity",
  year: 2018,
  questionText: "To increase the current sensitivity of a moving coil galvanometer by 50%, its resistance is increased, so that new resistance becomes twice its initial resistance, by what factor does its voltage sensitivity change?",
  options: [
    "Increases by 15%",
    "Decreases by 15%",
    "Increases by 25%",
    "Decreases by 25%"
  ],
  correctAnswer: "Decreases by 25%",
  explanation: {
    quick: "Voltage sensitivity = current sensitivity / resistance. Track the change in both quantities.",
    standard: "If current sensitivity increases by 50%, new current sensitivity is 1.5 times old. Resistance becomes 2 times. So new voltage sensitivity = (1.5/2) = 0.75 times old, i.e. decreases by 25%.",
    deep: "Let us understand the question from the beginning…\n\nFor a galvanometer:\nCurrent sensitivity = deflection / current\nVoltage sensitivity = deflection / voltage\n\nBut voltage V = IR, so:\nVoltage sensitivity = (deflection/current) × (1/R)\n= current sensitivity / resistance\n\nNow given:\n- current sensitivity increases by 50%\nSo new current sensitivity = 1.5 times old.\n\n- resistance becomes twice\nSo new resistance = 2R\n\nHence new voltage sensitivity:\nVS_new = (1.5 × CS_old) / (2R)\n= 0.75 × VS_old\n\nSo the voltage sensitivity becomes 75% of the original value.\nThat means it decreases by 25%.\n\nTherefore, the correct answer is Decreases by 25%."
  }
},
{
  id: "bitsat-2018-physics-current-electricity-005",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Current Electricity",
  topic: "Bridge Circuit Condition",
  year: 2018,
  questionText: "In the given circuit, it is observed that the current I is independent of the value of resistance R₅. Then, the resistance value must satisfy",
  options: [
    "1/R₃ + 1/R₆ = 1/(R₁ + R₂) + 1/(R₃ + R₄)",
    "R₁R₄ = R₂R₃",
    "R₁R₂R₅ = R₃R₄R₆",
    "R₁R₃ = R₂R₄ = R₅R₆"
  ],
  correctAnswer: "R₁R₄ = R₂R₃",
  explanation: {
    quick: "For current to be independent of the bridge branch resistor R₅, the bridge must be balanced.",
    standard: "If no current flows through R₅, then changing R₅ does not affect the main current. This happens when the Wheatstone bridge is balanced, i.e. R₁/R₂ = R₃/R₄, or equivalently R₁R₄ = R₂R₃.",
    deep: "Let us understand the question from the beginning…\n\nThe resistor R₅ is the bridge branch between the two middle junctions.\nIf the total current I is independent of R₅, that means no current flows through R₅.\nBecause if the current through R₅ were non-zero, changing R₅ would change the overall equivalent resistance and hence the battery current.\n\nSo the circuit must behave like a balanced Wheatstone bridge.\n\nCondition for balance:\nPotential at the two junctions connected by R₅ must be equal.\nThat gives:\nR₁ / R₂ = R₃ / R₄\n\nCross-multiplying:\nR₁R₄ = R₂R₃\n\nTherefore, the correct answer is R₁R₄ = R₂R₃."
  }
}
];
