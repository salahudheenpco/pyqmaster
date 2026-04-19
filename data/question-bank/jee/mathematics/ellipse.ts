export const jeeEllipseQuestions = [
  {
    id: "jee-2026-mathematics-ellipse-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Ellipse",
    topic: "Area bounded by ellipse and lines",
    year: 2026,
    questionText:
      "The area of the region, inside the ellipse x^2 + 4y^2 = 4 and outside the region bounded by the curves y = |x| - 1 and y = 1 - |x|, is:",
    options: ["2π - 1", "3(π - 1)", "2(π - 1)", "2π - 2"],
    correctAnswer: "2(π - 1)",
    explanation: {
      quick:
        "The ellipse is x^2/4 + y^2 = 1, so semi-axes are 2 and 1. Area of ellipse = πab = 2π. The lines y = |x| - 1 and y = 1 - |x| form a rhombus with vertices (0,1), (1,0), (0,-1), (-1,0), whose area is (1/2)×2×2 = 2. Required area = 2π - 2 = 2(π - 1).",
      standard:
        "Given ellipse:\nx^2 + 4y^2 = 4\n=> x^2/4 + y^2 = 1\nSo semi-major axis a = 2 and semi-minor axis b = 1.\nHence area of ellipse = πab = 2π.\n\nNow consider the curves:\ny = |x| - 1\nand\ny = 1 - |x|\n\nTogether they enclose a rhombus with vertices:\n(0,1), (1,0), (0,-1), (-1,0)\n\nIts diagonals are:\nvertical diagonal = 2\nhorizontal diagonal = 2\n\nArea of rhombus = (1/2) × 2 × 2 = 2\n\nTherefore required area = area inside ellipse - area of rhombus\n= 2π - 2 = 2(π - 1).",
      deep:
        "Let us understand the question from the beginning.\n\nWe need the area of the region:\n- inside the ellipse\n- but outside the region bounded by y = |x| - 1 and y = 1 - |x|\n\nStep 1: Find area of the ellipse\n\nThe ellipse is:\nx^2 + 4y^2 = 4\n\nWrite in standard form:\nx^2/4 + y^2 = 1\n\nComparing with:\nx^2/a^2 + y^2/b^2 = 1\nwe get:\na = 2, b = 1\n\nSo area of ellipse is:\nπab = π × 2 × 1 = 2π\n\nStep 2: Understand the region bounded by the two absolute value curves\n\nThe curves are:\ny = |x| - 1\nand\ny = 1 - |x|\n\nThese are V-shaped graphs, one opening upward and the other downward.\nTheir intersection points are obtained by:\n|x| - 1 = 1 - |x|\n=> 2|x| = 2\n=> |x| = 1\n=> x = ±1\nand then y = 0\n\nAlso the top vertex is at (0,1) and bottom vertex is at (0,-1).\nSo the bounded figure is a rhombus with vertices:\n(0,1), (1,0), (0,-1), (-1,0)\n\nStep 3: Find area of the rhombus\n\nIts diagonals are:\nvertical diagonal = distance from (0,1) to (0,-1) = 2\nhorizontal diagonal = distance from (-1,0) to (1,0) = 2\n\nArea of rhombus = (1/2) × d1 × d2\n= (1/2) × 2 × 2\n= 2\n\nStep 4: Required area\n\nRequired area = area inside ellipse but outside rhombus\n= 2π - 2\n= 2(π - 1)\n\nCommon mistake:\nA common mistake is to think the bounded region is a square. It is actually a rhombus, though numerically its area here still comes neatly from the diagonal formula.\n\nTherefore, the correct answer is 2(π - 1)."
    }
  }
];

export default jeeEllipseQuestions;