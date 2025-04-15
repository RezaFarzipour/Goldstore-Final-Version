import axios from "axios";
import { getCookie } from "../utils/cookie";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
})



api.interceptors.request.use(
    (config) => {
        const token = getCookie("token");
        if (token) {
            config.headers.Authorization = `Token ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;


