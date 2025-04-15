import axios from 'axios';

const API_URL = 'http://localhost:5000';

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post('/signin', { email, password });
    return response.data;
  } catch (error) {
    return { success: false, message: error?.response?.data?.message || 'Login failed' };
  }
};

export const signup = async (email, password, username, department) => {
  try {
    const response = await axiosInstance.post('/signup', {
      email,
      password,
      username,
      department,
    });
    return response.data;
  } catch (error) {
    return { success: false, message: error?.response?.data?.message || 'Signup failed' };
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get('/all');
    return response.data;
  } catch (error) {
    return { success: false, message: 'Failed to fetch students' };
  }
};

export const getLeaderboard = async () => {
  try {
    const response = await axiosInstance.get('/leaderboard');
    return response.data;
  } catch (error) {
    return { success: false, message: 'Failed to fetch leaderboard' };
  }
};

export const uploadNote = async (noteData, file) => {
  try {
    const formData = new FormData();
    formData.append('title', noteData.title);
    formData.append('description', noteData.description);
    formData.append('department', noteData.department);
    formData.append('tags', noteData.tags);
    formData.append('file', file);

    const response = await axiosInstance.post('/upload', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    return { success: false, message: 'Note upload failed' };
  }
};

export const getNotesByDepartment = async (department) => {
  try {
    const response = await axiosInstance.get(/notes/${department});
    return response.data;
  } catch (error) {
    return { success: false, message: 'Failed to fetch notes' };
  }
};

export const downloadNote = async (noteId) => {
  try {
    const response = await axiosInstance.get(/download/${noteId});
    return response.data;
  } catch (error) {
    return { success: false, message: 'Failed to download note' };
  }
};


export const upvoteNote = (noteId) => {
    return axiosInstance.post(/notes/upvote/${noteId});
  };
  
  export const downvoteNote = (noteId) => {
    return axiosInstance.post(/notes/downvote/${noteId});
  };