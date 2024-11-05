import { useQuery } from "@apollo/client";

import { GET_PLANETS_QUERY } from "./getPlanetsQuery";
import { GetPlanetsHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useGetPlanets: GetPlanetsHookType = () => {
  const { loading, error, refetch } = useQuery(GET_PLANETS_QUERY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      onSuccess(data);
    },
  });

  return { loading, error, refetch };
};

export default useGetPlanets;
