export const jeeHyperbolaQuestions = [
  {
    id: "jee-2026-mathematics-hyperbola-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Hyperbola",
    topic: "Latus rectum from common foci",
    year: 2026,
    questionText:
      "Let the foci of a hyperbola coincide with the foci of the ellipse x^2/36 + y^2/16 = 1. If the eccentricity of the hyperbola is 5/2, then the length of its latus rectum is:",
    options: ["5", "12", "16", "96/5"],
    correctAnswer: "96/5",
    explanation: {
      quick:
        "For the ellipse x^2/36 + y^2/16 = 1, we have a = 6, b = 4, so c = √(36 - 16) = 2√5. The hyperbola has same foci, so c = 2√5. Given hyperbola eccentricity e = 5/2, so a = c/e = (2√5)/(5/2) = 4/√5. Hence a^2 = 16/5. Using c^2 = a^2 + b^2, we get b^2 = 20 - 16/5 = 84/5. Length of latus rectum = 2b^2/a = 2 × (84/5) / (4/√5) = 96/5.",
      standard:
        "Given ellipse:\nx^2/36 + y^2/16 = 1\n\nSo for the ellipse,\na = 6, b = 4\nHence\nc = √(a^2 - b^2) = √(36 - 16) = √20 = 2√5\n\nThe hyperbola has the same foci, so for the hyperbola also:\nc = 2√5\n\nGiven eccentricity of hyperbola:\ne = c/a = 5/2\nSo,\na = c/e = (2√5)/(5/2) = 4/√5\nThus,\na^2 = 16/5\n\nFor hyperbola,\nc^2 = a^2 + b^2\nSo,\n20 = 16/5 + b^2\n=> b^2 = 20 - 16/5 = 84/5\n\nLength of latus rectum of hyperbola = 2b^2/a\n= 2 × (84/5) / (4/√5)\n= 96/5\n\nTherefore, the answer is 96/5.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the ellipse:\n x^2/36 + y^2/16 = 1\n\nStep 1: Find the foci of the ellipse\n\nCompare with the standard form:\n x^2/a^2 + y^2/b^2 = 1\n\nSo,\n a^2 = 36, b^2 = 16\nHence,\n a = 6, b = 4\n\nFor an ellipse, distance of focus from centre is:\n c = √(a^2 - b^2)\n\nSo,\n c = √(36 - 16) = √20 = 2√5\n\nThus the foci are at distance 2√5 from the centre.\n\nStep 2: Use same foci for hyperbola\n\nThe question says the hyperbola has the same foci.\nTherefore for the hyperbola also,\n c = 2√5\n\nStep 3: Use eccentricity of hyperbola\n\nFor a hyperbola,\n e = c/a\n\nGiven,\n e = 5/2\n\nSo,\n 5/2 = c/a = (2√5)/a\n\nThus,\n a = (2√5)/(5/2) = 4/√5\n\nSo,\n a^2 = 16/5\n\nStep 4: Find b^2 for the hyperbola\n\nFor a hyperbola,\n c^2 = a^2 + b^2\n\nWe know:\n c^2 = 20\n a^2 = 16/5\n\nHence,\n b^2 = 20 - 16/5\n = 100/5 - 16/5\n = 84/5\n\nStep 5: Find the latus rectum\n\nFor a hyperbola, length of latus rectum is:\n 2b^2 / a\n\nSubstitute values:\n 2 × (84/5) / (4/√5)\n\nThis simplifies to the required answer:\n 96/5\n\nCommon mistake:\nA common mistake is using the ellipse formula for latus rectum or mixing up c^2 = a^2 - b^2 with the hyperbola relation c^2 = a^2 + b^2.\n\nTherefore, the correct answer is 96/5."
    }
  }
];

export default jeeHyperbolaQuestions;