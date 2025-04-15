
// import React, { useState, useEffect } from "react";
// import { Crown } from "lucide-react";

// function LeaderBoard() {
//   const [players, setPlayers] = useState([]);

//   useEffect(() => {
//     const mockPlayers = [
//       { id: 1, name: "Ahmed", score: 120, picture: "https://via.placeholder.com/50" },
//       { id: 2, name: "Babar", score: 110, picture: "https://via.placeholder.com/50" },
//       { id: 3, name: "Chachar", score: 100, picture: "https://via.placeholder.com/50" },
//       { id: 4, name: "Dawood", score: 90 },
//       { id: 5, name: "Esha", score: 85 },
//       { id: 6, name: "Fatima", score: 80 },
//       { id: 7, name: "Jinnah", score: 75 },
//       { id: 8, name: "Abu Bakar", score: 70 },
//     ];
//     setPlayers(mockPlayers);
//   }, []);

//   const maxScore = Math.max(...players.map((p) => p.score));

//   const rankStyles = [
//     "from-yellow-400 to-yellow-600", // 🥇
//     "from-gray-300 to-gray-500",     // 🥈
//     "from-orange-400 to-orange-600", // 🥉
//   ];

//   return (
//     <div className="bg-gray-900 min-h-screen py-10 px-6 text-white font-sans">
//       <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-400 tracking-tight">
//         🏆 Leaderboard
//       </h1>

//       {/* Top 3 - Podium */}
//       <div className="flex flex-col sm:flex-row justify-center items-end gap-6 mb-12">
//         {players.slice(0, 3).map((player, idx) => (
//           <div
//             key={player.id}
//             className={`relative flex flex-col items-center p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 bg-gradient-to-br ${rankStyles[idx]} animate-glow`}
//             style={{ minWidth: "180px" }}
//           >
//             {idx === 0 && (
//               <div className="absolute -top-4 right-4 bg-yellow-500 p-1 rounded-full shadow-lg animate-bounce">
//                 <Crown size={20} className="text-white" />
//               </div>
//             )}
//             <div className="text-3xl mb-2">
//               {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
//             </div>
//             <img
//               src={player.picture || "https://via.placeholder.com/50"}
//               alt={`${player.name}'s avatar`}
//               className="w-20 h-20 rounded-full border-4 border-white mb-3"
//             />
//             <h2 className="text-lg font-semibold">{player.name}</h2>
//             <p className="text-white/90 text-sm">Score: {player.score}</p>
//             <div className="w-full mt-3 bg-white/20 h-2 rounded-full">
//               <div
//                 className="h-full rounded-full bg-white/90"
//                 style={{ width: `${(player.score / maxScore) * 100}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Remaining Table */}
//       <div className="overflow-x-auto max-w-4xl mx-auto">
//         <table className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
//           <thead className="bg-blue-600">
//             <tr className="text-left text-white text-sm uppercase tracking-wide">
//               <th className="py-3 px-6">Rank</th>
//               <th className="py-3 px-6">Name</th>
//               <th className="py-3 px-6">Score</th>
//               <th className="py-3 px-6">Progress</th>
//             </tr>
//           </thead>
//           <tbody>
//             {players.slice(3).map((player, index) => (
//               <tr
//                 key={player.id}
//                 className="hover:bg-gray-700 border-b border-gray-700 transition"
//               >
//                 <td className="py-3 px-6 text-white/80 font-medium">
//                   {index + 4}
//                 </td>
//                 <td className="py-3 px-6 text-white/90">{player.name}</td>
//                 <td className="py-3 px-6 text-white/90">{player.score}</td>
//                 <td className="py-3 px-6 w-1/2">
//                   <div className="w-full bg-white/20 h-2 rounded-full">
//                     <div
//                       className="h-full rounded-full bg-blue-400"
//                       style={{ width: `${(player.score / maxScore) * 100}%` }}
//                     ></div>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Glow animation keyframes */}
//       <style>
//         {`
//           @keyframes glow {
//             0% { box-shadow: 0 0 10px rgba(255,255,255,0.2); }
//             50% { box-shadow: 0 0 20px rgba(255,255,255,0.4); }
//             100% { box-shadow: 0 0 10px rgba(255,255,255,0.2); }
//           }
//           .animate-glow {
//             animation: glow 3s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </div>
//   );
// }

