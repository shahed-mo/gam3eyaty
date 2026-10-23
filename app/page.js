import Calculator from "@/Components/landing/Calculator";
import Features from "@/Components/landing/Features";
import HeroSection from "@/Components/landing/HeroSection";
import HowItWorks from "@/Components/landing/HowItWorks";
import InteractiveBanner from "@/Components/landing/InteractiveBanner";

export default function Home() {
  return (
  <div className="p-10">
    <HeroSection/>
    <Features/>
    <Calculator/>
    <HowItWorks/>
    <InteractiveBanner/>
  </div>
  )
}

