import axios from 'axios';

const API_BASE_URL = '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

// Add token to requests
// api.interceptors.request.use(
//   (config) => {
//     const user = JSON.parse(localStorage.getItem('user') || '{}');
//     if (user.token) {
//       config.headers.Authorization = `Bearer ${user.token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export const authService = {
//   register: (data) => api.post('/auth/register', data),
//   login: (data) => api.post('/auth/login', data),
// };

// export const linkService = {
//   createLink: (data) => api.post('/links', data),
//   getLinksByUsername: (username) => api.get(`/links/user/${username}`),
// };


export const authService = {
  register: (data) => api.post("/auth/register", data),
  login: (data) => api.post("/auth/login", data),
};

export const linkService = {
  createLink: (data) => api.post("/links/", data),
  getLinksByUsername: (username) => api.get(`/links/user/${username}`),
};

export default api;
