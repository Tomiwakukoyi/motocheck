import React from "react";
import GenInfoTemplate from "../GenInfoTemplate";
import generalInfo from "@/public/generalInfo";

const GeneralInfo = () => {
  return (
    <div className="w-screen h-full bg-[#48595e] py-10 flex flex-wrap gap-14 items-center justify-center">
      {generalInfo.map(({ title, description }, index) => (
        <GenInfoTemplate key={index} title={title} description={description} />
      ))}
    </div>
  );
};

export default GeneralInfo;
