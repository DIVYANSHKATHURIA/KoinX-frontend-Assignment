import * as React from "react";
import { Navigation } from "./components/Navigation";
import { CryptoStats } from "./components/CryptoStats";
import { KoinXCard } from "./components/KoinXCard";
import { Trending, TrendingCoinsSection } from "./components/Trending";
import Overview from "./components/Overview";
import Performance from "./components/Performance";
import { Bitcoin } from "./components/Bitcoin";
import SentimentComponent from "./components/SentimentComponent";
import { Tokenomics } from "./components/Tokenomics";
import { Team } from "./components/Team";
import CryptoSection from "./components/CryptoSection";

export const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <div className="overflow-x-auto ml-4 text-sm">
        Cryptocurrencies &gt;&gt; <strong>Bitcoin</strong>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Two Column Layout */}
        <div className="flex gap-8">
          {/* Left Column (2/3 width) */}
          <div className="w-2/3 flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <CryptoStats />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Overview />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Performance />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <SentimentComponent />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Bitcoin />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Tokenomics />
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <Team />
            </div>
            
          </div>

          {/* Right Column (1/3 width) */}
          <div className="w-1/3 flex flex-col gap-6">
            <div className="bg-white rounded-2xl shadow-sm">
              <KoinXCard />
            </div>
            <div className="bg-white rounded-2xl shadow-sm">
              <TrendingCoinsSection />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 shadow-sm">
              <CryptoSection />
            </div>
    </div>
  );
};

export default App;