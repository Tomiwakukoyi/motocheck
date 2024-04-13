"use client";
import React, { useState } from "react";
import axios from "axios";
import ResultPage from "@/app/data/page";
import { useAppContext } from "@/context/searchContext";
import Image from 'next/image'
import PlateNoDetails from "../api-result/PlateNoDetails";

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
      console.log(response.data.information.registeredLGA, "this that");
    } catch (error) {
      console.log(error);
      setApiError(
        "An error occurred while fetching data. Please try again later."
      );
    }
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center h-full py-10  bg-[#48595e] md:bg-carBg">
      <div className="h-300px flex flex-col gap-2 items-center justify-center w-full md:w-500px">
        <span className="text-white mr-20">
          Enter first three digits of plate number:
        </span>
        <div className="flex items-center justify-center rounded-r-xl">
          <Image src="/images/ng.png" width={100} height={100} className="h-14" />
          <input
            type="text"
            className="tracking-widest uppercase text-center focus:outline-none h-14 w-200px rounded-l-none rounded-xl pl-1 text-2xl font-bold"
            value={plateNumber}
            onChange={handleInputChange}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {apiResult ? <ResultPage /> : <p>Loading......</p>}
    </div>
  );
};

export default SearchForm;
