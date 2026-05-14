import { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../components/common/LoadingSpinner";

export default function Dashboard() {
  const [cryptos, setCryptos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        setLoading(true);
        // Fetch all tradable cryptos
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/crypto`);
        setCryptos(response.data);
      } catch (error) {
        console.error("Error loading market data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMarketData();
  }, []);

  if (loading) return <LoadingSpinner message="Loading market prices..." />;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Market Overview</h1>
      {/* Mapping through your cryptos to show Name, Symbol, and Price */}
      <div className="grid gap-4">
        {cryptos.map(coin => (
          <div key={coin.symbol} className="flex justify-between p-4 bg-[#121212] border border-[#2d2d2d] rounded-lg">
             <div className="flex items-center gap-3">
               <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full" />
               <div>
                 <p className="font-bold">{coin.name}</p>
                 <p className="text-gray-500 text-sm">{coin.symbol}</p>
               </div>
             </div>
             <p className="font-mono">${coin.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}