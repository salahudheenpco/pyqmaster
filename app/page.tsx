import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ExplanationLevels from "@/components/ExplanationLevels";
import StudentPrograms from "@/components/StudentPrograms";
import Features from "@/components/Features";
import DashboardPreview from "@/components/DashboardPreview";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Hero />
      <HowItWorks />
      <ExplanationLevels />
      <StudentPrograms />
      <Features />
      <DashboardPreview />
      <FinalCTA />
      <Footer />
    </main>
  );
}