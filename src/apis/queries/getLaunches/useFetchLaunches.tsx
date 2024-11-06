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
    onCompleted: (data) => {
      console.log(data);
      onSuccess(data);
    },
  });
  const loading = networkStatus === NetworkStatus.loading;
  return { loading, error, refetch, fetchMore };
};

export default useFetchLaunches;
