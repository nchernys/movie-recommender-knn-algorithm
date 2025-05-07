package com.my_backend_project.backend.service;

import org.apache.lucene.analysis.Analyzer;
import org.apache.lucene.document.Document;
import org.apache.lucene.index.DirectoryReader;
import org.apache.lucene.index.Term;
import org.apache.lucene.queries.mlt.MoreLikeThis;
import org.apache.lucene.search.*;
import org.apache.lucene.store.Directory;

import java.io.Reader;
import java.io.StringReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

public class MovieSearcher {

    private final Directory memoryIndex;
    private final Analyzer analyzer;

    public MovieSearcher(Directory memoryIndex, Analyzer analyzer) {
        this.memoryIndex = memoryIndex;
        this.analyzer = analyzer;
    }

    public List<String> searchSimilarMovies(String movieId, int k) throws Exception {
        try (DirectoryReader directoryReader = DirectoryReader.open(memoryIndex)) {
            IndexSearcher searcher = new IndexSearcher(directoryReader);

            // Find the docId of the movie to compare
            Query idQuery = new TermQuery(new Term("id", movieId));
            TopDocs hits = searcher.search(idQuery, 1);
            if (hits.totalHits == 0) {
                return Collections.emptyList();
            }
            int docId = hits.scoreDocs[0].doc;

            // Set up MoreLikeThis
            MoreLikeThis mlt = new MoreLikeThis(directoryReader);
            mlt.setAnalyzer(analyzer);
            mlt.setFieldNames(new String[] { "description", "genre", "country", "year" });
            mlt.setMinTermFreq(1);
            mlt.setMinDocFreq(1);

            Document doc = directoryReader.document(docId);

            BooleanQuery.Builder boostedQuery = new BooleanQuery.Builder();
            Map<String, Float> boosts = Map.of(
                    "description", 1.0f,
                    "genre", 3.5f,
                    "country", 3.0f,
                    "year", 2.5f);

            for (String field : boosts.keySet()) {
                String value = doc.get(field);
                if (value != null && !value.isBlank()) {
                    Reader fieldReader = new StringReader(value);
                    Query subQuery = mlt.like(field, fieldReader);
                    Query boosted = new BoostQuery(subQuery, boosts.get(field));
                    boostedQuery.add(boosted, BooleanClause.Occur.SHOULD);
                }
            }

            Query finalQuery = boostedQuery.build();
            TopDocs topDocs = searcher.search(finalQuery, k + 1);

            List<String> resultMovieIds = new ArrayList<>();
            for (ScoreDoc scoreDoc : topDocs.scoreDocs) {
                if (scoreDoc.doc == docId)
                    continue;
                Document resultDoc = searcher.doc(scoreDoc.doc);
                resultMovieIds.add(resultDoc.get("id"));
                if (resultMovieIds.size() == k)
                    break;
            }

            return resultMovieIds;
        }
    }
}
