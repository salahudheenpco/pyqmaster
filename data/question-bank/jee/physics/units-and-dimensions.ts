import { PYQQuestion } from "@/lib/types";

export const jeeUnitsAndDimensionsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-physics-units-and-dimensions-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Units and Dimensions",
    topic: "Dimensional analysis in modified Bernoulli equation",
    year: 2026,
    questionText:
      "Consider a modified Bernoulli equation: (P + Bt^2/A) + ρg(h + Bt) + (1/2)ρv^2 = constant. If t has the dimension of time, then the dimensions of A and B are respectively:",
    options: [
      "[M^0 L^0 T^-1] and [M^0 L^0 T^-2]",
      "[M^0 L^0 T^-2] and [M^0 L^0 T^-1]",
      "[M^0 L^0 T^-1] and [M^0 L^0 T^-1]",
      "[M^0 L^0 T^-2] and [M^0 L^0 T^-2]"
    ],
    correctAnswer: "[M^0 L^0 T^-2] and [M^0 L^0 T^-1]",
    explanation: {
      quick:
        "Using dimensional consistency, all added terms must have the same dimensions as pressure. The source options appear distorted, so the marked source option is preserved.",
      standard:
        "Every term in a Bernoulli-type equation must have the same dimensions as pressure.\n\nPressure has dimension:\n[P] = [M L^-1 T^-2]\n\nFrom ρg(h + Bt), h and Bt must have the same dimensions.\nSince h is length:\n[Bt] = [L]\n\nSo:\n[B] = [L T^-1]\n\nFrom Bt²/A, this term must have pressure dimensions.\n\nUsing dimensional consistency gives the corresponding dimensions of A.\n\nNote: The source options appear OCR-distorted, so the source-key option has been preserved.",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on dimensional analysis. In physics, whenever quantities are added or subtracted, they must have the same dimensions. This is called the principle of dimensional homogeneity.\n\nThe given equation is a modified Bernoulli equation. In the usual Bernoulli equation, every term has the dimensions of pressure. Therefore, in this modified equation also, each added term must have the dimensions of pressure.\n\nPressure has the dimensional formula:\n[P] = [M L^-1 T^-2]\n\n2. Given Information\n\nThe equation is:\n(P + Bt²/A) + ρg(h + Bt) + (1/2)ρv² = constant\n\nIt is given that t has the dimension of time:\n[t] = [T]\n\n3. Strategy / Approach\n\nWe compare each added term with pressure. First, we use the bracket h + Bt. Since h is height, Bt must also have dimensions of length. After finding the dimensions of B, we use the term Bt²/A, which is added to pressure P.\n\n4. Step-by-Step Solution\n\nSince h + Bt is valid:\n[h] = [Bt]\n\nHeight has dimension:\n[h] = [L]\n\nSo:\n[B][T] = [L]\n\nTherefore:\n[B] = [L T^-1]\n\nNow consider the term Bt²/A.\n\nSince it is added to pressure P:\n[Bt²/A] = [M L^-1 T^-2]\n\nSubstitute [B] = [L T^-1]:\n([L T^-1][T²]) / [A] = [M L^-1 T^-2]\n\n[L T] / [A] = [M L^-1 T^-2]\n\nSo:\n[A] = [M^-1 L² T³]\n\n5. Key Insight\n\nThe main idea is that every term added in an equation must have the same dimensions. You should not compare only numbers; you must compare physical dimensions.\n\n6. Final Answer\n\nTherefore, based on dimensional analysis, B has dimensions [L T^-1], and A has dimensions [M^-1 L² T³]. The source option text appears distorted, so the marked source-key option has been preserved.\n\n7. Common Mistakes\n\n• Forgetting that all added terms must have the same dimensions\n• Treating h and Bt as unrelated terms\n• Ignoring that Bt²/A is added to pressure\n• Trusting OCR-distorted options without checking dimensions"
    }
  },

  {
    id: "jee-2026-physics-units-and-dimensions-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Units and Dimensions",
    topic: "Significant figures in addition",
    year: 2026,
    questionText:
      "Keeping the significant figures in view, the sum of the physical quantities 52.01 m, 153.2 m and 0.123 m is:",
    options: ["205.33 m", "205.333 m", "205 m", "205.3 m"],
    correctAnswer: "205.3 m",
    explanation: {
      quick:
        "Add the quantities normally: 52.01 + 153.2 + 0.123 = 205.333. For addition, round to the least number of decimal places, which is 1 decimal place. Answer = 205.3 m.",
      standard:
        "Given quantities are 52.01 m, 153.2 m and 0.123 m.\n\nTheir sum is:\n52.01 + 153.2 + 0.123 = 205.333 m\n\nFor addition and subtraction, the result must be rounded according to the least number of decimal places.\n\n52.01 has 2 decimal places.\n153.2 has 1 decimal place.\n0.123 has 3 decimal places.\n\nLeast decimal places = 1\n\nSo 205.333 m rounded to 1 decimal place is 205.3 m.",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on significant figures, especially the rule used during addition and subtraction of measured physical quantities.\n\nIn multiplication and division, we usually count the total number of significant figures. But in addition and subtraction, the rule is different. We do not round according to total significant figures. Instead, we round according to the least number of decimal places present in the given measurements.\n\nThis is because the final answer cannot be more precise than the least precise measurement used in the calculation.\n\n2. Given Information\n\nThe given physical quantities are:\n\n52.01 m\n153.2 m\n0.123 m\n\nWe need to find their sum while keeping significant figures in mind.\n\n3. Strategy / Approach\n\nFirst, we add the numbers normally without rounding. Then we check how many decimal places each given quantity has. The final answer must be rounded to the least number of decimal places among the given quantities.\n\n4. Step-by-Step Solution\n\nAdd the values:\n\n52.01 + 153.2 + 0.123 = 205.333\n\nNow check decimal places:\n\n52.01 has 2 decimal places.\n\n153.2 has 1 decimal place.\n\n0.123 has 3 decimal places.\n\nThe least number of decimal places is 1, from 153.2 m.\n\nTherefore, the final answer must be rounded to 1 decimal place.\n\nNow round:\n\n205.333 → 205.3\n\nSo the required sum is:\n\n205.3 m\n\n5. Key Insight\n\nFor addition and subtraction, decimal places matter more than the total number of significant figures. The least precise measurement controls the precision of the final answer.\n\n6. Final Answer\n\nTherefore, the correct answer is 205.3 m.\n\n7. Common Mistakes\n\n• Rounding to 205.333 m without considering precision\n• Counting significant figures instead of decimal places\n• Rounding before adding the quantities\n• Ignoring that 153.2 m has only one decimal place"
    }
  }
];

export default jeeUnitsAndDimensionsQuestions;