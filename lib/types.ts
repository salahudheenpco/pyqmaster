export type ExplanationDepth = "quick" | "standard" | "deep";

export type QuestionOption = {
  id: string;
  text: string;
};

export type QuestionExplanation =
  | string
  | {
      quick?: string;
      standard?: string;
      deep?: string;
    };

export type PYQQuestion = {
  id: string;
  exam: string;
  subject: string;
  chapter: string;
  topic?: string;
  year: number;
  questionText: string;
  options: Array<QuestionOption | string>;
  correctAnswer: string;
  explanation: QuestionExplanation;
  difficulty?: string;
  paper?: string;
  tags?: string[];
};