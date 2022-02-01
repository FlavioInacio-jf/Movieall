import axios from 'axios';

const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1N2M3OTRjMzZiY2RiMWM1NjUzMTA5Nzg2NWNhMzUzOCIsInN1YiI6IjYxZjdiOTY1N2E5N2FiMDExZjk1MTlhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CyRet0zQYSE6liPZBOEqIsjM1CN3_W71ce4FwLkSZdU";


const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  headers: {'Authorization': `Bearer ${token}`}
})
export default api;