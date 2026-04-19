export const jeeVectorAlgebraQuestions = [
  {
    id: "jee-2026-mathematics-vector-algebra-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Vector Algebra",
    topic: "Cross product constraints and magnitude",
    year: 2026,
    questionText:
      "Let a = -i + 2j + 2k and b be a vector such that a × b = 8i + 7j - 3k and b · (i + j + k) = 4. Then |a + b|^2 is equal to:",
    options: ["33", "35", "27", "30"],
    correctAnswer: "27",
    explanation: {
      quick:
        "Let b = xi + yj + zk. From a × b = 8i + 7j - 3k, we get z - y = 4, z + 2x = 7, y + 2x = 3. Also x + y + z = 4. Solving gives x = 2, y = -1, z = 3, so b = 2i - j + 3k. Then a + b = i + j + 5k, hence |a + b|^2 = 1^2 + 1^2 + 5^2 = 27.",
      standard:
        "Let\nb = xi + yj + zk\nand\na = -i + 2j + 2k\n\nNow compute a × b:\na × b =\n| i   j   k |\n| -1  2   2 |\n| x   y   z |\n\nThis gives:\na × b = (2z - 2y)i + (z + 2x)j + (-y - 2x)k\n\nGiven:\na × b = 8i + 7j - 3k\n\nSo,\n2z - 2y = 8  => z - y = 4 ...(1)\nz + 2x = 7 ...(2)\n-y - 2x = -3 => y + 2x = 3 ...(3)\n\nAlso b · (i + j + k) = 4 gives:\nx + y + z = 4 ...(4)\n\nFrom (1): z = y + 4\nFrom (3): y = 3 - 2x\nThen z = 7 - 2x\nSubstitute into (2):\n(7 - 2x) + 2x = 7\nwhich is satisfied.\n\nNow use (4):\nx + (3 - 2x) + (7 - 2x) = 4\n=> 10 - 3x = 4\n=> x = 2\nThen y = -1, z = 3\n\nSo b = 2i - j + 3k.\nNow,\na + b = (-1+2)i + (2-1)j + (2+3)k = i + j + 5k\n\nTherefore,\n|a + b|^2 = 1^2 + 1^2 + 5^2 = 27.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given:\na = -i + 2j + 2k\n\nand another vector b such that:\na × b = 8i + 7j - 3k\nand\nb · (i + j + k) = 4\n\nWe need to find:\n|a + b|^2\n\nStep 1: Assume general form of b\n\nLet:\nb = xi + yj + zk\n\nStep 2: Compute the cross product a × b\n\nUsing determinant form:\n\na × b =\n| i   j   k |\n| -1  2   2 |\n| x   y   z |\n\nExpanding:\nCoefficient of i = 2z - 2y\nCoefficient of j = -((-1)z - 2x) = z + 2x\nCoefficient of k = (-1)y - 2x = -y - 2x\n\nSo,\na × b = (2z - 2y)i + (z + 2x)j + (-y - 2x)k\n\nGiven this equals:\n8i + 7j - 3k\n\nSo compare components:\n2z - 2y = 8  => z - y = 4 ...(1)\nz + 2x = 7 ...(2)\n-y - 2x = -3 => y + 2x = 3 ...(3)\n\nStep 3: Use the dot product condition\n\nWe are also given:\nb · (i + j + k) = 4\n\nSo:\nx + y + z = 4 ...(4)\n\nStep 4: Solve the system\n\nFrom (1):\nz = y + 4\n\nFrom (3):\ny = 3 - 2x\n\nThen:\nz = (3 - 2x) + 4 = 7 - 2x\n\nNow check equation (2):\nz + 2x = 7\n=> (7 - 2x) + 2x = 7\nwhich is true.\n\nNow use equation (4):\nx + y + z = 4\n=> x + (3 - 2x) + (7 - 2x) = 4\n=> 10 - 3x = 4\n=> 3x = 6\n=> x = 2\n\nThen:\ny = 3 - 2(2) = -1\nz = 7 - 2(2) = 3\n\nSo:\nb = 2i - j + 3k\n\nStep 5: Find a + b\n\na + b = (-i + 2j + 2k) + (2i - j + 3k)\n= i + j + 5k\n\nStep 6: Find |a + b|^2\n\n|a + b|^2 = 1^2 + 1^2 + 5^2 = 1 + 1 + 25 = 27\n\nCommon mistake:\nA common mistake is making a sign error in the j-component of the cross product. Expand the determinant very carefully.\n\nTherefore, the correct answer is 27."
    }
  }
];

export default jeeVectorAlgebraQuestions;