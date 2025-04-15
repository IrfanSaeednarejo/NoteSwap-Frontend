import React, { useState, useEffect } from "react";
import { Crown } from "lucide-react";
import { getLeaderboard } from "../../service";
import toast, { Toaster } from "react-hot-toast";
function LeaderBoard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getLeaderboard().then((data) => {
      if (data.success) {
        setPlayers(data.data);
      } else {
        toast.error("Failed to fetch leaderboard data:", data.message);
      }
    });
  }, []);

  const maxScore = Math.max(...players.map((p) => p.score));

  const rankStyles = [
    "from-yellow-400 to-yellow-600", // 🥇
    "from-gray-300 to-gray-500", // 🥈
    "from-orange-400 to-orange-600", // 🥉
  ];

  return (
    <div className='bg-gray-900 min-h-screen py-10 px-6 text-white font-sans'>
      <Toaster />
      <h1 className='text-4xl font-extrabold text-center mb-12 text-blue-400 tracking-tight'>
        🏆 Leaderboard
      </h1>

      {players.length === 0 ? (
        <h1>No Students</h1>
      ) : (
        <>
          <div className='flex flex-col sm:flex-row justify-center items-end gap-6 mb-12'>
            {players.slice(0, 3).map((player, idx) => (
              <div
                key={player._id}
                className={`relative flex flex-col items-center gap-2 min-h-[200px]  p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 bg-gradient-to-br ${rankStyles[idx]} animate-glow`}
                style={{ minWidth: "180px" }}
              >
                {idx === 0 && (
                  <div className='absolute -top-4 right-4 bg-yellow-500 p-1 rounded-full shadow-lg animate-bounce'>
                    <Crown size={20} className='text-white' />
                  </div>
                )}
                <div className='text-3xl mb-2'>
                  {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
                </div>
                <img
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${player.username}`}
                  alt={`${player.username}'s avatar`}
                  className='w-20 h-20 rounded-full border-4 border-white mb-3'
                />
                <h2 className='text-lg font-semibold'>{player.name}</h2>
                <p className='text-white/90 text-sm font-bold'>
                  Score: {player.points}
                </p>
                <div className='w-full h-2 rounded-full text-center font-bold'>
                  <h1>{player.username}</h1>
                </div>
              </div>
            ))}
          </div>

          <div className='overflow-x-auto max-w-4xl mx-auto'>
            <table className='w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg'>
              <thead className='bg-blue-600'>
                <tr className='text-left text-white text-sm uppercase tracking-wide'>
                  <th className='py-3 px-6'>Rank</th>
                  <th className='py-3 px-6'>Name</th>
                  <th className='py-3 px-6'>Score</th>
                </tr>
              </thead>
              <tbody>
                {players.slice(3).map((player, index) => (
                  <tr
                    key={player._id}
                    className='hover:bg-gray-700 border-b border-gray-700 transition'
                  >
                    <td className='py-3 px-6 text-white/80 font-medium'>
                      {index + 4}
                    </td>
                    <td className='py-3 px-6 text-white/90'>
                      {player.username}
                    </td>
                    <td className='py-3 px-6 text-white/90'>{player.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
      <style>
        {`
          @keyframes glow {
            0% { box-shadow: 0 0 10px rgba(255,255,255,0.2); }
            50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
            100% { box-shadow: 0 0 10px rgba(255,255,255,0.2); }
          }
          .animate-glow {
            animation: glow 3s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}

export default LeaderBoard;
