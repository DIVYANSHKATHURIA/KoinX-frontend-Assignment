import * as React from "react";

export default function Performance() {
  return (
    <div className="container mx-auto px-4">
      {/* Performance Section */}
      <div className="flex flex-col px-6 pt-6 mt-5 max-w-full bg-white rounded-lg h-[632px] w-[881px] max-md:px-5">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold leading-tight text-slate-900">
            Performance
          </h2>
          <div className="mt-6">
            {/* Today's High/Low Section */}
            <div className="flex flex-wrap items-center w-full mb-4">
              <div className="flex flex-col text-gray-700 min-w-[85px] w-[116px]">
                <span className="text-sm">Today's Low</span>
                <span className="text-base font-medium mt-2">46,930.22</span>
              </div>
              <div className="flex flex-1 items-center px-2 py-5 min-w-[240px]">
                <div className="flex w-full bg-neutral-900 bg-opacity-30 rounded-lg h-[5px]">
                  <div className="flex-1 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-col text-right text-gray-700 min-w-[85px] w-[115px]">
                <span className="text-sm">Today's High</span>
                <span className="text-base font-medium mt-2">49,343.83</span>
              </div>
            </div>

            {/* 52W High/Low Section */}
            <div className="flex flex-wrap items-center w-full">
              <div className="flex flex-col text-gray-700 min-w-[85px] w-[121px]">
                <span className="text-sm">52W Low</span>
                <span className="text-base font-medium mt-2">16,930.22</span>
              </div>
              <div className="flex flex-1 items-center px-2 py-5 min-w-[240px]">
                <div className="flex w-full bg-neutral-900 bg-opacity-30 rounded-lg h-[5px]">
                  <div className="flex-1 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300 rounded-xl"></div>
                </div>
              </div>
              <div className="flex flex-col text-right text-gray-700 min-w-[85px] w-[114px]">
                <span className="text-sm">52W High</span>
                <span className="text-base font-medium mt-2">49,743.83</span>
              </div>
            </div>
          </div>

          {/* Fundamentals Section */}
          <h3 className="text-xl font-semibold text-gray-700 mt-6">Fundamentals</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4 mt-4">
            {/* Left Column */}
            <div className="flex flex-col">
              {[
                ["Bitcoin Price", "$16,815.46"],
                ["24h Low / 24h High", "$16,382.07 / $16,874.12"],
                ["7d Low / 7d High", "$16,382.07 / $16,874.12"],
                ["Trading Volume", "$23,249,202,782"],
                ["Market Cap Rank", "#1"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-4 border-b border-slate-300"
                >
                  <span className="text-sm text-slate-500">{label}</span>
                  <span className="text-sm text-gray-900">{value}</span>
                </div>
              ))}
            </div>

            {/* Right Column */}
            <div className="flex flex-col">
              {[
                ["Market Cap", "$323,507,290,047"],
                ["Market Cap Dominance", "38.343%"],
                ["Volume / Market Cap", "0.0718"],
                ["All-Time High", "$69,044.77 (-75.6%)"],
                ["All-Time Low", "$67.81 (+24729.1%)"],
              ].map(([label, value], idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center py-4 border-b border-slate-300"
                >
                  <span className="text-sm text-slate-500">{label}</span>
                  <span className="text-sm text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
