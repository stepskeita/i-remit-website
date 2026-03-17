import HeroSection from "@/components/landing/HeroSection";
import SocialProof from "@/components/landing/SocialProof";
import PlatformOverview from "@/components/landing/PlatformOverview";
import FeatureGrid from "@/components/landing/FeatureGrid";
import MobileWallet from "@/components/landing/MobileWallet";
import HowItWorks from "@/components/landing/HowItWorks";
import Solutions from "@/components/landing/Solutions";
import Pricing from "@/components/landing/Pricing";
import Testimonials from "@/components/landing/Testimonials";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <SocialProof />
      <PlatformOverview />
      <FeatureGrid />
      <MobileWallet />
      <HowItWorks />
      <Solutions />
      <Pricing />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
}
