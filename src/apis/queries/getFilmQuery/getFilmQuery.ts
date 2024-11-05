import { DocumentNode, gql } from "@apollo/client";

export const GET_FILM_QUERY: DocumentNode = gql`
  query Root($filmId2: ID) {
    film(id: $filmId2) {
      title
      id
      director
      releaseDate
      edited
      openingCrawl
    }
  }
`;
