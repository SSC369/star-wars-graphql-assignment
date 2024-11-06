import { formatLaunchesData } from "../../../factories/launchesFactory";
import launchStore from "../../../store/LaunchStore";
import { LaunchResponseDataType } from "../../../types";

export const onSuccess = (data: { launches: LaunchResponseDataType[] }) => {
  const formattedLaunchesData = formatLaunchesData(data);
  launchStore.addLaunches(formattedLaunchesData);
};
