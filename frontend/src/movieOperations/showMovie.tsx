import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./showMovie.css";
import { Movie } from "../types/movieType";

const ShowMovie = () => {
  const { slug } = useParams();
  const [movie, setMovie] = useState<Movie>();
  const [similarMovies, setSimilarMovies] = useState<Movie[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovie();
  }, [movie]);

  const baseUrl = "http://localhost:8080";

  const fetchMovie = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/movie/${slug}`);
      setMovie(response.data.movie);
      setSimilarMovies(response.data.similarMovies);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleShowMovie = (slug: string) => {
    navigate(`/movie/${slug}`);
  };

  return (
    <>
      <div className="show-movie-page">
        {movie && (
          <>
            <h1>{movie.title}</h1>
            <h3>Director: {movie.director}</h3>
            <h3>Genre: {movie.genre}</h3>
            <h3>Country: {movie.country}</h3>
            <h3>Year: {movie.year}</h3>
            <h3>
              Actors:{" "}
              {movie.topActors &&
                movie.topActors.map((actor, index) => (
                  <span key={index}>
                    {actor}
                    {index < movie.topActors.length - 1 && ", "}
                  </span>
                ))}
            </h3>
            <p>
              <b>Description:</b> {movie.blurb}
            </p>
          </>
        )}

        <div className="suggested-movies">
          <h1>Movies sugested to you...</h1>
          <div className="wrapper">
            {similarMovies &&
              similarMovies.map((movie, i) => (
                <div key={i} className="movie-card">
                  <div className="title">{movie.title}</div>
                  <div className="director-country">
                    {movie.director}, {movie.year}{" "}
                  </div>
                  <div className="genre-country">
                    {movie.genre} ({movie.country}){" "}
                  </div>
                  <div className="actors">
                    {" "}
                    <u>Actors</u>:{" "}
                    {movie.topActors &&
                      movie.topActors.map((actor, index) => (
                        <span key={index}>
                          {actor}
                          {index < movie.topActors.length - 1 && ", "}
                        </span>
                      ))}
                  </div>
                  <button onClick={() => handleShowMovie(movie.slug)}>
                    {" "}
                    See Details
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShowMovie;
