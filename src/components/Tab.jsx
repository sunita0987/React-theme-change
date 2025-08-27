import React, { useState } from "react";
import { TAB_DATA } from "../utils/helper";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h2 className="text-3xl font-regular text-gray-700 mb-10">Tabs</h2>
      <div className="bg-white rounded-2xl shadow-md w-full max-w-xl p-5">
        <div className="flex space-x-4 border-b mb-4">
          {TAB_DATA.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-sm font-medium rounded-t-md cursor-pointer ${
                activeTab === tab.id
                  ? "bg-gray-100 text-gray-800 border-b-2 border-[#128DFF]"
                  : "text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="text-gray-600 text-sm leading-relaxed">
          {TAB_DATA.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
