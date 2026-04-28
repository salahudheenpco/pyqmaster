import { PYQQuestion } from "@/lib/types";

export const bitsatModernPhysicsQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-physics-modern-physics-001",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "de Broglie wavelength of a proton",
    year: 2017,
    questionText: "The de-Broglie wavelength of a proton (charge = 1.6 × 10⁻¹⁹ C, mass = 1.6 × 10⁻²⁷ kg) accelerated through a potential difference of 1 kV is",
    options: ["600 Å", "0.9 × 10⁻¹² m", "7 Å", "0.9 nm"],
    correctAnswer: "0.9 × 10⁻¹² m",
    explanation: {
      quick: "Use λ = h / √(2mqV).",
      standard: "A proton accelerated through potential V gains kinetic energy qV. Then λ = h / √(2mqV). Substituting q = 1.6×10⁻¹⁹ C, m = 1.6×10⁻²⁷ kg and V = 1000 V gives approximately 0.9×10⁻¹² m.",
      deep: "The kinetic energy gained by a charged particle accelerated through potential difference V is:\n\nK = qV\n\nFor de Broglie wavelength:\nλ = h/p\n\nSince p = √(2mK),\nλ = h / √(2mqV)\n\nSubstituting the given values gives:\nλ ≈ 0.9 × 10⁻¹² m\n\nTherefore, the correct answer is 0.9 × 10⁻¹² m."
    }
  },
  {
    id: "bitsat-2017-physics-modern-physics-002",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Kinetic energy of electron in hydrogen first excited state",
    year: 2017,
    questionText: "The total energy of an electron in the first excited state of hydrogen is about -3.4 eV. Its kinetic energy in this state is",
    options: ["-3.4 eV", "-6.8 eV", "6.8 eV", "3.4 eV"],
    correctAnswer: "3.4 eV",
    explanation: {
      quick: "For a bound electron in Bohr orbit, kinetic energy = -total energy.",
      standard: "In a hydrogen atom, total energy E is negative and kinetic energy K = -E. Given E = -3.4 eV, K = 3.4 eV.",
      deep: "For an electron in a Bohr orbit:\n\nTotal energy, E = K + U\n\nAlso, for Coulombic circular motion:\nU = -2K\n\nSo:\nE = K - 2K = -K\n\nTherefore:\nK = -E\n\nGiven E = -3.4 eV,\nK = 3.4 eV\n\nTherefore, the correct answer is 3.4 eV."
    }
  },
  {
    id: "bitsat-2017-physics-modern-physics-003",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Half-life from activity measurements",
    year: 2017,
    questionText: "The activity of a radioactive sample is measured as N₀ counts per minute at t = 0 and N₀/e counts per minute at t = 5 min. The time (in minutes) at which the activity reduces to half its value is",
    options: ["(ln 5)/2", "(ln 2)/5", "5 log₁₀2", "5 ln 2"],
    correctAnswer: "5 ln 2",
    explanation: {
      quick: "N becomes N₀/e in 5 min, so decay constant λ = 1/5. Half-life = ln2/λ = 5ln2.",
      standard: "Activity follows A = A₀e⁻λᵗ. Given A = A₀/e at t = 5 min, so e⁻⁵λ = e⁻¹, giving λ = 1/5. Half-life = ln2/λ = 5ln2.",
      deep: "Radioactive activity follows:\n\nA = A₀e⁻λt\n\nGiven:\nA = A₀/e at t = 5 min\n\nSo:\nA₀/e = A₀e⁻⁵λ\n\nCancel A₀:\ne⁻¹ = e⁻⁵λ\n\nTherefore:\n5λ = 1\nλ = 1/5\n\nHalf-life is:\nT₁/₂ = ln2 / λ\n\nSo:\nT₁/₂ = ln2 / (1/5) = 5ln2\n\nTherefore, the correct answer is 5 ln 2."
    }
  },
  {
    id: "bitsat-2017-physics-modern-physics-004",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Hydrogen absorption followed by emission spectrum",
    year: 2017,
    questionText: "Monochromatic radiation of wavelength λ is incident on a hydrogen sample in ground state. Hydrogen atom absorbs a fraction of light and subsequently emits radiations of six different wavelengths. The wavelength λ is",
    options: ["97.5 nm", "121.6 nm", "110.3 nm", "45.2 nm"],
    correctAnswer: "97.5 nm",
    explanation: {
      quick: "Six emitted wavelengths mean excitation to n = 4.",
      standard: "Number of spectral lines emitted from level n is n(n−1)/2. Since 6 lines are emitted, n(n−1)/2 = 6, giving n = 4. So the absorbed photon excites hydrogen from n = 1 to n = 4, giving λ ≈ 97.5 nm.",
      deep: "When an atom is excited to level n, the maximum number of emitted spectral lines is:\n\nN = n(n − 1)/2\n\nGiven N = 6:\n\nn(n − 1)/2 = 6\nn(n − 1) = 12\nn = 4\n\nSo hydrogen absorbs radiation to go from ground state n = 1 to n = 4.\n\nUsing Rydberg formula:\n1/λ = R(1/1² − 1/4²)\n\n1/λ = R(1 − 1/16) = R(15/16)\n\nThis gives:\nλ ≈ 97.5 nm\n\nTherefore, the correct answer is 97.5 nm."
    }
  },
  {
    id: "bitsat-2017-physics-modern-physics-005",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Distance of closest approach of an alpha particle",
    year: 2017,
    questionText: "An α-particle after passing through a potential difference of V volt collides with a nucleus. If the atomic number of the nucleus is Z, then the distance of closest approach is",
    options: [
      "14.4 V / Z Å",
      "14.4 V / Z m",
      "14.4 / (VZ) m",
      "14.4 Z / V Å"
    ],
    correctAnswer: "14.4 Z / V Å",
    explanation: {
      quick: "At closest approach, kinetic energy converts into electrostatic potential energy.",
      standard: "For an alpha particle, charge = 2e. Kinetic energy after acceleration through V is 2eV. At closest approach, 2eV = k(2e)(Ze)/r. This gives r = 14.4Z/V Å.",
      deep: "At the closest approach, the alpha particle momentarily stops before being repelled back.\n\nSo its kinetic energy becomes electrostatic potential energy.\n\nCharge on alpha particle = 2e\nCharge on nucleus = Ze\n\nKinetic energy after acceleration through V:\nK = 2eV\n\nElectrostatic potential energy at closest approach:\nU = k(2e)(Ze)/r\n\nEquate:\n2eV = k(2Ze²)/r\n\nCancel 2e:\nV = kZe/r\n\nUsing the standard value k e² = 14.4 eV Å,\nwe get:\nr = 14.4Z/V Å\n\nTherefore, the correct answer is 14.4 Z / V Å."
    }
  },
  {
    id: "bitsat-2018-physics-modern-physics-006",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Bohr Model and Magnetic Moment",
    year: 2018,
    questionText: "The ratio of angular momentum L to the atomic dipole moment μₗ for hydrogen like atoms and ions is",
    options: [
      "always constant and is equal to the ratio of mass to the charge of electron",
      "always constant and is equal to twice the ratio of mass to the charge of electron to the principal quantum number n",
      "proportional to the principal quantum number n",
      "proportional to 1/n"
    ],
    correctAnswer: "always constant and is equal to the ratio of mass to the charge of electron",
    explanation: {
      quick: "For orbital motion, μₗ/L = e/2m, so the ratio is constant.",
      standard: "The orbital magnetic moment is proportional to angular momentum: μₗ = (e/2m)L. Therefore L/μₗ = 2m/e, independent of n.",
      deep: "An orbiting electron behaves like a current loop.\n\nFor orbital motion, magnetic moment and angular momentum are related by:\n\nμₗ = (e/2m)L\n\nRearranging:\nL/μₗ = 2m/e\n\nThis ratio depends only on electron mass and charge. It does not depend on the orbit number n.\n\nTherefore, the ratio is constant."
    }
  },
  {
    id: "bitsat-2018-physics-modern-physics-007",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Radioactive Decay",
    year: 2018,
    questionText: "Some amount of a radioactive substance (half-life = 10 days) is spread inside a room and consequently, the level of radiation becomes 50 times the permissible level for normal occupancy of the room. After how many days will the room be safe for occupation?",
    options: ["20 days", "34.8 days", "56.4 days", "62.9 days"],
    correctAnswer: "56.4 days",
    explanation: {
      quick: "Radiation must reduce by a factor of 50.",
      standard: "Use A = A₀(1/2)^(t/T₁/₂). Set A/A₀ = 1/50 and T₁/₂ = 10 days. Then t = 10 log₂50 ≈ 56.4 days.",
      deep: "Activity is proportional to radiation level.\n\nInitially, radiation level is 50 times the permissible level.\n\nFor safety, it must become 1/50 of its initial level.\n\nUse:\nA = A₀(1/2)^(t/T₁/₂)\n\nGiven:\nT₁/₂ = 10 days\nA/A₀ = 1/50\n\nSo:\n(1/2)^(t/10) = 1/50\n\nTaking logs:\nt/10 = log(50)/log(2)\n\nt ≈ 10 × 5.64 = 56.4 days\n\nTherefore, the room is safe after 56.4 days."
    }
  },
  {
    id: "bitsat-2018-physics-modern-physics-008",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Photoelectric Effect",
    year: 2018,
    questionText: "The frequency and the intensity of incident beam of light falling on the surface of a photoelectric material is increased by a factor of two. This will",
    options: [
      "increase the maximum kinetic energy of the ejected photoelectrons by a factor of more than two and would increase the photoelectric current by a factor of two.",
      "increase the maximum kinetic energy of the photo electron and would increase the photoelectric current both by a factor of two.",
      "increase the maximum kinetic energy of the photoelectron by a factor of two and will have no effect on the magnitude of the photoelectric current produced.",
      "not produce any effect on the kinetic energy of the emitted photoelectrons but will increase the photoelectric current by a factor of two."
    ],
    correctAnswer: "increase the maximum kinetic energy of the ejected photoelectrons by a factor of more than two and would increase the photoelectric current by a factor of two.",
    explanation: {
      quick: "Intensity controls current; frequency controls maximum kinetic energy.",
      standard: "Photoelectric current is proportional to intensity, so it doubles. KEmax = hν − φ. If frequency doubles, KE becomes 2hν − φ, which is more than twice the original hν − φ.",
      deep: "Photoelectric current depends on the number of emitted electrons per second.\n\nSo when intensity doubles, current doubles.\n\nMaximum kinetic energy follows Einstein’s equation:\n\nKEmax = hν − φ\n\nIf frequency becomes 2ν:\n\nKE'max = 2hν − φ\n\nTwice the original kinetic energy would be:\n\n2KEmax = 2(hν − φ) = 2hν − 2φ\n\nSince 2hν − φ is greater than 2hν − 2φ, the new kinetic energy is more than twice the original.\n\nTherefore, current doubles and maximum kinetic energy increases by more than two times."
    }
  },
  {
    id: "bitsat-2018-physics-modern-physics-009",
    exam: "BITSAT",
    subject: "Physics",
    chapter: "Modern Physics",
    topic: "Photoelectric Effect and de Broglie Wavelength",
    year: 2018,
    questionText: "When photon of energy 4.0 eV strikes the surface of a metal A, the ejected photoelectrons have maximum kinetic energy T_A eV and de-Broglie wavelength λ_A. The maximum kinetic energy of photoelectron liberated from another metal B by photon of energy 4.50 eV is T_B = (T_A - 1.50) eV. If the de-Broglie wavelength of these photoelectrons is λ_B = 2λ_A, then choose the correct statement(s).",
    options: [
      "The work function of A is 1.50 eV",
      "The work function of B is 4.0 eV",
      "T_A = 3.2 eV",
      "All of the above"
    ],
    correctAnswer: "The work function of B is 4.0 eV",
    explanation: {
      quick: "Use λ ∝ 1/√K and photoelectric equation.",
      standard: "λB = 2λA implies TB = TA/4. Also TB = TA − 1.50. Solving gives TA = 2.0 eV and TB = 0.5 eV. Thus φB = 4.50 − 0.50 = 4.0 eV.",
      deep: "For de Broglie wavelength:\n\nλ ∝ 1/√K\n\nGiven:\nλB = 2λA\n\nSo:\n2 = √(TA/TB)\n\nSquaring:\n4 = TA/TB\n\nTherefore:\nTB = TA/4\n\nAlso given:\nTB = TA − 1.50\n\nSo:\nTA/4 = TA − 1.50\n\nMultiply by 4:\nTA = 4TA − 6\n3TA = 6\nTA = 2.0 eV\n\nThen:\nTB = 0.5 eV\n\nNow use Einstein equation:\nKmax = photon energy − work function\n\nFor metal B:\nφB = 4.50 − 0.50 = 4.0 eV\n\nTherefore, the correct answer is The work function of B is 4.0 eV."
    }
  }
];