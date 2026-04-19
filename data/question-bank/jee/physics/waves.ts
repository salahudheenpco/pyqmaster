export const jeeWavesQuestions = [
  {
    id: "jee-2026-physics-waves-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Waves",
    topic: "Pulse travel time in joined strings",
    year: 2026,
    questionText:
      "Two strings A and B having linear densities μA = 2 × 10^(-4) kg/m and μB = 4 × 10^(-4) kg/m and lengths LA = 2.5 m and LB = 1.5 m respectively are joined. Free ends of A and B are tied to two rigid supports, creating a tension of 500 N in the wire. Two identical pulses, sent from C and D ends, take time t1 and t2 respectively to reach the joint. The ratio t1/t2 is:",
    options: ["1.08", "1.9", "1.18", "1.67"],
    correctAnswer: "1.18",
    explanation: {
      quick:
        "Wave speed on a string is v = √(T/μ). So t1 = LA/√(T/μA) and t2 = LB/√(T/μB). Hence t1/t2 = (LA/LB)√(μA/μB) = (2.5/1.5)√(2/4) ≈ 1.18.",
      standard:
        "For wave propagation on a string:\nv = √(T/μ)\n\nSo time taken to travel length L is:\nt = L/v = L√(μ/T)\n\nTherefore,\nt1/t2 = [LA√(μA/T)] / [LB√(μB/T)]\n= (LA/LB) √(μA/μB)\n\nNow substitute:\nLA = 2.5 m, LB = 1.5 m\nμA = 2 × 10^(-4), μB = 4 × 10^(-4)\n\nSo,\nt1/t2 = (2.5/1.5) × √(2/4)\n= (5/3) × 1/√2\n≈ 1.18",
      deep:
        "Let us understand the question from the beginning.\n\nA pulse travels along a string with speed:\nv = √(T/μ)\n\nwhere:\nT = tension in the string\nμ = linear mass density\n\nSince both joined strings are under the same tension, the speed depends only on μ for each segment.\n\nStep 1: Time in string A\n\nPulse from end C travels through string A of length LA.\nSo,\nt1 = LA / vA\n= LA / √(T/μA)\n= LA √(μA/T)\n\nStep 2: Time in string B\n\nPulse from end D travels through string B of length LB.\nSo,\nt2 = LB / vB\n= LB / √(T/μB)\n= LB √(μB/T)\n\nStep 3: Take the ratio\n\nt1/t2 = [LA √(μA/T)] / [LB √(μB/T)]\n\nThe √T terms cancel:\n\nt1/t2 = (LA/LB) √(μA/μB)\n\nNow put the values:\nLA = 2.5 m\nLB = 1.5 m\nμA = 2 × 10^(-4)\nμB = 4 × 10^(-4)\n\nSo,\nt1/t2 = (2.5/1.5) × √(2/4)\n= (5/3) × √(1/2)\n= (5/3)(1/√2)\n≈ 1.18\n\nCommon mistake:\nA common mistake is to use √(μB/μA) instead of √(μA/μB). Write the time formula first, then substitute.\n\nTherefore, the correct answer is 1.18."
    }
  }
];

export default jeeWavesQuestions;