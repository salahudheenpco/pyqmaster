import type { PYQQuestion } from "@/lib/types";

// BITSAT
// Physics
import { bitsatCapacitanceQuestions } from "@/data/question-bank/bitsat/physics/capacitance";
import { bitsatCurrentElectricityQuestions } from "@/data/question-bank/bitsat/physics/current-electricity";
import { bitsatElectromagneticInductionQuestions } from "@/data/question-bank/bitsat/physics/electromagnetic-induction";
import { bitsatElectrostaticsQuestions } from "@/data/question-bank/bitsat/physics/electrostatics";
import { bitsatFrictionQuestions } from "@/data/question-bank/bitsat/physics/friction";
import { bitsatGravitationQuestions } from "@/data/question-bank/bitsat/physics/gravitation";
import { bitsatKinematicsQuestions } from "@/data/question-bank/bitsat/physics/kinematics";
import { bitsatKineticTheoryAndThermodynamicsQuestions } from "@/data/question-bank/bitsat/physics/kinetic-theory-and-thermodynamics";
import { bitsatMechanicalPropertiesOfFluidsQuestions } from "@/data/question-bank/bitsat/physics/mechanical-properties-of-fluids";
import { bitsatMechanicalPropertiesOfSolidsQuestions } from "@/data/question-bank/bitsat/physics/mechanical-properties-of-solids";
import { bitsatModernPhysicsQuestions } from "@/data/question-bank/bitsat/physics/modern-physics";
import { bitsatMovingChargesAndMagnetismQuestions } from "@/data/question-bank/bitsat/physics/moving-charges-and-magnetism";
import { bitsatProjectileMotionQuestions } from "@/data/question-bank/bitsat/physics/projectile-motion";
import { bitsatRayOpticsQuestions } from "@/data/question-bank/bitsat/physics/ray-optics";
import { bitsatRotationalMotionQuestions } from "@/data/question-bank/bitsat/physics/rotational-motion";
import { bitsatSemiconductorElectronicsQuestions } from "@/data/question-bank/bitsat/physics/semiconductor-electronics";
import { bitsatSimpleHarmonicMotionQuestions } from "@/data/question-bank/bitsat/physics/simple-harmonic-motion";
import { bitsatSoundWavesQuestions } from "@/data/question-bank/bitsat/physics/sound-waves";
import { bitsatThermalRadiationQuestions } from "@/data/question-bank/bitsat/physics/thermal-radiation";
import { bitsatWaveOpticsQuestions } from "@/data/question-bank/bitsat/physics/wave-optics";
import { bitsatWavesOnStringQuestions } from "@/data/question-bank/bitsat/physics/waves-on-string";

