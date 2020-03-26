import axios from 'axios';

const api = axios.create({
    baseURL: "https://api-blog-lucas.herokuapp.com"
});

export default api;