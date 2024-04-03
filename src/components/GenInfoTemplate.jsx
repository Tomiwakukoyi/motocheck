import React from "react";

const GenInfoTemplate = () => {
  return (
    <section className=" w-400px py-5 gap-4 bg-white h-full flex flex-col items-center text-center justify-between pb-0 rounded-md">
      <span className=" text-3xl font-semibold text-[#162425]">VIN Number</span>
      <span className="text-[#575757} my-5">
        A vehicle check includes a lot of information. By combining different
        data sources, we have information available about more than 40 million
        UK cars. On CarCheck, you can find free information, like the car’s
        brand and model, body style, wheel plan, colour, engine size, fuel type,
        vehicle dimensions, MOT history and MOT expiry date. All information can
        easily be found by entering the registration number of any car. Within
        seconds all vehicle info will be shown. Basic vehicle information can be
        found in our free report. You can also buy our premium report, if you
        want to receive more detailed information about a car.
      </span>
    </section>
  );
};

export default GenInfoTemplate;
