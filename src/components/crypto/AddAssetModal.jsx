import React, { useState } from 'react';
import axios from 'axios';

export default function AddAssetModal({ isOpen, onClose, onRefresh }) {
  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    price: '',
    image: '',
    change24h: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const token = localStorage.getItem('token');
      await axios.post(`${import.meta.env.VITE_API_URL}/api/crypto`, formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      alert("Asset added successfully!");
      onRefresh(); // Refresh the table data
      onClose();   // Close the modal
      setFormData({ name: '', symbol: '', price: '', image: '', change24h: '' });
    } catch (error) {
      console.error("Error adding asset:", error);
      alert(error.response?.data?.message || "Failed to add asset");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-[#121212] border border-[#2d2d2d] w-full max-w-md rounded-2xl p-8 shadow-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">List New Asset</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white text-2xl">&times;</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Asset Name</label>
            <input 
              required
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-3 mt-1 focus:border-[#0052FF] outline-none"
              placeholder="e.g. Bitcoin"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Symbol</label>
              <input 
                required
                className="w-full bg-black border border-[#2d2d2d] rounded-lg p-3 mt-1 focus:border-[#0052FF] outline-none"
                placeholder="BTC"
                value={formData.symbol}
                onChange={(e) => setFormData({...formData, symbol: e.target.value})}
              />
            </div>
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">Price (USD)</label>
              <input 
                required
                type="number"
                step="any"
                className="w-full bg-black border border-[#2d2d2d] rounded-lg p-3 mt-1 focus:border-[#0052FF] outline-none"
                placeholder="64000"
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">Image URL</label>
            <input 
              required
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-3 mt-1 focus:border-[#0052FF] outline-none"
              placeholder="https://cryptoicons.org/api/icon/btc/200"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
          </div>

          <div>
            <label className="text-xs font-bold text-gray-500 uppercase">24h Change (%)</label>
            <input 
              required
              type="number"
              step="any"
              className="w-full bg-black border border-[#2d2d2d] rounded-lg p-3 mt-1 focus:border-[#0052FF] outline-none"
              placeholder="2.5"
              value={formData.change24h}
              onChange={(e) => setFormData({...formData, change24h: e.target.value})}
            />
          </div>

          <button 
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-[#0052FF] text-white font-bold py-4 rounded-full mt-4 hover:bg-[#004BD6] transition-all disabled:opacity-50"
          >
            {isSubmitting ? "Processing..." : "List Asset"}
          </button>
        </form>
      </div>
    </div>
  );
}