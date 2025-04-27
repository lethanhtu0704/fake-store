import axios from "axios";


const axiosInstance = axios.create({
  baseURL: "https://reduxstore0704-default-rtdb.asia-southeast1.firebasedatabase.app/", // Base API URL
  timeout: 5000, // Timeout in milliseconds
  headers: {
    "Content-Type": "application/json",
  },
});


export default axiosInstance;