import React from "react";
import dayjs from "dayjs";

import movieStore from "../store/MovieStore";
import MovieModel from "../models/MovieModel";

const Movies: React.FC = () => {
  return (
    <ul className="flex flex-wrap gap-4 items-center justify-center">
      {movieStore.movies.map((movie: MovieModel) => {
        const { director, id, openingCrawl, releaseDate, title, edited } =
          movie;
        return (
          <li
            className="md:w-[40%] lg:w-[30%] w-4/5 shadow-xl  text-slate-200 flex flex-col gap-2 bg-slate-800 p-2 rounded-xl"
            key={id}
          >
            <div className="flex justify-between items-center gap-2">
              <p className="text-slate-400 w-1/3">Title:</p>
              <h1>{title}</h1>
            </div>

            <div className="flex justify-between items-center gap-2">
              <p className="text-slate-400 w-1/3">Director:</p>
              <p>{director}</p>
            </div>

            <div className="flex justify-between items-center gap-2">
              <p className="text-slate-400 w-1/3">Release Date:</p>
              <p>{dayjs(releaseDate).format("DD MMM YYYY")}</p>
            </div>

            <div className="flex justify-between items-center gap-2">
              <p className="text-slate-400 w-1/3">Edited Date:</p>
              <p>{dayjs(edited).format("DD MMM YYYY")}</p>
            </div>

            <p className="line-clamp-3 ">{openingCrawl}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Movies;
