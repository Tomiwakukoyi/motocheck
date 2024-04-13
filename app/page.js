"use client";
import React from "react";
import SearchForm from "@/src/components/home/SearchForm";
import { AppProvider, useAppContext } from "@/context/searchContext";
import GeneralInfo from "@/src/components/home/GeneralInfo";
import HeroSection from "@/src/components/home/HeroSection";
import PlateNoDetails from "@/src/components/api-result/PlateNoDetails";

const Home = () => {
  const { apiResult } = useAppContext(); // Destructure apiResult from useAppContext

  return (
    <AppProvider>
      <div className="w-screen">
        {/* Render SearchForm if there is no apiResult */}
        {!apiResult && <SearchForm />}

        {/* Render ResultPage if there is apiResult */}
        {apiResult && <PlateNoDetails />}

        <HeroSection />
        <GeneralInfo />
      </div>
    </AppProvider>
  );
};

export default Home;
