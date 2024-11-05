import { makeAutoObservable } from "mobx";
import FilmModel from "./FilmModel";

class PlanetModel {
  name: string;
  gravity: string;
  films: FilmModel[];

  constructor(name: string, gravity: string, films: FilmModel[]) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.name = name;
    this.gravity = gravity;
    this.films = films;
  }
}

export default PlanetModel;
