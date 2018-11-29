import axios from "axios";
export const FETCH_POSTS = "fetch_posts";
export const CREATE_POST = "create_post";
export const FETCH_POST = "fetch_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=arash";

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return {
    type: FETCH_POSTS,
    payload: request
  };
}

export function createPost(values, callback) {
  const request = axios
    .post(`${ROOT_URL}/posts/${API_KEY}`, values)
    .then(() => callback());

  return {
    type: CREATE_POST,
    payload: request
  };
}

export function fetchPost(id) {
  const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

  return {
    type: FETCH_POST,
    payload: request
  };
}

export function deletePost(id, callback) {
  const request = axios
    .delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    .then(() => callback());

  return {
    type: DELETE_POST,
    payload: id
  };
}

// Facebook Api
export const FETCH_USER = "FETCH_USER";
const ROOT_URLF = "https://graph.facebook.com/";

export function fetchUser(token, id) {
  const url = `${ROOT_URLF}${id}?access_token=${token}&fields=id,name,picture,email,mobile_phone`;
  const request = axios.get(url);
  return {
    type: FETCH_USER,
    payload: request
  };
}
