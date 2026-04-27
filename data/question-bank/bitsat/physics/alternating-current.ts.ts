import { PYQQuestion } from "@/lib/types";

export const bitsatalternatingcurrent: PYQQuestion[] = [
  {
  id: "bitsat-2018-physics-alternating-current-001",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Alternating Current",
  topic: "Series RLC Resonance",
  year: 2018,
  questionText: "A resistor R, an inductor L, a capacitor C and voltmeters V₁, V₂ and V₃ are connected to an oscillator in the circuit as shown in the adjoining diagram. When the frequency of the oscillation is increased, then at the resonant frequency, the voltmeter reading is zero in the case of",
  options: [
    "voltmeter V₁ only",
    "voltmeter V₂ only",
    "voltmeter V₃ only",
    "All the three voltmeters"
  ],
  correctAnswer: "voltmeter V₂ only",
  explanation: {
    quick: "At resonance in a series RLC circuit, Xₗ = Xc, so the net voltage across L and C together becomes zero.",
    standard: "At resonance, inductive reactance equals capacitive reactance. Therefore the potential drops across L and C cancel each other, so the voltmeter connected across the LC combination reads zero. That is V₂.",
    deep: "Let us understand the question from the beginning…\n\nIn a series RLC circuit, the impedance is:\nZ = √(R² + (Xₗ - Xc)²)\n\nAt resonance:\nXₗ = Xc\n\nSo the reactive part cancels completely.\nThat means the net voltage across the combined inductor-capacitor part is zero, because the voltage across L and the voltage across C are equal in magnitude and opposite in phase.\n\nNow examine the voltmeters:\n- V₁ is not across a zero-drop part\n- V₂ is across the part where L and C effects cancel\n- V₃ is across the whole circuit / source path, so it is not zero\n\nHence only V₂ reads zero at resonance.\n\nTherefore, the correct answer is voltmeter V₂ only."
  }
}
];
