import { makeAutoObservable } from "mobx";
import { LaunchType, RocketType } from "../types";
import LaunchModel from "../models/LaunchModel";

class LaunchStore {
  launches: LaunchModel[] = [];

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  addLaunch(
    id: string,
    launchYear: string,
    missionName: string,
    rocket: RocketType
  ) {
    this.launches.push(new LaunchModel(id, launchYear, missionName, rocket));
  }

  get launchesData(): LaunchModel[] {
    return this.launches;
  }

  addLaunches(launches: LaunchType[]) {
    const existingIds = new Set(this.launches.map((launch) => launch.id));
    const newLaunches = launches
      .filter(({ id }) => !existingIds.has(id))
      .map(
        ({ id, launchYear, missionName, rocket }) =>
          new LaunchModel(id, launchYear, missionName, rocket)
      );
    this.launches = [...this.launches, ...newLaunches];
  }
}
const launchStore = new LaunchStore();
export default launchStore;
