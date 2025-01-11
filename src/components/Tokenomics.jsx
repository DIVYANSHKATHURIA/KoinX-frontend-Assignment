import * as React from "react";

export const Tokenomics = () => {
    return (
        <div className="flex flex-col pt-6 pb-16 pl-6 mt-5 max-w-full bg-white rounded-lg min-h-[539px] w-[881px] max-md:pl-5">
            <div className="z-10 py-px w-full text-2xl font-semibold leading-tight whitespace-nowrap text-slate-900 max-md:pr-5">
              Tokenomics
            </div>
            <div className="flex flex-col mt-6 w-full min-h-[227px] max-md:max-w-full">
              <div className="flex flex-col max-w-full w-[810px]">
                <div className="w-full text-xl font-semibold leading-9 pr-[531px] text-stone-900 max-md:pr-5 max-md:max-w-full">
                  Initial Distribution
                </div>
                <div className="flex flex-wrap gap-6 items-center pr-96 w-full min-h-[210px] max-md:pr-5 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="../assets/stats.png"
                    alt="Initial distribution chart"
                    className="object-contain shrink-0 self-stretch my-auto aspect-square w-[179px]"
                  />
                  <div className="flex gap-6 items-center self-stretch my-auto">
                    <div className="flex flex-col justify-center self-stretch my-auto min-h-[111px]">
                      <div className="flex">
                        <div className="flex flex-col justify-center pr-2.5 w-[21px]">
                          <div className="flex w-3 h-3 bg-sky-500 rounded-md min-h-[12px]" />
                        </div>
                        <div className="my-auto text-base leading-none text-neutral-800">
                          Crowdsale investors: 80%
                        </div>
                      </div>
                      <div className="flex pr-16 mt-4 max-md:pr-5">
                        <div className="flex flex-col justify-center pr-2.5 w-[21px]">
                          <div className="flex w-3 h-3 bg-amber-500 rounded-md min-h-[12px]" />
                        </div>
                        <div className="my-auto text-base leading-none text-neutral-800">
                          Foundation: 20%
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-base font-medium leading-7 text-zinc-700 max-md:max-w-full">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique
                ornare vestibulum nunc dignissim vel consequat. Leo etiam
                nascetur bibendum amet enim sit eget leo amet. At metus orci
                augue fusce eleifend lectus eu fusce adipiscing. Volutpat
                ultrices nibh sodales massa habitasse urna felis augue. Gravida
                aliquam fermentum augue eu. Imperdiet bibendum amet aliquam
                donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
                curabitur sem posuere facilisis vitae. Sed lorem sit mauris id
                eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
              </div>
            </div>
          </div>
    );
};