export const jeeRotationalMotionQuestions = [
  {
    id: "jee-2026-physics-rotational-motion-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Tension immediately after one support is cut",
    year: 2026,
    questionText:
      "A uniform rod of mass m and length l is suspended horizontally by means of two identical inextensible light strings as shown in the figure. The tension in one string immediately after the other string is cut is:",
    options: ["mg/3", "mg/2", "mg/4", "mg"],
    correctAnswer: "mg/4",
    explanation: {
      quick:
        "Just after one string is cut, the rod rotates about the end attached to the remaining string. Taking torque about that end: mgl/2 = I_end α, with I_end = ml^2/3. So α = 3g/2l. The centre of mass has tangential acceleration a = α(l/2) = 3g/4 downward. Using translation: mg - T = m(3g/4), hence T = mg/4.",
      standard:
        "Immediately after one string is cut, the rod starts rotating about the point where the other string is attached.\n\nTorque about the attached end:\nτ = mg × (l/2)\n\nMoment of inertia of rod about one end:\nI = ml^2/3\n\nSo angular acceleration:\nα = τ/I = [mg(l/2)] / (ml^2/3)\n= 3g / 2l\n\nAcceleration of centre of mass:\na = α × (l/2)\n= (3g/2l)(l/2)\n= 3g/4 downward\n\nNow apply Newton's second law to whole rod vertically:\nmg - T = m(3g/4)\n=> T = mg/4",
      deep:
        "Let us understand the question from the beginning.\n\nInitially the rod is horizontal and supported by two identical light strings.\nThen one string is cut.\nWe need the tension in the remaining string immediately after the cut.\n\nStep 1: What happens just after the cut?\n\nThe rod is no longer in equilibrium.\nIt begins to rotate about the point where the remaining string is attached.\nAt that instant, that end behaves like the pivot.\n\nStep 2: Find angular acceleration\n\nThe only torque about the attached end is due to the weight mg acting at the centre of mass.\nThe centre of mass is at distance l/2 from the end.\n\nSo torque is:\nτ = mg × l/2\n\nMoment of inertia of a uniform rod about one end is:\nI = ml^2/3\n\nUsing rotational equation:\nτ = Iα\n\nSo,\nmg(l/2) = (ml^2/3)α\n\nCancel m and one l:\ng/2 = (l/3)α\n\nTherefore,\nα = 3g / 2l\n\nStep 3: Find acceleration of centre of mass\n\nThe centre of mass is at distance l/2 from the pivot.\nSo its tangential acceleration is:\na = α × l/2\n\nSubstitute α:\na = (3g/2l)(l/2) = 3g/4\n\nThis acceleration is downward at that instant.\n\nStep 4: Apply translational motion to the rod\n\nVertical forces on the rod are:\n- weight mg downward\n- tension T upward\n\nNet downward force = ma_cm\n\nSo,\nmg - T = m(3g/4)\n\nHence,\nT = mg - 3mg/4 = mg/4\n\nCommon mistake:\nA common mistake is assuming the remaining string still has tension mg/2. That would be true only in equilibrium before cutting, not after.\n\nTherefore, the correct answer is mg/4."
    }
  }
];

export default jeeRotationalMotionQuestions;