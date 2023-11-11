import axios from "axios";

const BaseUrl = process.env.NODE_ENV == "development" ? "http://localhost:8081" : "";

const api = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'application/json', 
        'User-Agent': 'insomnia/2023.5.8'
    },
});

export default api;