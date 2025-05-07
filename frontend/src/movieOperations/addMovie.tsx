import { useState } from "react";
import "./addMovie.css";
import axios from "axios";
import { Movie } from "../types/movieType";

const AddMovie = () => {
  const [formData, setFormData] = useState<Partial<Movie>>({});

  const baseUrl = "http://localhost:8080";

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]:
        name === "topActors"
          ? value.split(",").map((actor) => actor.trim())
          : value,
    }));
  };

  const handleSubmitNewMovie = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewMovie(formData);
  };

  const addNewMovie = async (newMovieData: Partial<Movie>) => {
    try {
      const response = await axios.post(
        `${baseUrl}/api/movie/add`,
        newMovieData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      console.log(data);
      setFormData({});
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <div className="add-movie-page">
      <h1>Add New Movie</h1>
      <form onSubmit={handleSubmitNewMovie}>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={formData.title || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Slug"
          name="slug"
          value={formData.slug || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Director"
          name="director"
          value={formData.director || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Country"
          name="country"
          value={formData.country || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Year"
          name="year"
          value={formData.year || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Actors"
          name="topActors"
          value={formData.topActors || ""}
          onChange={handleChange}
          required
        />
        <textarea
          placeholder="Description"
          rows={5}
          name="blurb"
          value={formData.blurb || ""}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          name="genre"
          value={formData.genre || ""}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddMovie;
