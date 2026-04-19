export type DiagnosticSubject = "Physics" | "Chemistry" | "Mathematics";
export type DiagnosticDifficulty = "easy" | "medium";
export type DiagnosticOptionId = "A" | "B" | "C" | "D";

export type DiagnosticQuestion = {
  id: string;
  subject: DiagnosticSubject;
  chapter: string;
  concept: string;
  difficulty: DiagnosticDifficulty;
  questionText: string;
  options: {
    id: DiagnosticOptionId;
    text: string;
  }[];
  correctAnswer: DiagnosticOptionId;
  solution: string;
};

export const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "diag-physics-force-001",
    subject: "Physics",
    chapter: "Laws of Motion",
    concept: "Newton's Second Law",
    difficulty: "easy",
    questionText:
      "A force produces an acceleration of 4 m/s² in a body of mass 3 kg. What is the applied force?",
    options: [
      { id: "A", text: "7 N" },
      { id: "B", text: "12 N" },
      { id: "C", text: "1.33 N" },
      { id: "D", text: "24 N" },
    ],
    correctAnswer: "B",
    solution:
      "Use Newton's Second Law: F = m × a. Here m = 3 kg and a = 4 m/s², so F = 3 × 4 = 12 N.",
  },
  {
    id: "diag-physics-kinematics-001",
    subject: "Physics",
    chapter: "Kinematics",
    concept: "Equation of motion",
    difficulty: "medium",
    questionText:
      "A particle starts with velocity 6 m/s and accelerates uniformly at 5 m/s² for 6 s. What distance does it cover in this time?",
    options: [
      { id: "A", text: "131 m" },
      { id: "B", text: "120 m" },
      { id: "C", text: "138 m" },
      { id: "D", text: "126 m" },
    ],
    correctAnswer: "D",
    solution:
      "Use s = ut + 1/2 at². Here u = 6, a = 5, t = 6. So s = 6×6 + 1/2×5×36 = 36 + 90 = 126 m.",
  },
  {
    id: "diag-physics-current-001",
    subject: "Physics",
    chapter: "Current Electricity",
    concept: "Parallel resistance",
    difficulty: "easy",
    questionText:
      "Two resistors of 4 Ω and 6 Ω are connected in parallel across a 12 V battery. What is the total current drawn from the battery?",
    options: [
      { id: "A", text: "3 A" },
      { id: "B", text: "4 A" },
      { id: "C", text: "5 A" },
      { id: "D", text: "6 A" },
    ],
    correctAnswer: "C",
    solution:
      "For parallel resistors, 1/Req = 1/4 + 1/6 = 5/12, so Req = 12/5 = 2.4 Ω. Then I = V/R = 12/2.4 = 5 A.",
  },
  {
    id: "diag-chemistry-combustion-001",
    subject: "Chemistry",
    chapter: "Stoichiometry",
    concept: "Combustion reaction",
    difficulty: "easy",
    questionText:
      "How many moles of CO₂ are produced when 2 moles of C₂H₆ are completely burnt?",
    options: [
      { id: "A", text: "2" },
      { id: "B", text: "4" },
      { id: "C", text: "6" },
      { id: "D", text: "8" },
    ],
    correctAnswer: "B",
    solution:
      "Balanced equation: C₂H₆ + 7/2 O₂ → 2 CO₂ + 3 H₂O. So 1 mole of C₂H₆ gives 2 moles of CO₂. Therefore 2 moles give 4 moles of CO₂.",
  },
  {
    id: "diag-chemistry-empirical-001",
    subject: "Chemistry",
    chapter: "Mole Concept",
    concept: "Empirical formula",
    difficulty: "medium",
    questionText:
      "A compound contains 40% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. What is its empirical formula?",
    options: [
      { id: "A", text: "CH₂O" },
      { id: "B", text: "C₂H₄O" },
      { id: "C", text: "C₃H₆O₃" },
      { id: "D", text: "CH₄O" },
    ],
    correctAnswer: "A",
    solution:
      "Assume 100 g compound. Moles: C = 40/12 ≈ 3.33, H = 6.7/1 = 6.7, O = 53.3/16 ≈ 3.33. Ratio ≈ 1 : 2 : 1, so empirical formula is CH₂O.",
  },
  {
    id: "diag-chemistry-ph-001",
    subject: "Chemistry",
    chapter: "Ionic Equilibrium",
    concept: "pH calculation",
    difficulty: "easy",
    questionText:
      "What is the pH of a 10⁻³ M HCl solution?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "11" },
    ],
    correctAnswer: "C",
    solution:
      "HCl is a strong acid, so [H⁺] = 10⁻³ M. Therefore pH = -log(10⁻³) = 3.",
  },
  {
    id: "diag-math-ap-001",
    subject: "Mathematics",
    chapter: "Sequences and Series",
    concept: "Arithmetic Progression",
    difficulty: "medium",
    questionText:
      "The 5th term of an AP is 20 and the 12th term is 41. What is the first term?",
    options: [
      { id: "A", text: "7" },
      { id: "B", text: "8" },
      { id: "C", text: "9" },
      { id: "D", text: "10" },
    ],
    correctAnswer: "B",
    solution:
      "In AP, Tn = a + (n-1)d. So a + 4d = 20 and a + 11d = 41. Subtracting gives 7d = 21, so d = 3. Then a = 20 - 12 = 8.",
  },
  {
    id: "diag-math-trigonometry-001",
    subject: "Mathematics",
    chapter: "Trigonometry",
    concept: "Basic identities",
    difficulty: "easy",
    questionText:
      "What is the value of sin²30° + cos²60°?",
    options: [
      { id: "A", text: "1/4" },
      { id: "B", text: "1/2" },
      { id: "C", text: "3/4" },
      { id: "D", text: "1" },
    ],
    correctAnswer: "B",
    solution:
      "sin 30° = 1/2, so sin²30° = 1/4. cos 60° = 1/2, so cos²60° = 1/4. Their sum is 1/2.",
  },
  {
    id: "diag-math-coordinate-001",
    subject: "Mathematics",
    chapter: "Coordinate Geometry",
    concept: "Area of triangle",
    difficulty: "medium",
    questionText:
      "The area of triangle with vertices A(1, 2), B(4, 6), and C(k, 8) is 5. What is the value of k?",
    options: [
      { id: "A", text: "1" },
      { id: "B", text: "2" },
      { id: "C", text: "3" },
      { id: "D", text: "4" },
    ],
    correctAnswer: "C",
    solution:
      "Using the area formula, area = 1/2 |x1(y2-y3) + x2(y3-y1) + x3(y1-y2)|. That gives 1/2 |1(6-8) + 4(8-2) + k(2-6)| = 5. So 1/2 |22 - 4k| = 5, hence |11 - 2k| = 5. From the options, k = 3 is correct.",
  },
];