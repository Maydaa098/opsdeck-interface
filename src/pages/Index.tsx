import HeroSection from "@/components/HeroSection";
import PlatformOverview from "@/components/PlatformOverview";
import ToolDetails from "@/components/ToolDetails";
import StatusSection from "@/components/StatusSection";
import FooterSection from "@/components/FooterSection";

const Index = () => (
  <div className="relative min-h-screen bg-background">
    {/* Noise overlay */}
    <div className="noise-overlay" />

    <HeroSection />
    <PlatformOverview />
    <ToolDetails />
    <StatusSection />
    <FooterSection />
  </div>
);

export default Index;
