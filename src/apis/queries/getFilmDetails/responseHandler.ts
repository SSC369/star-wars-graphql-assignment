import planetStore from "../../../store/PlanetStore";
import MovieModel from "../../../models/MovieModel";
import { GetFilmSuccessResponseType } from "../../../types";

export const onSuccess: GetFilmSuccessResponseType = (data) => {
  const { director, openingCrawl, edited, title, id, releaseDate } = data.film;
  const movieModel = new MovieModel(
    director,
    id,
    openingCrawl,
    releaseDate,
    title,
    edited
  );
  planetStore.addPlanetMovie(movieModel);
};

export const onFailure = () => {};
