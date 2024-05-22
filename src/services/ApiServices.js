import axios from "axios";
import DefaultPoster from '../images/default_poster.jpg';

const API_KEY = '4755db82d7b252ec18e48f05418b98b9'
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

// API Read Access Token
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NzU1ZGI4MmQ3YjI1MmVjMThlNDhmMDU0MThi
// OThiOSIsInN1YiI6IjY2NGQwMDVjNGIwNzU5YTY4MTAxYTQxMSIsInNjb3BlcyI6WyJhcGlf
// cmVhZCJdLCJ2ZXJzaW9uIjoxfQ.wFdP3nyVMbTokyl5C93i8R0QkT08woU3HXM2hexjEyE



export const fetchCast = (movieId) => {
    return axios.get(`/movie/${movieId}/credits?api_key=${API_KEY}`);
};

export const fetchTrending = async () => {
    return await axios.get(`/trending/movie/week?api_key=${API_KEY}`);
};

export const fetchReviews = (movieId) => {
    return axios.get(`/movie/${movieId}/reviews?api_key=${API_KEY}`);
};

export const fetchMovieById = (movieId) => {
    return axios.get(`/movie/${movieId}?api_key=${API_KEY}`);
};

export const fetchMoviesByQuery = async (query, page = 1) => {
    return await axios
        .get(`/search/movie?api_key=${API_KEY}&query=${query}&page=${page}&per_page=20`);

}


export const getPoster = (movie) => {
    return movie.poster_path === null ? DefaultPoster : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
};

export const getActorPoster = (actor) => {
    return actor.profile_path === null ? DefaultPoster : `https://image.tmdb.org/t/p/w500/${actor.profile_path}`;
};