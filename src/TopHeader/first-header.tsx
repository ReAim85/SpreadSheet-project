import { FaAngleRight } from "react-icons/fa6";
import { BsThreeDots } from "react-icons/bs";
import { BellIcon } from "./bellIconWIthNoti";
import { FiSearch } from "react-icons/fi";
import { BiSolidDockRight } from "react-icons/bi";
import { Sidebar } from "./sidebar";
import { useState } from "react";
const FirstSpreadsheetHeader = () => {
  type User = {
    email: string;
    userName: string;
  };

  const user: User = {
    email: "vishal123@gmail.com".slice(0, 8),
    userName: "Vishal Jha",
  };
  const [showSideBar, setShowSideBar] = useState(false);

  return (
    // first top bar
    <div className="w-full bg-white border-b border-[#EEEEEE] px-4 py-2 flex justify-between items-center shadow-sm">
      <div className="gap-3">
        <div className="text-sm flex">
          {/*left side design*/}
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

      {/* right side design */}
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
        <div className="pr-2">
          <BellIcon />
        </div>
        <div
          className="flex gap-2 mr-5 cursor-pointer"
          onClick={() => setShowSideBar(!showSideBar)}
        >
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-md font-semibold text-white">
            VJ
          </div>
          <div>
            <div className="text-[15px] text-[#121212] ">{user.userName}</div>
            <div className="-mt-2 text-[#757575]">{user.email + "..."}</div>
          </div>
        </div>
        <div>
          <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
        </div>
      </div>
    </div>
  );
};

export default FirstSpreadsheetHeader;
