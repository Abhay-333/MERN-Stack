import axios from "axios";

const linksApi = axios.create({
  baseURL: "/api/links",
  withCredentials: true,
});

export const linkService = {
  createLink: (data) => linksApi.post("/", data),
  getLinksByUsername: (data) => linksApi.post("/user/:username", data),
};
