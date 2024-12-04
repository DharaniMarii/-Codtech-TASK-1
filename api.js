import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const createUser = (formData) => API.post('/users', formData);
export const fetchPosts = () => API.get('/posts');
export const createPost = (data) => API.post('/posts', data);
