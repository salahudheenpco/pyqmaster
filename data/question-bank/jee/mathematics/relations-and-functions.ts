export const jeeRelationsAndFunctionsQuestions = [
  {
    id: "jee-2026-mathematics-relations-and-functions-001",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Counting reflexive and symmetric relations",
    year: 2026,
    questionText:
      "The number of relations, defined on the set {a, b, c, d}, which are both reflexive and symmetric, is equal to:",
    options: ["1024", "64", "16", "256"],
    correctAnswer: "64",
    explanation: {
      quick:
        "For a 4-element set, reflexive means all 4 diagonal pairs must be included. Symmetric means each off-diagonal unordered pair contributes 2 choices: include both ordered pairs or include neither. Number of unordered off-diagonal pairs = C(4,2) = 6. So total = 2^6 = 64.",
      standard:
        "Let A = {a, b, c, d}.\n\nA relation on A is a subset of A × A.\nSince |A| = 4, the diagonal pairs are:\n(a,a), (b,b), (c,c), (d,d)\n\nBecause the relation is reflexive, all these 4 pairs must be present.\nSo there is no choice for diagonal entries.\n\nNow consider off-diagonal pairs.\nFor symmetry, whenever (x,y) is chosen, (y,x) must also be chosen.\n\nThe number of unordered pairs {x,y} with x ≠ y is:\nC(4,2) = 6\n\nFor each such pair, we have 2 choices:\n1. include both (x,y) and (y,x)\n2. include neither\n\nTherefore total number of reflexive and symmetric relations is:\n2^6 = 64.",
      deep:
        "Let us understand the question from the beginning.\n\nWe have the set:\nA = {a, b, c, d}\n\nA relation on A means any subset of A × A.\nSince there are 4 elements in A, the Cartesian product A × A has 4 × 4 = 16 ordered pairs.\n\nNow the relation has to satisfy two conditions:\n1. reflexive\n2. symmetric\n\nStep 1: Reflexive condition\n\nA relation is reflexive if every element is related to itself.\nSo the following 4 pairs must definitely be present:\n(a,a), (b,b), (c,c), (d,d)\n\nSo these are fixed.\nWe do not have any choice here.\n\nStep 2: Symmetric condition\n\nA relation is symmetric if:\nwhenever (x,y) is in R, then (y,x) must also be in R.\n\nSo off-diagonal pairs must be chosen in matched pairs.\nFor example:\n- if (a,b) is chosen, then (b,a) must also be chosen\n- if (a,c) is chosen, then (c,a) must also be chosen\nand so on.\n\nNow count how many such unordered pairs exist.\nThese are:\n{a,b}, {a,c}, {a,d}, {b,c}, {b,d}, {c,d}\n\nSo total = C(4,2) = 6 such pairs.\n\nFor each unordered pair, there are exactly 2 possibilities:\n- include both corresponding ordered pairs\n- include neither\n\nSo each pair gives 2 choices.\n\nTherefore total number of relations = 2 × 2 × 2 × 2 × 2 × 2 = 2^6 = 64\n\nCommon mistake:\nA common mistake is to think there are 12 off-diagonal ordered pairs and use 2^12. That is wrong because symmetry ties each pair with its reverse.\n\nTherefore, the correct answer is 64."
    }
  },
  {
    id: "jee-2026-mathematics-relations-and-functions-002",
    exam: "JEE Main",
    subject: "Mathematics",
    chapter: "Relations and Functions",
    topic: "Strictly increasing functions with restriction",
    year: 2026,
    questionText:
      "The number of strictly increasing functions from the set {1, 2, 3, 4, 5, 6} to the set {1, 2, 3, ..., 9} such that f(i) ≠ i for 1 ≤ i ≤ 6, is equal to:",
    options: ["22", "27", "21", "28"],
    correctAnswer: "28",
    explanation: {
      quick:
        "Let y_i = f(i). Since f is strictly increasing, 1 ≤ y_1 < y_2 < ... < y_6 ≤ 9. Put z_i = y_i - (i-1). Then 1 ≤ z_1 ≤ z_2 ≤ ... ≤ z_6 ≤ 4. The condition f(i) ≠ i becomes z_i ≠ 1, so z_i ∈ {2,3,4}. Count nondecreasing sequences of length 6 from 3 symbols: C(6+3-1, 3-1) = C(8,2) = 28.",
      standard:
        "Let y_i = f(i).\nSince f is strictly increasing,\n1 ≤ y_1 < y_2 < ... < y_6 ≤ 9\n\nNow define:\nz_i = y_i - (i - 1)\nThen\n1 ≤ z_1 ≤ z_2 ≤ ... ≤ z_6 ≤ 4\n\nAlso, f(i) ≠ i means y_i ≠ i.\nBut y_i = z_i + i - 1, so\nz_i + i - 1 ≠ i\n=> z_i ≠ 1\n\nHence each z_i can only be from {2,3,4}, and the sequence is nondecreasing.\n\nSo we need the number of nondecreasing sequences of length 6 formed from 3 values {2,3,4}.\nThat is combinations with repetition:\nC(6+3-1, 3-1) = C(8,2) = 28.",
      deep:
        "Let us understand the question from the beginning.\n\nWe need the number of strictly increasing functions:\nf : {1,2,3,4,5,6} → {1,2,3,...,9}\n\nand also the condition:\nf(i) ≠ i for every i = 1,2,3,4,5,6\n\nStep 1: Translate the function into an increasing sequence\n\nSince f is strictly increasing, if we write:\ny_1 = f(1), y_2 = f(2), ..., y_6 = f(6)\nthen we must have:\n1 ≤ y_1 < y_2 < y_3 < y_4 < y_5 < y_6 ≤ 9\n\nSo the problem becomes counting strictly increasing 6-term selections from 1 to 9, with extra restriction y_i ≠ i.\n\nStep 2: Remove the strict inequality using a transformation\n\nDefine:\nz_i = y_i - (i - 1)\n\nThen:\nz_1 = y_1\nz_2 = y_2 - 1\nz_3 = y_3 - 2\n...\nz_6 = y_6 - 5\n\nBecause y_1 < y_2 < ... < y_6, this becomes:\n1 ≤ z_1 ≤ z_2 ≤ z_3 ≤ z_4 ≤ z_5 ≤ z_6 ≤ 4\n\nSo now we have a nondecreasing sequence of length 6, where each z_i lies between 1 and 4.\n\nStep 3: Apply the condition f(i) ≠ i\n\nSince y_i = f(i), the condition is:\ny_i ≠ i\n\nBut y_i = z_i + i - 1\nSo:\nz_i + i - 1 ≠ i\n=> z_i ≠ 1\n\nTherefore z_i cannot be 1.\nSo each z_i must belong to:\n{2,3,4}\n\nHence we need the number of nondecreasing sequences of length 6 formed using 3 values: 2, 3, 4.\n\nStep 4: Count using combinations with repetition\n\nThe number of nondecreasing sequences of length n from k values is:\nC(n+k-1, k-1)\n\nHere n = 6 and k = 3.\nSo the count is:\nC(6+3-1, 3-1) = C(8,2) = 28\n\nStep 5: Final answer\n\nTherefore the required number of strictly increasing functions is 28.\n\nCommon mistake:\nA common mistake is to first count all strictly increasing functions as C(9,6) = 84 and then subtract incorrectly. The restriction y_i ≠ i is position-based, so direct subtraction is messy. The z_i transformation is the clean method.\n\nTherefore, the correct answer is 28."
    }
  }
];

export default jeeRelationsAndFunctionsQuestions;