import * as React from "react";
import CryptoCard from "./CryptoCard";

function CryptoCarousel({ title, cards }) {
  return (
    <div className="flex flex-col pb-8 w-full max-md:max-w-full">
      <div className="w-full text-2xl font-semibold pr-[1090px] text-neutral-800 max-md:pr-5 max-md:max-w-full">
        {title}
      </div>
      <div className="flex relative flex-wrap justify-center items-start mt-5 w-full max-md:max-w-full">
        <div className="flex overflow-hidden z-0 flex-col flex-1 shrink self-stretch my-auto w-full basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-wrap items-start w-full max-md:max-w-full">
            {cards.map((card, index) => (
              <CryptoCard key={index} {...card} />
            ))}
          </div>
        </div>
        <div className="flex absolute z-0 justify-center items-center py-1.5 inset-y-[58px] min-h-[44px] right-[-11px] w-[27px]">
          <div className="flex overflow-hidden flex-col self-stretch my-auto w-[34px]">
            <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[34px]">
              <img loading="lazy" src="../assets/Nextslide.png" />
            </div>
          </div>
        </div>
        <div className="flex absolute z-0 justify-center items-center py-1.5 inset-y-[58px] min-h-[44px] right-[1292px] rotate-[3.141592653589793rad] w-[27px]">
          <div className="flex overflow-hidden flex-col self-stretch my-auto w-[34px]">
            <div className="flex overflow-hidden flex-col justify-center items-center w-full min-h-[34px]">
              <img loading="lazy" src="../assets/Prevslide.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CryptoCarousel;