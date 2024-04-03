import React from "react";

const GenInfoTemplate = ({title, description}) => {
  return (
    <section className=" w-400px py-8 gap-4 bg-white h-full flex flex-col items-center text-center justify-between pb-0 rounded-md">
      <span className=" text-3xl font-semibold text-[#162425]">{title}</span>
      <span className="text-[#575757} mx-6 my-5 pb-5">
        {description}
      </span>
    </section>
  );
};

export default GenInfoTemplate;
