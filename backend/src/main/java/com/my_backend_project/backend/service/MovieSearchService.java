package com.my_backend_project.backend.service;

import com.my_backend_project.backend.model.Movie;

import java.io.IOException;
import java.util.List;

public class MovieSearchService {

    private MovieIndexer indexer;
    private MovieSearcher searcher;

    public MovieSearchService() throws Exception {
        try {
            this.indexer = new MovieIndexer();
            this.searcher = new MovieSearcher(indexer.getMemoryIndex(), indexer.getAnalyzer());
        } catch (IOException e) {
            throw new RuntimeException("Failed to initialize MovieSearchService", e);
        }
    }

    public void addMovie(Movie movie) throws Exception {
        indexer.indexMovie(movie);
    }

    public List<String> findSimilarMovies(String id, int k) throws Exception {
        return searcher.searchSimilarMovies(id, k);
    }
}
