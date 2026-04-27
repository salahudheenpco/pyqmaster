import { PYQQuestion } from "@/lib/types";

export const bitsatSolidStateQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-solid-state-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Solid State",
    topic: "Type of solid with highest melting point",
    year: 2017,
    questionText: "Among the following, which has the highest melting point?",
    options: [
      "Ionic solids",
      "Pseudo solids",
      "Molecular solids",
      "Amorphous solids"
    ],
    correctAnswer: "Ionic solids",
    explanation: {
      quick: "Ionic solids generally have high melting points because strong electrostatic forces hold the ions together.",
      standard: "Ionic solids are made of oppositely charged ions held by strong electrostatic attraction. A large amount of energy is required to overcome these forces, so their melting points are generally higher than molecular, amorphous, or pseudo solids.",
      deep: "Let us understand the question from the beginning.\n\nThe question asks which type of solid has the highest melting point.\n\nIn ionic solids, positive and negative ions are arranged in a regular crystal lattice. These ions are held together by strong electrostatic forces of attraction.\n\nTo melt an ionic solid, these strong forces must be overcome. This requires a large amount of heat energy.\n\nMolecular solids are held by weaker intermolecular forces such as van der Waals forces or hydrogen bonding. Amorphous solids and pseudo solids do not have the same strong ionic lattice structure.\n\nTherefore, ionic solids usually have the highest melting points among the given options.\n\nHence, the correct answer is Ionic solids."
    }
  },
  {
    id: "bitsat-2018-chemistry-solid-state-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Solid State",
    topic: "Number of Unit Cells",
    year: 2018,
    questionText: "A metallic element has a cubic lattice. Each edge of the unit cell is 2 Å and the density of metal is 25 g cm⁻³. The unit cells in 200 g of metal are",
    options: ["1 × 10^24", "1 × 10^22", "1 × 10^20", "1 × 10^25"],
    correctAnswer: "1 × 10^24",
    explanation: {
      quick: "Find the mass of one unit cell using density × volume, then divide the total mass by mass of one unit cell.",
      standard: "Edge length = 2 Å = 2 × 10⁻⁸ cm. Volume of one cubic unit cell = a³ = (2 × 10⁻⁸)³ = 8 × 10⁻²⁴ cm³. Mass of one unit cell = density × volume = 25 × 8 × 10⁻²⁴ = 2 × 10⁻²² g. Number of unit cells in 200 g = 200 / (2 × 10⁻²²) = 1 × 10²⁴.",
      deep: "Let us solve this step by step.\n\nThe question gives:\n- Edge length of unit cell = 2 Å\n- Density = 25 g cm⁻³\n- Total mass of metal = 200 g\n\nWe need to find the number of unit cells in 200 g of metal.\n\nFirst convert the edge length into centimetres because density is given in g cm⁻³.\n\n1 Å = 10⁻⁸ cm\nSo, 2 Å = 2 × 10⁻⁸ cm\n\nFor a cubic unit cell:\nVolume = a³\n\nSo,\nVolume = (2 × 10⁻⁸)³\n= 8 × 10⁻²⁴ cm³\n\nNow use:\nMass = density × volume\n\nMass of one unit cell = 25 × 8 × 10⁻²⁴\n= 200 × 10⁻²⁴\n= 2 × 10⁻²² g\n\nNow number of unit cells:\nNumber = total mass / mass of one unit cell\n\nNumber = 200 / (2 × 10⁻²²)\n= 100 × 10²²\n= 1 × 10²⁴\n\nTherefore, the number of unit cells is 1 × 10²⁴.\n\nHence, the correct answer is 1 × 10^24."
    }
  }
];