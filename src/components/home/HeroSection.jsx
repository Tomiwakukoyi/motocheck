"use client";
import Link from "next/link";
import HeroSectionTemplate from "./HeroSectionTemplate";
import howInfo from "@/public/howInfo";
import checkBefore from "@/public/checkBefore";

const HeroSection = () => {
  const goToFrsc = () => {
    window.open("https://nvis.frsc.gov.ng/VehicleManagement/VerifyPlateNo", "_blank");
  };
  return (
    <main className="bg-green-600 w-screen h-full gap-10 flex flex-wrap justify-center py-5">
      {howInfo.map(({ title, description, buttonTitle }, index) => (
        <HeroSectionTemplate
          key={index}
          title={title}
          description={description}
          buttonTitle={buttonTitle}
        />
      ))}
      {checkBefore.map(({ title, description, buttonTitle }, index) => (
        <HeroSectionTemplate
          key={index}
          title={title}
          description={description}
          buttonTitle={buttonTitle}
          handleButtonClick={goToFrsc}
        />
      ))}
    </main>
  );
};

export default HeroSection;
