package com.my_backend_project.backend.recommender;

import com.my_backend_project.backend.model.Movie; // <-- Import Movie

import java.util.*;
import java.util.stream.Collectors;

public class KNNRecommender {
    private List<Movie> movies;

    public KNNRecommender(List<Movie> movies) {
        this.movies = movies;
    }

    public List<Movie> recommend(Movie clickedMovie, int k) {
        return movies.stream()
                .filter(m -> !m.equals(clickedMovie))
                .limit(k)
                .collect(Collectors.toList());
    }
}
