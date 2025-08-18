import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#ffffff] shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
          <button
            className="mb-4 text-red-500 font-semibold cursor-pointer "
            onClick={() => setIsOpen(false)}
          >
             ✖
          </button>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-4 text-[#000000]">Sidebar </h2>
          <ul>
            <li className="mb-2 text-center hover:bg-gradient-to-r from-[#128DFF] to-[#1444EF]">
              <a
                href="#"
                className="block p-2  rounded border-1 border-[#128DFF] text-[#128DFF] hover:text-[#ffffff] font-semibold"
              >
                Link 1
              </a>
            </li>
            <li className="mb-2 text-center hover:bg-gradient-to-r from-[#128DFF] to-[#1444EF]">
              <a
                href="#"
                className="block p-2  rounded border-1 border-[#128DFF] text-[#128DFF] hover:text-[#ffffff] font-semibold"
              >
                Link 2
              </a>
            </li>
            <li className="mb-2 text-center hover:bg-gradient-to-r from-[#128DFF] to-[#1444EF]">
              <a
                href="#"
                className="block p-2  rounded border-1 border-[#128DFF] text-[#128DFF] hover:text-[#ffffff] font-semibold"
              >
                Link 3
              </a>
            </li>
            <li className="mb-2 text-center hover:bg-gradient-to-r from-[#128DFF] to-[#1444EF]">
              <a
                href="#"
                className="block p-2  rounded border-1 border-[#128DFF] text-[#128DFF] hover:text-[#ffffff] font-semibold"
              >
                Link 4
              </a>
            </li>
            <li className="text-center hover:bg-gradient-to-r from-[#128DFF] to-[#1444EF]">
              <a
                href="#"
                className="block p-2  rounded border-1 border-[#128DFF] text-[#128DFF] hover:text-[#ffffff] font-semibold"
              >
                Link 5
              </a>
            </li>
          </ul>
        </div>
      </div>
  
      <div className="flex-1 flex items-center justify-center bg-[#F7F7F7]">
        <button
          className=" font-semibold px-4 py-2 bg-gradient-to-r from-[#128DFF] to-[#1444EF] text-white rounded shadow cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          Open Sidebar
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
