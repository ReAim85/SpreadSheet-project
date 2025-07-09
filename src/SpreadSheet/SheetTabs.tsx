import { useState } from "react";

const tabs = ["All Orders", "Pending", "Reviewed", "Arrived"];

export const SheetTabs = () => {
  const [activeTab, setActiveTab] = useState("All Orders");

  return (
    <div className="flex items-center gap-1 px-4 py- border-t-2 border-[#EEEEEE] bg-[#ffffff] text-sm">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-1.5 ${
            activeTab === tab
              ? "bg-[#E8F0E9] border-t-2 border-[#4B6A4F] text-[#3E5741] font-semibold"
              : "border-transparent text-[#757575]"
          }`}
        >
          {tab}
        </button>
      ))}
      <button
        onClick={() => {
          const newTab = `Sheet ${tabs.length + 1}`;
          tabs.push(newTab); // optional: dynamic tabs
          setActiveTab(newTab);
        }}
        className="ml-2 px-3 py-1 text-xl text-gray-500 hover:bg-gray-200 rounded"
      >
        +
      </button>
    </div>
  );
};
