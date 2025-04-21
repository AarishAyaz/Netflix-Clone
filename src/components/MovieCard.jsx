import React from "react";

const MovieCard = ({ rank, title, poster }) => {
  return (
    <div className="relative cursor-pointer w-48 md:w-56 lg:w-64 flex-shrink-0 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
      <span className="absolute bottom-20 left-0 transform translate-x-[-30%] translate-y-[30%] z-20 
                       text-9xl font-extrabold text-black rank-outline drop-shadow-lg">
        {rank}
      </span>

      <div className="relative">
        <img
          src={poster}
          alt={title}
          className="rounded-lg w-full h-90 object-cover transition-opacity duration-300 hover:opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </div>

      <h2 className="text-white text-lg font-semibold mt-2 transition-colors duration-300 hover:text-red-400">
        {title}
      </h2>
    </div>
  );
};

export default MovieCard;
