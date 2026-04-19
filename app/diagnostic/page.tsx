"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  diagnosticQuestions,
  type DiagnosticQuestion,
  type DiagnosticSubject,
} from "@/lib/diagnosticQuestions";

const subjectOrder: DiagnosticSubject[] = [
  "Physics",
  "Chemistry",
  "Mathematics",
];

type AnswerMap = Record<string, string>;

function getLevelText(score: number, total: number) {
  const ratio = score / total;

  if (ratio < 0.4) {
    return {
      title: "Foundation Stage",
      description:
        "Your basics need rebuilding before you move into heavier mixed practice.",
    };
  }

  if (ratio < 0.75) {
    return {
      title: "Developing Stage",
      description:
        "You have some working understanding, but there are still important gaps to fix.",
    };
  }

  return {
    title: "Strong Stage",
    description:
      "You are in a good position to move into harder sets, timed practice, and mixed revision.",
  };
}

export default function DiagnosticPage() {
  const [targetExam, setTargetExam] = useState("BITSAT");
  const [answers, setAnswers] = useState<AnswerMap>({});
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const resultRef = useRef<HTMLElement | null>(null);

  const groupedQuestions = useMemo(() => {
    return subjectOrder.map((subject) => {
      return {
        subject,
        questions: diagnosticQuestions.filter((q) => q.subject === subject),
      };
    });
  }, []);

  const totalAnswered = Object.keys(answers).length;
  const totalQuestions = diagnosticQuestions.length;

  const results = useMemo(() => {
    const totalCorrect = diagnosticQuestions.filter(
      (q) => answers[q.id] === q.correctAnswer
    ).length;

    const subjectStats = subjectOrder.map((subject) => {
      const subjectQuestions = diagnosticQuestions.filter(
        (q) => q.subject === subject
      );

      const correct = subjectQuestions.filter(
        (q) => answers[q.id] === q.correctAnswer
      ).length;

      const total = subjectQuestions.length;
      const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

      return {
        subject,
        correct,
        total,
        percentage,
      };
    });

    const strongestSubject = [...subjectStats].sort(
      (a, b) => b.percentage - a.percentage
    )[0];

    const weakestSubject = [...subjectStats].sort(
      (a, b) => a.percentage - b.percentage
    )[0];

    const wrongQuestions = diagnosticQuestions.filter(
      (q) => answers[q.id] && answers[q.id] !== q.correctAnswer
    );

    const weakestChapters = Array.from(
      new Set(
        wrongQuestions
          .filter((q) => q.subject === weakestSubject.subject)
          .map((q) => q.chapter)
      )
    ).slice(0, 3);

    const level = getLevelText(totalCorrect, diagnosticQuestions.length);

    let nextStep = "";
    let recommendation = "";

    if (totalCorrect <= 3) {
      nextStep =
        "Start with chapter-wise fundamentals and deep explanations before attempting harder mixed practice.";
      recommendation =
        "Your first priority should be basics, formula recall, and easy-to-medium PYQs in your weakest subject.";
    } else if (totalCorrect <= 6) {
      nextStep =
        "Use chapter-wise PYQs, standard explanations, and regular revision to close your gaps.";
      recommendation =
        "You are not starting from zero, but you still need targeted fixing in weaker chapters.";
    } else {
      nextStep =
        "Move into timed sets, mixed practice, and error-analysis-based revision.";
      recommendation =
        "Your base is reasonably good. Now focus on speed, consistency, and reducing mistakes.";
    }

    return {
      totalCorrect,
      accuracy: Math.round((totalCorrect / diagnosticQuestions.length) * 100),
      subjectStats,
      strongestSubject,
      weakestSubject,
      weakestChapters,
      level,
      nextStep,
      recommendation,
    };
  }, [answers]);

  function handleAnswerSelect(questionId: string, optionId: string) {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: optionId,
    }));

    if (error) {
      setError("");
    }
  }

  function handleSubmit() {
    if (totalAnswered < totalQuestions) {
      setError("Please answer all questions before submitting the diagnostic.");
      return;
    }

    setSubmitted(true);
    setError("");

    setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function handleReset() {
    setAnswers({});
    setSubmitted(false);
    setError("");
    setTargetExam("BITSAT");
  }

  function getOptionClass(question: DiagnosticQuestion, optionId: string) {
    const selected = answers[question.id];
    const isSelected = selected === optionId;

    if (!submitted) {
      return isSelected
        ? "border-cyan-400/30 bg-cyan-400 text-slate-950"
        : "border-white/10 bg-slate-900/80 text-white hover:bg-slate-900";
    }

    if (optionId === question.correctAnswer) {
      return "border-emerald-400/30 bg-emerald-400/15 text-emerald-200";
    }

    if (isSelected && optionId !== question.correctAnswer) {
      return "border-rose-400/30 bg-rose-400/15 text-rose-200";
    }

    return "border-white/10 bg-slate-900/80 text-white";
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Proper Diagnostic
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Take a real diagnostic, not just a form
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            This diagnostic uses actual PCM questions to estimate your current
            level, strongest subject, weakest subject, and the chapters that
            need more work.
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Target Exam</div>
            <select
              value={targetExam}
              onChange={(e) => setTargetExam(e.target.value)}
              className="mt-3 w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
            >
              <option className="bg-slate-900">BITSAT</option>
              <option className="bg-slate-900">JEE Main</option>
              <option className="bg-slate-900">JEE Advanced</option>
            </select>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Total Questions</div>
            <div className="mt-2 text-3xl font-bold">{totalQuestions}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Answered</div>
            <div className="mt-2 text-3xl font-bold">{totalAnswered}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Coverage</div>
            <div className="mt-2 text-3xl font-bold">
              {Math.round((totalAnswered / totalQuestions) * 100)}%
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            How this works
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="text-lg font-semibold">1. Answer real questions</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The diagnostic checks actual question-solving ability, not just
                self-reported confidence.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="text-lg font-semibold">2. Get subject-wise score</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                You will see which subject is strongest and which one needs
                immediate attention.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
              <div className="text-lg font-semibold">3. Get next-step plan</div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                The result recommends whether you should begin with basics,
                chapter-wise practice, or timed mixed sets.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 space-y-8">
          {groupedQuestions.map((group) => (
            <div
              key={group.subject}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
                {group.subject}
              </div>

              <div className="mt-6 space-y-6">
                {group.questions.map((question, index) => (
                  <div
                    key={question.id}
                    className="rounded-3xl border border-white/10 bg-slate-900/70 p-6"
                  >
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        Q{index + 1}
                      </span>
                      <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                        {question.chapter}
                      </span>
                      <span className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-300">
                        {question.concept}
                      </span>
                    </div>

                    <div className="mt-4 text-lg font-semibold leading-8">
                      {question.questionText}
                    </div>

                    <div className="mt-5 grid gap-3">
                      {question.options.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() =>
                            handleAnswerSelect(question.id, option.id)
                          }
                          className={`rounded-2xl border px-4 py-4 text-left transition ${getOptionClass(
                            question,
                            option.id
                          )}`}
                        >
                          <span className="font-semibold">{option.id}.</span>{" "}
                          {option.text}
                        </button>
                      ))}
                    </div>

                    {submitted && (
                      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4">
                        <div
                          className={`text-sm font-medium ${
                            answers[question.id] === question.correctAnswer
                              ? "text-emerald-300"
                              : "text-rose-300"
                          }`}
                        >
                          {answers[question.id] === question.correctAnswer
                            ? "Correct."
                            : `Incorrect. Correct answer: ${question.correctAnswer}.`}
                        </div>

                        <div className="mt-3 text-sm leading-7 text-slate-300">
                          {question.solution}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={handleSubmit}
              className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Submit Diagnostic
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Reset Diagnostic
            </button>

            <Link
              href="/"
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Return Home
            </Link>
          </div>

          {error && (
            <div className="mt-5 rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-300">
              {error}
            </div>
          )}
        </section>

        {submitted && (
          <section
            ref={resultRef}
            className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
          >
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Diagnostic Result
            </div>

            <h2 className="mt-3 text-3xl font-bold">{results.level.title}</h2>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              {results.level.description}
            </p>

            <div className="mt-8 grid gap-4 md:grid-cols-4">
              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Score</div>
                <div className="mt-2 text-3xl font-bold">
                  {results.totalCorrect}/{totalQuestions}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Accuracy</div>
                <div className="mt-2 text-3xl font-bold">
                  {results.accuracy}%
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Strongest Subject</div>
                <div className="mt-2 text-2xl font-bold">
                  {results.strongestSubject.subject}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">Weakest Subject</div>
                <div className="mt-2 text-2xl font-bold">
                  {results.weakestSubject.subject}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Subject-wise performance
                </div>

                <div className="mt-5 space-y-4">
                  {results.subjectStats.map((item) => (
                    <div key={item.subject}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="font-medium text-white">
                          {item.subject}
                        </span>
                        <span className="text-slate-400">
                          {item.correct}/{item.total} • {item.percentage}%
                        </span>
                      </div>

                      <div className="h-3 rounded-full bg-white/10">
                        <div
                          className="h-3 rounded-full bg-cyan-400"
                          style={{ width: `${item.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-6">
                <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Recommended next move
                </div>

                <p className="mt-4 leading-7 text-slate-300">
                  {results.recommendation}
                </p>

                <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-300">
                  {results.nextStep}
                </div>

                {results.weakestChapters.length > 0 && (
                  <div className="mt-5">
                    <div className="text-sm font-semibold text-white">
                      Chapters to fix first
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {results.weakestChapters.map((chapter) => (
                        <span
                          key={chapter}
                          className="rounded-full border border-rose-400/20 bg-rose-400/10 px-3 py-1 text-xs text-rose-300"
                        >
                          {chapter}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={{
                  pathname: "/pyq-bank",
                  query: { subject: results.weakestSubject.subject },
                }}
                className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
              >
                Practice {results.weakestSubject.subject}
              </Link>

              <Link
                href="/dashboard"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
              >
                Open Dashboard
              </Link>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}