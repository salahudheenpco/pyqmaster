import { PYQQuestion } from "@/lib/types";

export const jeeAreaUnderCurvesQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-area-under-curves-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Area Under Curves",
    topic: "Area bounded by curves",
    year: 2026,
    questionText:
      "If the area of the region {(x, y) : 1 - 2x ≤ y ≤ 4 - x², x ≥ 0, y ≥ 0} is β/α, where α, β ∈ ℕ and gcd(α, β) = 1, then α + β is equal to:",
    options: ["67", "73", "85", "91"],
    correctAnswer: "73",
    explanation: {
      quick:
        "Split region at x = 1/2. Total area = 61/12 ⇒ α + β = 73.",

      standard:
        "Region bounded by:\ny ≥ 1 - 2x\ny ≤ 4 - x²\nx ≥ 0, y ≥ 0\n\nFind intersection:\n1 - 2x = 0 ⇒ x = 1/2\n\nSplit integral:\nArea = ∫₀^{1/2} [(4 - x²) - (1 - 2x)] dx + ∫_{1/2}^{2} (4 - x²) dx\n\n= 61/12\n\nSo α = 12, β = 61 ⇒ α + β = 73.",

      deep:
        "Let us understand the question from the beginning.\n\nWe are given inequalities that describe a region:\n\n1 - 2x ≤ y ≤ 4 - x²\nx ≥ 0, y ≥ 0\n\nStep 1: Identify the curves\n\nUpper curve:\ny = 4 - x²  → downward parabola\n\nLower curve:\ny = 1 - 2x  → straight line\n\nAlso:\ny ≥ 0 means region cannot go below x-axis\n\nStep 2: Find important intersection points\n\nFind where line meets x-axis:\n1 - 2x = 0 ⇒ x = 1/2\n\nSo for x > 1/2, line goes below x-axis → lower boundary becomes y = 0\n\nFind where parabola meets x-axis:\n4 - x² = 0 ⇒ x = 2\n\nStep 3: Split region into two parts\n\nRegion 1: from x = 0 to x = 1/2\nArea between parabola and line\n\nRegion 2: from x = 1/2 to x = 2\nArea between parabola and x-axis\n\nStep 4: Write integrals\n\nRegion 1:\n∫₀^{1/2} [(4 - x²) - (1 - 2x)] dx\n= ∫₀^{1/2} (3 + 2x - x²) dx\n\nRegion 2:\n∫_{1/2}^{2} (4 - x²) dx\n\nStep 5: Evaluate integrals\n\nFirst integral:\n∫ (3 + 2x - x²) dx\n= 3x + x² - x³/3\n\nEvaluate from 0 to 1/2:\n= 3/2 + 1/4 - 1/24 = 41/24\n\nSecond integral:\n∫ (4 - x²) dx = 4x - x³/3\n\nEvaluate from 1/2 to 2:\n= (8 - 8/3) - (2 - 1/24)\n= 16/3 - 47/24 = 81/24\n\nStep 6: Add areas\n\nTotal area = 41/24 + 81/24 = 122/24 = 61/12\n\nStep 7: Final answer\n\nArea = 61/12 ⇒ α = 12, β = 61\n\nSo:\nα + β = 73\n\nCommon mistakes:\n1. Not splitting at x = 1/2\n2. Ignoring y ≥ 0 condition\n3. Taking wrong upper/lower curve\n\nTherefore, the correct answer is 73."
    }
  }
];

export default jeeAreaUnderCurvesQuestions;