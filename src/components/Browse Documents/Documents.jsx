import image1 from "../../assets/1.jpg";
import { useState, useEffect } from "react";
import { getAllNotes, downloadNote } from "../../service";
import toast, { Toaster } from "react-hot-toast";

const Loader = () => {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-900'>
      <div className='w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin'></div>
    </div>
  );
};

const BrowseDocumentsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [documents, setDocuments] = useState([]);
  const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    getAllNotes().then((data) => {
      if (data.success) {
        setDocuments(data.data);
        setIsloading(false);
      } else {
        toast.error("Failed to fetch documents:", data.message);
      }
    });
  }, []);

  const handleDownload = (id) => {
    downloadNote(id)
      .then((data) => {
        if (data.success) {
          toast.success("Download successful");
        }
      })
      .catch((error) => {
        toast.error("Download failed:", error.message);
      });
  };

  const filteredDocs = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (isloading) {
    return <Loader />;
  }

  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 px-4 text-white font-sans'>
      <Toaster />
      <div className='max-w-7xl mx-auto'>
        <div className='mb-10 text-center'>
          <h1 className='text-4xl font-extrabold mb-6 tracking-tight'>
            Browse Documents
          </h1>
          <input
            type='text'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='Search documents...'
            className='w-full sm:w-1/2 px-5 py-3 rounded-xl text-gray-900 placeholder-gray-600 bg-white shadow-lg outline-none focus:ring-2 focus:ring-blue-500 transition'
          />
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6'>
          {filteredDocs.map((doc, index) => (
            <div
              key={index}
              className='bg-gray-700 p-4 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <img
                src={image1}
                alt='Document preview'
                onClick={() => handleDownload(doc._id)} // Fixed the onClick handler
                className='rounded-lg mb-4 w-full h-32 object-cover cursor-pointer '
              />
              <h3 className='text-lg font-semibold mb-2 text-white'>
                {doc.title}
              </h3>
              <p className='text-white/90 mb-3 text-sm'>{doc.description}</p>
              <div className='flex flex-wrap gap-2'>{doc.tags}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseDocumentsPage;
