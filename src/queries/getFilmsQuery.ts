import { DocumentNode, gql } from "@apollo/client";

export const GET_FILMS: DocumentNode = gql`
  query Root {
    allFilms {
      edges {
        node {
          director
          openingCrawl
          releaseDate
          title
          episodeID
          id
          edited
        }
      }
    }
  }
`;
