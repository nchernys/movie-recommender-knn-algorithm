package com.my_backend_project.backend.model;

import java.util.List;

public class MovieWithSimilarDTO {
    private Movie movie;
    private List<Movie> similarMovies;

    public MovieWithSimilarDTO() {
    }

    public MovieWithSimilarDTO(Movie movie, List<Movie> similarMovies) {
        this.movie = movie;
        this.similarMovies = similarMovies;
    };

    public Movie getMovie() {
        return movie;
    }

    public void setMovie(Movie movie) {
        this.movie = movie;
    }

    public List<Movie> getsimilarMovies() {
        return similarMovies;
    }

    public void setsimilarmovies(List<Movie> similarMovies) {
        this.similarMovies = similarMovies;
    }
}