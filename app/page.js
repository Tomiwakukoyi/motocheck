import GeneralInfo from "@/src/components/home/GeneralInfo";
import HeroSection from "@/src/components/home/HeroSection";
import SearchForm from "@/src/components/home/SearchForm";

export default function Home() {
  return (
    <div className="w-screen">
      <SearchForm />
      <HeroSection />
      <GeneralInfo />
    </div>
  );
}
