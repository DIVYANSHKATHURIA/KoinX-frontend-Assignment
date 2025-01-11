import * as React from "react";
// import TrendingCoin from "./TrendingCoin";

export function Suggestions() {
    // const trendingCoins = [
    //     {
    //       icon: "https://cdn.builder.io/api/v1/image/assets/44b16d0df5df41bf8decd17666cfc628/b546e289ee85d5c06c29f8ee79e82ce6415d42c7bfeb7dd917db5bca6c4d446a?apiKey=44b16d0df5df41bf8decd17666cfc628&",
    //       name: "Ethereum",
    //       symbol: "ETH",
    //       percentage: "8.21"
    //     },
    //     {
    //       icon: "https://cdn.builder.io/api/v1/image/assets/44b16d0df5df41bf8decd17666cfc628/cfd1fa43a741ab103756230cc6fa72e2470c302e213c21e7f5063d199eae441a?apiKey=44b16d0df5df41bf8decd17666cfc628&",
    //       name: "Bitcoin",
    //       symbol: "BTC",
    //       percentage: "5.26"
    //     },
    //     {
    //       icon: "https://cdn.builder.io/api/v1/image/assets/44b16d0df5df41bf8decd17666cfc628/76c50c19000a1a2a8063bd257db9238b56f7d12267981cfb1d0d1affff0ba13d?apiKey=44b16d0df5df41bf8decd17666cfc628&",
    //       name: "Polygon",
    //       symbol: "MATIC",
    //       percentage: "4.32"
    //     }
    //   ];
      
    return (
        <div className="flex overflow-hidden flex-col min-w-[240px] pb-[821px] w-[427px] max-md:pb-24 max-md:max-w-full">
                  <div className="flex overflow-hidden flex-col max-w-full rounded-2xl min-h-[515px] w-[426px]">
                    <div className="flex flex-col items-center px-4 pt-8 pb-12 w-full bg-blue-600 rounded-lg min-h-[515px]">
                      <div className="flex flex-col items-center max-w-full text-center min-h-[182px] w-[327px]">
                        <div className="text-2xl font-bold leading-10 text-white w-[268px]">
                          Get Started with KoinX for FREE
                        </div>
                        <div className="mt-3.5 text-sm font-medium leading-6 text-zinc-100">
                          With our range of features that you can equip for free, KoinX
                          allows you to be more educated and aware of your tax reports.
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="../assets/main.png"
                        alt="KoinX features illustration"
                        className="object-contain mt-5 max-w-full aspect-[1.07] w-[179px]"
                      />
                      <button className="flex flex-col mt-5 max-w-full text-base font-semibold leading-7 rounded-lg text-slate-900 w-[237px]">
                        <div className="flex flex-col justify-center items-center px-6 py-2.5 bg-white rounded-lg min-h-[48px] max-md:px-5">
                          <div className="flex gap-1.5 items-center">
                            <div className="self-stretch my-auto">
                              Get Started for FREE
                            </div>
                            <img
                              loading="lazy"
                              src="../assets/arrow.png"
                              alt=""
                              className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                            />
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col p-6 mt-5 w-full bg-white rounded-lg max-w-[427px] max-md:px-5 max-md:max-w-full">
                    <div className="flex gap-10 justify-between items-center w-full text-2xl font-semibold leading-tight text-slate-900">
                      <div className="self-stretch my-auto">Trending Coins (24h)</div>
                      <div className="flex shrink-0 self-stretch my-auto h-[19px] w-[76px]" />
                    </div>
                    <div className="flex flex-col mt-6 w-full text-base font-medium">
                      {trendingCoins.map((coin, index) => (
                        <TrendingCoin key={index} {...coin} />
                      ))}
                    </div>
                  </div>
                </div>
    );
};