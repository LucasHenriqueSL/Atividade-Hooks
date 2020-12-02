import axios from 'axios';

const BASE_URL = "http://localhost:3345"

const api = axios.create({
    baseURL: BASE_URL
})

const pegarToken = () => {
    return localStorage.getItem('token');
}

api.interceptors.request.use(config => {
    const token = pegarToken();
    if (token) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
})

export default api;