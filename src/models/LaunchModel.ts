import { RocketType } from "../types";

class LaunchModel {
  id: string;
  launchYear: string;
  missionName: string;
  rocket: RocketType;

  constructor(
    id: string,
    launchYear: string,
    missionName: string,
    rocket: RocketType
  ) {
    this.id = id;
    this.launchYear = launchYear;
    this.missionName = missionName;
    this.rocket = rocket;
  }
}

export default LaunchModel;
