import { useQuery } from "@apollo/client";

import { GET_PLANETS_QUERY } from "../queries/getPlanetsQuery";
import FilmModel from "../models/FilmModel";
import PlanetStore from "../store/PlanetStore";
import { GetPlanetsHookType, PlanetType } from "../types";
import PlanetModel from "../models/PlanetModel";

const useGetPlanets: GetPlanetsHookType = () => {
  const { loading, error, refetch } = useQuery(GET_PLANETS_QUERY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      const planets = data.allPlanets.planets;
      planets.forEach((planet: PlanetType) => {
        const { gravity, name, filmConnection } = planet;
        const filmModels = filmConnection.films.map((film) => {
          const { id, title } = film;
          return new FilmModel(id, title);
        });
        const planetModal = new PlanetModel(name, gravity, filmModels);
        PlanetStore.addPlanet(planetModal);
      });
    },
  });

  return { loading, error, refetch };
};

export default useGetPlanets;