// Chemistry
import { bitsatAminesQuestions } from "@/data/question-bank/bitsat/chemistry/amines";
import { bitsatAromaticityQuestions } from "@/data/question-bank/bitsat/chemistry/aromaticity";
import { bitsatBiomoleculesQuestions } from "@/data/question-bank/bitsat/chemistry/biomolecules";
import { bitsatChemicalBondingQuestions } from "@/data/question-bank/bitsat/chemistry/chemical-bonding";
import { bitsatChemicalKineticsQuestions } from "@/data/question-bank/bitsat/chemistry/chemical-kinetics";
import { bitsatCoordinationCompoundsQuestions } from "@/data/question-bank/bitsat/chemistry/coordination-compounds";
import { bitsatDAndFBlockQuestions } from "@/data/question-bank/bitsat/chemistry/d-and-f-block";
import { bitsatElectrochemistryQuestions } from "@/data/question-bank/bitsat/chemistry/electrochemistry";
import { bitsatHaloalkanesAndHaloarenesQuestions } from "@/data/question-bank/bitsat/chemistry/haloalkanes-and-haloarenes";
import { bitsatHydrocarbonsQuestions } from "@/data/question-bank/bitsat/chemistry/hydrocarbons";
import { bitsatMetallurgyQuestions } from "@/data/question-bank/bitsat/chemistry/metallurgy";
import { bitsatMoleConceptStoichiometryQuestions } from "@/data/question-bank/bitsat/chemistry/mole-concept-stoichiometry";
import { bitsatPBlockQuestions } from "@/data/question-bank/bitsat/chemistry/p-block";
import { bitsatPhenolsQuestions } from "@/data/question-bank/bitsat/chemistry/phenols";
import { bitsatPolymersQuestions } from "@/data/question-bank/bitsat/chemistry/polymers";
import { bitsatRedoxReactionsQuestions } from "@/data/question-bank/bitsat/chemistry/redox-reactions";
import { bitsatSolidStateQuestions } from "@/data/question-bank/bitsat/chemistry/solid-state";
import { bitsatSolutionsQuestions } from "@/data/question-bank/bitsat/chemistry/solutions-and-solubility";
import { bitsatStatesOfMatterQuestions } from "@/data/question-bank/bitsat/chemistry/states-of-matter";
import { bitsatStructureOfAtomQuestions } from "@/data/question-bank/bitsat/chemistry/structure-of-atom";
import { bitsatThermodynamicsAndThermochemistryQuestions } from "@/data/question-bank/bitsat/chemistry/thermodynamics-and-thermochemistry";

// Mathematics
import { bitsatArithmeticProgressionQuestions } from "@/data/question-bank/bitsat/mathematics/arithmetic-progression";
import { bitsatBinomialTheoremQuestions } from "@/data/question-bank/bitsat/mathematics/binomial-theorem";
import { bitsatCircleQuestions } from "@/data/question-bank/bitsat/mathematics/circles";
import { bitsatComplexNumbersQuestions } from "@/data/question-bank/bitsat/mathematics/complex-numbers";
import { bitsatContinuityAndDifferentiabilityQuestions } from "@/data/question-bank/bitsat/mathematics/continuity-and-differentiability";
import { bitsatHyperbolaQuestions } from "@/data/question-bank/bitsat/mathematics/hyperbola";
import { bitsatLinearProgrammingQuestions } from "@/data/question-bank/bitsat/mathematics/linear-programming";
import { bitsatLogarithmsQuestions } from "@/data/question-bank/bitsat/mathematics/logarithms";
import { bitsatParabolaQuestions } from "@/data/question-bank/bitsat/mathematics/parabola";
import { bitsatPermutationsAndCountingQuestions } from "@/data/question-bank/bitsat/mathematics/permutations-and-counting";
import { bitsatProbabilityQuestions } from "@/data/question-bank/bitsat/mathematics/probability";
import { bitsatQuadraticEquationsQuestions } from "@/data/question-bank/bitsat/mathematics/quadratic-equations";
import { bitsatRelationsAndFunctionsQuestions } from "@/data/question-bank/bitsat/mathematics/relations-and-functions";
import { bitsatSequenceAndSeriesQuestions } from "@/data/question-bank/bitsat/mathematics/sequence-and-series";
import { bitsatStatisticsQuestions } from "@/data/question-bank/bitsat/mathematics/statistics";
import { bitsatStraightLinesQuestions } from "@/data/question-bank/bitsat/mathematics/straight-lines";
import { bitsatThreeDimensionalGeometryQuestions } from "@/data/question-bank/bitsat/mathematics/three-dimensional-geometry";
import { bitsatTrigonometricEquationsQuestions } from "@/data/question-bank/bitsat/mathematics/trigonometric-equations";

