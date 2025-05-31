import axios from 'axios';

export const AUTH_TOKEN = 'kvRlJ9bCJicmmdcEk6Eu90cHZZ5v3J'
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