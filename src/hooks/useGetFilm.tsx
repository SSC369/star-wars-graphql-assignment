import { useLazyQuery } from "@apollo/client";

import { GetFilmHookType, PlanetMovieType } from "../types";
import planetStore from "../store/PlanetStore";
import MovieModel from "../models/MovieModel";
import { GET_FILM_QUERY } from "../queries/getFilmQuery";

const useGetFilm: GetFilmHookType = () => {
  const [getFilm, { loading, error }] = useLazyQuery(GET_FILM_QUERY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data: { film: PlanetMovieType }) => {
      const { director, openingCrawl, edited, title, id, releaseDate } =
        data.film;
      const movieModel = new MovieModel(
        director,
        id,
        openingCrawl,
        releaseDate,
        title,
        edited
      );

      planetStore.addPlanetMovie(movieModel);
    },
  });

  return { getFilm, loading, error };
};

export default useGetFilm;
