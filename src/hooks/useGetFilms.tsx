import { DocumentNode, gql, useQuery } from "@apollo/client";
import { EdgeType, GetFilmsHookType } from "../types";
import movieStore from "../store/MovieStore";

const GET_FILMS: DocumentNode = gql`
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

const useGetFilms: GetFilmsHookType = () => {
  const { loading, error, refetch } = useQuery(GET_FILMS, {
    fetchPolicy: "cache-and-network",
    onCompleted(data) {
      data.allFilms.edges.map((edge: EdgeType) => {
        const { node } = edge;
        const { director, id, openingCrawl, releaseDate, title, edited } = node;
        movieStore.addMovie(
          director,
          id,
          openingCrawl,
          releaseDate,
          title,
          edited
        );
      });
    },
  });

  return { loading, error, refetch };
};

export default useGetFilms;
