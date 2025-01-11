import React from "react";

const SentimentComponent = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col w-full">
        <div className="flex flex-col">
          <div className="flex relative flex-col">
            {/* Sentiment Header */}
            <div className="text-2xl font-semibold text-slate-900 mb-4">
              Sentiment
            </div>

            {/* Key Events Section */}
            <div className="flex items-center gap-2 mb-4">
              <div className="text-xl font-semibold text-gray-700">
                Key Events
              </div>
              <img
                loading="lazy"
                src="../assets/frame.png"
                alt="Info icon"
                className="w-5 h-5"
              />
            </div>

            {/* Event Cards */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {/* Card 1 */}
              <div className="flex-1 min-w-[300px] p-5 bg-indigo-50 rounded-xl">
                <div className="flex gap-2">
                  <img
                    loading="lazy"
                    src="../assets/paper.png"
                    alt="News icon"
                    className="w-11 h-11"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-zinc-900 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex-1 min-w-[300px] p-5 bg-emerald-50 rounded-xl">
                <div className="flex gap-2">
                  <img
                    loading="lazy"
                    src="../assets/grow.png"
                    alt="Growth icon"
                    className="w-11 h-11"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-zinc-900 text-sm">
                      Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim tincidunt.
                    </div>
                    <div className="mt-2 text-sm text-slate-600">
                      Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis. Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a bibendum in. Sed vitae sit nisi viverra in a adipisinc metus quis del
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Analyst Estimates Section */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="text-xl font-semibold text-gray-700">
                  Analyst Estimates
                </div>
                <img
                  loading="lazy"
                  src="../assets/frame.png"
                  alt="Info icon"
                  className="w-5 h-5"
                />
              </div>

              <div className="flex flex-wrap gap-8">
                {/* Percentage Circle */}
                <div className="flex items-center justify-center w-[120px] h-[120px] bg-emerald-50 rounded-full">
                  <div className="text-emerald-500 text-4xl font-medium">
                    76<span className="text-base">%</span>
                  </div>
                </div>

                {/* Progress Bars */}
                <div className="flex-1 min-w-[240px] space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-base text-gray-500">Buy</span>
                    <div className="flex-1 h-2 bg-emerald-500 rounded-sm"></div>
                    <span className="w-12 text-sm text-gray-500">76%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-base text-gray-500">Hold</span>
                    <div className="w-[33px] h-2 bg-neutral-300 rounded-sm"></div>
                    <span className="w-12 text-sm text-gray-500">8%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-10 text-base text-gray-500">Sell</span>
                    <div className="w-[58px] h-2 bg-red-500 rounded-sm"></div>
                    <span className="w-12 text-sm text-gray-500">16%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentimentComponent;