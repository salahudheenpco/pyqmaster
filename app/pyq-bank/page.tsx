"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { allQuestions } from "@/lib/questionBank";
import type {
  ExplanationDepth,
  PYQQuestion,
  QuestionOption,
} from "@/lib/types";

const PAGE_SIZE = 12;

function isOptionObject(
  option: string | QuestionOption
): option is QuestionOption {
  return typeof option === "object" && option !== null;
}

function getOptionValue(option: string | QuestionOption): string {
  return isOptionObject(option) ? option.id : option;
}

function getOptionText(option: string | QuestionOption): string {
  return isOptionObject(option) ? option.text : option;
}

function getQuestionText(question: PYQQuestion): string {
  const maybeLegacyQuestion = (question as PYQQuestion & { question?: string })
    .question;
  return (
    question.questionText ||
    maybeLegacyQuestion ||
    "Question text not available."
  );
}

function getCorrectAnswerValue(question: PYQQuestion): string {
  const correct = question.correctAnswer;

  if (!question.options || question.options.length === 0) {
    return correct;
  }

  const matchedOption = question.options.find((option) => {
    if (isOptionObject(option)) {
      return option.id === correct || option.text === correct;
    }
    return option === correct;
  });

  if (!matchedOption) {
    return correct;
  }

  return getOptionValue(matchedOption);
}

function getCorrectAnswerText(question: PYQQuestion): string {
  const correct = question.correctAnswer;

  if (!question.options || question.options.length === 0) {
    return correct;
  }

  const matchedOption = question.options.find((option) => {
    if (isOptionObject(option)) {
      return option.id === correct || option.text === correct;
    }
    return option === correct;
  });

  if (!matchedOption) {
    return correct;
  }

  return getOptionText(matchedOption);
}

function getExplanationText(
  question: PYQQuestion,
  depth: ExplanationDepth
): string {
  if (!question.explanation) return "No explanation available yet.";

  if (typeof question.explanation === "string") {
    return question.explanation;
  }

  return (
    question.explanation[depth] ||
    question.explanation.standard ||
    question.explanation.quick ||
    "No explanation available yet."
  );
}

