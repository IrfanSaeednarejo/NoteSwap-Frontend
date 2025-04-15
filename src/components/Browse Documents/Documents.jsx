
import React, { useState } from "react";
import image1 from "../../assets/1.jpg";

const BrowseDocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
    {
      title: "OOP Final Prep",
      description: "All OOP lectures condensed for finals.",
      tags: ["OOP", "Finals"],
      image: image1,
    },
    {
      title: "Database Systems Slides",
      description: "Slides from DB class - Spring 2024.",
      tags: ["Database", "Slides"],
      image: image1,
    },
    {
      title: "Computer Networks Notes",
      description: "Detailed notes on CN with diagrams.",
      tags: ["Networks", "Midterm"],
      image: image1,
    },
    {
      title: "Project Management Guide",
      description: "PM essentials for business students.",
      tags: ["PM", "Guide"],
      image: image1,
    },
    {
      title: "Marketing Lecture Notes",
      description: "Includes models and frameworks.",
      tags: ["Marketing", "Theory"],
      image: image1,
    },
    {
      title: "Software Engineering Case Study",
      description: "Case-based SE documentation.",
      tags: ["SE", "Case Study"],
      image:image1,
    },
    {
      title: "Cloud Computing Basics",
      description: "Key concepts and services summary.",
      tags: ["Cloud", "AWS"],
      image: image1,
    },
    {
      title: "Machine Learning Starter Pack",
      description: "Resources and guides for beginners.",
      tags: ["ML", "AI"],
      image: image1,
    },
    {
      title: "Computer Architecture Notes",
      description: "Covers pipelining and memory hierarchy.",
      tags: ["CA", "Diagrams"],
      image: image1,
    },
    {
      title: "Discrete Math Formulas",
      description: "Formula sheet for quick revision.",
      tags: ["Math", "Formulas"],
      image: image1,
    },
    {
      title: "Python Crash Course",
      description: "Basics to OOP with examples.",
      tags: ["Python", "Programming"],
      image: image1,
    },
    {
      title: "Research Methodology Samples",
      description: "Includes research papers and templates.",
      tags: ["Research", "Templates"],
      image: image1,
    },
  ];

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 text-white font-sans">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold mb-6 tracking-tight">Browse Documents</h1>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search documents..."
            className="w-full sm:w-1/2 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-600 bg-white shadow-lg outline-none focus:ring-2 focus:ring-blue-500 transition"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
          {filteredDocs.map((doc, index) => (
            <div
              key={index}
              className="bg-gray-700 p-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <img
                src={doc.image}
                alt="Document preview"
                className="rounded-lg mb-4 w-full h-32 object-cover"
              />
              <h3 className="text-lg font-semibold mb-2 text-white">{doc.title}</h3>
              <p className="text-white/90 mb-3 text-sm">{doc.description}</p>
              <div className="flex flex-wrap gap-2">
                {doc.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-xs px-2 py-1 rounded-full text-white tracking-wide"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseDocumentsPage;
