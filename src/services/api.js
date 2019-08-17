import axios from 'axios';

const api = axios.create({
    baseURL: 'http://herokutindev.herokuapp.com'
});

export default api;
