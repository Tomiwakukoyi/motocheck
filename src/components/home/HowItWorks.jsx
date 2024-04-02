import React from "react";

const HowItWorks = () => {
  return (
    <section className=" w-400px mt-10   bg-white h-400px flex flex-col items-center text-center justify-between py-7 pb-0">
      <span className=" text-3xl font-semibold text-[#162425]">Free Car Verification</span>
      <span className="text-[#575757} px-5">
        MotoCheck Ng is the biggest FREE vehicle data website in the Nigeria!
        Try the free number plate check! <br /> Enter the first 3-digit of any Nigeria
        plate number to know the state and LGA it comes from. <br /> For example, if a
        plate number is GGE123YZ. you will pass the parameter as GGE or gge (not
        case sensitive) and the state, LGA and state slogan will be displayed
        including its unique id. <br /> Feel free to try it out..
      </span>
      <button className=" bg-[#162425] text-white w-full h-16 font-bold hover:text-gray-200">Free Car Check</button>
    </section>
  );
};

export default HowItWorks;
