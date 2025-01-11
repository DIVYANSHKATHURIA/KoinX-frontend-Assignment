import React from "react";

export const Tokenomics = () => {
    return (
        <div className="flex flex-col p-6 mt-5 max-w-[881px] bg-white rounded-lg shadow-md min-h-[539px]">
            {/* Header */}
            <h2 className="text-2xl font-semibold text-slate-900">Tokenomics</h2>

            {/* Initial Distribution Section */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold text-stone-900 mb-4">Initial Distribution</h3>
                <div className="flex items-center gap-6">
                    {/* Chart */}
                    <img
                        className="w-44 h-44 object-contain"
                        src="../assets/stats.png"
                        alt="Initial distribution chart"
                    />
                    {/* Legend */}
                    <div>
                        <div className="flex items-center mb-4">
                            <span className="w-3 h-3 bg-sky-500 rounded-sm mr-2"></span>
                            <p className="text-base text-neutral-800">Crowdsale investors: 80%</p>
                        </div>
                        <div className="flex items-center">
                            <span className="w-3 h-3 bg-amber-500 rounded-sm mr-2"></span>
                            <p className="text-base text-neutral-800">Foundation: 20%</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="mt-6 text-base text-zinc-700 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
                vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
                amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
                eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse
                urna felis augue. Gravida aliquam fermentum augue eu. Imperdiet
                bibendum amet aliquam donec. Eget justo dui metus odio rutrum. Vel
                ipsum eget in at curabitur sem posuere facilisis vitae. Sed lorem sit
                mauris id eget arcu ut. Vulputate ipsum aliquet odio nisi eu ac risus.
            </p>
        </div>
    );
};
