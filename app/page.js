"use client"
import React, { useContext } from "react";
import { AppContext } from "@/src/app/AppContext";


export default function Home() {

  const { isDarkMode, setIsDarkMode } = useContext(AppContext);

  return (
    <div className={`bgbl ${
      isDarkMode ? "dark-theme" : ""
    } h-screen `}>
     
    </div>
  );
}
