import axios from "axios";

const authApi = axios.create({
  baseURL: "/api/auth",
  withCredentials: true,
});

export const authService = {
  register: (data) => authApi.post("/register", data),
  login: (data) => authApi.post("/login", data),
};
