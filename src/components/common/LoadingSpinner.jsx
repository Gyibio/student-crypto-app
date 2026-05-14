import React from 'react';

export default function LoadingSpinner({ message = "Waking up the blockchain..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black">
      {/* Spinner Icon */}
      <div className="w-12 h-12 border-4 border-[#0052FF] border-t-transparent rounded-full animate-spin"></div>
      
      {/* Friendly message for Render cold starts */}
      <p className="mt-4 text-gray-400 font-medium animate-pulse text-center px-4">
        {message} <br />
        <span className="text-xs text-gray-600">Servers spin down when inactive. This may take up to 60 seconds.</span>
      </p>
    </div>
  );
}