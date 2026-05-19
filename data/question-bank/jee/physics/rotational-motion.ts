import { PYQQuestion } from "@/lib/types";

export const jeeRotationalMotionQuestions: PYQQuestion[] = [
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
        "Just after one string is cut, the rod rotates about the end attached to the remaining string. Using torque and translation gives T = mg/4.",
      standard:
        "Immediately after one string is cut, the rod starts rotating about the point where the other string is attached.\n\nTorque about the attached end:\nτ = mg × (l/2)\n\nMoment of inertia of rod about one end:\nI = ml²/3\n\nSo angular acceleration:\nα = τ/I = [mg(l/2)] / (ml²/3)\n= 3g / 2l\n\nAcceleration of centre of mass:\na = α(l/2) = 3g/4 downward\n\nNow apply Newton's second law:\nmg - T = m(3g/4)\n\nT = mg/4",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on rotational motion of a rigid body just after one support is removed. Before the string is cut, the rod is in equilibrium. But immediately after one string is cut, the rod is no longer in equilibrium and starts rotating about the point where the remaining string is attached.\n\nFor rotational motion, we use:\n\nτ = Iα\n\nwhere τ is torque, I is moment of inertia, and α is angular acceleration.\n\nFor a uniform rod about one end:\n\nI = ml²/3\n\n2. Given Information\n\nMass of rod = m\nLength of rod = l\nWeight of rod = mg\nOne string is cut\nThe other string remains attached at one end\n\n3. Strategy / Approach\n\nFirst, we calculate angular acceleration of the rod about the attached end. Then we calculate acceleration of the centre of mass. Finally, we apply Newton's second law to the vertical motion of the rod.\n\n4. Step-by-Step Solution\n\nThe weight mg acts at the centre of mass of the rod.\n\nDistance of centre of mass from attached end = l/2\n\nTorque about attached end:\n\nτ = mg × l/2\n\nMoment of inertia about attached end:\n\nI = ml²/3\n\nUsing τ = Iα:\n\nmg(l/2) = (ml²/3)α\n\nCancel m and one l:\n\ng/2 = (l/3)α\n\nSo:\n\nα = 3g/2l\n\nAcceleration of centre of mass:\n\na = α(l/2)\n\na = (3g/2l)(l/2)\n\na = 3g/4 downward\n\nNow apply force equation vertically:\n\nmg - T = ma\n\nmg - T = m(3g/4)\n\nT = mg/4\n\n5. Key Insight\n\nThe rod is not in equilibrium after the string is cut, so the remaining tension is not mg/2. The rod has downward acceleration of centre of mass.\n\n6. Final Answer\n\nTherefore, the correct answer is mg/4.\n\n7. Common Mistakes\n\n• Assuming the rod remains in equilibrium\n• Taking tension as mg/2\n• Forgetting rotational acceleration\n• Not using moment of inertia about the attached end"
    }
  },

  {
    id: "jee-2026-physics-rotational-motion-002",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Rotational Motion",
    topic: "Angular momentum of a moving particle",
    year: 2026,
    questionText:
      "Two cars A and B each of mass 10³ kg are moving on parallel tracks separated by a distance of 10 m, in same direction with speeds 72 km/h and 36 km/h. The magnitude of angular momentum of car A with respect to car B is:",
    options: ["3 × 10⁵ J.s", "10⁵ J.s", "6 × 10⁵ J.s", "2 × 10⁵ J.s"],
    correctAnswer: "2 × 10⁵ J.s",
    explanation: {
      quick:
        "Angular momentum of A about B is L = mvr. Use velocity of A = 72 km/h = 20 m/s and perpendicular distance = 10 m. So L = 10³ × 20 × 10 = 2 × 10⁵ J.s.",
      standard:
        "Mass of car A:\nm = 10³ kg\n\nSpeed of car A:\n72 km/h = 72 × 5/18 = 20 m/s\n\nPerpendicular distance between tracks:\nr = 10 m\n\nAngular momentum of A with respect to B:\nL = mvr\n\nL = 10³ × 20 × 10\n\nL = 2 × 10⁵ J.s",
      deep:
        "Let us understand the question from the beginning.\n\n1. Concept Introduction\n\nThis question is based on angular momentum of a moving particle with respect to a reference point. A moving body has angular momentum about a point if its line of motion does not pass through that point.\n\nThe angular momentum of a particle is given by:\n\nL = r × p\n\nFor magnitude:\n\nL = mvr sinθ\n\nHere, r is the position vector from the reference point to the particle, p is linear momentum, m is mass, and v is speed.\n\nIf the velocity is perpendicular to the shortest distance from the reference point, then sinθ = 1 and:\n\nL = mvd\n\nwhere d is the perpendicular distance between the reference point and the line of motion.\n\n2. Given Information\n\nMass of car A = 10³ kg\n\nSpeed of car A = 72 km/h\n\nSpeed of car B = 36 km/h\n\nDistance between parallel tracks = 10 m\n\nWe need angular momentum of car A with respect to car B.\n\n3. Strategy / Approach\n\nWe treat car B as the reference point. Since the cars move on parallel tracks, the perpendicular distance between the line of motion of A and car B is 10 m.\n\nFor angular momentum of A with respect to B, we use the velocity of car A and the perpendicular distance from B to A's line of motion.\n\n4. Step-by-Step Solution\n\nConvert speed of car A into SI units:\n\n72 km/h = 72 × 5/18\n\n72 km/h = 20 m/s\n\nMass of car A:\n\nm = 10³ kg\n\nPerpendicular distance:\n\nd = 10 m\n\nUsing angular momentum formula:\n\nL = mvd\n\nSubstitute values:\n\nL = 10³ × 20 × 10\n\nL = 200000\n\nL = 2 × 10⁵ J.s\n\n5. Key Insight\n\nThe key point is that angular momentum depends on the perpendicular distance from the reference point to the line of motion. Since the tracks are parallel, that perpendicular distance is simply 10 m.\n\n6. Final Answer\n\nTherefore, the correct answer is 2 × 10⁵ J.s.\n\n7. Common Mistakes\n\n• Forgetting to convert km/h into m/s\n• Using 36 km/h instead of 72 km/h\n• Ignoring the perpendicular distance between tracks\n• Confusing angular momentum with ordinary linear momentum"
    }
  }
];

export default jeeRotationalMotionQuestions;