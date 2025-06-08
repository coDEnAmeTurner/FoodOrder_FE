import axios from 'axios';

export const AUTH_TOKEN = 'g1aDxXmjm3FxD8pvGu3SoxeMqoUymQ'

export const CLIENT_ID = 'D0xi0qvRuL8eVfIvaVPzbfJsU6bXWhSsTNfXtmKo'
export const CLIENT_SECRET = 'MgaGR1UvZ9n4ipEXSksKz9w4BVEquqhZr08KFv1anuzN5zgJKIp1mEd01FzqhR4DPrESax4nVJnD7eqp8J8zXfCz5147r8JCkysfJXyMb6gdTfswh8Yh2YIDnZAO4TMi'

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