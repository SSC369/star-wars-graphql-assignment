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

  updateLaunches(launches: LaunchType[]) {
    launches.forEach((launch) => {
      const { id, launchYear, missionName, rocket } = launch;
      let present = false;
      this.launches.forEach((storedLaunch) => {
        if (storedLaunch.id === launch.id) {
          present = true;
          return;
        }
      });
      if (!present) {
        this.launches.push(
          new LaunchModel(id, launchYear, missionName, rocket)
        );
      }
    });
  }
}
const launchStore = new LaunchStore();
export default launchStore;
