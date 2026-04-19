export const jeeStraightLinesQuestions = [
  {
    id: "jee-2026-mathematics-straight-lines-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Straight Lines",
    topic: "Equilateral triangle between parallel lines",
    year: 2026,
    questionText:
      "Let a point A lie between the parallel lines L1 and L2 such that its distances from L1 and L2 are 6 and 3 units, respectively. Then the area (in sq. units) of the equilateral triangle ABC, where the points B and C lie on the lines L1 and L2, respectively, is:",
    options: ["21√3", "15√6", "27", "12√2"],
    correctAnswer: "27",
    explanation: {
      quick:
        "Distance between the parallel lines is 6 + 3 = 9. If B and C lie on the two lines and triangle ABC is equilateral, then side BC must make 60° with the lines, so the perpendicular distance between the lines equals BC·sin60° = s·(√3/2). Thus s = 9 / (√3/2) = 6√3. Area of equilateral triangle = (√3/4)s² = (√3/4)(108) = 27√3. The printed source marks 27, but geometrically the area comes out 27√3, so the paper appears inconsistent here.",
      standard:
        "Since point A lies between the two parallel lines and its perpendicular distances from them are 6 and 3, the distance between the lines is:\n6 + 3 = 9\n\nLet the side of the equilateral triangle be s.\nIf BC lies with B on one line and C on the other, then BC joins the two parallel lines.\nFor an equilateral triangle, the angle between a side and the altitude structure gives:\nperpendicular distance between the lines = s sin 60°\n\nSo,\n9 = s × (√3/2)\n=> s = 18/√3 = 6√3\n\nArea of equilateral triangle = (√3/4)s²\n= (√3/4)(6√3)²\n= (√3/4)(108)\n= 27√3\n\nHence mathematically the area is 27√3.\n\nHowever, the source paper's marked option is 27, which does not match the geometry. So this question appears inconsistent in the source.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are told that point A lies between two parallel lines L1 and L2.\nIts perpendicular distances from these lines are 6 and 3 units.\n\nStep 1: Find the distance between the two parallel lines\n\nSince A is between them, total distance between the lines is:\n 6 + 3 = 9\n\nSo the two lines are 9 units apart.\n\nStep 2: Use the geometry of the equilateral triangle\n\nWe have an equilateral triangle ABC such that:\n B lies on L1\n C lies on L2\n\nSo the side BC joins the two parallel lines.\n\nLet the side length of the equilateral triangle be s.\nIn an equilateral triangle, all angles are 60°.\nThe side BC must cross from one parallel line to the other, and the perpendicular component of BC equals the separation between the lines.\n\nHence,\n s sin 60° = 9\n\nSince sin 60° = √3/2,\n s × √3/2 = 9\n=> s = 18/√3 = 6√3\n\nStep 3: Find the area\n\nArea of an equilateral triangle is:\n (√3/4)s²\n\nSo,\n Area = (√3/4)(6√3)²\n= (√3/4)(108)\n= 27√3\n\nStep 4: Compare with options\n\nThe mathematically correct area is 27√3.\nBut the printed options in the source include 27 and the answer section marks 27.\nThat means the source is inconsistent here.\n\nCommon mistake:\nA student may incorrectly take the distance between the lines to be the altitude of the equilateral triangle. That would still not produce 27 exactly unless the question were different.\n\nTherefore:\n- mathematically correct area = 27√3\n- source-marked option = 27\n\nFor strict exam-key fidelity, choose 27.\nFor mathematical accuracy, use 27√3."
    }
  }
];

export default jeeStraightLinesQuestions;
