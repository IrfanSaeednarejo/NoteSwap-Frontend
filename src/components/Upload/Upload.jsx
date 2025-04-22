import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { uploadNote } from "../../service";
function Upload() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    tags: "",
    department: "",
    file: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFormData((prev) => ({
      ...prev,
      file: selectedFile,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteData = {
      title: formData.title,
      description: formData.description,
      tags: formData.tags,
      department: formData.department,
    };

    const file = formData.file;

    const response = await uploadNote(noteData, file);

    if (response.success) {
      toast.success("File uploaded successfully");
      setFormData({
        title: "",
        description: "",
        tags: "",
        department: "",
        file: "",
      });
    } else {
      toast.error(response.message || "File upload failed");
    }
  };

  return (
    <div className='flex mt:[2rem] items-center justify-center min-h-screen bg-gray-900 p-4'>
      <Toaster />
      <form
        onSubmit={handleSubmit}
        className='w-full max-w-md p-8 bg-gray-800 border border-gray-700 rounded-lg shadow-lg'
      >
        <h2 className='text-3xl font-bold mb-6 text-center text-white'>
          Upload Your File
        </h2>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Title<span className='text-red-500'>*</span>
          </label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            placeholder='Enter title'
            className='w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Description<span className='text-red-500'>*</span>
          </label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            placeholder='Enter description'
            className='w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
            rows='4'
            required
          ></textarea>
        </div>

        <div className='mb-4'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Upload File<span className='text-red-500'>*</span>
          </label>
          <input
            id='fileInput'
            type='file'
            name='file'
            accept='.pdf,.docx'
            onChange={handleFileChange}
            className='w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white file:text-white file:bg-gray-700 file:border-0 file:mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
            required
          />
          <p className='text-sm text-gray-400 mt-1'>
            Accepted formats: .pdf, .docx
          </p>
        </div>
        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Department
          </label>
          <input
            type='text'
            name='department'
            value={formData.department}
            onChange={handleChange}
            placeholder='Department'
            className='w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <div className='mb-6'>
          <label className='block text-sm font-medium text-gray-300 mb-1'>
            Tags
          </label>
          <input
            type='text'
            name='tags'
            value={formData.tags}
            onChange={handleChange}
            placeholder='Add tags (comma separated)'
            className='w-full px-4 py-2 border border-gray-600 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500'
          />
        </div>

        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500'
        >
          Upload
        </button>
      </form>
    </div>
  );
}

export default Upload;
