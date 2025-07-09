import { BsThreeDots } from "react-icons/bs";
import { PiArrowsSplitFill, PiPlus } from "react-icons/pi";
import { IoMdLink } from "react-icons/io";
import { TfiReload } from "react-icons/tfi";
import { useState } from "react";
import { GuessTheNumberGame } from "./GuessTheNumberGame";

const ThirdSpreadsheetHeader = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex justify-between mt-0.5">
      <div className="ml-12 bg-[#E2E2E2] border flex gap-3 border-white py-1 pl-2 pr-93">
        <span className="bg-[#EEEEEE] flex gap-1 px-2 rounded-sm py-0.5 text-[#545454] text-sm ">
          <IoMdLink className="size-5 m-auto text-[#1A8CFF]" />
          Q3 Financial Overview
        </span>
        <div className={`m-auto ${loading ? "animate-spin" : null} `}>
          <TfiReload
            className="size-3.5 text-[#FA6736] cursor-pointer"
            onClick={() => {
              setLoading(true);
              setInterval(() => {
                setLoading(false);
              }, 4000);
            }}
          />
        </div>
      </div>
      <div className="flex">
        <div className="bg-[#D2E0D4] m-auto border border-white px-8 py-1.5 flex gap-2">
          <PiArrowsSplitFill className="size-5 m-auto text-[#A3ACA3]" /> ABC
          <BsThreeDots className="size-4 m-auto text-[#AFAFAF]" />
        </div>
        <div
          className="bg-[#DCCFFC] border border-white px-12.5 py-1.5 flex gap-2 cursor-pointer"
          onClick={GuessTheNumberGame}
        >
          <PiArrowsSplitFill className="size-5 m-auto text-white" />
          Answer a Question
          <BsThreeDots className="size-4 m-auto text-[#AFAFAF]" />
        </div>
        <div className="bg-[#FAC2AF] border border-white px-5 text-center py-1.5 flex gap-2">
          <PiArrowsSplitFill className="size-5 m-auto text-white" />
          Extract
          <BsThreeDots className="size-4 m-auto text-[#AFAFAF]" />
        </div>
        <div
          className="bg-[#EEEEEE] border border-white m-auto px-48 py-2 cursor-pointer"
          onClick={() => {
            console.log(
              "Add new column but the code is not ready yet. I'll write it Soon"
            );
          }}
        >
          <PiPlus className="size-5" />
        </div>
      </div>
    </div>
  );
};

export default ThirdSpreadsheetHeader;
