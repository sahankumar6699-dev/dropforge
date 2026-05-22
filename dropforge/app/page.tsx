import { FAQSection } from "@/components/faq-section";
import { FeatureSection } from "@/components/feature-section";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { NavBar } from "@/components/nav-bar";
import { ToolShowcase } from "@/components/tool-showcase";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="grid-fade pointer-events-none fixed inset-0 opacity-60" />
      <NavBar />
      <HeroSection />
      <ToolShowcase />
      <FeatureSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
