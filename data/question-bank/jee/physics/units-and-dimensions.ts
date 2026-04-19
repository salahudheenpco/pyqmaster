export const jeeUnitsAndDimensionsQuestions = [
  {
    id: "jee-2026-physics-units-and-dimensions-001",
    exam: "JEE Main",
    subject: "Physics",
    chapter: "Units and Dimensions",
    topic: "Dimensional analysis in modified Bernoulli equation",
    year: 2026,
    questionText:
      "Consider a modified Bernoulli equation: (P + Bt^2/A) + ρg(h + Bt) + (1/2)ρv^2 = constant. If t has the dimension of time, then the dimensions of A and B are respectively:",
    options: [
      "[M^0 L^0 T^-1] and [M^0 L^0 T^-2]",
      "[M^0 L^0 T^-2] and [M^0 L^0 T^-1]",
      "[M^0 L^0 T^-1] and [M^0 L^0 T^-1]",
      "[M^0 L^0 T^-2] and [M^0 L^0 T^-2]"
    ],
    correctAnswer: "[M^0 L^0 T^-2] and [M^0 L^0 T^-1]",
    explanation: {
      quick:
        "Every term in Bernoulli equation has dimensions of pressure: [M L^-1 T^-2]. From ρg(h + Bt), Bt must have dimensions of length, so [B] = [L]/[T] = [M^0L^1T^-1]. Then in Bt^2/A, this term must have pressure dimensions, so [B][T^2]/[A] = [M L^-1 T^-2]. Substituting [B] gives [A] = [M^-1 L^2 T^3]? However the source options indicate A and B as dimensionless-in-mass-and-length forms due to OCR corruption. Keep source-key pair as printed.",
      standard:
        "In a Bernoulli-type equation, each term must have the same dimensions as pressure:\n[P] = [M L^-1 T^-2]\n\nNow consider:\nρg(h + Bt)\nSince h is height, it has dimension [L].\nSo Bt must also have dimension [L].\nHence,\n[B] = [L T^-1]\n\nNow use the term:\nBt^2 / A\nThis must also have dimensions of pressure.\nSo,\n[B][T^2]/[A] = [M L^-1 T^-2]\n\nSubstituting [B] = [L T^-1], we can derive [A].\n\nAccuracy note: the visible source options are OCR-distorted. The source key corresponds to option B, so this file preserves that source option text.",
      deep:
        "Let us understand the question from the beginning.\n\nWe are given a modified Bernoulli equation:\n(P + Bt^2/A) + ρg(h + Bt) + (1/2)ρv^2 = constant\n\nIn any physically valid equation, all terms added together must have the same dimensions.\nHere the Bernoulli terms have dimensions of pressure.\n\nStep 1: Find dimensions of B from the term ρg(h + Bt)\n\nSince h is height, it has dimensions of length [L].\nSo Bt must also have dimensions [L].\n\nSince t has dimensions [T],\n[B] = [L]/[T] = [L T^-1]\n\nStep 2: Use the term Bt^2/A\n\nThis term is being added to pressure P, so it must also have dimensions of pressure:\n[M L^-1 T^-2]\n\nNow,\n[Bt^2/A] = [M L^-1 T^-2]\n\nSubstitute [B] = [L T^-1]:\n([L T^-1] [T^2]) / [A] = [M L^-1 T^-2]\n\nSo,\n[L T] / [A] = [M L^-1 T^-2]\n\nHence,\n[A] = [M^-1 L^2 T^3]\n\nAccuracy note:\nThe source's visible options are clearly OCR-corrupted and do not cleanly represent the true dimensional result. The paper key appears to align with one distorted option text. If you want strict scientific accuracy in your bank, replace the option text with the correct derived dimensions:\nA = [M^-1 L^2 T^3], B = [L T^-1].\n\nTherefore:\n- source-fidelity answer: preserve the marked option text\n- physics-accuracy answer: A = [M^-1 L^2 T^3], B = [L T^-1]"
    }
  }
];

export default jeeUnitsAndDimensionsQuestions;
