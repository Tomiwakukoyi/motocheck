import React from "react";
import { useAppContext } from "@/context/searchContext";
import ErrorComponent from "@/src/components/api-result/ErrorComponent";

const ResultPage = () => {
  const { apiResult } = useAppContext();

  if (apiResult && apiResult.information) {
    const { id, registeredState, registeredLGA, stateSlogan } =
      apiResult.information;

    // Check if any of the details are empty
    const detailsEmpty = !registeredState || !registeredLGA || !stateSlogan;

    return (
      <div className=" bg-gray-500 rounded-lg p-3 py-5 flex flex-col ">
        {!detailsEmpty ? (
          <h1 className="text-white mx-auto font-medium text-lg font-sans " >
            Registration Details - {registeredLGA.slice(0,3)}
          </h1>
        ) : (
          ""
        )}
        <div className="flex flex-col gap-5 mt-7 font-mono">
          {/* Conditionally render Registered State */}
          {registeredState ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head text-base font-sans">Registered State:</span> {registeredState}
            </p>
          ) : null}
          {/* Conditionally render Registered LGA */}
          {registeredLGA ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head text-base font-sans">Registered LGA:</span> {registeredLGA}
            </p>
          ) : null}
          {/* Conditionally render State Slogan */}
          {stateSlogan ? (
            <p className="heading text-gray-200 text-lg">
              <span className="head text-base font-sans">State Slogan: </span>
              {stateSlogan}
            </p>
          ) : null}
          {/* Render message if details are empty */}
        </div>
        {detailsEmpty && (
          <ErrorComponent errorMsg="Not found, try again" />
        )}
      </div>
    );
  } else {
    return (
      <div className="bg-black text-yellow-500 capitalize">
        <h1 className="text-black">Plate Number Details</h1>
        <p>No Plate Number Detail put in</p>
      </div>
    );
  }
};

export default ResultPage;
