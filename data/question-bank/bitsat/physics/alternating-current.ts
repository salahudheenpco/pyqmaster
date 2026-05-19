import { PYQQuestion } from "@/lib/types";

export const bitsatAlternatingCurrentQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2018-physics-alternating-current-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Alternating Current",
    topic: "Series RLC Resonance",
    year: 2018,
    questionText:
      "A resistor R, an inductor L, a capacitor C and voltmeters V₁, V₂ and V₃ are connected to an oscillator in the circuit as shown in the adjoining diagram. When the frequency of the oscillation is increased, then at the resonant frequency, the voltmeter reading is zero in the case of",
    options: [
      "voltmeter V₁ only",
      "voltmeter V₂ only",
      "voltmeter V₃ only",
      "All the three voltmeters"
    ],
    correctAnswer: "voltmeter V₂ only",
    explanation: {
      quick:
        "At resonance in a series RLC circuit, XL = XC, so the net voltage across L and C together becomes zero.",
      standard:
        "At resonance, inductive reactance equals capacitive reactance. Therefore, the potential drops across L and C cancel each other because they are equal in magnitude and opposite in phase. So the voltmeter connected across the LC combination reads zero. That voltmeter is V₂.",
      deep:
        "Let us understand the question from the beginning.\n\nIn a series RLC circuit, the impedance is:\nZ = √[R² + (XL − XC)²]\n\nAt resonance:\nXL = XC\n\nSo the reactive part becomes zero. This does not mean the voltage across L alone or C alone is zero. Instead, the voltage across L and the voltage across C are equal in magnitude and opposite in phase.\n\nTherefore, when a voltmeter is connected across the combined LC part, the net voltage across that combination becomes zero.\n\nSo:\n- V₁ does not read zero\n- V₂ reads zero because it is across the LC combination\n- V₃ does not read zero because the source/resistor path still has voltage\n\nTherefore, the correct answer is voltmeter V₂ only."
    }
  }
];

export default bitsatAlternatingCurrentQuestions;