import React from "react";

  export function KoinXCard() {
    return (
      <div className="flex overflow-hidden flex-col min-w-[240px] w-[427px] max-md:max-w-full">
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
                  <div className="self-stretch my-auto">Get Started for FREE</div>
                  <img
                    loading="lazy"
                    src="../assets/Arrow - Right.png"
                    alt="Arrow icon"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }