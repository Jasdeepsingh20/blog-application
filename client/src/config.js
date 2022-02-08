import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'https://appli-cation.herokuapp.com/api'
})