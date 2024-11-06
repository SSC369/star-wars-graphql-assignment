import { gql } from "@apollo/client";

export const GET_LAUNCHES = gql`
  query Query($limit: Int, $offset: Int) {
    launches(limit: $limit, offset: $offset) {
      id
      launch_year
      mission_name
      rocket {
        rocket_name
        rocket {
          cost_per_launch
          description
          mass {
            kg
          }
        }
      }
    }
  }
`;
