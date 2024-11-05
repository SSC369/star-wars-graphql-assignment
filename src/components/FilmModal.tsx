import React from "react";
import dayjs from "dayjs";
import { observer } from "mobx-react-lite";

import { FilmModalProps } from "../types";
import { IoClose } from "react-icons/io5";
import planetStore from "../store/PlanetStore";

const FilmModal: React.FC<FilmModalProps> = observer(
  ({ loading, error, close }) => {
    const renderLoader = (): React.ReactElement => {
      if (loading) {
        return (
          <div className=" text-white flex items-center justify-center">
            <h1 className="">Loading ...</h1>
          </div>
        );
      }
      return <></>;
    };

    const renderErrorView = (): React.ReactElement => {
      if (error) {
        return (
          <div>
            <p>Oop's something went wrong !!!</p>
            <button>Retry</button>
          </div>
        );
      }
      return <></>;
    };

    const handleModalClick = (
      e: React.MouseEvent<HTMLDivElement, MouseEvent>
    ): void => {
      e.stopPropagation();
    };

    const renderMovie = (): React.ReactElement => {
      if (!planetStore.movie) {
        return <h1>No Movie Data !!!</h1>;
      }
      const { director, edited, id, openingCrawl, releaseDate, title } =
        planetStore.movie;
      return (
        <div
          className="pt-4 text-slate-200 flex flex-col gap-2  rounded-xl"
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
          <h1 className="font-semibold text-center text-lg text-slate-400 border-t-[1px] border-t-slate-500 pt-1">
            Opening Crawl
          </h1>
          <p className="line-clamp-3">{openingCrawl}</p>
        </div>
      );
    };

    if (error) {
      return renderErrorView();
    }

    const renderFilmData = (): React.ReactElement => {
      if (loading) {
        return renderLoader();
      }
      return renderMovie();
    };

    return (
      <div
        onClick={handleModalClick}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      >
        <div className="flex justify-center items-center rounded-xl w-4/5 p-4 relative bg-slate-800  min-h-[260px] min-w-[300px] max-w-[400px]">
          <button onClick={() => close()} className="absolute top-2 right-2">
            <IoClose className="text-xl" />
          </button>
          {renderFilmData()}
        </div>
      </div>
    );
  }
);

export default FilmModal;
