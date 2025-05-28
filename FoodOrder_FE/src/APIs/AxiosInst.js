import axios from 'axios';

export const AUTH_TOKEN = '8hs0m0FqPkwi7eWRqUlu3v82nybHk6'
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