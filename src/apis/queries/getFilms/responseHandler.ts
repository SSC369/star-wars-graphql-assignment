import movieStore from "../../../store/MovieStore";
import { EdgeType, GetFilmsSuccessResponseType } from "../../../types";

export const onSuccess: GetFilmsSuccessResponseType = (data) => {
  data.allFilms.edges.map((edge: EdgeType) => {
    const { node } = edge;
    const { director, id, openingCrawl, releaseDate, title, edited } = node;
    movieStore.addMovie(director, id, openingCrawl, releaseDate, title, edited);
  });
};
