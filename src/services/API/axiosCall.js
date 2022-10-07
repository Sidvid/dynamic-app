import axios from "../SetUpAxios/SetupAxios";
export const postsAxios = (payload) => {
  return axios({
    method: "GET",
    url: "/posts",
  });
};
export const todoAxios = (payload) => {
  return axios({
    method: "GET",
    url: "/todo",
  });
};
export const commentsAxios = (payload) => {
  return axios({
    method: "GET",
    url: "/comments",
  });
};
export const userAxios = (payload) => {
  return axios({
    method: "GET",
    url: "/users",
  });
};
export const albumAxios = (payload) => {
  return axios({
    method: "GET",
    url: "/albums",
  });
};
