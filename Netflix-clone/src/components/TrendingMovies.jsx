import React, { useEffect, useState, useRef } from "react";
import MovieCard from "./MovieCard";

const TrendingMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null); // Ref for scrolling

  // Fetch trending movies
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/trending/movie/day?api_key=794cee3ccdc629933512fc84db90cd51"
        );
        if (!response.ok) throw new Error("Failed to fetch data");
        const data = await response.json();
        setMovies(data.results || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  // Scroll functions
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    
    <div className="relative bg-black text-white pl-70 pr-70 space-x-8 w-screen ">
      {/* Curved Top Border */}
      {/* <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#000"
          d="M0,256L48,245.3C96,235,192,213,288,218.7C384,224,480,256,576,240C672,224,768,160,864,149.3C960,139,1056,181,1152,181.3C1248,181,1344,139,1392,117.3L1440,96V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z"
        ></path>
      </svg> */}

      <h1 className="text-3xl font-extrabold mb-6 ml-8 pt-10 relative">
        Trending Now
      </h1>

      <div className="">
        {/* Scroll Buttons */}
        <button
          className="cursor-pointer absolute left-2 top-1/2 transform -translate-y-1/2 z-10 flex justify-center items-center h-30 w-2 text-center bg-gray-900 bg-opacity-75 text-white ml-68 hover:bg-gray-700 p-3 rounded-full"
          onClick={scrollLeft}
        >
          ❮
        </button>

        <div ref={scrollRef} className="flex overflow-x-scroll space-x-10 px-8 no-scrollbar">


          {loading ? (
            <p className="text-white">Loading...</p>
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : movies.length > 0 ? (
            movies.map((movie, index) => (
              <MovieCard
                key={movie.id}
                rank={index + 1}
               // title={movie.title || "Untitled"}
                description={movie.overview || "No description available."}
                poster={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : "https://via.placeholder.com/500x750?text=No+Image"
                }
              />
            ))
          ) : (
            <p className="text-white">No movies found.</p>
          )}
        </div>

        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer
             h-30 w-2  mr-60 p-3 flex items-center justify-center 
             text-xl bg-gray-900 bg-opacity-75 hover:bg-gray-700 
             text-white rounded-full"
          onClick={scrollRight}
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default TrendingMovies;
