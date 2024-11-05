import FilmModel from "../../../models/FilmModel";
import PlanetModel from "../../../models/PlanetModel";
import planetStore from "../../../store/PlanetStore";
import { GetPlanetsSuccessResponseType, PlanetType } from "../../../types";

export const onSuccess: GetPlanetsSuccessResponseType = (data) => {
  const planets = data.allPlanets.planets;
  planets.forEach((planet: PlanetType) => {
    const { gravity, name, filmConnection } = planet;
    const filmModels = filmConnection.films.map((film) => {
      const { id, title } = film;
      return new FilmModel(id, title);
    });
    const planetModal = new PlanetModel(name, gravity, filmModels);
    planetStore.addPlanet(planetModal);
  });
};
