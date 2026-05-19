import { PYQQuestion } from "@/lib/types";

export const jeeSetsQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-sets-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Sets",
    topic: "Set operations with intervals",
    year: 2026,
    questionText:
      "Let A = {x : |x^2 - 10| ≤ 6} and B = {x : |x - 2| > 1}. Then which of the following is correct?",
    options: [
      "A - B = [2, 3)",
      "A ∩ B = [-4, -2] ∪ [3, 4]",
      "B - A = (-∞, -4) ∪ (-2, 1) ∪ (4, ∞)",
      "A ∪ B = (-∞, 1] ∪ (2, ∞)"
    ],
    correctAnswer: "B - A = (-∞, -4) ∪ (-2, 1) ∪ (4, ∞)",
    explanation: {
      quick:
        "A = [-4,-2] ∪ [2,4] and B = (-∞,1) ∪ (3,∞). Removing A from B gives B - A = (-∞,-4) ∪ (-2,1) ∪ (4,∞).",

      standard:
        "First find A.\n\nA = {x : |x² - 10| ≤ 6}\n\nThis means:\n-6 ≤ x² - 10 ≤ 6\n\nAdd 10 throughout:\n4 ≤ x² ≤ 16\n\nSo:\n2 ≤ |x| ≤ 4\n\nTherefore:\nA = [-4, -2] ∪ [2, 4]\n\nNow find B.\n\nB = {x : |x - 2| > 1}\n\nThis gives:\nx - 2 > 1 or x - 2 < -1\n\nSo:\nx > 3 or x < 1\n\nTherefore:\nB = (-∞, 1) ∪ (3, ∞)\n\nNow calculate B - A.\n\nB - A means elements that are in B but not in A.\n\nFrom (-∞,1), remove [-4,-2]. This gives:\n(-∞,-4) ∪ (-2,1)\n\nFrom (3,∞), remove [2,4]. This gives:\n(4,∞)\n\nHence:\nB - A = (-∞,-4) ∪ (-2,1) ∪ (4,∞).",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given two sets:\n\nA = {x : |x² - 10| ≤ 6}\nB = {x : |x - 2| > 1}\n\nThe question asks which set-operation statement is correct.\n\nStep 1: Simplify set A\n\nA is defined by:\n|x² - 10| ≤ 6\n\nWhenever we have |expression| ≤ number, we convert it into a double inequality:\n\n-6 ≤ x² - 10 ≤ 6\n\nNow add 10 to all three parts:\n\n4 ≤ x² ≤ 16\n\nThis means x² is between 4 and 16.\n\nSo |x| is between 2 and 4:\n\n2 ≤ |x| ≤ 4\n\nThat gives two intervals:\n\n-4 ≤ x ≤ -2\nor\n2 ≤ x ≤ 4\n\nTherefore:\nA = [-4, -2] ∪ [2, 4]\n\nStep 2: Simplify set B\n\nB is defined by:\n|x - 2| > 1\n\nWhenever |expression| > number, we split into two cases:\n\nx - 2 > 1\nor\nx - 2 < -1\n\nSolving the first:\nx > 3\n\nSolving the second:\nx < 1\n\nTherefore:\nB = (-∞, 1) ∪ (3, ∞)\n\nStep 3: Understand what B - A means\n\nB - A means:\nall elements that are in B but not in A.\n\nSo we start with B and remove the part that overlaps with A.\n\nStep 4: Remove A from the first part of B\n\nFirst part of B is:\n(-∞, 1)\n\nA contains:\n[-4, -2]\n\nSo removing [-4,-2] from (-∞,1) gives:\n(-∞, -4) ∪ (-2, 1)\n\nNotice the endpoints -4 and -2 are not included because they belong to A and must be removed.\n\nStep 5: Remove A from the second part of B\n\nSecond part of B is:\n(3, ∞)\n\nA contains:\n[2, 4]\n\nThe overlap between (3,∞) and [2,4] is:\n(3,4]\n\nAfter removing that, the remaining part is:\n(4,∞)\n\nStep 6: Combine the remaining intervals\n\nTherefore:\nB - A = (-∞, -4) ∪ (-2, 1) ∪ (4, ∞)\n\nCommon mistakes:\n1. Treating |x - 2| > 1 as 1 < x < 3. That is wrong; it means outside the interval.\n2. Forgetting that B excludes x = 1 and x = 3 because the inequality is strict.\n3. Forgetting to remove endpoints that belong to A while calculating B - A.\n4. Mixing up A - B and B - A. These are not the same.\n\nTherefore, the correct answer is B - A = (-∞, -4) ∪ (-2, 1) ∪ (4, ∞)."
    }
  }
];

export default jeeSetsQuestions;