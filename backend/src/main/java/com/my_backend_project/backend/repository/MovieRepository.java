package com.my_backend_project.backend.repository;

import com.my_backend_project.backend.model.Movie;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface MovieRepository extends MongoRepository<Movie, String> {

    Optional<Movie> findBySlug(String slug);

    List<Movie> findByIdIn(List<String> ids);
}
