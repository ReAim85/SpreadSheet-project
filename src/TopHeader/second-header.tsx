import { FaSort, FaFilter, FaPlus, FaShareAlt } from "react-icons/fa";
import { RiDownloadLine, RiUploadLine } from "react-icons/ri";
import { MdViewColumn } from "react-icons/md";
const SecondSpreadsheetHeader = () => {
  return (
    <div className="w-full border-b border-[#EEEEEE] bg-white px-4 py-2 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <button className="flex items-center gap-1 hover:text-blue-600">
            Tool bar {">>"}
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">
            <MdViewColumn /> Hide fields
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">
            <FaSort /> Sort
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">
            <FaFilter /> Filter
          </button>
          <button className="flex items-center gap-1 hover:text-blue-600">
            Cell view
          </button>
        </div>
      </div>

      {/* Right Side Actions */}
      <div className="flex items-center gap-3 text-sm">
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <RiUploadLine /> Import
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <RiDownloadLine /> Export
        </button>
        <button className="flex items-center gap-1 text-gray-600 hover:text-blue-600">
          <FaShareAlt /> Share
        </button>
        <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 flex items-center gap-1">
          <FaPlus /> New Action
        </button>
      </div>
    </div>
  );
};

export default SecondSpreadsheetHeader;
