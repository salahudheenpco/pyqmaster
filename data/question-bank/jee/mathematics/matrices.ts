import { PYQQuestion } from "@/lib/types";

export const jeeMatricesQuestions: PYQQuestion[] = [
  {
    id: "jee-2026-mathematics-matrices-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Matrices",
    topic: "Matrix powers and null vector",
    year: 2026,
    questionText:
      "For the matrices A = [[3, -4], [1, -1]] and B = [[-29, 49], [-13, 18]], if (A^15 + B)[x, y]^T = [0, 0]^T, then among the following which one is true?",
    options: [
      "x = 16, y = 3",
      "x = 18, y = 11",
      "x = 5, y = 7",
      "x = 11, y = 2"
    ],
    correctAnswer: "x = 11, y = 2",
    explanation: {
      quick:
        "Using the matrix power relation, A^15 + B reduces to [[2, -11], [2, -11]]. Thus 2x - 11y = 0, so x/y = 11/2. Hence x = 11, y = 2.",
      standard:
        "We are given:\nA = [[3, -4], [1, -1]]\nB = [[-29, 49], [-13, 18]]\n\nWe need:\n(A^15 + B)[x, y]^T = [0, 0]^T\n\nOn calculating A^15 + B, we get:\nA^15 + B = [[2, -11], [2, -11]]\n\nTherefore:\n[[2, -11], [2, -11]][x, y]^T = [0, 0]^T\n\nThis gives:\n2x - 11y = 0\n\nSo:\n2x = 11y\n\nHence:\nx/y = 11/2\n\nAmong the options, this corresponds to:\nx = 11, y = 2.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given two matrices:\nA = [[3, -4], [1, -1]]\nB = [[-29, 49], [-13, 18]]\n\nThe condition is:\n(A^15 + B)[x, y]^T = [0, 0]^T\n\nThis means the column vector [x, y]^T lies in the null space of the matrix A^15 + B.\n\nStep 1: Understand what the equation means\n\nIf a matrix M satisfies:\nM[x, y]^T = [0, 0]^T\n\nthen [x, y]^T is a non-zero vector that gets mapped to zero by M.\n\nHere:\nM = A^15 + B\n\nSo first we need to simplify A^15 + B.\n\nStep 2: Compute A^15 + B\n\nFor this matrix A, repeated multiplication gives:\nA^15 + B = [[2, -11], [2, -11]]\n\nSo the equation becomes:\n[[2, -11], [2, -11]][x, y]^T = [0, 0]^T\n\nStep 3: Multiply the matrix and vector\n\nFirst row gives:\n2x - 11y = 0\n\nSecond row also gives the same equation:\n2x - 11y = 0\n\nSo there is only one independent condition:\n2x = 11y\n\nStep 4: Find ratio of x and y\n\nFrom:\n2x = 11y\n\nwe get:\nx/y = 11/2\n\nSo x and y must be in the ratio:\n11 : 2\n\nStep 5: Match with options\n\nAmong the given options, only:\nx = 11, y = 2\n\nsatisfies the ratio 11 : 2.\n\nCommon mistakes:\n1. Trying to multiply A fifteen times manually without using matrix patterns.\n2. Forgetting that the final equation only needs the null vector direction.\n3. Taking x/y as 2/11 instead of 11/2.\n4. Checking only one option without verifying the ratio.\n\nTherefore, the correct answer is x = 11, y = 2."
    }
  }
];

export default jeeMatricesQuestions;