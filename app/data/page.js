import React from "react";
import { useAppContext } from "@/context/searchContext";
import ErrorComponent from "@/src/components/api-result/ErrorComponent";

const ResultPage = () => {
  const { apiResult } = useAppContext();

  if (apiResult && apiResult.information) {
    const {  registeredState, registeredLGA, stateSlogan } =
      apiResult.information;

    // Check if any of the details are empty
    const detailsEmpty = !registeredState || !registeredLGA || !stateSlogan;

    return (
      <div className=" bg-gray-500 rounded-lg p-3 py-5 flex flex-col ">
        {!detailsEmpty ? (
          <h1 className="text-white mx-auto font-medium text-lg md:text-2xl font-sans ">
            Registration Details - {registeredLGA.slice(0, 3)}
          </h1>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-5 mt-7 font-serif">
          {/* Conditionally render Registered State */}
          {registeredState ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head font-medium">Registered State: </span>
              {registeredState}
            </p>
          ) : null}
          {/* Conditionally render Registered LGA */}
          {registeredLGA ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head font-medium">LGA: </span>
              {registeredLGA.slice(5)}
            </p>
          ) : null}
          {/* Conditionally render State Slogan */}
          {stateSlogan ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head font-medium">State Slogan: </span>
              {stateSlogan}
            </p>
          ) : null}
          {/* Render message if details are empty */}
        </div>
        {detailsEmpty && (
          <ErrorComponent errorMsg="I no sabi where them register this one o!" />
        )}
      </div>
    );
  } else {
    return (
      <div className="bg-gray-500 rounded-lg p-3 py-5">
        <ErrorComponent errorMsg="Ogini?! Fix up please" />
      </div>
    );
  }
};

export default ResultPage;