export default function PyqBankPage() {
  const [selectedExam, setSelectedExam] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedChapter, setSelectedChapter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedQuestionId, setSelectedQuestionId] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [depth, setDepth] = useState<ExplanationDepth>("standard");
  const [submitted, setSubmitted] = useState(false);
  const [page, setPage] = useState(1);

  const previewRef = useRef<HTMLElement | null>(null);
  const practiceRef = useRef<HTMLElement | null>(null);

  const exams = useMemo(() => {
    return Array.from(new Set(allQuestions.map((q) => q.exam).filter(Boolean)));
  }, []);

  const subjects = useMemo(() => {
    const examFiltered =
      selectedExam === "all"
        ? allQuestions
        : allQuestions.filter((q) => q.exam === selectedExam);

    return Array.from(
      new Set(examFiltered.map((q) => q.subject).filter(Boolean))
    );
  }, [selectedExam]);

  const chapters = useMemo(() => {
    const base = allQuestions.filter((q) => {
      const examMatch = selectedExam === "all" || q.exam === selectedExam;
      const subjectMatch =
        selectedSubject === "all" || q.subject === selectedSubject;
      return examMatch && subjectMatch;
    });

    return Array.from(new Set(base.map((q) => q.chapter).filter(Boolean)));
  }, [selectedExam, selectedSubject]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);
    const examParam = params.get("exam");
    const subjectParam = params.get("subject");
    const chapterParam = params.get("chapter");

    if (examParam) setSelectedExam(examParam);
    if (subjectParam) setSelectedSubject(subjectParam);
    if (chapterParam) setSelectedChapter(chapterParam);
  }, []);

  const filteredQuestions = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();

    return allQuestions.filter((q) => {
      const examMatch = selectedExam === "all" || q.exam === selectedExam;
      const subjectMatch =
        selectedSubject === "all" || q.subject === selectedSubject;
      const chapterMatch =
        selectedChapter === "all" || q.chapter === selectedChapter;

      const optionTexts = (q.options ?? []).map((option) =>
        getOptionText(option as string | QuestionOption)
      );

      const searchableText = [
        q.id,
        q.exam,
        q.subject,
        q.chapter,
        q.topic ?? "",
        getQuestionText(q),
        q.year?.toString() ?? "",
        ...optionTexts,
      ]
        .join(" ")
        .toLowerCase();

      const searchMatch = term === "" || searchableText.includes(term);

      return examMatch && subjectMatch && chapterMatch && searchMatch;
    });
  }, [selectedExam, selectedSubject, selectedChapter, searchTerm]);

  const totalPages = Math.max(1, Math.ceil(filteredQuestions.length / PAGE_SIZE));

  const paginatedQuestions = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filteredQuestions.slice(start, start + PAGE_SIZE);
  }, [filteredQuestions, page]);

  useEffect(() => {
    setPage(1);
  }, [selectedExam, selectedSubject, selectedChapter, searchTerm]);

  useEffect(() => {
    if (page > totalPages) {
      setPage(totalPages);
    }
  }, [page, totalPages]);

  useEffect(() => {
    if (filteredQuestions.length === 0) {
      setSelectedQuestionId("");
      return;
    }

    const stillExists = filteredQuestions.some(
      (q) => q.id === selectedQuestionId
    );

    if (!stillExists) {
      setSelectedQuestionId(filteredQuestions[0].id);
      setSelectedOption(null);
      setDepth("standard");
      setSubmitted(false);
    }
  }, [filteredQuestions, selectedQuestionId]);

  const selectedQuestion =
    filteredQuestions.find((q) => q.id === selectedQuestionId) ??
    allQuestions.find((q) => q.id === selectedQuestionId) ??
    null;

  const selectedExplanation = selectedQuestion
    ? getExplanationText(selectedQuestion, depth)
    : "No explanation available yet.";

  const correctAnswerValue = selectedQuestion
    ? getCorrectAnswerValue(selectedQuestion)
    : null;

  const correctAnswerText = selectedQuestion
    ? getCorrectAnswerText(selectedQuestion)
    : null;

  const isCorrect =
    !!selectedQuestion && selectedOption === correctAnswerValue;

  const startIndex =
    filteredQuestions.length === 0 ? 0 : (page - 1) * PAGE_SIZE + 1;
  const endIndex = Math.min(page * PAGE_SIZE, filteredQuestions.length);

  function resetAnswerState() {
    setSelectedOption(null);
    setDepth("standard");
    setSubmitted(false);
  }

  function handlePreview(questionId: string) {
    setSelectedQuestionId(questionId);
    resetAnswerState();

    setTimeout(() => {
      previewRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function handleStartPractice(questionId: string) {
    setSelectedQuestionId(questionId);
    resetAnswerState();

    setTimeout(() => {
      practiceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function handleCheckAnswer() {
    if (!selectedOption) return;
    setSubmitted(true);
  }

  function handleResetAnswer() {
    resetAnswerState();

    setTimeout(() => {
      practiceRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  }

  function handleClearAll() {
    setSelectedExam("all");
    setSelectedSubject("all");
    setSelectedChapter("all");
    setSearchTerm("");
    setPage(1);
  }

  if (allQuestions.length === 0) {
    return (
      <div className="min-h-screen bg-slate-950 text-white">
        <main className="mx-auto max-w-4xl px-6 py-16">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
            <h1 className="text-3xl font-bold">No questions found</h1>
            <p className="mt-4 text-slate-300">
              Add question files inside <code>data/question-bank</code> and
              export them through <code>lib/questionBank.ts</code>.
            </p>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-7xl px-6 py-12">
        <section className="max-w-4xl">
          <div className="inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-medium text-cyan-300">
            Real Question Bank
          </div>

          <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
            Explore Previous Year Questions
          </h1>

          <p className="mt-4 text-lg leading-8 text-slate-300">
            Search, filter, preview, and practice from your full question bank.
          </p>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Total Questions</div>
            <div className="mt-2 text-3xl font-bold">{allQuestions.length}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Filtered Results</div>
            <div className="mt-2 text-3xl font-bold">
              {filteredQuestions.length}
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Exams Covered</div>
            <div className="mt-2 text-3xl font-bold">{exams.length}</div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
            <div className="text-sm text-slate-400">Current Page</div>
            <div className="mt-2 text-3xl font-bold">
              {filteredQuestions.length === 0 ? 0 : page}
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Filters
            </div>

            <button
              type="button"
              onClick={handleClearAll}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
            >
              Clear All
            </button>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-4">
            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Search
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search question, chapter, topic..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400/40"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Exam
              </label>
              <select
                value={selectedExam}
                onChange={(e) => {
                  setSelectedExam(e.target.value);
                  setSelectedSubject("all");
                  setSelectedChapter("all");
                }}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
              >
                <option value="all" className="bg-slate-900">
                  All Exams
                </option>
                {exams.map((exam) => (
                  <option key={exam} value={exam} className="bg-slate-900">
                    {exam}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Subject
              </label>
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setSelectedChapter("all");
                }}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
              >
                <option value="all" className="bg-slate-900">
                  All Subjects
                </option>
                {subjects.map((subject) => (
                  <option
                    key={subject}
                    value={subject}
                    className="bg-slate-900"
                  >
                    {subject}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-slate-300">
                Chapter
              </label>
              <select
                value={selectedChapter}
                onChange={(e) => setSelectedChapter(e.target.value)}
                className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400/40"
              >
                <option value="all" className="bg-slate-900">
                  All Chapters
                </option>
                {chapters.map((chapter) => (
                  <option
                    key={chapter}
                    value={chapter}
                    className="bg-slate-900"
                  >
                    {chapter}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
            Showing {startIndex}-{endIndex} of {filteredQuestions.length} matching
            questions
          </div>
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-2">
          {paginatedQuestions.length > 0 ? (
            paginatedQuestions.map((question) => (
              <div
                key={question.id}
                className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl"
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                    {question.exam}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                    {question.subject}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                    {question.chapter}
                  </span>
                  <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                    {question.year}
                  </span>
                </div>

                <div className="mt-4 text-lg font-semibold leading-7">
                  {getQuestionText(question)}
                </div>

                <div className="mt-3 text-sm text-slate-400">
                  ID: {question.id}
                  {question.topic ? ` • ${question.topic}` : ""}
                </div>

                <div className="mt-6 flex gap-3">
                  <button
                    type="button"
                    onClick={() => handlePreview(question.id)}
                    className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                  >
                    Preview
                  </button>

                  <button
                    type="button"
                    onClick={() => handleStartPractice(question.id)}
                    className="rounded-2xl bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                  >
                    Practice
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl md:col-span-2">
              <div className="text-xl font-semibold">No questions found</div>
              <p className="mt-3 text-slate-300">
                Change one or more filters to see matching questions.
              </p>
            </div>
          )}
        </section>

        <section className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
          <div className="text-sm text-slate-300">
            Page {filteredQuestions.length === 0 ? 0 : page} of{" "}
            {filteredQuestions.length === 0 ? 0 : totalPages}
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setPage((prev) => Math.max(1, prev - 1))}
              disabled={page === 1 || filteredQuestions.length === 0}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setPage((prev) => Math.min(totalPages, prev + 1))
              }
              disabled={page === totalPages || filteredQuestions.length === 0}
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </section>

        {selectedQuestion && (
          <>
            <section
              ref={previewRef}
              className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Preview
              </div>

              <h2 className="mt-3 text-3xl font-bold">
                {selectedQuestion.chapter}
              </h2>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  {selectedQuestion.exam}
                </span>
                <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  {selectedQuestion.subject}
                </span>
                <span className="rounded-full border border-white/10 bg-slate-900/80 px-3 py-1 text-xs text-slate-300">
                  {selectedQuestion.year}
                </span>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm font-semibold text-slate-400">
                  Question
                </div>
                <div className="mt-2 text-base leading-7 text-white">
                  {getQuestionText(selectedQuestion)}
                </div>
              </div>

              {(selectedQuestion.options ?? []).length > 0 && (
                <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                  <div className="text-sm font-semibold text-slate-400">
                    Options
                  </div>
                  <div className="mt-3 grid gap-3">
                    {(selectedQuestion.options ?? []).map((option, index) => (
                      <div
                        key={`${selectedQuestion.id}-preview-${index}`}
                        className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white"
                      >
                        <span className="font-semibold">
                          {String.fromCharCode(65 + index)}.
                        </span>{" "}
                        {getOptionText(option)}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => handleStartPractice(selectedQuestion.id)}
                  className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
                >
                  Practice This Question
                </button>

                <Link
                  href="/diagnostic"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Go to Diagnostic
                </Link>
              </div>
            </section>

            <section
              ref={practiceRef}
              className="mt-10 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl"
            >
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Practice
              </div>

              <h2 className="mt-3 text-3xl font-bold">
                {selectedQuestion.chapter}
              </h2>

              <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/80 p-5">
                <div className="text-sm text-slate-400">
                  {selectedQuestion.exam} • {selectedQuestion.subject} •{" "}
                  {selectedQuestion.year}
                </div>
                <div className="mt-2 text-lg font-medium leading-8 text-white">
                  {getQuestionText(selectedQuestion)}
                </div>
              </div>

              {(selectedQuestion.options ?? []).length > 0 ? (
                <>
                  <div className="mt-8">
                    <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">
                      Choose your answer
                    </div>

                    <div className="grid gap-3">
                      {(selectedQuestion.options ?? []).map((option, index) => {
                        const optionValue = getOptionValue(option);
                        const active = selectedOption === optionValue;
                        const isCorrectOption = optionValue === correctAnswerValue;
                        const optionLabel = String.fromCharCode(65 + index);

                        return (
                          <button
                            key={`${selectedQuestion.id}-practice-${index}`}
                            type="button"
                            onClick={() => {
                              if (!submitted) {
                                setSelectedOption(optionValue);
                              }
                            }}
                            className={`rounded-2xl border px-4 py-4 text-left transition ${
                              submitted
                                ? isCorrectOption
                                  ? "border-emerald-400 bg-emerald-400 text-slate-950"
                                  : active
                                  ? "border-rose-400 bg-rose-400 text-white"
                                  : "border-white/10 bg-slate-900/80 text-white"
                                : active
                                ? "border-cyan-400/30 bg-cyan-400 text-slate-950"
                                : "border-white/10 bg-slate-900/80 text-white hover:bg-slate-900"
                            }`}
                          >
                            <span className="font-semibold">{optionLabel}.</span>{" "}
                            {getOptionText(option)}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="mb-3 text-sm font-semibold uppercase tracking-wide text-cyan-300">
                      Choose explanation depth
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {(["quick", "standard", "deep"] as ExplanationDepth[]).map(
                        (level) => {
                          const active = depth === level;

                          return (
                            <button
                              key={level}
                              type="button"
                              onClick={() => setDepth(level)}
                              className={`rounded-2xl px-4 py-3 text-sm font-medium capitalize transition ${
                                active
                                  ? "bg-cyan-400 text-slate-950"
                                  : "border border-white/15 bg-white/5 text-white hover:bg-white/10"
                              }`}
                            >
                              {level}
                            </button>
                          );
                        }
                      )}
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-300">
                    Current choice: {selectedOption ?? "No answer selected"} •
                    Explanation depth: {depth}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <button
                      type="button"
                      onClick={handleCheckAnswer}
                      disabled={!selectedOption}
                      className="rounded-2xl bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      Check Answer
                    </button>

                    <button
                      type="button"
                      onClick={handleResetAnswer}
                      className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      Reset Answer
                    </button>

                    <Link
                      href="/dashboard"
                      className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      Open Dashboard
                    </Link>
                  </div>

                  {submitted && (
                    <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-6">
                      <div
                        className={`rounded-2xl p-4 text-sm font-medium ${
                          isCorrect
                            ? "bg-emerald-400/15 text-emerald-300"
                            : "bg-rose-400/15 text-rose-300"
                        }`}
                      >
                        {isCorrect
                          ? "Correct — good job."
                          : `Not quite. The correct answer is ${correctAnswerText}.`}
                      </div>

                      <div className="mt-6">
                        <div className="text-sm font-semibold uppercase tracking-wide text-cyan-300">
                          Explanation
                        </div>

                        <div className="mt-3 whitespace-pre-line rounded-2xl border border-white/10 bg-white/5 p-5 leading-7 text-slate-300">
                          {selectedExplanation}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-8 rounded-2xl border border-white/10 bg-slate-900/80 p-5 text-slate-300">
                  This question does not have answer options yet, so practice mode
                  is not available for it.
                </div>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}