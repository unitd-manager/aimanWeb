import axios from 'axios'

const api = axios.create({
baseURL: 'http://43.228.126.245:3011',

});

export default api