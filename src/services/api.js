import axios from 'axios';

const api = axios.create({
  baseURL: 'https://orange-node-api.herokuapp.com',
});

export default api;
