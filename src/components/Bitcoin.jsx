import * as React from "react";

export const Bitcoin = () => {
  return (
    <div className="flex flex-col">
      {/* About Bitcoin Section */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-semibold text-slate-900 mb-6">
          About Bitcoin
        </h2>

        {/* What is Bitcoin Section */}
        <div className="flex flex-col space-y-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              What is Bitcoin?
            </h3>
            <p className="text-base font-medium leading-7 text-zinc-700">
              Bitcoin's price today is US$16,951.82, with a 24-hour trading volume
              of $19.14 B. BTC is +0.36% in the last 24 hours. It is currently
              -7.70% from its 7-day all-time high of $18,366.66, and 3.40% from
              its 7-day all-time low of $16,394.75. BTC has a circulating supply
              of 19.24 M BTC and a max supply of 21 M BTC.
            </p>
          </div>

          <div className="border-b border-slate-300 border-opacity-60" />

          {/* Lorem Ipsum Section */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-2.5">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="text-base font-medium leading-7 text-zinc-700">
              Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis
              tristique pharetra. Diam id et lectus urna et tellus aliquam dictum
              at. Viverra diam suspendisse enim facilisi diam ut sed. Quam
              scelerisque fermentum sapien morbi sodales odio sed rhoncus.
              Ultricies urna volutpat pendisse enim facilisi diam ut sed. Quam
              scelerisque fermentum sapien morbi sodales odio sed rhoncus.
              <br />
              <br />
              Diam praesent massa dapibus magna aliquam a dictumst volutpat.
              Egestas vitae pellentesque auctor amet. Nunc sagittis libero
              adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
              velit in senectus enim dui. Turpis tristique placerat interdum sed
              volutpat.
              <br />
              <br />
              Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
              massa vel convallis duis ac. Mi adipiscing semper scelerisque
              porttitor pulvinar nunc risus.
            </p>
          </div>

          <div className="border-b border-slate-300 border-opacity-60" />

          {/* Holding Bitcoin Section */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Already Holding Bitcoin?
            </h2>
            <div className="flex flex-wrap gap-4">
              {/* Calculate Profits Card */}
              <div className="flex-1 min-w-[280px] bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg shadow-sm">
                <div className="flex gap-4 p-4">
                  <img
                    loading="lazy"
                    src="../assets/investing.png"
                    alt="Calculate profits illustration"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Calculate your Profits
                    </h3>
                    <button className="flex items-center gap-1.5 bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm">
                      Check Now
                      <img
                        src="../assets/Arrow - Right.png"
                        alt=""
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Calculate Tax Card */}
              <div className="flex-1 min-w-[280px] bg-gradient-to-r from-orange-500 to-orange-700 rounded-lg shadow-sm">
                <div className="flex gap-4 p-4">
                  <img
                    loading="lazy"
                    src="../assets/tax.png"
                    alt="Calculate tax liability illustration"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                  <div className="flex flex-col justify-center">
                    <h3 className="text-xl font-bold text-white mb-4">
                      Calculate your tax liability
                    </h3>
                    <button className="flex items-center gap-1.5 bg-white text-slate-900 px-4 py-2 rounded-lg font-semibold text-sm">
                      Check Now
                      <img
                        src="../assets/Arrow - Right.png"
                        alt=""
                        className="w-5 h-5"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-b border-slate-300 border-opacity-60" />

          {/* Final Section */}
          <div className="text-base font-medium leading-7 text-zinc-700">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
          </div>
        </div>
      </div>
    </div>
  );
};