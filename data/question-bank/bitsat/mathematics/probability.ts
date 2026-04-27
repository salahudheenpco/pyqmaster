import { PYQQuestion } from "@/lib/types";

export const bitsatProbabilityQuestions: PYQQuestion[] = [
  {
    id: "bitsat-2017-mathematics-probability-001",
    exam: "BITSAT",
    subject: "Mathematics",
    chapter: "Probability",
    topic: "Probability of getting at least four heads in seven tosses",
    year: 2017,
    questionText: "A coin is tossed 7 times. Each time a man calls head. The probability that he wins the toss at least four times is",
    options: [
      "7/8",
      "1/8",
      "1/2",
      "5/16"
    ],
    correctAnswer: "1/2",
    explanation: {
      quick: "Use the main concept from Probability of getting at least four heads in seven tosses and apply it directly. The correct answer is 1/2.",
      standard: "We solve this using the main idea from Probability of getting at least four heads in seven tosses. First identify what the question is asking, then use the correct rule, formula, or concept step by step. After substituting the given information carefully, we get the final answer as 1/2.",
      deep: "Let us understand the question from the beginning.\n\nThis question belongs to Mathematics, and the main concept involved is Probability of getting at least four heads in seven tosses.\n\nThe first step in such questions is to understand exactly what is given and what we need to find.\n\nHere, we should focus on the idea behind Probability of getting at least four heads in seven tosses and apply the correct rule or formula carefully.\n\nSo the correct method is:\n1. Identify the concept being tested.\n2. Write the correct rule, definition, or formula.\n3. Match the given values or facts with that rule.\n4. Solve step by step without skipping logic.\n\nWhen we do that carefully for this question, we get the correct answer as 1/2.\n\nExtra understanding:\nQuestions from Probability of getting at least four heads in seven tosses often become easy when you first identify the core idea before trying to calculate or compare options.\n\nCommon mistake:\nStudents often rush into the options or use the wrong formula/concept before understanding what the question is really asking.\n\nTherefore, the correct answer is 1/2."
    }
  }
{
  id: "bitsat-2018-math-probability-002",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Probability",
  topic: "Binomial Distribution",
  year: 2018,
  questionText: "Find binomial distribution given mean+variance=2.7",
  options: ["(0.2+0.8)^5","(0.3+0.7)^5","(0.4+0.6)^5","None"],
  correctAnswer: "(0.3+0.7)^5",
  explanation: {
    quick: "Mean=np, variance=npq.",
    standard: "Solve for p.",
    deep: "Let us understand the question from the beginning…\n\nGiven n=3\nnp + npq = 2.7\nSolve → p=0.3\n\nTherefore distribution is (0.3+0.7)^5."
  }
}
{
  id: "bitsat-2018-math-probability-003",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Probability",
  topic: "Independent Events",
  year: 2018,
  questionText: "If A and B are independent, P(A∩B)=1/6 and P(neither)=1/3, find P(A)",
  options: ["0 or 1","1/2 or 1/3","1/2 or 1/4","1/3 or 1/4"],
  correctAnswer: "1/2 or 1/3",
  explanation: {
    quick: "Use independence relations.",
    standard: "Form equations using P(A∩B)=P(A)P(B).",
    deep: "Let us understand the question from the beginning…\n\nGiven:\nP(A∩B)=P(A)P(B)=1/6\nP(neither)= (1−P(A))(1−P(B)) = 1/3\n\nSolve simultaneous equations → P(A)=1/2 or 1/3\n\nTherefore answer is 1/2 or 1/3."
  }
},
{
  id: "bitsat-2018-math-probability-004",
  exam: "BITSAT",
  subject: "Mathematics",
  chapter: "Probability",
  topic: "Bayes Theorem",
  year: 2018,
  questionText: "Find probability that student knows answer given correct answer",
  options: ["27/29","26/29","25/29","24/29"],
  correctAnswer: "26/29",
  explanation: {
    quick: "Apply Bayes theorem.",
    standard: "Compute P(correct) using total probability.",
    deep: "Let us understand the question from the beginning…\n\nEvents: Guess, Copy, Know\nUse total probability for correct answer\nApply Bayes theorem\n\nResult = 26/29\n\nTherefore answer is 26/29."
  }
}
];
