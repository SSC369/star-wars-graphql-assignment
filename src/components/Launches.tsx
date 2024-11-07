import React, { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import launchStore from "../store/LaunchStore";
import LaunchModel from "../models/LaunchModel";
import useFetchLaunches from "../apis/queries/getLaunches/useFetchLaunches";
import { formatLaunchesData } from "../factories/launchesFactory";
import { LAUNCHES_LIMIT } from "../contants";

const Launches: React.FC = observer(() => {
  const [offset, setOffset] = useState<number>(0);
  const { refetch, loading, error, fetchMore, fetchMoreLoading } =
    useFetchLaunches();

  // const handleScroll = () => {
  //   const scrollPosition =
  //     window.innerHeight + document.documentElement.scrollTop;
  //   const bottomPosition = document.documentElement.offsetHeight;
  //   if (scrollPosition >= bottomPosition) {
  //     fetchMore({
  //       variables: {
  //         offset: launchStore.launchesData.length + LAUNCHES_LIMIT,
  //       },
  //     }).then(({ data }) => {
  //       const formattedLaunchesData = formatLaunchesData(data);
  //       launchStore.addLaunches(formattedLaunchesData);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [loading]);

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

  if (loading || fetchMoreLoading) {
    return renderLoader();
  }
  if (error) {
    return renderErrorView();
  }
  const renderLaunch = (launch: LaunchModel): React.ReactElement => {
    const { id, launchYear, missionName } = launch;
    const {
      rocketName,
      rocket: { description, costPerLaunch },
    } = launch.rocket;
    return (
      <li
        className="md:w-[40%] lg:w-[30%] w-4/5 shadow-xl  text-slate-200 min-h-[200px] flex flex-col gap-2 bg-slate-800 p-2 px-4 rounded-xl"
        key={id}
      >
        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400">Mission Name:</p>
          <h1>{missionName}</h1>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400">Launch Year:</p>
          <h1>{launchYear}</h1>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400">Rocket Name:</p>
          <h1>{rocketName}</h1>
        </div>

        <div className="flex justify-between items-center gap-2">
          <p className="text-slate-400">Cost:</p>
          <h1>{costPerLaunch}</h1>
        </div>

        <h1 className="text-slate-300 text-center font-semibold border-t-[1px] border-t-slate-600">
          Description
        </h1>
        <p className="line-clamp-3">{description}</p>
      </li>
    );
  };

  const handleNext = (): void => {
    setOffset((prevOffset) => prevOffset + LAUNCHES_LIMIT);
    if (offset + LAUNCHES_LIMIT < launchStore.launchesData.length) {
      return;
    }
    fetchMore({
      variables: {
        offset: offset + LAUNCHES_LIMIT,
      },
    }).then(({ data }) => {
      const formattedLaunchesData = formatLaunchesData(data);
      launchStore.addLaunches(formattedLaunchesData);
    });
  };

  const handlePrev = (): void => {
    if (offset === 0) {
      return;
    }
    setOffset((prevOffset) => prevOffset - LAUNCHES_LIMIT);
  };

  const renderButtons = (): React.ReactElement => {
    return (
      <div className="flex justify-between w-full self-center">
        <button
          className={`bg-slate-600  mb-4 rounded-xl p-2 px-4 text-slate-200 font-medium ${
            offset === 0 && "opacity-50 pointer-events-none"
          }`}
          onClick={handlePrev}
        >
          Prev
        </button>
        <button
          className="bg-slate-600  mb-4 rounded-xl p-2 px-4 text-slate-200 font-medium"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div className="flex flex-col p-4">
      <h1 className="text-3xl font-semibold text-slate-100 mb-4 text-center">
        SpaceX Launches
      </h1>

      {renderButtons()}

      <ul className="flex flex-wrap gap-4 items-start justify-center">
        {launchStore.launchesData
          .slice(offset, offset + LAUNCHES_LIMIT)
          .map((launch) => {
            return renderLaunch(launch);
          })}
      </ul>
      {/* 
      {fetchMoreLoading && (
        <p className="font-medium text-xl text-center my-4 text-slate-200">
          Fetching more ....
        </p>
      )} */}
    </div>
  );
});

export default Launches;
