import React from "react";

const MovieCard = ({
  movie: {
    id,
    title,
    overview,
    vote_average,
    poster_path,
    release_date,
    original_language,
  },
}) => {
  return (
    <div className=" shadow-inner p-4 bg-black/50 flex flex-col motion-preset-expand">
      <img
        className=" h-auto w-full"
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : "/no_image.png"
        }
      />

      <div className="flex flex-col flex-grow">
        <h1 className="my-4 text-white font-bold text-base">{title}</h1>
        <p className="text-sm flex-grow">
          {overview ? overview : "Description not available"}
        </p>
      </div>
      <div className="flex text-gray-300 mt-auto">
        <img src="star.svg" alt="star_image" />
        <p>&nbsp;</p>
        <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
        <span>&nbsp;•&nbsp;</span>
        {original_language}
        <span>&nbsp;•&nbsp;</span>
        <p>{release_date ? release_date.split("-")[0] : "N/A"}</p>
      </div>
    </div>
  );
};

export default MovieCard;
