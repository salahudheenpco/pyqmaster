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
{
  id: "bitsat-2018-physics-kinematics-002",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Kinematics",
  topic: "Direction of Physical Quantities in Vertical Motion",
  year: 2018,
  questionText: "Consider the acceleration, velocity and displacement of a tennis ball as it falls to the ground and bounces back. Directions of which of these change in the process?",
  options: [
    "Velocity only",
    "Displacement and velocity",
    "Acceleration, velocity and displacement",
    "Displacement and acceleration"
  ],
  correctAnswer: "Displacement and velocity",
  explanation: {
    quick: "Velocity reverses after bounce, and displacement direction changes relative to the chosen origin; acceleration remains downward due to gravity.",
    standard: "Before collision the ball moves downward, after bounce it moves upward, so velocity changes direction. Displacement also changes direction as the ball crosses the turning of motion relative to reference. Acceleration due to gravity remains downward throughout, so it does not change direction.",
    deep: "Let us understand the question from the beginning…\n\nTake upward as positive.\n\n1. Velocity\nWhile falling, velocity is downward.\nAfter bouncing, velocity becomes upward.\nSo the direction of velocity definitely changes.\n\n2. Acceleration\nIgnoring the brief collision details and considering the motion under gravity, acceleration remains downward due to gravity.\nSo its direction does not change during the falling-and-rising motion.\n\n3. Displacement\nDisplacement depends on position relative to the chosen reference point. As the ball falls toward the ground and then moves upward after bouncing, the direction of displacement relative to the reference can change.\n\nSo among the listed quantities, displacement and velocity change direction, but acceleration does not.\n\nTherefore, the correct answer is displacement and velocity."
  }
}
{
  id: "bitsat-2018-physics-kinematics-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Kinematics",
  topic: "Velocity-Height Graph",
  year: 2018,
  questionText: "A ball is dropped vertically from a height d above the ground. It hits the ground and bounces up vertically to a height d/2. Neglecting subsequent motion and air resistance, its velocity v varies with height h above the ground as",
  options: ["Graph a", "Graph b", "Graph c", "Graph d"],
  correctAnswer: "Graph a",
  explanation: {
    quick: "Before impact, v is negative and follows v² = 2g(d - h). After bouncing, v is positive and follows v² = 2g(d/2 - h).",
    standard: "During the downward journey, velocity is negative and becomes more negative as h decreases. After rebound, the upward velocity is positive but smaller in magnitude because the ball rises only to d/2. The graph that shows a lower positive branch up to d/2 and a larger negative branch from 0 to d is graph a.",
    deep: "Let us understand the question from the beginning…\n\nTake upward velocity as positive.\n\nPart 1: Falling from height d to ground\nInitially at h = d, velocity is 0.\nAs the ball falls:\nv² = 2g(d - h)\nSince velocity is downward:\nv = -√[2g(d - h)]\n\nSo this branch lies below the h-axis and goes from:\n(h = d, v = 0) to (h = 0, v = -√2gd)\n\nPart 2: Rebounding upward to height d/2\nAfter collision, the ball rises only to d/2.\nSo during upward motion:\nv² = 2g(d/2 - h)\nSince velocity is upward:\nv = +√[2g(d/2 - h)]\n\nSo this branch lies above the h-axis and goes from:\n(h = 0, v = +√gd) to (h = d/2, v = 0)\n\nThus the correct graph must show:\n- a larger negative branch for the fall\n- a smaller positive branch for the rise\n- both meeting at h = 0 with different magnitudes because energy is lost in the bounce\n\nThat corresponds to Graph a.\n\nTherefore, the correct answer is Graph a."
  }
}
];
