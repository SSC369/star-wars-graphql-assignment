import { useQuery } from "@apollo/client";

import { GetFilmsHookType } from "../../../types";
import { GET_FILMS } from "./getFilmsQuery";
import { onSuccess } from "./responseHandler";

const useGetFilms: GetFilmsHookType = () => {
  const { loading, error, refetch } = useQuery(GET_FILMS, {
    fetchPolicy: "cache-and-network",
    onCompleted(data) {
      onSuccess(data);
    },
  });
  return { loading, error, refetch };
};

export default useGetFilms;
