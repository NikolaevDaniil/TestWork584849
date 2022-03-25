import axios from 'axios';


const configHeaders = {
    "Accept": "application/json",
};

const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    withCredentials: true,
    headers: configHeaders
});

export default apiClient;