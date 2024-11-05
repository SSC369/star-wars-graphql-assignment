import { makeAutoObservable } from "mobx";

import PlanetModel from "../models/PlanetModel";
import MovieModel from "../models/MovieModel";

class PlanetStore {
  planets: PlanetModel[] = [];
  planetMovie: MovieModel | null = null;

  constructor() {
    makeAutoObservable(this, {}, { autoBind: true });
  }

  addPlanet(planet: PlanetModel): void {
    this.planets.push(planet);
  }

  get movie(): MovieModel | null {
    return this.planetMovie;
  }

  addPlanetMovie(movie: MovieModel): void {
    this.planetMovie = movie;
  }
}
const planetStore = new PlanetStore();
export default planetStore;
