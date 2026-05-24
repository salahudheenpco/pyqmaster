import { PYQQuestion } from "@/lib/types";

export const bitsatThermalRadiationQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-thermal-radiation-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Thermal Radiation",
    topic: "Rate of energy radiation from a black body",
    year: 2017,
    questionText: "If the temperature of a black body increases from 300 K to 900 K, then the rate of energy radiation increases by",
    options: [
      "81 times",
      "3 times",
      "9 times",
      "27 times"
    ],
    correctAnswer: "81 times",
    explanation: {
      quick: "For a black body, the rate of energy radiation per unit area is given by Stefan-Boltzmann law: E = σT⁴. If the surface area remains the same, then the total rate of radiation is also directly proportional to T⁴. Here the temperature increases from 300 K to 900 K. So the temperature ratio is T₂/T₁ = 900/300 = 3. Since radiation rate is proportional to the fourth power of absolute temperature, the increase factor is (T₂/T₁)⁴ = 3⁴ = 81. Therefore, the rate of energy radiation becomes 81 times the original value. The key point is that temperature is already in kelvin, so no conversion is needed.",
      standard: "This question is based on Stefan-Boltzmann law for black body radiation. According to this law, the rate of energy radiated per unit area by a black body is directly proportional to the fourth power of its absolute temperature. The formula is E = σT⁴, where E is the energy radiated per unit area per second, σ is Stefan's constant, and T is the absolute temperature in kelvin.\n\nSince the same black body is being considered, we assume its surface area and nature remain unchanged. Therefore, the rate of energy radiation is proportional only to T⁴. We can compare the final and initial radiation rates by taking a ratio. Let the initial temperature be T₁ = 300 K and the final temperature be T₂ = 900 K.\n\nThe ratio of final radiation rate to initial radiation rate is R₂/R₁ = (T₂/T₁)⁴. Substituting the values, R₂/R₁ = (900/300)⁴. Now 900/300 = 3. Therefore, R₂/R₁ = 3⁴ = 81.\n\nSo the final rate of energy radiation is 81 times the initial rate. Students should notice that the temperatures are already in kelvin. Also, the power of 4 is very important; using a direct ratio would give only 3, and using square would give 9, both of which are incorrect. Therefore, the correct answer is 81 times.",
      deep: "Let us understand the question from the beginning.\n\n1. Concept Introduction\nThermal radiation is the energy emitted by a body because of its temperature. A black body is an ideal body that absorbs all radiation falling on it and also emits radiation with maximum possible efficiency at a given temperature.\n\nThe important law used here is Stefan-Boltzmann law. It states that the rate of energy radiation per unit area from a black body is directly proportional to the fourth power of its absolute temperature. The formula is:\n\nE = σT⁴.\n\nHere E is the energy radiated per unit area per second, σ is Stefan's constant, and T is absolute temperature in kelvin. If the surface area of the black body is unchanged, then the total rate of radiation is also proportional to T⁴.\n\n2. Given Information\nInitial temperature of the black body is:\n\nT₁ = 300 K.\n\nFinal temperature of the black body is:\n\nT₂ = 900 K.\n\nWe need to find how many times the rate of energy radiation increases.\n\nNo temperature conversion is required because both temperatures are already given in kelvin.\n\n3. Strategy / Approach\nSince the question asks for an increase factor, we do not need the actual value of Stefan's constant. We only need to compare the final radiation rate with the initial radiation rate using a ratio. Because radiation rate is proportional to T⁴, the ratio of rates will be the fourth power of the ratio of temperatures.\n\n4. Step-by-Step Solution\nAccording to Stefan-Boltzmann law:\n\nR ∝ T⁴.\n\nSo, for two temperatures, the ratio of radiation rates is:\n\nR₂/R₁ = T₂⁴/T₁⁴.\n\nThis can be written as:\n\nR₂/R₁ = (T₂/T₁)⁴.\n\nNow substitute the given temperatures:\n\nR₂/R₁ = (900/300)⁴.\n\nFirst calculate the temperature ratio:\n\n900/300 = 3.\n\nSo:\n\nR₂/R₁ = 3⁴.\n\nNow calculate the fourth power:\n\n3⁴ = 3 × 3 × 3 × 3.\n\nFirst:\n\n3 × 3 = 9.\n\nThen:\n\n9 × 9 = 81.\n\nTherefore:\n\nR₂/R₁ = 81.\n\nThis means the final radiation rate is 81 times the initial radiation rate.\n\n5. Key Insight\nThe main trick is that radiation does not increase directly with temperature. It increases with the fourth power of absolute temperature. So tripling the temperature increases the radiation rate by 3⁴, not by 3.\n\n6. Final Answer\nTherefore, the correct answer is 81 times.\n\n7. Common Mistakes\nStudents often use R ∝ T and get 3 times.\n\nStudents may use R ∝ T² and get 9 times.\n\nStudents may forget the fourth power in Stefan-Boltzmann law.\n\nStudents may unnecessarily try to use Celsius conversion, even though the temperatures are already in kelvin."
    }
  }
];

export default bitsatThermalRadiationQuestions;