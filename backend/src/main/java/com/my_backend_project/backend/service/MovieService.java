package com.my_backend_project.backend.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.my_backend_project.backend.model.Movie;
import com.my_backend_project.backend.recommender.KNNRecommender;
import com.my_backend_project.backend.repository.MovieRepository;

import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.List;

@Service
public class MovieService {

    private final MovieRepository movieRepository;
    private final MovieIndexer movieIndexer;
    private List<Movie> movieList;
    private KNNRecommender recommender;

    public MovieService(MovieRepository movieRepository, MovieIndexer movieIndexer) {
        this.movieRepository = movieRepository;
        this.movieIndexer = movieIndexer;
    }

    public List<Movie> getAllMovies() {
        this.movieList = movieRepository.findAll();
        this.recommender = new KNNRecommender(movieList);
        return movieList;
    }

    public Movie getMovie(String id) {
        return movieRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    public Movie getMovieBySlug(String slug) {
        return movieRepository.findBySlug(slug)
                .orElseThrow(() -> new RuntimeException("Movie not found"));
    }

    public Movie addNewMovie(Movie movie) {
        Movie savedMovie = movieRepository.save(movie);
        try {
            movieIndexer.indexMovie(savedMovie);
        } catch (IOException e) {
            System.err.println("Failed to index movie: " + e.getMessage());
            e.printStackTrace();
        }

        this.movieList = movieRepository.findAll();
        this.recommender = new KNNRecommender(movieList);

        return savedMovie;
    }

    public void deleteMovieById(String id) {
        if (!movieRepository.existsById(id)) {
            throw new RuntimeException("Movie not found");
        }
        movieRepository.deleteById(id);

        this.movieList = movieRepository.findAll();
        this.recommender = new KNNRecommender(movieList);
    }

    public Movie findMovieByTitle(String title) {
        this.movieList = movieRepository.findAll();
        return movieList.stream()
                .filter(movie -> movie.getTitle().equalsIgnoreCase(title))
                .findFirst()
                .orElse(null);
    }

    public List<Movie> getMoviesByIds(List<String> similarMovieIds) {
        return movieRepository.findByIdIn(similarMovieIds);
    }

    public List<Movie> recommendMovies(Movie clickedMovie, int k) {
        this.movieList = movieRepository.findAll();
        this.recommender = new KNNRecommender(movieList);
        return recommender.recommend(clickedMovie, k);
    }

}
