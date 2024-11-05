import React, { useState } from "react";
import { observer } from "mobx-react-lite";

import { FilmPropsType } from "../types";
import useGetFilm from "../apis/queries/getFilmDetails/useGetFilm";
import FilmModal from "./FilmModal";

const Film: React.FC<FilmPropsType> = observer(({ film }) => {
  const [showFilmModal, setShowFilmModal] = useState<boolean>(false);
  const { getFilm, loading, error } = useGetFilm();

  const { title, id } = film;

  const handleFilmClick = (): void => {
    getFilm({
      variables: {
        filmId2: id,
      },
    });
    setShowFilmModal(true);
  };

  const renderFilmModal = (): React.ReactElement => {
    if (showFilmModal) {
      return (
        <FilmModal
          close={() => setShowFilmModal(false)}
          loading={loading}
          error={error}
        />
      );
    }
    return <></>;
  };

  return (
    <li
      onClick={handleFilmClick}
      className="rounded-xl cursor-pointer bg-slate-700 w-fit p-1 px-2"
    >
      <p className="text-sm">{title}</p>
      {renderFilmModal()}
    </li>
  );
});

export default Film;
