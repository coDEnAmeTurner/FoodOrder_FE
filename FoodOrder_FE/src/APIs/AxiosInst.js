import axios from 'axios';

export const AUTH_TOKEN = 'Q3QmChvK6FU094a1EDKryUaHnKn2GO'
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