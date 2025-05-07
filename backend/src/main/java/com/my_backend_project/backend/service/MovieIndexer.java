package com.my_backend_project.backend.service;

import com.my_backend_project.backend.model.Movie;
import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.analysis.standard.StandardAnalyzer;
import org.apache.lucene.document.*;
import org.apache.lucene.index.*;
import org.apache.lucene.store.RAMDirectory;
import org.apache.lucene.store.Directory;
import org.springframework.stereotype.Component;

import java.io.IOException;

@Component
public class MovieIndexer {

    private final Directory memoryIndex;
    private final Analyzer analyzer;

    public MovieIndexer() throws IOException {
        this.memoryIndex = new RAMDirectory();
        this.analyzer = new StandardAnalyzer();
    }

    public void indexMovie(Movie movie) throws IOException {

        if (movie.getBlurb() == null || movie.getBlurb().isBlank()) {
            System.err.println("Skipping movie with null or blank description: " + movie.getId());
            return;
        }

        IndexWriterConfig indexWriterConfig = new IndexWriterConfig(analyzer);
        try (IndexWriter writer = new IndexWriter(memoryIndex, indexWriterConfig)) {

            Document document = new Document();

            // ID field (not analyzed, stored as is)
            document.add(new StringField("id", String.valueOf(movie.getId()), Field.Store.YES));

            // Create custom field type with term vector storage enabled
            FieldType textWithTermVectors = new FieldType(TextField.TYPE_STORED);
            textWithTermVectors.setStoreTermVectors(true);
            textWithTermVectors.setStoreTermVectorPositions(true);
            textWithTermVectors.setStoreTermVectorOffsets(true);

            // Add description (blurb) with term vectors
            document.add(new Field("description", movie.getBlurb(), textWithTermVectors));

            // Add optional fields if available
            if (movie.getGenre() != null && !movie.getGenre().isBlank()) {
                document.add(new Field("genre", movie.getGenre(), textWithTermVectors));
            }

            if (movie.getCountry() != null && !movie.getCountry().isBlank()) {
                document.add(new Field("country", movie.getCountry(), textWithTermVectors));
            }

            if (movie.getYear() != null && !movie.getYear().isBlank()) {
                document.add(new Field("year", movie.getYear(), textWithTermVectors));
            }

            writer.addDocument(document);
        }
    }

    public Directory getMemoryIndex() {
        return memoryIndex;
    }

    public Analyzer getAnalyzer() {
        return analyzer;
    }
}
