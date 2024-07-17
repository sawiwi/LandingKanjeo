import axios from 'axios';
export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'X-API-KEY': process.env.REACT_APP_API_URL_API_KEY,
    },
});