// export default LeaderBoard;



import React, { useState, useEffect } from "react";
import { Crown } from "lucide-react";

function LeaderBoard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const mockPlayers = [
      { id: 1, name: "Ahmed", score: 120, picture: "https://via.placeholder.com/50" },
      { id: 2, name: "Babar", score: 110, picture: "https://via.placeholder.com/50" },
      { id: 3, name: "Chachar", score: 100, picture: "https://via.placeholder.com/50" },
      { id: 4, name: "Dawood", score: 90 },
      { id: 5, name: "Esha", score: 85 },
      { id: 6, name: "Fatima", score: 80 },
      { id: 7, name: "Jinnah", score: 75 },
      { id: 8, name: "Abu Bakar", score: 70 },
    ];
    setPlayers(mockPlayers);
  }, []);

  const maxScore = Math.max(...players.map((p) => p.score));

  const rankStyles = [
    "from-yellow-400 to-yellow-600", // 🥇
    "from-gray-300 to-gray-500",     // 🥈
    "from-orange-400 to-orange-600", // 🥉
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-10 px-6 text-white font-sans">
      <h1 className="text-4xl font-extrabold text-center mb-12 text-blue-400 tracking-tight">
        🏆 Leaderboard
      </h1>

      {/* Top 3 - Podium */}
      <div className="flex flex-col sm:flex-row justify-center items-end gap-6 mb-12">
        {players.slice(0, 3).map((player, idx) => (
          <div
            key={player.id}
            className={`relative flex flex-col items-center p-6 rounded-2xl shadow-xl transform transition-all hover:scale-105 bg-gradient-to-br ${rankStyles[idx]} animate-glow`}
            style={{ minWidth: "180px" }}
          >
            {idx === 0 && (
              <div className="absolute -top-4 right-4 bg-yellow-500 p-1 rounded-full shadow-lg animate-bounce">
                <Crown size={20} className="text-white" />
              </div>
            )}
            <div className="text-3xl mb-2">
              {idx === 0 ? "🥇" : idx === 1 ? "🥈" : "🥉"}
            </div>
            <img
              src={player.picture || "https://via.placeholder.com/50"}
              alt={`${player.name}'s avatar`}
              className="w-20 h-20 rounded-full border-4 border-white mb-3"
            />
            <h2 className="text-lg font-semibold">{player.name}</h2>
            <p className="text-white/90 text-sm">Score: {player.score}</p>
            <div className="w-full mt-3 bg-white/20 h-2 rounded-full">
              <div
                className="h-full rounded-full bg-white/90"
                style={{ width: `${(player.score / maxScore) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Remaining Table */}
      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="w-full bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <thead className="bg-blue-600">
            <tr className="text-left text-white text-sm uppercase tracking-wide">
              <th className="py-3 px-6">Rank</th>
              <th className="py-3 px-6">Name</th>
              <th className="py-3 px-6">Score</th>
              <th className="py-3 px-6">Progress</th>
            </tr>
          </thead>
          <tbody>
            {players.slice(3).map((player, index) => (
              <tr
                key={player.id}
                className="hover:bg-gray-700 border-b border-gray-700 transition"
              >
                <td className="py-3 px-6 text-white/80 font-medium">
                  {index + 4}
                </td>
                <td className="py-3 px-6 text-white/90">{player.name}</td>
                <td className="py-3 px-6 text-white/90">{player.score}</td>
                <td className="py-3 px-6 w-1/2">
                  <div className="w-full bg-white/20 h-2 rounded-full">
                    <div
                      className="h-full rounded-full bg-blue-400"
                      style={{ width: `${(player.score / maxScore) * 100}%` }}
                    ></div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Glow animation keyframes */}
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
