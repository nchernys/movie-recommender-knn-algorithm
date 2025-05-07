package com.my_backend_project.backend.controller;

import com.my_backend_project.backend.model.Movie;
import com.my_backend_project.backend.model.MovieWithSimilarDTO;
import com.my_backend_project.backend.service.MovieSearchService;
import com.my_backend_project.backend.service.MovieService;

import jakarta.annotation.PostConstruct;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@RestController
@RequestMapping("/api")
public class MovieController {

    private MovieService movieService;
    private final MovieSearchService movieSearchService;

    public MovieController(MovieService movieService) throws Exception {
        this.movieService = movieService;
        this.movieSearchService = new MovieSearchService();
    }

    @PostConstruct
    public void initIndex() {
        try {
            List<Movie> allMovies = movieService.getAllMovies();
            for (Movie movie : allMovies) {
                movieSearchService.addMovie(movie);
            }
        } catch (Exception e) {
            System.err.println("Failed to initialize movie index: " + e.getMessage());
            e.printStackTrace();
            throw new RuntimeException("Indexing failed", e);
        }
    }

    @GetMapping("/all-movies")
    public List<Movie> getAllMovies() {
        List<Movie> allMovies = movieService.getAllMovies();
        return allMovies;
    }

    @DeleteMapping("/movie/delete/{id}")
    public ResponseEntity<Void> deleteMovie(@PathVariable String id) {
        movieService.deleteMovieById(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/movie/{slug}")
    public MovieWithSimilarDTO getMovieWithSimilar(@PathVariable String slug) throws Exception {
        Movie movie = movieService.getMovieBySlug(slug);
        if (movie == null) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Movie not found");
        }

        List<String> similarMovieIds = movieSearchService.findSimilarMovies(movie.getId(), 5);
        List<Movie> similarMovies = movieService.getMoviesByIds(similarMovieIds);

        return new MovieWithSimilarDTO(movie, similarMovies);
    }

    @PostMapping("/movie/add")
    public Movie addNewMovie(@RequestBody Movie movie) throws Exception {
        return movieService.addNewMovie(movie);
    }

}
