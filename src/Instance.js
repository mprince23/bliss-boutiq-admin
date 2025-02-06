import axios from "axios";

const token = localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: "https://bliss-boutiq-backend.onrender.com",
  headers: {
    // athorName: "syket",
    token: `Bearer ${token}`,
  },
});

export default axiosInstance;
