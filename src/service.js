import axios from "axios";

const API_URL =
  "https://tranquil-taiga-07463-22926c449a5a.herokuapp.com/" ||
  "http://localhost:4000/";

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const response = await axiosInstance.post("students/signin", {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Login failed",
    };
  }
};

export const signup = async (formData) => {
  try {
    const response = await axiosInstance.post("students/signup", formData);

    return response.data;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || "Signup failed",
    };
  }
};

export const getAllNotes = async () => {
  try {
    const response = await axiosInstance.get("notes/");
    return response.data;
  } catch (error) {
    return { success: false, message: "Failed to fetch notes" };
  }
};

export const getAllStudents = async () => {
  try {
    const response = await axiosInstance.get("/all");
    return response.data;
  } catch (error) {
    return { success: false, message: "Failed to fetch students" };
  }
};

export const getLeaderboard = async () => {
  try {
    const response = await axiosInstance.get("students/leaderboard");
    return response.data;
  } catch (error) {
    return { success: false, message: "Failed to fetch leaderboard" };
  }
};

export const uploadNote = async (noteData, file) => {
  try {
    const formData = {
      title: noteData.title,
      description: noteData.description,
      tags: noteData.tags,
      department: noteData.department,
    };
    formData["file"] = file;

    console.log("sending data as : ", formData);
    const response = await axiosInstance.post("notes/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Upload error:", error.response?.data || error.message);
    return { success: false, message: "Note upload failed" };
  }
};

export const getProfile = async () => {
  try {
    const user = localStorage.getItem("user");
    const response = await axiosInstance.get("students/profile", user._id, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Upload error:", error.response?.data || error.message);
    return { success: false, message: "Note upload failed" };
  }
};

export const getNotesByDepartment = async (department) => {
  try {
    const response = await axiosInstance.get(`/notes/${department}`);
    return response.data;
  } catch (error) {
    return { success: false, message: "Failed to fetch notes" };
  }
};

export const downloadNote = async (id) => {
  try {
    const response = await axiosInstance.get(`/notes/download/${id}`, {
      responseType: "blob",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(response.data);
    link.download = `${id}.pdf`;
    link.click();

    return { success: true };
  } catch (error) {
    console.error("Download error:", error);
    throw new Error("Download failed");
  }
};

export const upvoteNote = (noteId) => {
  return axiosInstance.post(`/notes/upvote/${noteId}`);
};

export const downvoteNote = (noteId) => {
  return axiosInstance.post(`/notes/downvote/${noteId}`);
};
