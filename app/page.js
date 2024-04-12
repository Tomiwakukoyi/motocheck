"use client";
import React from "react";
import SearchForm from "@/src/components/home/SearchForm";
import { AppProvider } from "@/context/searchContext";
import GeneralInfo from "@/src/components/home/GeneralInfo";
import HeroSection from "@/src/components/home/HeroSection";

const Home = () => {
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
