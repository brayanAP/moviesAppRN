import axios from 'axios';

const movieApiService = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '5ecfe03bb1344043dfae46e7b32e631e',
    language: 'es-ES',
  },
});

export default movieApiService;
