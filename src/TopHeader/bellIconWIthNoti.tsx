import { GoBell } from "react-icons/go";
import { futureUpdates } from "./futureUpdates";
import { useState } from "react";

export const BellIcon = () => {
  const [showNotification, setShowNotification] = useState(false);
  return (
    <div
      className="relative"
      onClick={() => setShowNotification(!showNotification)}
    >
      <span
        className="absolute -top-2.5 -right-3 inline-flex items-center justify-center px-1.5 py-1
          border-2 border-white min-w-[1.25rem] text-xs font-bold leading-none text-[#F6F6F6] bg-[#4B6A4F] rounded-full"
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
              <div className="absolute right-3 top-1 font-bold cursor-pointer p-4">
                X
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
