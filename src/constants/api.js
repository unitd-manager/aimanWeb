import axios from "axios";

const api = axios.create({
baseURL: 'https://aimanweb.unitdtechnologies.com:2004',

});

export default api;
