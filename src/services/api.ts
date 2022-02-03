import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_BASEURL;
axios.defaults.headers.common['Authorization'] = `Bearer ${process.env.REACT_APP_TOKEN}`;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
})
export default api;
