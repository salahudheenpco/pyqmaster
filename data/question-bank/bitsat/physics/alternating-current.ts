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
        "At resonance in a series RLC circuit, the inductive reactance and capacitive reactance become equal. Since XL = XC, the voltages across L and C are equal in magnitude but opposite in phase. So the net voltage across the combined LC part becomes zero. Hence the voltmeter across the LC combination, V₂, reads zero.",
      standard:
        "In a series RLC circuit, resonance occurs when inductive reactance equals capacitive reactance. That is, XL = XC, where XL = ωL and XC = 1/ωC. At this frequency, the voltage across the inductor leads the current by 90°, while the voltage across the capacitor lags the current by 90°. Therefore, these two voltages are 180° out of phase.\n\nAt resonance, their magnitudes are equal, so the net voltage across the combined LC section is zero. This does not mean that the individual voltages across L and C are zero. They may be large, but their phasor sum is zero.\n\nIn the given circuit, V₂ is connected across the LC combination. Therefore, at resonance, V₂ reads zero. Hence, the correct answer is voltmeter V₂ only.",
      deep:
        "Let us understand the question from the beginning.\n\nIn a series RLC circuit, the resistor, inductor, and capacitor are connected in series with an AC source. The resistor offers resistance R, the inductor offers inductive reactance XL, and the capacitor offers capacitive reactance XC.\n\nThe reactances are:\nXL = ωL\nXC = 1/ωC\n\nResonance occurs when:\nXL = XC\n\nAt this condition, the inductive and capacitive effects cancel each other in the overall circuit. However, we must be careful here. The voltage across the inductor alone is not zero, and the voltage across the capacitor alone is also not zero.\n\nFor the inductor:\nVL = IXL\n\nFor the capacitor:\nVC = IXC\n\nAt resonance, XL = XC. Therefore:\nVL = VC in magnitude.\n\nBut their phase relation is opposite. The voltage across an inductor leads the current by 90°, while the voltage across a capacitor lags the current by 90°. So the phase difference between VL and VC is 180°.\n\nTherefore, when a voltmeter is connected across the combined LC part, it measures the phasor sum of VL and VC. Since they are equal in magnitude and opposite in phase, their resultant is zero.\n\nSo the voltmeter connected across the LC combination reads zero. In the given circuit, that voltmeter is V₂.\n\nHence:\n- V₁ does not read zero.\n- V₂ reads zero.\n- V₃ does not read zero.\n\nTherefore, the correct answer is voltmeter V₂ only.\n\nCommon mistake: Students often think that resonance means the voltages across L and C individually become zero. That is wrong. Their individual voltages can be large, but their combined voltage becomes zero because they cancel each other as phasors."
    }
  }
];

export default bitsatAlternatingCurrentQuestions;