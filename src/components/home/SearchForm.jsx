"use client";
import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/searchContext";
import Link from "next/link";

const SearchForm = () => {
  const { setApiResult, setApiError } = useAppContext();
  const [plateNumber, setPlateNumber] = useState("");
  const { apiResult, apiError } = useAppContext();
  const handleInputChange = (event) => {
    setPlateNumber(event.target.value.toUpperCase().slice(0, 3));
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.get(
        "https://car-verification-nigeria.p.rapidapi.com/platenumberloc.php",
        {
          params: {
            platecodeloc: plateNumber,
          },
          headers: {
            "X-RapidAPI-Key":
              "1a2e4c92b6msheeec672880a29c4p18457fjsnfebbc9647ca8",
            "X-RapidAPI-Host": "car-verification-nigeria.p.rapidapi.com",
          },
        }
      );
      setApiResult(response.data);
      console.log(response);
    } catch (error) {
      console.log(error);
      setApiError(
        "An error occurred while fetching data. Please try again later."
      );
    }
  };

  return (
    <div className="w-screen flex items-center justify-center h-400px md:h-500px bg-[#48595e] md:bg-carBg">
      <div className="h-300px flex flex-col gap-2 items-center justify-center w-full md:w-500px">
        <span className="text-white mr-20">
          Enter first three digits of plate number:
        </span>
        <div className="flex items-center justify-center rounded-r-xl">
          <input
            type="text"
            className="tracking-widest uppercase text-center focus:outline-none h-14 w-72 rounded-l-none rounded-xl pl-2 text-2xl font-bold"
            value={plateNumber}
            onChange={handleInputChange}
          />
        </div>
        <Link href={apiResult ? "/data" : apiError ? "/error" : "#"}>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Search
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SearchForm;
