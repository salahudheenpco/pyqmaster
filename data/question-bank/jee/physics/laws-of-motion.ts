export const jeeLawsOfMotionQuestions = [
  {
    id: "jee-2026-physics-laws-of-motion-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Laws of Motion",
    topic: "Motion under a time-dependent force",
    year: 2026,
    questionText:
      "A mass 4 kg moves under the influence of a force F = (4t^3 i - 3t j) N, where t is time in second. If the mass starts from origin at t = 0, then the velocity and position after t = 2 s will be:",
    options: [
      "v = 3i + 2j, r = 5i + 6j",
      "v = 4i - (2/3)j, r = 5i - 6j",
      "v = 4i + 2j, r = 5i + 8j",
      "v = 4i - (2/3)j, r = (5/8)i + j"
    ],
    correctAnswer: "v = 4i - (2/3)j, r = (8/5)i + j",
    explanation: {
      quick:
        "Acceleration is a = F/m = (t^3 i - (3/4)t j). Integrating with v(0)=0 gives v = (t^4/4)i - (3t^2/8)j. At t=2, v = 4i - (3/2)j. Integrating again with r(0)=0 gives r = (t^5/20)i - (t^3/8)j. At t=2, r = (8/5)i - j. The OCRed options in the source are distorted.",
      standard:
        "Given force:\nF = (4t^3 i - 3t j) N\nMass m = 4 kg\n\nSo acceleration is:\na = F/m = (t^3 i - (3/4)t j)\n\nNow integrate to get velocity:\nv = ∫ a dt\n= (t^4/4)i - (3t^2/8)j + C\nSince body starts from rest at origin at t=0, velocity at t=0 is zero, so C = 0.\n\nThus,\nv(t) = (t^4/4)i - (3t^2/8)j\n\nAt t = 2:\nv = (16/4)i - (3×4/8)j = 4i - (3/2)j\n\nNow integrate velocity to get position:\nr = ∫ v dt\n= (t^5/20)i - (t^3/8)j + C'\nUsing r(0)=0, C' = 0.\n\nHence,\nr(2) = (32/20)i - (8/8)j = (8/5)i - j",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a time-dependent force:\nF = (4t^3 i - 3t j) N\n\nThe mass is:\nm = 4 kg\n\nThe particle starts from the origin at t = 0.\nWe need velocity and position at t = 2 s.\n\nStep 1: Find acceleration from Newton's second law\n\nF = ma\nSo,\na = F/m\n\nTherefore,\na = (4t^3 i - 3t j)/4\n= t^3 i - (3/4)t j\n\nSo acceleration components are:\na_x = t^3\na_y = -(3/4)t\n\nStep 2: Integrate acceleration to get velocity\n\nVelocity is the integral of acceleration:\nv = ∫ a dt\n\nSo,\nv_x = ∫ t^3 dt = t^4/4\nv_y = ∫ [-(3/4)t] dt = -(3/8)t^2\n\nThus,\nv = (t^4/4)i - (3t^2/8)j\n\nAt t = 2:\nv = (16/4)i - (3×4/8)j\n= 4i - (12/8)j\n= 4i - (3/2)j\n\nStep 3: Integrate velocity to get position\n\nPosition vector is the integral of velocity:\nr = ∫ v dt\n\nSo,\nr_x = ∫ (t^4/4) dt = t^5/20\nr_y = ∫ [-(3t^2/8)] dt = -(t^3/8)\n\nThus,\nr = (t^5/20)i - (t^3/8)j\n\nAt t = 2:\nr = (32/20)i - (8/8)j\n= (8/5)i - j\n\nStep 4: Final result\n\nVelocity at 2 s:\n4i - (3/2)j\n\nPosition at 2 s:\n(8/5)i - j\n\nAccuracy note:\nThe visible OCRed options for this question are distorted in the source PDF. The mathematically correct result is the one derived above.\n\nTherefore, the correct result is:\nv = 4i - (3/2)j, r = (8/5)i - j"
    }
  }
];

export default jeeLawsOfMotionQuestions;