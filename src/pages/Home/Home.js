import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchTrending } from 'services/ApiServices';
import MovieList from 'components/MovieList/MovieList';

import style from './Home.module.css';

const Home = () => {
    const [trendingMovies, setTrendedMovies] = useState([]);
    const location = useLocation();
    console.log(location);

    useEffect(() => {
        fetchTrending()
            .then(({ data }) => setTrendedMovies(data.results))
            .catch(error => console.log(error));
    }, []);

    // const movieTitle = movie.title || "Be added soon...";

    return (
        <div>
            <h1 className={style.title}>Trending today</h1>
            {trendingMovies.length > 0 && <MovieList movies={trendingMovies} />}
        </div>
    );
};

export default Home;