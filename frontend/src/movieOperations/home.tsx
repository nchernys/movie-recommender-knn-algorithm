import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./home.css";
import { Movie } from "../types/movieType";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [allMovies, setAllMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchAllMovies();
  }, [location.pathname]);

  const baseUrl = "http://localhost:8080";

  const fetchAllMovies = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/all-movies`);
      const data = response.data;
      setAllMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleShowMovie = (slug: string) => {
    navigate(`/movie/${slug}`);
  };

  return (
    <div className="wrapper">
      {allMovies &&
        allMovies.map((movie: Movie, index) => (
          <div className="movie-card" key={index}>
            <div className="details">
              <div className="title">{movie.title}</div>
              <div className="director-country">
                {movie.director} ({movie.country})
              </div>
              <div className="genre-year">
                {movie.genre}, {movie.year}
              </div>
              <div className="actors">
                {" "}
                <u>Actors</u>:{" "}
                {movie.topActors &&
                  movie.topActors.map((actor, i) => (
                    <span key={i}>
                      {actor}
                      {movie.topActors.length - 1 !== i && ", "}{" "}
                    </span>
                  ))}
              </div>
            </div>
            <button onClick={() => handleShowMovie(movie.slug)}>
              {" "}
              See Details
            </button>
          </div>
        ))}
    </div>
  );
};

export default Home;
