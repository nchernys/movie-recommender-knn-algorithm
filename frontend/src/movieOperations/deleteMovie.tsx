import { useState, useEffect } from "react";
import axios from "axios";
import "./deleteMovie.css";

const DeleteMovie = () => {
  const [allMovies, setAllMovies] = useState([]);

  const baseUrl = "http://localhost:8080";

  useEffect(() => {
    fetchAllMovies();
  }, []);

  const fetchAllMovies = async () => {
    try {
      const response = await axios.get(`${baseUrl}/api/all-movies`);
      const data = response.data;
      setAllMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${baseUrl}/api/movie/delete/${id}`);
      console.log(`Movie with ID ${id} deleted.`);
      setAllMovies((prev) => prev.filter((movie) => movie.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <div className="delete-movie-page">
      <table>
        <tbody>
          {allMovies &&
            allMovies.map((movie, i) => (
              <tr key={i}>
                <td>{movie.title}</td>
                <td> {movie.director}</td>
                <td> {movie.year}</td>
                <td className="del-btn">
                  {" "}
                  <button onClick={() => handleDelete(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default DeleteMovie;
