import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // For handling errors

  // Fetch movies from API
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=794cee3ccdc629933512fc84db90cd51"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data from the API");
        }
        const data = await response.json();
        if (data.results) {
          setMovies(data.results); // Update movies state with API results
        } else {
          setMovies([]); // Ensure movies is an empty array if no results
        }
      } catch (error) {
        setError(error.message); // Capture the error message
      } finally {
        setLoading(false); // Ensure loading state is updated
      }
    };

    fetchMovies();
  }, []);

  
  return (
    <div className="p-8 bg-black w-screen">
      <h1 className="text-white text-3xl mb-6">Trending Movies</h1>
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : movies && movies.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              title={movie.title || "Untitled"}
              description={movie.overview || "No description available."}
              poster={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : "https://via.placeholder.com/500x750?text=No+Image"
              }
            />
          ))}
        </div>
      ) : (
        <p className="text-white">No movies found.</p>
      )}
    </div>
  );
};

export default TrendingMovies;