// JEE Mathematics
import jeeBinomialTheoremQuestions from "@/data/question-bank/jee/mathematics/binomial-theorem";
import jeeComplexNumbersQuestions from "@/data/question-bank/jee/mathematics/complex-numbers";
import jeeContinuityAndDifferentiabilityQuestions from "@/data/question-bank/jee/mathematics/continuity-and-differentiability";
import jeeParabolaQuestions from "@/data/question-bank/jee/mathematics/parabola";
import jeeDefiniteIntegralsQuestions from "@/data/question-bank/jee/mathematics/definite-integrals";
import jeeRelationsAndFunctionsQuestions from "@/data/question-bank/jee/mathematics/relations-and-functions";
import jeeSequencesAndSeriesQuestions from "@/data/question-bank/jee/mathematics/sequences-and-series";
import jeeVectorAlgebraQuestions from "@/data/question-bank/jee/mathematics/vector-algebra";
import jeeCircleQuestions from "@/data/question-bank/jee/mathematics/circle";
import jeeEllipseQuestions from "@/data/question-bank/jee/mathematics/ellipse";
import jeeHyperbolaQuestions from "@/data/question-bank/jee/mathematics/hyperbola";
import jeeQuadraticEquationsQuestions from "@/data/question-bank/jee/mathematics/quadratic-equations";
import jeeThreeDimensionalGeometryQuestions from "@/data/question-bank/jee/mathematics/three-dimensional-geometry";
import jeeStraightLinesQuestions from "@/data/question-bank/jee/mathematics/straight-lines";
import jeeTrigonometricFunctionsQuestions from "@/data/question-bank/jee/mathematics/trigonometric-functions";
import jeeInverseTrigonometricFunctionsQuestions from "@/data/question-bank/jee/mathematics/inverse-trigonometric-functions";
import jeeDifferentialEquationsQuestions from "@/data/question-bank/jee/mathematics/differential-equations";
import jeeProbabilityQuestions from "@/data/question-bank/jee/mathematics/probability";

// JEE Physics
import jeeElectrostaticsQuestions from "@/data/question-bank/jee/physics/electrostatics";
import jeeThermalPropertiesQuestions from "@/data/question-bank/jee/physics/thermal-properties";
import jeeDualNatureQuestions from "@/data/question-bank/jee/physics/dual-nature-of-radiation-and-matter";
import jeeCapacitanceQuestions from "@/data/question-bank/jee/physics/capacitance";
import jeeExperimentalPhysicsQuestions from "@/data/question-bank/jee/physics/experimental-physics";
import jeeWorkPowerEnergyQuestions from "@/data/question-bank/jee/physics/work-power-energy";
import jeeUnitsAndDimensionsQuestions from "@/data/question-bank/jee/physics/units-and-dimensions";
import jeeElectromagneticWavesQuestions from "@/data/question-bank/jee/physics/electromagnetic-waves";
import jeeRotationalMotionQuestions from "@/data/question-bank/jee/physics/rotational-motion";
import jeeMovingChargesAndMagnetismQuestions from "@/data/question-bank/jee/physics/moving-charges-and-magnetism";
import jeeFluidMechanicsQuestions from "@/data/question-bank/jee/physics/fluid-mechanics";
import jeeLawsOfMotionQuestions from "@/data/question-bank/jee/physics/laws-of-motion";
import jeeElectromagneticInductionQuestions from "@/data/question-bank/jee/physics/electromagnetic-induction";
import jeeWavesQuestions from "@/data/question-bank/jee/physics/waves";
import jeeGravitationQuestions from "@/data/question-bank/jee/physics/gravitation";
import jeeSemiconductorsQuestions from "@/data/question-bank/jee/physics/semiconductors";
import jeeWaveOpticsQuestions from "@/data/question-bank/jee/physics/wave-optics";
import jeeAtomicPhysicsQuestions from "@/data/question-bank/jee/physics/atomic-physics";

