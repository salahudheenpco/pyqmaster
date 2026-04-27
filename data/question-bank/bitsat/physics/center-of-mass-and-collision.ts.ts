import { PYQQuestion } from "@/lib/types";

export const bitsatcenterofmassandcollisionQuestions: PYQQuestion[] = [
  {
  id: "bitsat-2018-physics-center-of-mass-and-collision-001",
  exam: "BITSAT",
  subject: "Physics",
  chapter: "Center of Mass & Collisions",
  topic: "Conservation of Linear Momentum",
  year: 2018,
  questionText: "A trolley having mass of 200 kg moves with uniform speed of 36 km h⁻¹ on a frictionless track. A child of mass 20 kg runs on the trolley from one end to the other (10 m away) with a speed of 4 m s⁻¹ relative to the trolley in a direction opposite to its motion and ultimately jumps out of the trolley. With how much velocity has the trolley moved from the time the child begins to run?",
  options: ["10.36 m s⁻¹", "11.36 m s⁻¹", "12.36 m s⁻¹", "14.40 m s⁻¹"],
  correctAnswer: "10.36 m s⁻¹",
  explanation: {
    quick: "No external horizontal force acts, so linear momentum of child+trolley is conserved.",
    standard: "Initial speed is 36 km/h = 10 m/s. If trolley speed becomes V, the child’s speed is V - 4 because the child runs opposite to trolley motion relative to the trolley. Conserving momentum gives 220×10 = 200V + 20(V - 4), so V = 10.36 m/s.",
    deep: "Let us understand the question from the beginning…\n\nThe trolley and child form a system on a frictionless track. So there is no external horizontal force. That means horizontal momentum is conserved.\n\nInitial condition:\n- mass of trolley = 200 kg\n- mass of child = 20 kg\n- common initial speed = 36 km/h = 10 m/s\n\nSo initial momentum is:\nP_initial = (200 + 20) × 10 = 2200 kg·m/s\n\nNow the child runs opposite to the trolley’s direction with speed 4 m/s relative to the trolley.\nLet trolley speed become V.\nThen child’s speed relative to ground is:\nV - 4\n\nNow conserve horizontal momentum:\n2200 = 200V + 20(V - 4)\n2200 = 200V + 20V - 80\n2280 = 220V\nV = 2280/220\nV = 10.36 m/s\n\nTherefore, the correct answer is 10.36 m s⁻¹."
  }
}
];
