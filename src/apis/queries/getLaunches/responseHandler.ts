import { formatLaunchesData } from "../../../factories/launchesFactory";
import launchStore from "../../../store/LaunchStore";
import { LaunchResponseDataType } from "../../../types";

export const onSuccess = (data: { launches: LaunchResponseDataType[] }) => {
  const formattedLaunchesData = formatLaunchesData(data);
  formattedLaunchesData.forEach((launch) => {
    const { id, launchYear, missionName, rocket } = launch;
    launchStore.addLaunch(id, launchYear, missionName, rocket);
  });
};
