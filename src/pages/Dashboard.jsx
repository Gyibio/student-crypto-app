import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LoadingSpinner from '../components/common/LoadingSpinner';

export default function MarketDashboard() {
  const [cryptos, setCryptos] = useState([]);
  const [activeTab, setActiveTab] = useState('all'); // 'all', 'new', or 'gainers'
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCryptos = async () => {
      setLoading(true);
      try {
        // Map tab names to your backend endpoints
        const endpoint = activeTab === 'all' ? '' : `/${activeTab}`;
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/crypto${endpoint}`);
        setCryptos(response.data);
      } catch (error) {
        console.error("Error fetching crypto data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCryptos();
  }, [activeTab]); // Re-fetch when user clicks a different tab

  return (
    <div className="min-h-screen bg-black text-white p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Market Trends</h1>

        {/* --- Tab Navigation --- */}
        <div className="flex gap-8 border-b border-[#2d2d2d] mb-6">
          {['all', 'gainers', 'new'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 text-sm font-bold capitalize transition-all ${
                activeTab === tab 
                ? "border-b-2 border-[#0052FF] text-[#0052FF]" 
                : "text-[#8c8c8c] hover:text-white"
              }`}
            >
              {tab === 'all' ? 'All Assets' : tab === 'gainers' ? 'Top Gainers' : 'New Listings'}
            </button>
          ))}
        </div>

        {/* --- Market Table --- */}
        {loading ? (
          <div className="py-20 flex justify-center">
            <div className="w-8 h-8 border-4 border-[#0052FF] border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-[#8c8c8c] text-xs uppercase tracking-wider border-b border-[#2d2d2d]">
                  <th className="pb-4 font-medium">Name</th>
                  <th className="pb-4 font-medium">Price</th>
                  <th className="pb-4 font-medium text-right">24h Change</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#121212]">
                {cryptos.map((coin) => (
                  <tr key={coin._id} className="hover:bg-[#121212] transition-colors group">
                    <td className="py-4 flex items-center gap-3">
                      <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full bg-[#2d2d2d]" />
                      <div>
                        <p className="font-bold group-hover:text-[#0052FF]">{coin.name}</p>
                        <p className="text-[#8c8c8c] text-sm">{coin.symbol}</p>
                      </div>
                    </td>
                    <td className="py-4 font-mono font-medium">
                      ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </td>
                    <td className={`py-4 text-right font-medium ${coin.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                      {coin.change24h >= 0 ? '+' : ''}{coin.change24h}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            
            {cryptos.length === 0 && (
              <p className="text-center py-10 text-[#8c8c8c]">No cryptocurrencies found in this category.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}