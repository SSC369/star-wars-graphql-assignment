import { useLazyQuery } from "@apollo/client";

import { GetFilmHookType, PlanetMovieType } from "../../../types";
import { GET_FILM_QUERY } from "./getFilmQuery";
import { onSuccess } from "./responseHandler";

const useGetFilm: GetFilmHookType = () => {
  const [getFilm, { loading, error }] = useLazyQuery(GET_FILM_QUERY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data: { film: PlanetMovieType }) => {
      onSuccess(data);
    },
  });

  return { getFilm, loading, error };
};

export default useGetFilm;
