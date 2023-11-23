import React from "react";

const Schedule = () => {
  return (
    <div className="bg-white w-[90%] md:w-2/3 absolute bottom-10 left-1/2 transform -translate-x-1/2 rounded-md overflow-hidden shadow">
      <div className="flex flex-wrap">
        <div className="bg-lime-500 w-full md:w-auto text-white text-center ps-5 pe-1 py-5 relative xl:before:absolute xl:before:top-0 xl:before:right-[-29px] xl:before:h-full xl:before:border-t-[55px] xl:before:border-r-0 xl:before:border-b-[50px] xl:before:border-l-[30px] xl:before:border-y-transparent xl:before:border-r-transparent xl:before:border-l-lime-500 flex flex-col justify-center items-center">
          <div className="text-[28px] font-semibold">SCHEDULE A DEMO</div>
          <div className="text-[18px]">Learn More About FloQast</div>
        </div>
        <div className="text-center flex flex-col justify-center flex-1 p-3">
          <div className="text-[22px] text-zinc-500 font-bold mb-3 md:mb-1">
            Learn How FloQast Can{" "}
            <span className="text-lime-500">Improve Your Month-End</span>
          </div>
          <div className="flex justify-center">
            <form action="" className="flex flex-wrap justify-center">
              <input
                type="text"
                placeholder="First Name*"
                className="block mb-3 h-[35px] w-44 rounded border px-2 text-sm"
              />
              <input
                type="text"
                placeholder="Email*"
                className="block mb-3 h-[35px] w-44 rounded border px-2 mx-2 text-sm"
              />
              <button className="bg-lime-500 text-white text-[16px] block mb-3 h-[35px] w-44 rounded border-2 border-[#6f973b] px-2">
                SCHEDULE NOW
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
