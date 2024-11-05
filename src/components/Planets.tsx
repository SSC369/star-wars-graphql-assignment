import React from "react";
import { v4 } from "uuid";
import { observer } from "mobx-react-lite";

import planetStore from "../store/PlanetStore";
import FilmModel from "../models/FilmModel";
import Film from "./Film";
import PlanetModel from "../models/PlanetModel";

const Planets: React.FC = observer(() => {
  const renderPlanetFilms = (films: FilmModel[]): React.ReactElement => {
    return (
      <>
        <h1 className="text-slate-200 border-b-[1px] pb-1 border-b-slate-600 font-semibold text-center">
          Films
        </h1>
        <ul className="flex flex-wrap gap-2">
          {films.map((film) => {
            return <Film key={film.id} film={film} />;
          })}
        </ul>
      </>
    );
  };

  const renderPlanet = (planet: PlanetModel): React.ReactElement => {
    const { name, gravity, films } = planet;
    return (
      <li
        className="md:w-[40%] lg:w-[30%] w-4/5 shadow-xl  text-slate-200 min-h-[200px] flex flex-col gap-2 bg-slate-800 p-2 rounded-xl"
        key={v4()}
      >
        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400 w-1/3">Planet Name:</p>
          <h1>{name}</h1>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400 w-1/3">Gravity:</p>
          <h1>{gravity}</h1>
        </div>
        {films.length > 0 && renderPlanetFilms(films)}
      </li>
    );
  };

  return (
    <>
      <h1 className="text-3xl font-semibold text-slate-100 mb-4 text-center">
        Planets
      </h1>
      <ul className="flex flex-wrap gap-4 items-start justify-center">
        {planetStore.planets.map((planet) => {
          return renderPlanet(planet);
        })}
      </ul>
    </>
  );
});

export default Planets;
