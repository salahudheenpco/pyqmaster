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
    options: ["f₀T", "(f₀T)/2", "0", "(f₀T²)/2"],
    correctAnswer: "(f₀T)/2",
    explanation: {
      quick: "Integrate acceleration to get velocity.",
      standard: "v = ∫a dt = ∫ f₀(1 − t/T) dt from 0 to T gives v = (f₀T)/2.",
      deep: "Given acceleration:\na = f₀(1 − t/T)\n\nVelocity is integral of acceleration:\nv = ∫ a dt\n\nv = ∫ f₀(1 − t/T) dt\n= f₀ [t − t²/(2T)]\n\nAt f = 0 ⇒ t = T\n\nSo:\nv = f₀ [T − T²/(2T)]\n= f₀ [T − T/2]\n= f₀(T/2)\n\nTherefore, v = (f₀T)/2."
    }
  },

  // ✅ FIXED COMMA

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
      quick: "Velocity reverses, displacement direction changes; acceleration stays downward.",
      standard: "Velocity changes direction after bounce. Displacement direction changes relative to reference. Acceleration due to gravity remains downward.",
      deep: "Velocity:\nDownward during fall, upward after bounce → changes\n\nAcceleration:\nAlways downward (gravity) → no change\n\nDisplacement:\nDepends on reference → changes direction during motion\n\nTherefore, displacement and velocity change."
    }
  },

  // ✅ FIXED COMMA

  {
    id: "bitsat-2018-physics-kinematics-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Kinematics",
    topic: "Velocity-Height Graph",
    year: 2018,
    questionText: "A ball is dropped vertically from a height d above the ground. It hits the ground and bounces up vertically to a height d/2. Its velocity v varies with height h as",
    options: ["Graph a", "Graph b", "Graph c", "Graph d"],
    correctAnswer: "Graph a",
    explanation: {
      quick: "Downward branch larger, upward branch smaller.",
      standard: "Falling: v = −√(2g(d−h)); rising: v = +√(2g(d/2−h)).",
      deep: "Falling:\nv = −√(2g(d−h))\n\nRising:\nv = +√(2g(d/2−h))\n\nThus:\n- larger negative branch (fall)\n- smaller positive branch (rise)\n\nHence graph a."
    }
  }
];