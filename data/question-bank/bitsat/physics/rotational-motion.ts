import { PYQQuestion } from "@/lib/types";

export const bitsatRotationalMotionQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-rotational-motion-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Initial angular acceleration of a uniform rod about one end",
    year: 2017,
    questionText: "A uniform rod of length l and mass m is free to rotate in a vertical plane about one end A. The rod is initially in horizontal position and is released. The initial angular acceleration of the rod is (Moment of inertia of rod about A is ml²/3)",
    options: [
      "3g/2l",
      "3g/2",
      "2l/3g",
      "mg²/2l"
    ],
    correctAnswer: "3g/2l",
    explanation: {
      quick: "Use the main concept from Initial angular acceleration of a uniform rod about one end and apply it directly. The correct answer is 3g/2l.",
      standard: "We solve this using the main idea from Initial angular acceleration of a uniform rod about one end. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 3g/2l.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Physics, and the main concept involved is Initial angular acceleration of a uniform rod about one end.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Initial angular acceleration of a uniform rod about one end and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 3g/2l.\n\nExtra understanding:\nQuestions from Initial angular acceleration of a uniform rod about one end often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 3g/2l."
    }
  }
{
  id: "bitsat-2018-physics-rotational-motion-002",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Rotational Motion",
  topic: "Angular Momentum and Time Period",
  year: 2018,
  questionText: "If the time period is doubled, then the angular momentum of the body will (provided the moment of inertia of the body is constant)",
  options: [
    "remain constant",
    "quadruple",
    "become half",
    "double"
  ],
  correctAnswer: "become half",
  explanation: {
    quick: "Angular momentum L = Iω and ω = 2π/T. So if T doubles, ω halves, hence L halves.",
    standard: "For constant moment of inertia, angular momentum L = Iω. Since ω = 2π/T, doubling time period makes angular velocity half. Therefore angular momentum also becomes half.",
    deep: "Let us understand the question from the beginning…\n\nAngular momentum of a rotating body is:\nL = Iω\n\nWe are told that moment of inertia I remains constant.\nSo the only changing quantity is angular velocity ω.\n\nNow angular velocity is related to time period T by:\nω = 2π/T\n\nThis means:\nω ∝ 1/T\n\nSo if time period is doubled:\nT becomes 2T\ntherefore,\nω becomes ω/2\n\nSince L = Iω and I is constant:\nL also becomes half.\n\nTherefore, the correct answer is become half."
  }
}
{
  id: "bitsat-2018-physics-rotational-motion-003",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Rotational Motion",
  topic: "Variable Torque",
  year: 2018,
  questionText: "A pulley of radius 2 m is rotated about its axis by a force (20t − 5t²) newton (where t is measured in seconds) applied tangentially. If the moment of inertia of the pulley about its axis of rotation is 10 kg m², the number of rotation made by the pulley before its direction of motion is reversed is",
  options: [
    "more than 3 but less than 6",
    "more than 6 but less than 9",
    "more than 9",
    "less than 3"
  ],
  correctAnswer: "more than 3 but less than 6",
  explanation: {
    quick: "Use torque = Iα, integrate twice to get angular displacement before ω becomes zero again.",
    standard: "Torque τ = rF = 2(20t − 5t²). So α = τ/I = 4t − t². Integrating gives ω = 2t² − t³/3. Set ω = 0 to find reversal time t = 6 s. Integrating again gives θ = 36 rad, so number of turns = 36/(2π) ≈ 5.73.",
    deep: "Let us understand the question from the beginning…\n\nGiven force:\nF = 20t - 5t²\nRadius of pulley:\nr = 2 m\nMoment of inertia:\nI = 10 kg m²\n\n1. Find torque\nτ = rF = 2(20t - 5t²)\n= 40t - 10t²\n\n2. Use τ = Iα\nα = τ/I = (40t - 10t²)/10\n= 4t - t²\n\nSo:\ndω/dt = 4t - t²\n\nIntegrate:\nω = ∫(4t - t²)dt\n= 2t² - t³/3 + C\nInitially the pulley starts from rest, so C = 0.\nThus:\nω = 2t² - t³/3\n\n3. Find when motion reverses\nDirection reverses when angular velocity again becomes zero:\n2t² - t³/3 = 0\n\nt²(2 - t/3) = 0\nSo non-zero root is:\nt = 6 s\n\n4. Find angular displacement till that instant\nθ = ∫ω dt\n= ∫(2t² - t³/3)dt\n= (2/3)t³ - t⁴/12\n\nAt t = 6:\nθ = (2/3)(216) - 1296/12\n= 144 - 108\n= 36 rad\n\n5. Number of rotations\nn = θ/(2π) = 36/(2π) ≈ 5.73\n\nThis lies between 3 and 6.\n\nTherefore, the correct answer is more than 3 but less than 6."
  }
}
];
