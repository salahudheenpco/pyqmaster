import { PYQQuestion } from "@/lib/types";

export const bitsatDAndFBlockQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-d-and-f-block-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "d-and-f Block",
    topic: "Maximum magnetic moment among metal ions",
    year: 2017,
    questionText: "Which of the following shows maximum magnetic moment?",
    options: ["Mg²⁺", "Ti³⁺", "V³⁺", "Fe²⁺"],
    correctAnswer: "Fe²⁺",
    explanation: {
      quick: "Magnetic moment depends on the number of unpaired electrons. Fe²⁺ has the maximum unpaired electrons among the given ions.",
      standard: "Mg²⁺ has no unpaired electrons, Ti³⁺ has one unpaired electron, V³⁺ has two unpaired electrons, and Fe²⁺ has four unpaired electrons. More unpaired electrons means higher magnetic moment. Therefore, Fe²⁺ has the maximum magnetic moment.",
      deep: "Let us solve this step by step.\n\nMagnetic moment mainly depends on the number of unpaired electrons.\n\nThe spin-only magnetic moment is given by:\nμ = √[n(n + 2)] BM\n\nwhere n is the number of unpaired electrons.\n\nNow check each ion:\n\nMg²⁺:\nMagnesium has configuration [Ne]3s². Mg²⁺ loses two electrons and becomes [Ne]. So it has 0 unpaired electrons.\n\nTi³⁺:\nTitanium is [Ar]3d²4s². Ti³⁺ becomes 3d¹. So it has 1 unpaired electron.\n\nV³⁺:\nVanadium is [Ar]3d³4s². V³⁺ becomes 3d². So it has 2 unpaired electrons.\n\nFe²⁺:\nIron is [Ar]3d⁶4s². Fe²⁺ becomes 3d⁶. In the free ion/high-spin case, it has 4 unpaired electrons.\n\nSince Fe²⁺ has the maximum number of unpaired electrons, it has the maximum magnetic moment.\n\nTherefore, the correct answer is Fe²⁺."
    }
  },
  {
    id: "bitsat-2018-chemistry-df-block-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "d and f Block",
    topic: "Actinoids",
    year: 2018,
    questionText: "Which actinoid does not have stable electronic configuration?",
    options: ["Protactinium", "Nobelium", "Americium", "Lawrencium"],
    correctAnswer: "Protactinium",
    explanation: {
      quick: "Protactinium does not have the comparatively stable half-filled or fully-filled f-subshell arrangement seen in some other actinoids.",
      standard: "Stable electronic configurations are usually associated with half-filled or fully-filled subshells. Among the given actinoids, Protactinium does not get such extra stability, while elements like Americium and Nobelium are comparatively stabilized due to favourable f-electron arrangements.",
      deep: "Let us understand the idea behind this question.\n\nIn f-block elements, electronic configuration becomes important because half-filled and fully-filled f-subshells provide extra stability.\n\nFor actinoids, the 5f orbitals are filled gradually. Some actinoids get relatively stable configurations due to half-filled or fully-filled arrangements.\n\nFor example:\n- Americium is associated with a stable 5f⁷ arrangement.\n- Nobelium is associated with a stable 5f¹⁴ arrangement.\n\nThese configurations are more stable because half-filled and fully-filled subshells have symmetrical distribution and exchange energy stabilization.\n\nProtactinium does not have such a stable half-filled or fully-filled f-subshell configuration.\n\nTherefore, among the given options, Protactinium is the actinoid that does not have a stable electronic configuration.\n\nHence, the correct answer is Protactinium."
    }
  }
];