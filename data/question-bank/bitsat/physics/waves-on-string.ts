import { PYQQuestion } from "@/lib/types";

export const bitsatWavesOnStringQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-waves-on-string-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Waves on String",
    topic: "Finding tension from wave equation",
    year: 2017,
    questionText: "A transverse wave propagating on a stretched string of linear density 3 × 10⁻⁴ kg m⁻¹ is represented by the equation y = 0.2 sin(1.5x + 60t), where x and y are in metres and t is in seconds. The tension in the string is",
    options: [
      "0.24 N",
      "0.48 N",
      "1.20 N",
      "1.80 N"
    ],
    correctAnswer: "0.48 N",
    explanation: {
      quick: "Compare the given wave equation with the standard form y = A sin(kx ± ωt). Here the coefficient of x is the wave number k, and the coefficient of t is the angular frequency ω. From y = 0.2 sin(1.5x + 60t), we get k = 1.5 rad m⁻¹ and ω = 60 rad s⁻¹. The speed of the wave on the string is v = ω/k = 60/1.5 = 40 m s⁻¹. For a stretched string, wave speed is related to tension by v = √(T/μ), so T = μv². Given μ = 3 × 10⁻⁴ kg m⁻¹, T = 3 × 10⁻⁴ × 40² = 3 × 10⁻⁴ × 1600 = 0.48 N. Therefore, the correct answer is 0.48 N.",
      standard: "The given equation of the transverse wave is y = 0.2 sin(1.5x + 60t). To extract physical quantities from this equation, compare it with the standard wave equation y = A sin(kx ± ωt). In this standard form, A is the amplitude, k is the wave number, and ω is the angular frequency. The sign between kx and ωt tells the direction of propagation, but it does not affect the magnitude of the wave speed or the tension.\n\nFrom the given equation, the coefficient of x is 1.5, so k = 1.5 rad m⁻¹. The coefficient of t is 60, so ω = 60 rad s⁻¹. The wave speed is given by v = ω/k. Substituting the values, v = 60/1.5 = 40 m s⁻¹.\n\nNow use the formula for the speed of a wave on a stretched string. The relation is v = √(T/μ), where T is the tension in the string and μ is the linear mass density. Squaring both sides gives v² = T/μ. Therefore, T = μv².\n\nThe linear density is μ = 3 × 10⁻⁴ kg m⁻¹. Substituting v = 40 m s⁻¹, we get T = 3 × 10⁻⁴ × 40². Since 40² = 1600, T = 3 × 10⁻⁴ × 1600 = 0.48 N. Therefore, the tension in the string is 0.48 N.",
      deep: "Let us understand the question from the beginning.\n\n1. Concept Introduction\nA transverse wave on a string is usually written in the form y = A sin(kx ± ωt). In this equation, A is the amplitude, k is the wave number, and ω is the angular frequency. The wave number k tells us how quickly the phase changes with position, while angular frequency ω tells us how quickly the phase changes with time.\n\nThe speed of the wave is given by v = ω/k. For a stretched string, the speed of transverse waves also depends on the tension and linear density. The formula is v = √(T/μ), where T is tension and μ is linear mass density. Rearranging this formula gives T = μv².\n\n2. Given Information\nThe wave equation is y = 0.2 sin(1.5x + 60t).\n\nThe linear density of the string is μ = 3 × 10⁻⁴ kg m⁻¹.\n\nThe coefficient of x is 1.5, so k = 1.5 rad m⁻¹.\n\nThe coefficient of t is 60, so ω = 60 rad s⁻¹.\n\nWe need to find the tension T in the string.\n\n3. Strategy / Approach\nFirst, we will compare the given wave equation with the standard wave equation to identify k and ω. Then we will calculate the wave speed using v = ω/k. After that, we will use the string wave speed formula v = √(T/μ) to find the tension.\n\n4. Step-by-Step Solution\nThe standard wave equation is:\n\ny = A sin(kx ± ωt).\n\nThe given equation is:\n\ny = 0.2 sin(1.5x + 60t).\n\nComparing the two equations, we identify:\n\nk = 1.5 rad m⁻¹,\n\nand\n\nω = 60 rad s⁻¹.\n\nThe speed of the wave is:\n\nv = ω/k.\n\nSubstitute the values:\n\nv = 60/1.5.\n\nNow calculate:\n\n60/1.5 = 40.\n\nSo:\n\nv = 40 m s⁻¹.\n\nFor a wave on a stretched string, the speed is:\n\nv = √(T/μ).\n\nNow square both sides:\n\nv² = T/μ.\n\nMultiply both sides by μ:\n\nT = μv².\n\nSubstitute μ = 3 × 10⁻⁴ kg m⁻¹ and v = 40 m s⁻¹:\n\nT = 3 × 10⁻⁴ × 40².\n\nCalculate the square:\n\n40² = 1600.\n\nSo:\n\nT = 3 × 10⁻⁴ × 1600.\n\nNow multiply:\n\nT = 0.48 N.\n\n5. Key Insight\nThe plus sign in sin(1.5x + 60t) only tells that the wave is travelling in the negative x-direction. It does not change the magnitude of the wave speed. For tension, we only need the speed magnitude.\n\n6. Final Answer\nTherefore, the correct answer is 0.48 N.\n\n7. Common Mistakes\nStudents often confuse angular frequency ω with ordinary frequency f.\n\nStudents may use v = k/ω instead of v = ω/k.\n\nStudents may forget to square the speed while using T = μv².\n\nStudents may think the amplitude 0.2 is needed, but amplitude does not affect the tension in this calculation."
    }
  }
];

export default bitsatWavesOnStringQuestions;