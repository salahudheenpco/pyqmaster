import { PYQQuestion } from "@/lib/types";

export const bitsatMechanicalPropertiesOfSolidsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-mechanical-properties-of-solids-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Mechanical Properties of Solids",
    topic: "Strain in a wire due to load at midpoint",
    year: 2017,
    questionText: "A mild steel wire of length 2L and cross-sectional area A is stretched, well within the elastic limit, horizontally between two pillars as shown in figure. A mass m is suspended from the mid-point of the wire. If the vertical displacement of the midpoint is x, then the strain in the wire is",
    options: [
      "x² / (2L²)",
      "x² / L",
      "x² / (2L)",
      "x² / (4L²)"
    ],
    correctAnswer: "x² / (2L²)",
    explanation: {
      quick: "Use the main concept from Strain in a wire due to load at midpoint and apply it directly. The correct answer is x² / (2L²).",
      standard: "We solve this using the main idea from Strain in a wire due to load at midpoint. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as x² / (2L²).",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Strain in a wire due to load at midpoint.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Strain in a wire due to load at midpoint and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as x² / (2L²).\n\nExtra understanding:\nQuestions from Strain in a wire due to load at midpoint often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is x² / (2L²)."
    }
  }
{
  id: "bitsat-2018-physics-mechanical-properties-of-solids-002",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Mechanical Properties of Solids",
  topic: "Breaking Stress",
  year: 2018,
  questionText: "Breaking stress of a steel wire is p and the density of steel is ρ. The greatest length of steel wire that can hang vertically without breaking is",
  options: [
    "p/(ρg)",
    "p/(2ρg)",
    "2p/(ρg)",
    "None of these"
  ],
  correctAnswer: "p/(ρg)",
  explanation: {
    quick: "Maximum stress at the top equals weight per unit area. Set it equal to breaking stress.",
    standard: "For a hanging wire, stress at the top is due to weight of the entire wire below it. So p = ρlg, giving l = p/(ρg).",
    deep: "Let us understand the question from the beginning…\n\nIf a wire hangs vertically, the greatest stress occurs at the topmost point because it supports the weight of the whole wire below it.\n\nLet:\n- A = cross-sectional area\n- l = greatest possible length\n- ρ = density\n\nMass of wire = volume × density = Alρ\nWeight of wire = Alρg\n\nStress at the top = weight / area\n= (Alρg)/A\n= lρg\n\nAt the breaking point, this stress equals the breaking stress p.\nSo:\np = lρg\n\nHence:\nl = p/(ρg)\n\nTherefore, the correct answer is p/(ρg)."
  }
}
];
