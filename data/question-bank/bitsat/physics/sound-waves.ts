import { PYQQuestion } from "@/lib/types";

export const bitsatSoundWavesQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-sound-waves-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Sound Waves",
    topic: "Doppler effect due to circular motion of source",
    year: 2017,
    questionText: "A whistle of frequency 500 Hz tied to the end of a string of length 1.2 m revolves at 400 rev min⁻¹. A listener standing some distance away in the plane of rotation of the whistle hears frequencies in the range. (Speed of sound = 340 m s⁻¹)",
    options: [
      "436 Hz to 574 Hz",
      "426 Hz to 586 Hz",
      "426 Hz to 574 Hz",
      "436 Hz to 586 Hz"
    ],
    correctAnswer: "436 Hz to 586 Hz",
    explanation: {
      quick: "Use Doppler effect with circular motion (max/min when approaching/receding).",
      standard: "Speed of source v = ωr = (400×2π/60)×1.2 ≈ 50 m/s. Using Doppler formula for max/min:\nνmax = ν(v/(v−vs)), νmin = ν(v/(v+vs)) → gives approx 436 Hz to 586 Hz.",
      deep: "Angular speed:\nω = (400 × 2π) / 60 ≈ 41.89 rad/s\n\nLinear speed:\nv_s = ωr = 41.89 × 1.2 ≈ 50 m/s\n\nFor approaching source:\nνmax = 500 × (340 / (340 − 50)) ≈ 586 Hz\n\nFor receding source:\nνmin = 500 × (340 / (340 + 50)) ≈ 436 Hz\n\nThus frequency range is 436 Hz to 586 Hz."
    }
  },

  // ✅ FIXED

  {
    id: "bitsat-2018-physics-sound-waves-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Waves",
    topic: "Doppler Effect",
    year: 2018,
    questionText: "A train moves towards a stationary observer with speed 34 m/s. Frequency observed is ν1. When speed reduces to 17 m/s, frequency becomes ν2. If speed of sound is 340 m/s, find ν1/ν2.",
    options: ["19/18", "18/19", "2", "1/2"],
    correctAnswer: "19/18",
    explanation: {
      quick: "Use ν' = ν(v/(v−vs)).",
      standard: "ν₁ = ν(340/(340−34)), ν₂ = ν(340/(340−17)). Taking ratio gives 19/18.",
      deep: "ν₁ = ν × (340/(340−34))\nν₂ = ν × (340/(340−17))\n\nν₁/ν₂ = (340−17)/(340−34)\n= 323/306 = 19/18\n\nTherefore answer is 19/18."
    }
  }
];