import React from "react";
import { useAppContext } from "@/context/searchContext";

const ResultPage = () => {
  const { apiResult } = useAppContext();

  if (apiResult && apiResult.information) {
    const { id, registeredState, registeredLGA, stateSlogan } =
      apiResult.information;

    // Check if any of the details are empty
    const detailsEmpty = !registeredState || !registeredLGA || !stateSlogan;

    return (
      <div className="text-yellow-500">
        <h1 className="text-white">Plate Number Details</h1>
        <p>ID: {id}</p>
        {/* Conditionally render Registered State */}
        {registeredState ? <p>Registered State: {registeredState}</p> : null}
        {/* Conditionally render Registered LGA */}
        {registeredLGA ? <p>Registered LGA: {registeredLGA}</p> : null}
        {/* Conditionally render State Slogan */}
        {stateSlogan ? <p>State Slogan: {stateSlogan}</p> : null}
        {/* Render message if details are empty */}
        {detailsEmpty && <p>No results</p>}
      </div>
    );
  } else {
    return (
      <div className="bg-black text-yellow-500">
        <h1 className="text-black">Plate Number Details</h1>
        <p>No results</p>
      </div>
    );
  }
};

export default ResultPage;
