import { PYQQuestion } from "@/lib/types";

export const bitsatHydrocarbonsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-chemistry-hydrocarbons-001",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Most acidic hydrogen among different carbon hybridisations",
    year: 2017,
    questionText: "In the compound shown, the most acidic hydrogen atom is",
    options: ["Only I", "Only II", "Only III", "All are equally acidic"],
    correctAnswer: "Only III",
    explanation: {
      quick: "The most acidic hydrogen is usually attached to the carbon with maximum s-character.",
      standard: "Acidity of C–H bonds depends strongly on hybridisation. Greater s-character holds the negative charge better after loss of H⁺. The order is sp > sp² > sp³. Therefore, the hydrogen marked III is the most acidic.",
      deep: "Let us understand this step by step.\n\nThe acidity of hydrogen attached to carbon depends on how stable the conjugate base becomes after H⁺ is removed.\n\nA carbon with more s-character holds electrons closer to the nucleus. This stabilizes the negative charge better.\n\nThe s-character order is:\nsp = 50%\nsp² = 33%\nsp³ = 25%\n\nSo the acidity order of C–H bonds is:\nsp C–H > sp² C–H > sp³ C–H\n\nTherefore, the hydrogen attached to the carbon with highest s-character is most acidic.\n\nHence, the correct answer is Only III."
    }
  },
  {
    id: "bitsat-2017-chemistry-hydrocarbons-002",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Product type from reductive ozonolysis of a symmetrical alkene",
    year: 2017,
    questionText: "Reductive ozonolysis of (CH₃)₂C = C(CH₃)₂ followed by hydrolysis gives",
    options: [
      "only one type of ketone",
      "only one type of aldehyde",
      "two types of ketone",
      "two types of aldehyde"
    ],
    correctAnswer: "only one type of ketone",
    explanation: {
      quick: "The alkene is symmetrical, and each double-bond carbon has two methyl groups, so ozonolysis gives only acetone.",
      standard: "Reductive ozonolysis cleaves the C=C bond and converts each alkene carbon into a carbonyl compound. In (CH₃)₂C=C(CH₃)₂, both alkene carbons are identical and have no hydrogen. Therefore, both sides form the same ketone, acetone.",
      deep: "Let us solve this carefully.\n\nThe compound is:\n(CH₃)₂C = C(CH₃)₂\n\nThis is a symmetrical alkene.\n\nDuring reductive ozonolysis, the carbon-carbon double bond breaks. Each carbon of the double bond becomes a carbonyl carbon.\n\nNow check each double-bond carbon:\nEach carbon is attached to two methyl groups and no hydrogen.\n\nWhen an alkene carbon has no hydrogen, ozonolysis gives a ketone.\n\nSince both sides of the alkene are identical, both products are the same ketone.\n\nThe product is acetone, (CH₃)₂CO.\n\nTherefore, reductive ozonolysis gives only one type of ketone."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-003",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Alkyne Reactions",
    year: 2018,
    questionText: "Correct reagent sequence for given conversion is",
    options: [
      "O₃/Red, AlCl₃, MeCOOH",
      "H₂SO₄ + HgSO₄ / Heat",
      "O₃/Zn–AcOH, H₂SO₄ + HgSO₄",
      "CH₃COOH, H₂O₂/OH⁻"
    ],
    correctAnswer: "O₃/Zn–AcOH, H₂SO₄ + HgSO₄",
    explanation: {
      quick: "The sequence involves alkyne cleavage and hydration, so ozonolysis followed by Hg²⁺/acid hydration is required.",
      standard: "Alkynes undergo ozonolysis to cleave the triple bond, and hydration in the presence of H₂SO₄/HgSO₄ gives carbonyl products through enol-keto tautomerism. The reagent sequence matching this conversion is O₃/Zn–AcOH followed by H₂SO₄ + HgSO₄.",
      deep: "Let us understand the logic.\n\nAlkynes can undergo two important reactions here:\n\n1. Ozonolysis:\nThe triple bond is cleaved under ozonolysis conditions.\n\n2. Hydration using H₂SO₄ and HgSO₄:\nThis adds water across the triple bond. The initial enol formed is unstable and rearranges by keto-enol tautomerism to give a carbonyl compound.\n\nSo when the conversion requires both cleavage/oxidative transformation and hydration-type carbonyl formation, the correct reagent combination is O₃/Zn–AcOH followed by H₂SO₄ + HgSO₄.\n\nTherefore, the correct answer is O₃/Zn–AcOH, H₂SO₄ + HgSO₄."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-004",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Reaction Mechanism",
    year: 2018,
    questionText: "Identify product Z in reaction sequence",
    options: [
      "CH₃CH₂CH₂OH",
      "(CH₃)₂C=O",
      "CH₃–CH(OH)–CH₃",
      "None"
    ],
    correctAnswer: "CH₃–CH(OH)–CH₃",
    explanation: {
      quick: "The sequence finally gives isopropyl alcohol, CH₃–CH(OH)–CH₃.",
      standard: "The reaction sequence leads to formation of a secondary alcohol. Among the options, CH₃–CH(OH)–CH₃ is propan-2-ol/isopropyl alcohol, which matches product Z.",
      deep: "Let us identify the product logically.\n\nThe final product must be checked from the functional group and carbon skeleton.\n\nAmong the options:\n- CH₃CH₂CH₂OH is propan-1-ol, a primary alcohol.\n- (CH₃)₂C=O is acetone, a ketone.\n- CH₃–CH(OH)–CH₃ is propan-2-ol, a secondary alcohol.\n\nThe given reaction sequence forms a secondary alcohol structure.\n\nTherefore, product Z is CH₃–CH(OH)–CH₃."
    }
  },
  {
    id: "bitsat-2018-chemistry-organic-005",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Organic Chemistry",
    topic: "Tollens Test",
    year: 2018,
    questionText: "Incorrect statement regarding Tollens reaction",
    options: [
      "Equivalent weight is 22",
      "3 OH⁻ needed",
      "MeCHO acts as oxidising agent",
      "[Ag(NH₃)₂]+ gets reduced"
    ],
    correctAnswer: "MeCHO acts as oxidising agent",
    explanation: {
      quick: "In Tollens test, aldehyde acts as reducing agent, not oxidising agent.",
      standard: "Tollens reagent contains Ag⁺ complex, which gets reduced to metallic silver. The aldehyde is oxidised to carboxylate, so the aldehyde behaves as a reducing agent. Therefore, the statement that MeCHO acts as an oxidising agent is incorrect.",
      deep: "Let us understand Tollens reaction clearly.\n\nTollens reagent contains the silver complex [Ag(NH₃)₂]⁺.\n\nIn the test, aldehydes reduce Ag⁺ to metallic silver. This gives the silver mirror.\n\nAt the same time, the aldehyde itself gets oxidised to a carboxylate/carboxylic acid derivative.\n\nSo:\n- Ag⁺ is reduced.\n- Aldehyde is oxidised.\n- Therefore aldehyde acts as the reducing agent.\n\nMeCHO is acetaldehyde, an aldehyde.\n\nSo the statement 'MeCHO acts as oxidising agent' is incorrect.\n\nHence, that is the correct choice for the incorrect statement."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-006",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Terminal Alkyne",
    year: 2018,
    questionText: "An unsaturated hydrocarbon 'X' gives white precipitate with Tollen's reagent. If X is gaseous in nature, the molecular formula of X is",
    options: ["C3H6", "C2H4", "C2H2", "C4H8"],
    correctAnswer: "C2H2",
    explanation: {
      quick: "Terminal alkynes give white precipitate with ammoniacal silver nitrate/Tollens-type reagent. C₂H₂ is the suitable gaseous terminal alkyne.",
      standard: "Terminal alkynes contain acidic hydrogen attached to sp carbon. They react with ammoniacal silver ion to form silver acetylide precipitate. Among the options, C₂H₂ is ethyne, a gaseous terminal alkyne, so it gives the white precipitate.",
      deep: "Let us understand the test.\n\nTerminal alkynes have the group:\n–C≡C–H\n\nThe hydrogen attached to sp-hybridised carbon is acidic due to high s-character.\n\nTherefore, terminal alkynes react with ammoniacal silver ion to form silver acetylide, which appears as a precipitate.\n\nNow check the options:\nC₃H₆ and C₂H₄ are alkenes, not terminal alkynes.\nC₄H₈ also fits alkene/cycloalkane formula.\nC₂H₂ is ethyne, HC≡CH.\n\nEthyne is gaseous and has terminal acidic hydrogen.\n\nTherefore, the molecular formula of X is C₂H₂."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-007",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Conformational Analysis",
    year: 2018,
    questionText: "Which of the following is the correct order of stability of conformations for NH2–CH2–CH2–OH",
    options: [
      "gauche > eclipsed > anti",
      "gauche > anti > eclipsed",
      "eclipsed > gauche > anti",
      "anti > eclipsed > gauche"
    ],
    correctAnswer: "gauche > anti > eclipsed",
    explanation: {
      quick: "Gauche is most stable due to intramolecular hydrogen bonding; eclipsed is least stable due to torsional strain.",
      standard: "In NH₂–CH₂–CH₂–OH, the gauche conformation allows intramolecular hydrogen bonding between –NH₂ and –OH groups. This extra stabilization makes gauche more stable than anti. Eclipsed conformation has maximum torsional strain, so it is least stable.",
      deep: "Let us compare the conformations.\n\nNormally, anti conformation is often more stable than gauche because bulky groups are farther apart.\n\nBut this molecule has two groups capable of hydrogen bonding:\n- –NH₂\n- –OH\n\nIn the gauche conformation, these groups come close enough to form intramolecular hydrogen bonding.\n\nThis hydrogen bonding gives extra stability to the gauche form.\n\nThe anti form has less steric strain but does not get this hydrogen-bonding stabilization.\n\nThe eclipsed form has maximum torsional strain, so it is least stable.\n\nTherefore, the stability order is:\ngauche > anti > eclipsed."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-008",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Sulphide Precipitation",
    year: 2018,
    questionText: "When H2S gas is passed into a mixture of Mn2+, Ni2+, Cu2+ and Hg2+ ion in an acidified aqueous solution, the precipitates formed are",
    options: ["CuS and HgS", "MnS and CuS", "MnS and NiS", "NiS and HgS"],
    correctAnswer: "CuS and HgS",
    explanation: {
      quick: "In acidic medium, only very insoluble sulphides precipitate; CuS and HgS are precipitated.",
      standard: "In acidic medium, H₂S gives a very low concentration of S²⁻ ions. Only sulphides with extremely low solubility products precipitate under such conditions. CuS and HgS are highly insoluble, so they precipitate.",
      deep: "Let us understand the group separation idea.\n\nH₂S is a weak acid. In acidic solution, its ionisation is suppressed due to common ion effect from H⁺.\n\nSo the concentration of S²⁻ ions is very low.\n\nOnly metal ions whose sulphides have extremely small Ksp values will precipitate at such low S²⁻ concentration.\n\nCuS and HgS are very insoluble sulphides, so they precipitate even in acidic medium.\n\nMnS and NiS need comparatively higher S²⁻ concentration and do not precipitate under strongly acidic conditions.\n\nTherefore, the precipitates formed are CuS and HgS."
    }
  },
  {
    id: "bitsat-2018-chemistry-hydrocarbons-009",
    exam: "BITSAT",
    subject: "Chemistry",
    chapter: "Hydrocarbons",
    topic: "Water Gas Reaction",
    year: 2018,
    questionText: "Which of the following reactions increases the production of dihydrogen from synthesis gas?",
    options: [
      "CH4 + H2O → CO + 3H2",
      "C + H2O → CO + H2",
      "CO + H2O → CO2 + H2",
      "C2H6 + 2H2O → 2CO + 5H2"
    ],
    correctAnswer: "CO + H2O → CO2 + H2",
    explanation: {
      quick: "The water-gas shift reaction converts CO and steam into CO₂ and extra H₂.",
      standard: "Synthesis gas contains CO and H₂. To increase hydrogen production, CO is reacted with steam in the water-gas shift reaction: CO + H₂O → CO₂ + H₂. This increases the amount of dihydrogen.",
      deep: "Let us understand the process.\n\nSynthesis gas is mainly a mixture of CO and H₂.\n\nIf we want to increase hydrogen production from synthesis gas, we use the water-gas shift reaction.\n\nThe reaction is:\nCO + H₂O → CO₂ + H₂\n\nHere, carbon monoxide reacts with steam and produces additional hydrogen.\n\nThis is industrially important because it increases the hydrogen content of the gas mixture.\n\nTherefore, the correct answer is CO + H₂O → CO₂ + H₂."
    }
  }
];