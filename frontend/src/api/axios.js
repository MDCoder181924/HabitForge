import axios from 'axios';

const api = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    withCredentials : true,
})

api.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error) => {
        const originalRequest = error.config;
        if (error.response && error.response.status === 401 && !originalRequest._retry) {
            
            if (originalRequest.url.includes('/auth/accesstoken')) {
                return Promise.reject(error);
            }
            originalRequest._retry = true;
            try {
                await api.post('/auth/accesstoken');
                return api(originalRequest);
            } catch (refreshError) {
                console.error("Session expired. Please login again.", refreshError);
                window.location.href = '/login';
                return Promise.reject(refreshError);
            }
        }
        return Promise.reject(error);
    }
);

export default api;