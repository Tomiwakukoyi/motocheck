"use client";
import React from "react";
import SearchForm from "@/src/components/home/SearchForm";
import { AppProvider, useAppContext } from "@/context/searchContext";
import GeneralInfo from "@/src/components/home/GeneralInfo";
import HeroSection from "@/src/components/home/HeroSection";

const Home = () => {
  const { apiResult } = useAppContext(); // Destructure apiResult from useAppContext

  return (
    <AppProvider>
      <div className="w-screen">
        <SearchForm />
        <HeroSection />
        <GeneralInfo />
      </div>
    </AppProvider>
  );
};

export default Home;