// JEE Chemistry
import jeeCoordinationCompoundsQuestions from "@/data/question-bank/jee/chemistry/coordination-compounds";
import jeeGeneralOrganicChemistryQuestions from "@/data/question-bank/jee/chemistry/general-organic-chemistry";
import jeeHydrocarbonsQuestions from "@/data/question-bank/jee/chemistry/hydrocarbons";
import jeeThermodynamicsQuestions from "@/data/question-bank/jee/chemistry/thermodynamics";
import jeePeriodicTableQuestions from "@/data/question-bank/jee/chemistry/periodic-table";
import jeeDAndFBlockQuestions from "@/data/question-bank/jee/chemistry/d-and-f-block";
import jeeOrganicAnalysisQuestions from "@/data/question-bank/jee/chemistry/organic-analysis";
import jeeIsomerismQuestions from "@/data/question-bank/jee/chemistry/isomerism";
import jeeSolutionsQuestions from "@/data/question-bank/jee/chemistry/solutions";
import jeeHaloalkanesAndHaloarenesQuestions from "@/data/question-bank/jee/chemistry/haloalkanes-and-haloarenes";
import jeeAminesQuestions from "@/data/question-bank/jee/chemistry/amines";
import jeeAtomicStructureQuestions from "@/data/question-bank/jee/chemistry/atomic-structure";
import jeePBlockQuestions from "@/data/question-bank/jee/chemistry/p-block";
import jeeMoleConceptAndStoichiometryQuestions from "@/data/question-bank/jee/chemistry/mole-concept-and-stoichiometry";
import jeeChemicalEquilibriumQuestions from "@/data/question-bank/jee/chemistry/chemical-equilibrium";
import jeeBiomoleculesQuestions from "@/data/question-bank/jee/chemistry/biomolecules";
import jeeAldehydesKetonesAndCarboxylicAcidsQuestions from "@/data/question-bank/jee/chemistry/aldehydes-ketones-and-carboxylic-acids";
import jeeChemicalBondingQuestions from "@/data/question-bank/jee/chemistry/chemical-bonding";

