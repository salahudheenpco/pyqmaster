import { PYQQuestion } from "@/lib/types";

export const bitsatCoordinationCompoundsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-coordination-compounds-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    topic: "Identification of a diamagnetic complex",
    year: 2017,
    questionText: "Which of the following is a diamagnetic complex?",
    options: [
      "[Co(NH₃)₆]³⁺",
      "[NiCl₄]²⁻",
      "[CuCl₄]²⁻",
      "[Fe(H₂O)₆]³⁺"
    ],
    correctAnswer: "[Co(NH₃)₆]³⁺",
    explanation: {
      quick: "The complex [Co(NH₃)₆]³⁺ is diamagnetic because Co³⁺ forms a low-spin inner orbital complex with no unpaired electrons.",
      standard: "In [Co(NH₃)₆]³⁺, cobalt is in the +3 oxidation state. Co³⁺ has a d⁶ configuration. Since NH₃ is a sufficiently strong ligand for Co³⁺, the electrons pair up in the lower d-orbitals, giving a low-spin octahedral complex. As there are no unpaired electrons, the complex is diamagnetic.",
      deep: "Let us solve this step by step.\n\nA complex is diamagnetic when it has no unpaired electrons.\n\nFor [Co(NH₃)₆]³⁺:\nNH₃ is neutral, so the oxidation state of Co is +3.\n\nCobalt has atomic number 27, so Co has configuration [Ar] 3d⁷ 4s².\nCo³⁺ loses two 4s electrons and one 3d electron, giving 3d⁶.\n\nNow the ligand is NH₃. In the case of Co³⁺, NH₃ causes pairing of electrons and forms a low-spin octahedral complex.\n\nSo the six d-electrons pair up in the lower energy orbitals, leaving no unpaired electrons.\n\nNo unpaired electrons means the complex is diamagnetic.\n\nTherefore, the correct answer is [Co(NH₃)₆]³⁺."
    }
  },
  {
    id: "bitsat-2017-chemistry-coordination-compounds-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    topic: "Hybridisation of K₃[Fe(CN)₆]",
    year: 2017,
    questionText: "The hybridisation of Fe in K₃[Fe(CN)₆] is",
    options: ["sp³", "dsp³", "sp³d²", "d²sp³"],
    correctAnswer: "d²sp³",
    explanation: {
      quick: "In K₃[Fe(CN)₆], Fe is +3 and CN⁻ is a strong field ligand, so it forms an inner orbital octahedral complex with d²sp³ hybridisation.",
      standard: "In K₃[Fe(CN)₆], the complex ion is [Fe(CN)₆]³⁻. Fe is in the +3 oxidation state, giving Fe³⁺ as d⁵. CN⁻ is a strong field ligand, so it pairs electrons and uses inner d-orbitals. Since the coordination number is 6, the geometry is octahedral and the hybridisation is d²sp³.",
      deep: "Let us understand this carefully.\n\nThe compound is K₃[Fe(CN)₆]. The coordination entity is [Fe(CN)₆]³⁻.\n\nFirst find oxidation state of Fe:\nLet oxidation state of Fe be x.\nCN⁻ has charge -1, and there are 6 CN⁻ ligands.\n\nx + 6(-1) = -3\nx - 6 = -3\nx = +3\n\nSo the metal ion is Fe³⁺.\n\nIron has atomic number 26.\nFe = [Ar] 3d⁶ 4s²\nFe³⁺ = [Ar] 3d⁵\n\nNow CN⁻ is a strong field ligand. Strong field ligands cause pairing of d-electrons.\n\nSince there are 6 ligands, the coordination number is 6, so the complex is octahedral.\n\nFor a strong field octahedral complex, inner d-orbitals are used, giving d²sp³ hybridisation.\n\nTherefore, the hybridisation of Fe in K₃[Fe(CN)₆] is d²sp³."
    }
  },
  {
    id: "bitsat-2018-chemistry-coordination-compounds-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Coordination Compounds",
    topic: "Spectrochemical Series",
    year: 2018,
    questionText: "Correct wavelength order for absorption is",
    options: [
      "[Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺",
      "[Ni(NO₂)₆]⁴⁻ < [Ni(H₂O)₆]²⁺ < [Ni(NH₃)₆]²⁺",
      "[Ni(H₂O)₆]²⁺ < [Ni(NH₃)₆]²⁺ < [Ni(NO₂)₆]⁴⁻",
      "[Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺ < [Ni(NO₂)₆]⁴⁻"
    ],
    correctAnswer: "[Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺",
    explanation: {
      quick: "Stronger ligands create larger splitting, so they absorb shorter wavelength light. The ligand strength order is NO₂⁻ > NH₃ > H₂O.",
      standard: "In octahedral complexes, the energy absorbed depends on crystal field splitting Δ. Stronger ligands produce larger Δ. Since energy is inversely proportional to wavelength, higher Δ means lower wavelength. The ligand strength order is NO₂⁻ > NH₃ > H₂O, so the wavelength order is [Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺.",
      deep: "Let us understand the question from the beginning.\n\nIn coordination compounds, colour appears because electrons absorb energy and jump between split d-orbitals.\n\nThe energy gap between these split d-orbitals is called crystal field splitting energy, represented by Δ.\n\nA stronger ligand causes greater splitting. According to the spectrochemical series, the ligand strength is:\nNO₂⁻ > NH₃ > H₂O\n\nSo the splitting energy order is:\n[Ni(NO₂)₆]⁴⁻ > [Ni(NH₃)₆]²⁺ > [Ni(H₂O)₆]²⁺\n\nNow remember the relation:\nEnergy is inversely proportional to wavelength.\n\nE = hc/λ\n\nSo if Δ is larger, the absorbed wavelength is smaller.\n\nTherefore, the wavelength order will be the reverse of energy splitting:\n[Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺\n\nHence, the correct answer is [Ni(NO₂)₆]⁴⁻ < [Ni(NH₃)₆]²⁺ < [Ni(H₂O)₆]²⁺."
    }
  }
];