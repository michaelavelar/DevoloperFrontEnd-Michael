import axios from 'axios';

// Base da URL: https://api.themoviedb.org/3/
//URL DA API: /movie/now_playing?api_key=3e9f156bf54f84d974dc9d5a0b5244b7&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});


export default api;