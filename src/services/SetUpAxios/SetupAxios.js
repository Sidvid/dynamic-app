import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_URL,
});
axiosInstance.interceptors.request.use((config) => {
  config.headers["Content-type"] ="application/json" ;
  return config;
});
axios.interceptors.response.use((response) => {
  return response;
});
export default axiosInstance;
