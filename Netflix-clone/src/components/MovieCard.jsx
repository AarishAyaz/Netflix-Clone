import React from "react";

const MovieCard = ({ title, description, poster }) => {
  return (
    <div className="max-w-xs bg-gray-800 rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-xl">
      {/* Movie Poster */}
      <div className="h-60">
        <img
          src={poster}
          alt={`${title} Poster`}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Movie Details */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
        <p className="mt-2 text-sm text-gray-400 line-clamp-2">{description}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between items-center p-4">
        <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
          Watch Now
        </button>
        <button className="text-gray-400 hover:text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.75 6.75a6.5 6.5 0 11-9.5 0m9.5 0a6.5 6.5 0 11-9.5 0m4.75 13.5v-4.25a2.25 2.25 0 10-4.5 0V20.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
