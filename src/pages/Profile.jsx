import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/signin');
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/profile`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching profile", error);
        // localStorage.removeItem('token');
        // navigate('/signin');
      }
    };

    fetchProfile();
  }, [navigate]);

  if (!user) return <div className="text-white text-center mt-20">Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-white p-8 flex flex-col items-center justify-center">
      <div className="bg-[#121212] border border-[#2d2d2d] p-6 rounded-xl max-w-md">
        <h2 className="text-xl font-bold mb-4 border-b border-[#2d2d2d] pb-2">User Profile</h2>
        <p className="mb-2"><span className="text-gray-500">Name:</span> {user.name}</p>
        <p className="mb-2"><span className="text-gray-500">Email:</span> {user.email}</p>
        <p className="mb-2"><span className="text-gray-500">Account ID:</span> {user._id}</p>
        
        <div className='flex flex-col justify-between'>
          <button 
          onClick={() => navigate('/dashboard')}
          className="mt-6 bg-[#0052FF] py-3 rounded-full font-bold hover:bg-[#004BD6] transition-all"
          >
            Go to dashboard
          </button>
        <button 
          onClick={() => { localStorage.clear(); navigate('/signin'); }}
          className="mt-6 text-red-500 hover:underline flex flex-col"
        >
          Sign Out
        </button>
        </div>
      </div>
    </div>
  );
}