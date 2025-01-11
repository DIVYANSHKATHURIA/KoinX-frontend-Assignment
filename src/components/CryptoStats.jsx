import React, { useState, useEffect } from "react";

export function CryptoStats() {
  const [activeTimeFrame, setActiveTimeFrame] = useState("7D");
  const [selectedCoin, setSelectedCoin] = useState(null);
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [priceData, setPriceData] = useState({});
  const timeFrames = ["1H", "24H", "7D", "1M", "3M", "6M", "1Y", "ALL"];

  // Fetch trending coins
  useEffect(() => {
    const fetchTrendingCoins = async () => {
      try {
        const response = await fetch("https://api.coingecko.com/api/v3/search/trending");
        const data = await response.json();
        // Get top 3 trending coins
        const top3Coins = data.coins.slice(0, 3).map(coin => ({
          id: coin.item.id,
          name: coin.item.name,
          symbol: coin.item.symbol.toUpperCase(),
          icon: coin.item.large,
          rank: coin.item.market_cap_rank || 'N/A'
        }));
        setTrendingCoins(top3Coins);
        setSelectedCoin(top3Coins[0]); // Set first coin as default
      } catch (error) {
        console.error("Error fetching trending coins:", error);
      }
    };
    fetchTrendingCoins();
  }, []);

  // Fetch price data for trending coins
  useEffect(() => {
    const fetchPriceData = async () => {
      if (trendingCoins.length === 0) return;
      
      try {
        const ids = trendingCoins.map(coin => coin.id).join(',');
        const response = await fetch(
          `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=inr,usd&include_24hr_change=true`
        );
        const data = await response.json();
        setPriceData(data);
      } catch (error) {
        console.error("Error fetching price data:", error);
      }
    };

    fetchPriceData();
    const interval = setInterval(fetchPriceData, 60000);
    return () => clearInterval(interval);
  }, [trendingCoins]);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num?.toFixed(2) || 0);
  };

  if (!selectedCoin) return <div>Loading...</div>;

  const coinPriceData = priceData[selectedCoin.id];

  return (
    <div className="flex flex-col justify-center px-6 py-7 w-full bg-white rounded-lg max-md:pl-5">
      {/* Coin Selection Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        {trendingCoins.map((coin) => (
          <button
            key={coin.id}
            onClick={() => setSelectedCoin(coin)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              selectedCoin.id === coin.id
                ? "bg-blue-50 text-blue-600"
                : "hover:bg-gray-50"
            }`}
          >
            <img
              src={coin.icon}
              alt={`${coin.name} icon`}
              className="w-6 h-6 rounded-full"
            />
            <span className="font-medium">{coin.symbol}</span>
          </button>
        ))}
      </div>
  
      {/* Crypto Header */}
      <div className="flex flex-wrap gap-6 items-center">
        <div className="flex items-center gap-4 flex-grow min-w-0">
          <img
            src={selectedCoin.icon}
            alt={`${selectedCoin.name} icon`}
            className="w-9 h-9 rounded-full flex-shrink-0"
          />
          <div className="flex flex-col min-w-0">
            <span className="text-lg font-semibold text-slate-900 truncate">
              {selectedCoin.name}
            </span>
            <span className="text-sm text-gray-500">{selectedCoin.symbol}</span>
          </div>
        </div>
        <div className="px-3 py-1.5 text-white bg-slate-500 rounded-md text-sm">
          Rank #{selectedCoin.rank}
        </div>
      </div>
  
      {/* Price Display */}
      <div className="flex flex-wrap gap-4 items-start mt-6">
        <div className="flex flex-col text-slate-900">
          <div className="text-2xl font-semibold">${formatNumber(coinPriceData?.usd)}</div>
          <div className="text-base">₹ {formatNumber(coinPriceData?.inr)}</div>
        </div>
        <div
          className={`flex items-center px-2 py-1.5 text-sm rounded ${
            (coinPriceData?.usd_24h_change || 0) >= 0
              ? "bg-emerald-50 text-emerald-500"
              : "bg-red-50 text-red-500"
          }`}
        >
          <div>
            {Math.abs(coinPriceData?.usd_24h_change || 0).toFixed(2)}% (24H)
          </div>
        </div>
      </div>
  
      <div className="mt-6 border border-zinc-200" />
  
      {/* Time Frame Buttons */}
      <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
        <span className="text-base font-semibold">{selectedCoin.name} Price Chart (USD)</span>
        <div className="flex gap-2">
          {timeFrames.map((frame) => (
            <button
              key={frame}
              onClick={() => setActiveTimeFrame(frame)}
              className={`px-2 py-1 rounded ${
                frame === activeTimeFrame
                  ? "bg-indigo-100 text-blue-700"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {frame}
            </button>
          ))}
        </div>
      </div>
  
      {/* TradingView Chart */}
      <div className="mt-8">
        <iframe
          title={`${selectedCoin.name} Price Chart`}
          src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_chart&symbol=${selectedCoin.symbol}USDT&interval=${
            activeTimeFrame === "1H" ? "60" : "D"
          }`}
          style={{ width: "100%", height: "400px" }}
          frameBorder="0"
        />
      </div>
    </div>
  );
  
}