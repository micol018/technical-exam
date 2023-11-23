import React from "react";
import logo from "../assets/logo.png";

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-white/80 from-40% to-white/0 to-90% w-full lg:w-2/3 absolute top-32 flex flex-col items-center py-8 px-3 italic text-zinc-600">
      <div>
        <div className="flex gap-2 items-end">
          <img src={logo} alt="" className="w-1/2 md:w-auto flex-shrink-0" />
          <div className="text-lg md:text-[32px]">The</div>
        </div>
        <div className="text-[32px] md:text-[48px] text-lime-500 font-medium">
          Fastest, Most Accurate
        </div>
        <div className="text-lg md:text-[32px]">Way to Close Your Books!</div>
      </div>
    </div>
  );
};

export default Banner;
