package com.my_backend_project.backend.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

@Document(collection = "movies")
public class Movie {

    @Id
    private String id;

    private String title;
    private String year;
    private String director;
    private String country;
    private String genre;
    private String slug;
    private String blurb;

    @Field("top_actors")
    private List<String> topActors;

    // Constructors
    public Movie() {
    }

    public Movie(String id, String slug, String title, String year, String director, String country, String genre,
            String blurb, List<String> topActors) {
        this.id = id;
        this.title = title;
        this.year = year;
        this.director = director;
        this.country = country;
        this.genre = genre;
        this.slug = slug;
        this.blurb = blurb;
        this.topActors = topActors;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getSlug() {
        return slug;
    }

    public void setSlug(String slug) {
        this.slug = slug;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getYear() {
        return year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getDirector() {
        return director;
    }

    public void setDirector(String director) {
        this.director = director;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getBlurb() {
        return blurb;
    }

    public void setBlurb(String blurb) {
        this.blurb = blurb;
    }

    public String getGenre() {
        return genre;
    }

    public void setGenre(String genre) {
        this.genre = genre;
    }

    public List<String> gettopActors() {
        return topActors;
    }

    public void settopActors(List<String> topActors) {
        this.topActors = topActors;
    }

}
