import * as React from "react";

function CryptoCard({ symbol, price, change, iconSrc, chartSrc }) {
  const isPositiveChange = change > 0;
  
  return (
    <div className="flex flex-col grow shrink pr-2.5 min-w-[240px] w-[210px]">
      <div className="flex flex-col justify-center p-4 w-full rounded-xl border border-solid border-neutral-200">
        <div className="flex items-start w-full">
          <div className="flex flex-col pb-1 w-[218px]">
            <div className="flex flex-col w-full">
              <div className="flex flex-col items-start pr-28 pb-3 max-md:pr-5">
                <div className="flex justify-between items-center">
                  <div className="flex self-stretch my-auto">
                    <div className="flex flex-col pr-2 w-[33px]">
                      <img loading="lazy" src={iconSrc} alt={`${symbol} icon`} className="object-contain rounded-xl aspect-square w-[26px]" />
                    </div>
                    <div className="self-stretch pt-px my-auto text-base whitespace-nowrap text-neutral-800">
                      {symbol}
                    </div>
                  </div>
                  <div className={`flex justify-center items-center self-stretch px-1 py-1 my-auto text-xs whitespace-nowrap rounded-sm min-h-[20px] ${isPositiveChange ? 'text-emerald-400 bg-emerald-500 bg-opacity-10' : 'text-red-400 bg-red-400 bg-opacity-10'}`}>
                    <div className="self-stretch my-auto">
                      {change > 0 ? '+' : ''}{change}%
                    </div>
                  </div>
                </div>
              </div>
              <div className="pr-36 text-xl font-medium leading-tight whitespace-nowrap text-neutral-900 max-md:pr-5">
                ${price}
              </div>
            </div>
            <div className="flex overflow-hidden items-start max-w-full w-[200px]">
              <div className="flex overflow-hidden flex-col justify-center items-center px-8 min-h-[60px] w-[200px] max-md:px-5">
                <img loading="lazy" src={chartSrc} alt={`${symbol} price chart`} className="object-contain w-full aspect-[2.33]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCard;