import axios from 'axios'

const api = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_API_URL}`
})

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}, (error) => {
    return Promise.reject(error)
})

export default api