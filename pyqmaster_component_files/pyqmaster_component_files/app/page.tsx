import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ExplanationLevels from "@/components/ExplanationLevels";
import StudentPrograms from "@/components/StudentPrograms";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import FinalCTA from "@/components/FinalCTA";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <ExplanationLevels />
        <StudentPrograms />
        <Features />
        <DashboardPreview />
        <FinalCTA />
      </main>
    </div>
  );
}
