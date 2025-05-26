import axios from 'axios';

export const AUTH_TOKEN = '6Bws2e4t7Qu3pVPV8urXZvXQKU1Qz0'
const BASE_URL = 'http://192.168.1.5:8000'

export const authApi = (accessToken) => axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization": `bearer ${accessToken}`
    }
})

export default axios.create({
    baseURL: BASE_URL
})