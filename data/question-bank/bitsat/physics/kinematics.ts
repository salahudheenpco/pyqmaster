import { PYQQuestion } from "@/lib/types";

export const bitsatKinematicsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-kinematics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinematics",
    topic: "Velocity from time-dependent acceleration",
    year: 2017,
    questionText: "A particle moving along x-axis has acceleration f at time t given by f = f₀(1 − t/T), where f₀ and T are constants. If the particle is at rest at t = 0, then the particle's velocity when f = 0 is",
    options: [
      "f₀T",
      "(f₀T)/2",
      "0",
      "(f₀T²)/2"
    ],
    correctAnswer: "(f₀T)/2",
    explanation: {
      quick: "Use the main concept from Velocity from time-dependent acceleration and apply it directly. The correct answer is (f₀T)/2.",
      standard: "We solve this using the main idea from Velocity from time-dependent acceleration. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as (f₀T)/2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Velocity from time-dependent acceleration.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Velocity from time-dependent acceleration and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as (f₀T)/2.\n\nExtra understanding:\nQuestions from Velocity from time-dependent acceleration often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is (f₀T)/2."
    }
  }
];
