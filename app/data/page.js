"use client";
import PlateNoDetails from "@/src/components/api-result/plateNoDetails";
import React from "react";
import { useAppContext } from "@/context/searchContext";

const ResultPage = () => {
  const { apiResult } = useAppContext();

  // Check if apiResult exists and contains the information property
  if (apiResult && apiResult.information) {
    const { id, registeredState, registeredLGA, stateSlogan } =
      apiResult.information;

    return (
      <div className="text-yellow-500 pt-40">
        <h1 className="text-white">Plate Number Details</h1>
        <p>ID: {id}</p>
        <p>Registered State: {registeredState}</p>
        <p>Registered LGA: {registeredLGA}</p>
        <p>State Slogan: {stateSlogan}</p>
      </div>
    );
  } else {
    // Render a message if apiResult or apiResult.information is null or undefined
    return (
      <div className="bg-black text-yellow-500 pt-40">
        <h1 className="text-black">Plate Number Details</h1>
        <p>No plate number details available</p>
      </div>
    );
  }
};

export default ResultPage;
