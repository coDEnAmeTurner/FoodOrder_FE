import axios from 'axios';

export const AUTH_TOKEN = 'NFze1BGohgQsX4a8PR7ZeaVJQVqhJJ'
const BASE_URL = 'http://192.168.1.5:8000'

export const authApi = (accessToken) => axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `bearer ${accessToken}`,
        'Content-Type': 'application/json'
    }
})

export default axios.create({
    baseURL: BASE_URL
})