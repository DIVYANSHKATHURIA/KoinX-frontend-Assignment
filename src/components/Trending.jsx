import React, { useState, useEffect } from 'react';

// TrendingCoin.jsx
function TrendingCoin({ coin }) {
    const priceChange = coin.data.price_change_percentage_24h?.usd || 0;
    
    return (
      <div className="flex justify-between items-center w-full mb-4">
        <div className="flex gap-2 items-center">
          <img 
            src={coin.thumb} 
            alt={coin.name} 
            className="w-6 h-6 rounded-full"
          />
          <div className="text-lg font-medium text-slate-900">
            {coin.name} ({coin.symbol.toUpperCase()})
          </div>
          <div className={`text-sm font-medium ${priceChange >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
            {priceChange >= 0 ? `+${priceChange.toFixed(2)}%` : `${priceChange.toFixed(2)}%`}
          </div>
        </div>
      </div>
    );
  }
  
  // TrendingCoinsSection.jsx
  
  export function TrendingCoinsSection() {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTrendingCoins = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch trending coins');
          }
  
          const data = await response.json();
          // Take top 3 trending coins
          setTrendingCoins(data.coins.slice(0, 3));
          setError(null);
        } catch (err) {
          console.error("Error fetching trending coins:", err);
          setError('Failed to load trending coins');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchTrendingCoins();
      // Refresh data every 5 minutes
      const interval = setInterval(fetchTrendingCoins, 300000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col p-6 w-full bg-white rounded-lg max-w-[427px] max-md:px-5 max-md:max-w-full">
        <div className="flex gap-10 justify-between items-center w-full text-2xl font-semibold leading-tight text-slate-900">
          <div className="self-stretch my-auto">Trending Coins (24h)</div>
        </div>
        
        <div className="flex flex-col mt-6 w-full text-base font-medium">
          {isLoading ? (
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center py-4">{error}</div>
          ) : (
            trendingCoins.map((coin, index) => (
              <TrendingCoin key={index} coin={coin.item} />
            ))
          )}
        </div>
      </div>
    );
  }
  
  // Optional - you might want to create a custom hook for reusability
  function useTrendingCoins() {
    const [trendingCoins, setTrendingCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchTrendingCoins = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(
            "https://api.coingecko.com/api/v3/search/trending"
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch trending coins');
          }
  
          const data = await response.json();
          setTrendingCoins(data.coins.slice(0, 3));
          setError(null);
        } catch (err) {
          setError('Failed to load trending coins');
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchTrendingCoins();
      const interval = setInterval(fetchTrendingCoins, 300000);
      return () => clearInterval(interval);
    }, []);
  
    return { trendingCoins, isLoading, error };
  }