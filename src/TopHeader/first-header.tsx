import { FaAngleRight } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { GoBell } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { BiSolidDockRight } from "react-icons/bi";
import { futureUpdates } from "./futureUpdates";
import { useState } from "react";
const FirstSpreadsheetHeader = () => {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="w-full bg-white border-b border-[#EEEEEE] px-4 py-2 flex justify-between items-center shadow-sm">
      <div className="gap-3">
        <div className="text-sm flex">
          <div className="pr-3">
            <BiSolidDockRight className="size-5 text-[#618666]" />
          </div>
          <span className=" text-[#AFAFAF] flex ">
            Workspace <FaAngleRight className="w-8 h-3 mt-1" />
            Folder 2 <FaAngleRight className="w-8 h-3 mt-1" />
          </span>
          <div className="font-medium">Spreadsheet 3</div>
          <BsThreeDots className="w-8 h-4 pl-1 text-[#AFAFAF]" />
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex gap-5 items-center text-sm">
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <FiSearch className="text-[#AFAFAF] text-lg" />
          </div>
          <input
            type="search"
            className="py-2 pl-10 text-sm text-[#757575] border border-[#E2E2E2] rounded-lg bg-[#F6F6F6]"
            placeholder="Search within sheet"
          />
        </div>
        <div
          className="relative"
          onClick={() => setShowNotification(!showNotification)}
        >
          <span
            className="absolute -top-2.5 -right-3 inline-flex items-center justify-center px-1.5 py-1
          border-2 border-white min-w-[1.25rem] text-xs font-bold leading-none text-red-100 bg-[#4B6A4F] rounded-full"
          >
            {futureUpdates.length}
          </span>
          <GoBell className="size-6 cursor-pointer" />
          {showNotification && (
            <div className="absolute top-7 -left-60 border border-[#4B6A4F]">
              <div
                className="bg-teal-100 border-t-4 w-80 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
                role="alert"
              >
                <div className="flex">
                  <div className="py-1">
                    <svg
                      className="fill-current h-6 w-6 text-teal-500 mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
                    </svg>
                  </div>
                  <div>
                    {
                      <div>
                        {futureUpdates.map((update, idx) => (
                          <div key={idx} className="mb-2">
                            <p className="font-semibold">{update.title}</p>
                            {update.priority == "Medium" ? (
                              <span className="text-sm rounded-lg text-white px-1.5 py-0.5  bg-yellow-600">
                                {update.priority}
                              </span>
                            ) : update.priority == "High" ? (
                              <span className="text-sm rounded-lg text-white px-1.5 py-0.5 bg-red-500">
                                {update.priority}
                              </span>
                            ) : (
                              <span className="text-sm rounded-lg text-white px-1.5 py-0.5 bg-green-700">
                                {update.priority}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs font-semibold text-white">
          JD
        </div>
      </div>
    </div>
  );
};

export default FirstSpreadsheetHeader;
