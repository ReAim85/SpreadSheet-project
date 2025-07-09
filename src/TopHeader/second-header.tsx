import SplitArrow from "./icons/split arrow.png";
import { RiDownloadLine, RiUploadLine } from "react-icons/ri";
import { RiArrowRightDoubleFill, RiArrowLeftDoubleFill } from "react-icons/ri";
import { MdFilterList } from "react-icons/md";
import { TbArrowsSort } from "react-icons/tb";
import { FaRegShareFromSquare, FaCheck } from "react-icons/fa6";
import { TbArrowAutofitHeight } from "react-icons/tb";
import { VscEyeClosed, VscEye } from "react-icons/vsc";
import { useState } from "react";
import { handleExport } from "./exportButtonLogin";
import { useCopyToClipboard } from "usehooks-ts";

const SecondSpreadsheetHeader = () => {
  const [showToolBar, setShowToolBar] = useState(true);
  const [value, copy] = useCopyToClipboard();
  const [hideField, setHideField] = useState(false);
  const [copied, setCopied] = useState(false);
  console.log(value);
  return (
    <div className="w-full border-b border-[#EEEEEE] bg-white px-4 py-2 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-5 text-sm text-[#121212]">
          <button
            className="flex items-center cursor-pointer gap-1 hover:text-blue-600"
            onClick={() => setShowToolBar(!showToolBar)}
          >
            Tool bar
            <div>
              {showToolBar ? (
                <RiArrowRightDoubleFill className="size-5 border-r border-[#EEEEEE]" />
              ) : (
                <RiArrowLeftDoubleFill className="size-5 border-r border-[#EEEEEE]" />
              )}
            </div>
          </button>
          {showToolBar ? (
            <div className="flex gap-5">
              <button
                className="flex items-center gap-1 hover:text-blue-600 cursor-pointer"
                onClick={() => setHideField(!hideField)}
              >
                {hideField ? (
                  <div className="flex gap-1">
                    <VscEye className="size-5" />
                    Show Fields
                  </div>
                ) : (
                  <div className="flex gap-1">
                    <VscEyeClosed className="size-5" />
                    Hide fields
                  </div>
                )}
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                <TbArrowsSort className="size-5" /> Sort
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                <MdFilterList className="size-5" /> Filter
              </button>
              <button className="flex items-center gap-1 hover:text-blue-600 cursor-pointer">
                <TbArrowAutofitHeight className="size-5" />
                Cell view
              </button>
            </div>
          ) : null}
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 text-sm">
        <label className="flex items-center gap-1 text-gray-600 hover:text-blue-600 border border-[#EEEEEE] p-1.5 rounded-md cursor-pointer">
          <RiDownloadLine className="size-5 " /> Import
          <input type="file" className="hidden " />
        </label>
        <button
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 border border-[#EEEEEE] p-1.5 rounded-md cursor-pointer"
          onClick={handleExport}
        >
          <RiUploadLine className="size-5" />
          Export
        </button>
        <button
          className="flex items-center gap-1 text-gray-600 hover:text-blue-600 border border-[#EEEEEE] p-1.5 rounded-md cursor-pointer"
          onMouseLeave={() => setCopied(false)}
          onClick={() => {
            copy("https://youtu.be/xvFZjo5PgG0?si=kpVkSaZdWHCy3254");
            setCopied(true);
          }}
        >
          {copied ? (
            <FaCheck className="size-5" />
          ) : (
            <FaRegShareFromSquare className="size-5" />
          )}
          Share
        </button>
        <button className="bg-[#4B6A4F] text-white py-2 px-6 rounded-lg border-2 border-[#000000] flex items-center gap-1 cursor-pointer">
          <img src={SplitArrow} /> New Action
        </button>
        <div className="absolute"></div>
      </div>
    </div>
  );
};

export default SecondSpreadsheetHeader;
