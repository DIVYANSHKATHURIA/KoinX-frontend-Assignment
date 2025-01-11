import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Transform CoinGecko API data to match our needs
const transformTrendingData = (apiData) => {
  if (!apiData?.coins) return [];
  
  return apiData.coins.map(coin => ({
    symbol: coin.item.symbol,
    // Handle price as a numeric value
    price: parseFloat(coin.item.data?.price_btc || 0).toFixed(8),
    // Use a default value if price change is undefined
    change: parseFloat(coin.item.data?.price_change_percentage_24h?.btc || 0),
    iconSrc: coin.item.large,
    // Use thumb as fallback if large is not available
    chartSrc: coin.item.data?.sparkline || null
  }));
};

const CryptoCarousel = ({ title = '', cards = [] }) => {
  const scrollRef = React.useRef(null);

  if (!Array.isArray(cards) || cards.length === 0) {
    return (
      <div className="mb-8 w-full">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="p-4 text-gray-500">No data available</div>
      </div>
    );
  }

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="mb-8 w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto pb-4 hide-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {cards.map((card, index) => (
          <div
            key={`${card.symbol}-${index}`}
            className="flex-none w-[300px] p-4 border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
          >
            <div className="flex items-center gap-3 mb-4">
              <img
                src={card.iconSrc || '/api/placeholder/32/32'}
                alt={`${card.symbol || 'Crypto'} icon`}
                className="w-8 h-8 rounded-full"
              />
              <span className="font-medium text-gray-900">{card.symbol || 'Unknown'}</span>
            </div>

            <div className="flex justify-between items-center mb-3">
              <div className="text-lg font-semibold text-gray-900">
                {parseFloat(card.price || 0).toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 8
                })} BTC
              </div>
              <div className={`font-medium ${(card.change || 0) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {(card.change || 0) >= 0 ? '+' : ''}{(card.change || 0).toFixed(2)}%
              </div>
            </div>

            {card.chartSrc ? (
              <img
                src={card.chartSrc}
                alt={`${card.symbol || 'Crypto'} price chart`}
                className="w-full h-20 object-cover"
              />
            ) : (
              <div className="w-full h-20 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-400">No chart available</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const CryptoSection = () => {
  const [trendingData, setTrendingData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrendingData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const transformed = transformTrendingData(data);
        setTrendingData(transformed);
      } catch (err) {
        setError('Failed to fetch trending data. Please try again later.');
        console.error('Error fetching trending data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTrendingData();
  }, []);

  if (error) {
    return (
      <div className="p-8 text-red-600 bg-red-50 rounded-lg">
        <p>{error}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="p-8 text-gray-600">
        <p>Loading cryptocurrency data...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col px-16 pt-16 pb-0.5 w-full bg-white max-md:px-5 max-md:max-w-full">
      <div className="flex flex-col max-md:max-w-full">
        <CryptoCarousel title="You May Also Like" cards={trendingData} />
        <CryptoCarousel title="Trending Coins" cards={trendingData} />
      </div>
    </div>
  );
};

export default CryptoSection;