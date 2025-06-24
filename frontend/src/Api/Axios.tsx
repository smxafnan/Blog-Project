import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:3000", // Adjust the base URL as needed
  withCredentials: true, // Include credentials for CORS requests
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;