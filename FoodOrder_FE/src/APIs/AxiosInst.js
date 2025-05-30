import axios from 'axios';

export const AUTH_TOKEN = 'lyHGPaT3qlYJiM6ZFnIyvx0O0o0utl'
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