export const allQuestions: PYQQuestion[] = [
  // BITSAT Physics
  ...bitsatCapacitanceQuestions,
  ...bitsatCurrentElectricityQuestions,
  ...bitsatElectromagneticInductionQuestions,
  ...bitsatElectrostaticsQuestions,
  ...bitsatFrictionQuestions,
  ...bitsatGravitationQuestions,
  ...bitsatKinematicsQuestions,
  ...bitsatKineticTheoryAndThermodynamicsQuestions,
  ...bitsatMechanicalPropertiesOfFluidsQuestions,
  ...bitsatMechanicalPropertiesOfSolidsQuestions,
  ...bitsatModernPhysicsQuestions,
  ...bitsatMovingChargesAndMagnetismQuestions,
  ...bitsatProjectileMotionQuestions,
  ...bitsatRayOpticsQuestions,
  ...bitsatRotationalMotionQuestions,
  ...bitsatSemiconductorElectronicsQuestions,
  ...bitsatSimpleHarmonicMotionQuestions,
  ...bitsatSoundWavesQuestions,
  ...bitsatThermalRadiationQuestions,
  ...bitsatWaveOpticsQuestions,
  ...bitsatWavesOnStringQuestions,

  // BITSAT Chemistry
  ...bitsatAminesQuestions,
  ...bitsatAromaticityQuestions,
  ...bitsatBiomoleculesQuestions,
  ...bitsatChemicalBondingQuestions,
  ...bitsatChemicalKineticsQuestions,
  ...bitsatCoordinationCompoundsQuestions,
  ...bitsatDAndFBlockQuestions,
  ...bitsatElectrochemistryQuestions,
  ...bitsatHaloalkanesAndHaloarenesQuestions,
  ...bitsatHydrocarbonsQuestions,
  ...bitsatMetallurgyQuestions,
  ...bitsatMoleConceptStoichiometryQuestions,
  ...bitsatPBlockQuestions,
  ...bitsatPhenolsQuestions,
  ...bitsatPolymersQuestions,
  ...bitsatRedoxReactionsQuestions,
  ...bitsatSolidStateQuestions,
  ...bitsatSolutionsQuestions,
  ...bitsatStatesOfMatterQuestions,
  ...bitsatStructureOfAtomQuestions,
  ...bitsatThermodynamicsAndThermochemistryQuestions,

  // BITSAT Mathematics
  ...bitsatArithmeticProgressionQuestions,
  ...bitsatBinomialTheoremQuestions,
  ...bitsatCircleQuestions,
  ...bitsatComplexNumbersQuestions,
  ...bitsatContinuityAndDifferentiabilityQuestions,
  ...bitsatHyperbolaQuestions,
  ...bitsatLinearProgrammingQuestions,
  ...bitsatLogarithmsQuestions,
  ...bitsatParabolaQuestions,
  ...bitsatPermutationsAndCountingQuestions,
  ...bitsatProbabilityQuestions,
  ...bitsatQuadraticEquationsQuestions,
  ...bitsatRelationsAndFunctionsQuestions,
  ...bitsatSequenceAndSeriesQuestions,
  ...bitsatStatisticsQuestions,
  ...bitsatStraightLinesQuestions,
  ...bitsatThreeDimensionalGeometryQuestions,
  ...bitsatTrigonometricEquationsQuestions,

  // JEE Mathematics
  ...jeeBinomialTheoremQuestions,
  ...jeeComplexNumbersQuestions,
  ...jeeContinuityAndDifferentiabilityQuestions,
  ...jeeParabolaQuestions,
  ...jeeDefiniteIntegralsQuestions,
  ...jeeRelationsAndFunctionsQuestions,
  ...jeeSequencesAndSeriesQuestions,
  ...jeeVectorAlgebraQuestions,
  ...jeeCircleQuestions,
  ...jeeEllipseQuestions,
  ...jeeHyperbolaQuestions,
  ...jeeQuadraticEquationsQuestions,
  ...jeeThreeDimensionalGeometryQuestions,
  ...jeeStraightLinesQuestions,
  ...jeeTrigonometricFunctionsQuestions,
  ...jeeInverseTrigonometricFunctionsQuestions,
  ...jeeDifferentialEquationsQuestions,
  ...jeeProbabilityQuestions,

  // JEE Physics
  ...jeeElectrostaticsQuestions,
  ...jeeThermalPropertiesQuestions,
  ...jeeDualNatureQuestions,
  ...jeeCapacitanceQuestions,
  ...jeeExperimentalPhysicsQuestions,
  ...jeeWorkPowerEnergyQuestions,
  ...jeeUnitsAndDimensionsQuestions,
  ...jeeElectromagneticWavesQuestions,
  ...jeeRotationalMotionQuestions,
  ...jeeMovingChargesAndMagnetismQuestions,
  ...jeeFluidMechanicsQuestions,
  ...jeeLawsOfMotionQuestions,
  ...jeeElectromagneticInductionQuestions,
  ...jeeWavesQuestions,
  ...jeeGravitationQuestions,
  ...jeeSemiconductorsQuestions,
  ...jeeWaveOpticsQuestions,
  ...jeeAtomicPhysicsQuestions,

  // JEE Chemistry
  ...jeeCoordinationCompoundsQuestions,
  ...jeeGeneralOrganicChemistryQuestions,
  ...jeeHydrocarbonsQuestions,
  ...jeeThermodynamicsQuestions,
  ...jeePeriodicTableQuestions,
  ...jeeDAndFBlockQuestions,
  ...jeeOrganicAnalysisQuestions,
  ...jeeIsomerismQuestions,
  ...jeeSolutionsQuestions,
  ...jeeHaloalkanesAndHaloarenesQuestions,
  ...jeeAminesQuestions,
  ...jeeAtomicStructureQuestions,
  ...jeePBlockQuestions,
  ...jeeMoleConceptAndStoichiometryQuestions,
  ...jeeChemicalEquilibriumQuestions,
  ...jeeBiomoleculesQuestions,
  ...jeeAldehydesKetonesAndCarboxylicAcidsQuestions,
  ...jeeChemicalBondingQuestions,
];

export default allQuestions;