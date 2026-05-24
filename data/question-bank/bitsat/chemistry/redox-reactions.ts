import { PYQQuestion } from "@/lib/types";

export const bitsatRedoxReactionsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-redox-reactions-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Redox Reactions",
    topic: "Oxidation number calculation",
    year: 2017,
    questionText: "Oxidation state of Cr in K₂Cr₂O₇ is",
    options: [
      "+2",
      "+3",
      "+6",
      "+7"
    ],
    correctAnswer: "+6",
    explanation: {
      quick: "To find the oxidation state of chromium in K₂Cr₂O₇, use the basic oxidation number rules. Potassium is an alkali metal, so its oxidation state is always +1 in compounds. Oxygen usually has oxidation state −2. Let the oxidation state of each chromium atom be x. Since K₂Cr₂O₇ is a neutral compound, the sum of oxidation states of all atoms must be zero. So, 2(+1) + 2x + 7(−2) = 0. This gives 2 + 2x − 14 = 0, so 2x − 12 = 0. Therefore, 2x = 12 and x = +6. Hence, the oxidation state of Cr is +6.",
      standard: "To calculate the oxidation state of chromium in K₂Cr₂O₇, we apply the standard rules of oxidation numbers. The first rule is that the sum of oxidation states of all atoms in a neutral compound is zero. Since K₂Cr₂O₇ is neutral, the total oxidation number of all atoms together must be 0.\n\nNow assign the known oxidation states. Potassium belongs to group 1, so each potassium atom has oxidation state +1. There are two potassium atoms, so the total contribution from potassium is 2(+1) = +2. Oxygen usually has oxidation state −2 in normal oxides. There are seven oxygen atoms, so the total contribution from oxygen is 7(−2) = −14.\n\nLet the oxidation state of each chromium atom be x. Since there are two chromium atoms, their total contribution is 2x. Now write the equation using the neutral compound rule:\n\n2(+1) + 2x + 7(−2) = 0.\n\nSimplifying gives 2 + 2x − 14 = 0. So 2x − 12 = 0. Therefore, 2x = 12, and x = +6.\n\nThis means each chromium atom in K₂Cr₂O₇ has oxidation state +6. Therefore, the correct answer is +6.",
      deep: "Let us understand the question from the beginning.\n\n1. Concept Introduction\nOxidation number, also called oxidation state, is the apparent charge assigned to an atom in a compound according to a fixed set of rules. It helps us understand redox reactions and the electron bookkeeping in compounds.\n\nFor oxidation number calculations, we use some standard rules. Alkali metals such as potassium usually have oxidation state +1. Oxygen usually has oxidation state −2, except in special cases like peroxides and superoxides. Also, for a neutral compound, the sum of oxidation states of all atoms must be zero.\n\nIn this question, we are asked to find the oxidation state of chromium in potassium dichromate, K₂Cr₂O₇.\n\n2. Given Information\nThe compound is K₂Cr₂O₇.\n\nThere are 2 potassium atoms.\n\nThere are 2 chromium atoms.\n\nThere are 7 oxygen atoms.\n\nOxidation state of each K atom = +1.\n\nOxidation state of each O atom = −2.\n\nLet the oxidation state of each Cr atom be x.\n\n3. Strategy / Approach\nSince K₂Cr₂O₇ is a neutral compound, the total sum of oxidation states must be zero. We will write an equation by adding the contribution of potassium, chromium, and oxygen. Then we will solve that equation for x, the oxidation state of chromium.\n\n4. Step-by-Step Solution\nStart with the rule:\n\nSum of oxidation states in a neutral compound = 0.\n\nFor K₂Cr₂O₇, write the contribution of each element.\n\nPotassium contribution:\n\nThere are 2 K atoms, and each K has oxidation state +1.\n\nSo potassium contribution = 2(+1) = +2.\n\nChromium contribution:\n\nThere are 2 Cr atoms, and each Cr has oxidation state x.\n\nSo chromium contribution = 2x.\n\nOxygen contribution:\n\nThere are 7 O atoms, and each O has oxidation state −2.\n\nSo oxygen contribution = 7(−2) = −14.\n\nNow add all contributions and put the sum equal to zero:\n\n2(+1) + 2x + 7(−2) = 0.\n\nNow simplify each term:\n\n2 + 2x − 14 = 0.\n\nCombine the constant terms:\n\n2 − 14 = −12.\n\nSo the equation becomes:\n\n2x − 12 = 0.\n\nAdd 12 to both sides:\n\n2x = 12.\n\nDivide both sides by 2:\n\nx = +6.\n\nTherefore, each chromium atom has oxidation state +6.\n\n5. Key Insight\nThe key point is that the compound is neutral, so the sum of oxidation states must be zero. Also, there are two chromium atoms, so we must write 2x, not just x.\n\n6. Final Answer\nTherefore, the correct answer is +6.\n\n7. Common Mistakes\nStudents often forget to multiply chromium oxidation state by 2 because there are two Cr atoms.\n\nStudents may use oxygen as −1 instead of −2, but K₂Cr₂O₇ is not a peroxide.\n\nStudents may forget that potassium is always +1 in such compounds.\n\nStudents may calculate the total oxidation state of two chromium atoms as +12 and wrongly report +12 instead of the oxidation state of one chromium atom."
    }
  }
];

export default bitsatRedoxReactionsQuestions;