import React from "react";
import image1 from "../../assets/1.jpg";

const UserProfilePage = () => {
  const documents = [
    {
      title: "Data Structures Notes",
      description: "Complete DS notes for midterm prep.",
      tags: ["DSA", "Midterm", "Sukkur IBA"],
      image: image1,
    },
    {
      title: "Operating Systems Cheatsheet",
      description: "Summarized OS concepts with examples.",
      tags: ["OS", "Cheatsheet", "Semester 4"],
      image: image1,
    },
    {
      title: "Entrepreneurship Case Studies",
      description: "Collection of startup case studies.",
      tags: ["Business", "Case Study"],
      image: image1,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-10 px-4 text-white">
      <div className="max-w-5xl mx-auto">
        {/* User Info */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-white">Irfan Saeed</h1>
          <p className="text-gray-400 mt-2">Full Stack | Student | Contributor</p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-gray-700 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold">Documents Uploaded</h3>
            <p className="text-3xl font-bold mt-2">12</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold">Credits Earned</h3>
            <p className="text-3xl font-bold mt-2">48</p>
          </div>
          <div className="bg-gray-700 p-6 rounded-xl text-center">
            <h3 className="text-lg font-semibold">Leaderboard Rank</h3>
            <p className="text-3xl font-bold mt-2">#2</p>
          </div>
        </div>

       
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-xl hover:shadow-lg transition-shadow"
            >
              <img
                src={doc.image}
                alt="Document preview"
                className="rounded-lg mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-xl font-bold mb-2 text-white">{doc.title}</h3>
              <p className="text-gray-400 mb-3 text-sm">{doc.description}</p>
              <div className="flex flex-wrap gap-2">
                {doc.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-600 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Upload Button */}
        <div className="text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all">
            Upload New Document
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;