import React from "react";
import { observer } from "mobx-react-lite";

import useGetPlanets from "./apis/queries/getPlanets/useGetPlanets";
import Planets from "./components/Planets";

const App: React.FC = observer(() => {
  const { loading, error, refetch } = useGetPlanets();

  const renderLoader = (): React.ReactElement => {
    return (
      <div className="bg-slate-900 min-h-dvh text-white flex items-center justify-center">
        <h1 className="">Loading ...</h1>
      </div>
    );
  };

  const renderErrorView = (): React.ReactElement => {
    return (
      <div>
        <p>Oop's something went wrong !!!</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  };

  if (loading) {
    return renderLoader();
  }

  if (error) {
    return renderErrorView();
  }

  return (
    <div className="p-4 bg-slate-900 min-h-dvh">
      <Planets />
    </div>
  );
});

export default App;
