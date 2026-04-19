export const jeeParabolaQuestions = [
  {
    id: "jee-2026-mathematics-parabola-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Parabola",
    topic: "Locus and chord of derived conic",
    year: 2026,
    questionText:
      "Let O be the vertex of the parabola x^2 = 4y and Q be any point on it. Let the locus of the point P, which divides the line segment OQ internally in the ratio 2 : 3 be the conic C. Then the equation of the chord of C, which is bisected at the point (1, 2), is:",
    options: [
      "5x - 4y + 3 = 0",
      "x - 2y + 3 = 0",
      "5x - y - 3 = 0",
      "4x - 5y + 6 = 0"
    ],
    correctAnswer: "5x - y - 3 = 0",
    explanation: {
      quick:
        "Take Q on x^2 = 4y as Q(2t, t^2). Since P divides OQ internally in the ratio 2:3, P = ((2×2t)/5, (2×t^2)/5) = (4t/5, 2t^2/5). Eliminating t gives the locus 5x^2 = 8y. For conic S ≡ 5x^2 - 8y = 0, the chord bisected at (1,2) is given by T = S1. This gives 5x - y - 3 = 0.",
      standard:
        "The parabola is x^2 = 4y, whose vertex is O(0,0).\n\nTake a general point on the parabola as:\nQ(2t, t^2)\n\nPoint P divides OQ internally in the ratio 2:3.\nUsing section formula from O(0,0) to Q(2t, t^2),\nP = (2/(2+3) × 2t, 2/(2+3) × t^2)\n= (4t/5, 2t^2/5)\n\nLet P = (x, y).\nThen,\nx = 4t/5  =>  t = 5x/4\nand\ny = 2t^2/5\n\nSubstitute t:\ny = (2/5)(25x^2/16) = 5x^2/8\nSo the locus of P is:\n5x^2 = 8y\n\nNow we need the equation of the chord of this conic bisected at (1,2).\nWrite the conic as:\nS ≡ 5x^2 - 8y = 0\n\nFor a conic, the chord bisected at (x1, y1) is given by:\nT = S1\n\nHere (x1, y1) = (1,2).\nFor S = 5x^2 - 8y,\nT = 5xx1 - 4(y + y1)\n= 5x - 4(y + 2)\n= 5x - 4y - 8\n\nAlso,\nS1 = 5(1)^2 - 8(2) = 5 - 16 = -11\n\nSo,\nT = S1\n=> 5x - 4y - 8 = -11\n=> 5x - 4y + 3 = 0\n\nHence the chord equation is 5x - 4y + 3 = 0.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given the parabola:\nx^2 = 4y\n\nIts vertex is O = (0, 0).\nA general point Q on this parabola can be written in parametric form as:\nQ = (2t, t^2)\n\nThis is a standard parametrization of x^2 = 4ay with a = 1.\n\nNow point P divides the line segment OQ internally in the ratio 2 : 3.\nThat means P is 2 parts away from O and 3 parts away from Q in the total 5 parts.\n\nStep 1: Use section formula\n\nIf a point divides the segment joining (x1, y1) and (x2, y2) internally in the ratio m:n,\nthen the coordinates are:\n((mx2 + nx1)/(m+n), (my2 + ny1)/(m+n))\n\nHere,\nO = (0,0), Q = (2t, t^2), and ratio is 2:3.\nSo,\nP = ((2·2t + 3·0)/5, (2·t^2 + 3·0)/5)\n= (4t/5, 2t^2/5)\n\nLet P = (x, y).\nSo,\nx = 4t/5\nand\ny = 2t^2/5\n\nStep 2: Eliminate the parameter t\n\nFrom x = 4t/5,\nt = 5x/4\n\nNow substitute this into y:\ny = 2/5 × (5x/4)^2\n= 2/5 × 25x^2/16\n= 50x^2/80\n= 5x^2/8\n\nTherefore the locus of P is:\n5x^2 = 8y\n\nThis is the conic C.\n\nStep 3: Find the chord of C bisected at (1, 2)\n\nNow our conic is:\n5x^2 = 8y\nor\nS ≡ 5x^2 - 8y = 0\n\nWe need the equation of the chord of this conic whose midpoint is (1,2).\n\nFor any second-degree curve S = 0, the equation of the chord with midpoint (x1, y1) is:\nT = S1\n\nThis is a standard result.\n\nStep 4: Compute T and S1\n\nFor S = 5x^2 - 8y,\nreplace x^2 by xx1 and y by (y + y1)/2 in the quadratic and linear terms.\nSo,\nT = 5xx1 - 8 × (y + y1)/2\n= 5xx1 - 4(y + y1)\n\nNow put (x1, y1) = (1,2):\nT = 5x(1) - 4(y + 2)\n= 5x - 4y - 8\n\nNow calculate S1:\nS1 = 5(1)^2 - 8(2)\n= 5 - 16\n= -11\n\nHence the chord is:\nT = S1\n=> 5x - 4y - 8 = -11\n=> 5x - 4y + 3 = 0\n\nStep 5: Final answer\n\nSo the required chord is:\n5x - 4y + 3 = 0\n\nCommon mistake:\nA common mistake is taking the ratio 2:3 incorrectly and using 3/5 instead of 2/5 for the coordinates of P. Another common mistake is using the midpoint-chord formula incorrectly for the conic.\n\nTherefore, the correct answer is 5x - 4y + 3 = 0."
    }
  }
];

export default jeeParabolaQuestions;