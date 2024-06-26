import { Link, useLocation } from "react-router-dom";

import { getPoster } from "services/ApiServices";
import style from './MovieList.module.css';

const MovieList = ({ movies }) => {
    const location = useLocation();
    console.log(location);



    return (
        <ul className={style.searched_movies}>
            {movies.map(movie => (
                <li className={style.movie_item} key={movie.id}>
                    <Link
                        to={`/movies/${movie.id}`}
                        state={{ from: location }}
                    >
                        <div className={style.item}>
                            <img
                                src={getPoster(movie)}
                                alt={movie.title}
                                style={{ height: 250 }}
                            />
                            <h2 className={style.movie_title}>
                                {movie.title}
                                {movie.release_date && ` (${movie.release_date.slice(0, 4)})`}
                            </h2>
                        </div>
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default MovieList;