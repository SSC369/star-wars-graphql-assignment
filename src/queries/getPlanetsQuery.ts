import { DocumentNode, gql } from "@apollo/client";

export const GET_PLANETS_QUERY: DocumentNode = gql`
  query Root {
    allPlanets {
      planets {
        name
        gravity
        filmConnection {
          films {
            id
            title
          }
        }
      }
    }
  }
`;
