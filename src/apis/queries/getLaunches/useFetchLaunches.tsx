import { NetworkStatus, useQuery } from "@apollo/client";
import { GET_LAUNCHES } from "./getLaunchesQuery";
import { FetchLaunchesHookType } from "../../../types";
import { onSuccess } from "./responseHandler";

const useFetchLaunches: FetchLaunchesHookType = () => {
  const { error, refetch, fetchMore, networkStatus } = useQuery(GET_LAUNCHES, {
    variables: {
      limit: 10,
      offset: 0,
    },
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-and-network",
    nextFetchPolicy: "cache-only",
    onCompleted: (data) => {
      onSuccess(data);
    },
  });
  const loading = networkStatus === NetworkStatus.loading;

  const fetchMoreLoading = networkStatus === NetworkStatus.fetchMore;

  return { loading, error, refetch, fetchMore, fetchMoreLoading };
};

export default useFetchLaunches;
