import { FormatLaunchesFunctionType } from "../types";

export const formatLaunchesData: FormatLaunchesFunctionType = (data) => {
  const { launches } = data;
  const formattedLaunchesData = launches.map((launch) => {
    const { id, launch_year, mission_name, rocket } = launch;

    const updatedFormatRocket = {
      rocketName: rocket.rocket_name,
      rocket: {
        costPerLaunch: rocket.rocket.cost_per_launch,
        description: rocket.rocket.description,
        mass: {
          kg: rocket.rocket.mass.kg,
        },
      },
    };
    const updatedFormatLaunch = {
      id: id,
      launchYear: launch_year,
      missionName: mission_name,
      rocket: updatedFormatRocket,
    };

    return updatedFormatLaunch;
  });

  return formattedLaunchesData;
};
