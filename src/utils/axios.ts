import axios, {AxiosRequestConfig} from 'axios'



const axiosOptions : AxiosRequestConfig = {
    headers : {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
    baseURL : `${import.meta.env.VITE_APP_BACKEND_URL}`
}

const api = axios.create(axiosOptions);

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('accessToken');
        if (token && token !== '') {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

let isRefreshing: boolean = false;
let failedQueue: any[] = [];

const processQueue = (error : any,  token : string | null = null) => {
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    })

    failedQueue = [];
}

api.interceptors.response.use(
    response => response,
    async (error) => {
        const refreshToken = localStorage.getItem('refreshToken');
        const originalRequest = error.config;
        if (error?.response?.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                originalRequest._retry = true;
                isRefreshing = true;

                try {
                    const refreshAxios = axios.create({
                        ... axiosOptions,
                        headers : {
                            Authorization: `Bearer ${refreshToken}`
                        }
                    })

                    const response = await refreshAxios.post('/refresh-token')
                    const newAccessToken = response.data.access_token;
                    localStorage.setItem('accessToken', JSON.stringify(newAccessToken));

                    api.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`
                    processQueue(null, newAccessToken);
                    return api(originalRequest, newAccessToken);
                } catch (error) {
                    processQueue(error, null);
                    return Promise.reject(error);
                } finally {
                    isRefreshing = false;
                }
            }

            return new Promise(
                (resolve, reject) => {
                    failedQueue.push({resolve, reject});
                }
            ).then(
                (token) => {
                    originalRequest.headers['Authorization'] = `Bearer ${token}`;
                    return api(originalRequest);
                }
            ).catch(
                (err) => {
                    return Promise.reject(err);
                }
            );
        }

        return Promise.reject(error);
    }
);

export default api;
