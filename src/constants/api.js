import axios from 'axios'

const api = axios.create({
baseURL: 'https://aimanapi.unitdtechnologies.com:2004',

});

export default api