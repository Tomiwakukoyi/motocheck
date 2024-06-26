import React, { useState } from "react";
import axios from "axios";
import { useAppContext } from "@/context/searchContext";
import Image from "next/image";
import ErrorComponent from "../api-result/ErrorComponent";
import ResultsComponent from "../api-result/ResultsComponent";

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

      console.log(response);

      setApiResult(response.data);
      console.log(response.data.information.registeredLGA);

      // Clear input box after successful submission
      setPlateNumber("");
    } catch (error) {
      console.log(error);
      // setApiError(
      //   "An error occurred while fetching data. Please try again later."
      // );
      // Handle network errors specifically
      if (error.code === "ERR_NETWORK") {
        setApiError("Network Error: Please check your internet connection.");
      } else if (apiResult === "undefined") {
        setApiError("No results found for the entered plate number.");
      } else {
        setApiError(
          "An error occurred while fetching data. Please try again later."
        );
      }
    }
  };

  return (
    <div className="w-screen flex flex-col items-center justify-center h-full py-10  bg-[#48595e] md:bg-carBg">
      <div className="h-300px flex flex-col gap-2 items-center justify-center w-full md:w-500px">
        <span className="text-white ">
          Enter first three digits of plate number:
        </span>
        <div className="flex items-center justify-center rounded-r-xl">
          <Image
            src="/images/ng.png"
            width={100}
            height={100}
            className="h-14"
          />
          <input
            type="text"
            className="tracking-widest uppercase text-center focus:outline-none h-14 w-200px md:w-[250px] rounded-l-none rounded-xl pl-1 text-2xl font-bold"
            value={plateNumber}
            onChange={handleInputChange}
          />
        </div>

        <button
          className=" bg-slate-300 hover:bg-slate-500 text-black font-medium py-1 md:p-3 md:px-8  px-4 rounded-md"
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>
      {apiResult ? (
        <ResultsComponent />
      ) : apiError ? (
        <ErrorComponent errorMsg="Network Error, Please try again!" />
      ) : (
        <></>
      )}
    </div>
  );
};

export default SearchForm;
