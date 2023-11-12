import axios from "axios";

const BaseUrl = process.env.NODE_ENV == "development" ? "http://localhost:8081" : "";

const api = axios.create({
    baseURL: BaseUrl,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;