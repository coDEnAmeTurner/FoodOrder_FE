import axios from 'axios';

export const AUTH_TOKEN = 'wXKQRdOA0FkXOVYyhJXR9EmK4jC9F2'
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