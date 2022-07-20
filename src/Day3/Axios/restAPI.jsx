import axios from "axios";
const restAPI = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/now_playing?api_key=c99a687890015fbe80f81d279426568d&language=en-US&page=2',
    params: {
        api_key: 'c99a687890015fbe80f81d279426568d',
        language: 'en-US',
        page: 2,
    }
})

export default restAPI