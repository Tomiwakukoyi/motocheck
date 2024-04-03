import GeneralInfo from "@/src/components/home/GeneralInfo";
import HeroSection from "@/src/components/home/HeroSection";

export default function Home() {
  return (
    <div className="w-screen">
      <HeroSection />
      <GeneralInfo />
    </div>
  );
}
