import {
  ApolloError,
  ApolloQueryResult,
  FetchMoreQueryOptions,
  LazyQueryExecFunction,
  OperationVariables,
} from "@apollo/client";
import FilmModel from "./models/FilmModel";

export interface NodeType {
  director: string;
  openingCrawl: string;
  releaseDate: string;
  title: string;
  episodeID: number;
  id: string;
  edited: string;
  __typename: string;
}

export interface EdgeType {
  __typename: string;
  node: NodeType;
}

export interface GetFilmsDataType {
  allFilms: {
    edges: EdgeType[];
  };
}

export type GetFilmsHookType = () => {
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  error: ApolloError | undefined;
  loading: boolean;
};

export interface FilmType {
  id: string;
  title: string;
}

export interface PlanetType {
  name: string;
  gravity: string;
  filmConnection: {
    films: FilmType[];
  };
}

export interface AllPlanetsType {
  allPlanets: {
    planets: PlanetType[];
  };
}

export interface FilmPropsType {
  film: FilmModel;
}

export interface PlanetMovieType {
  created: string;
  director: string;
  edited: string;
  id: string;
  openingCrawl: string;
  title: string;
}

export interface PlanetMovieType {
  director: string;
  openingCrawl: string;
  releaseDate: string;
  title: string;
  id: string;
  edited: string;
  __typename: string;
}

export interface FilmModalProps {
  close: () => void;
  loading: boolean;
  error: ApolloError | undefined;
}

export type GetPlanetsHookType = () => {
  loading: boolean;
  error: ApolloError | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
};

export type GetFilmHookType = () => {
  getFilm: LazyQueryExecFunction<any, OperationVariables>;
  loading: boolean;
  error: ApolloError | undefined;
};

export type FetchLaunchesHookType = () => {
  loading: boolean;
  fetchMoreLoading: boolean;
  error: ApolloError | undefined;
  refetch: (
    variables?: Partial<OperationVariables> | undefined
  ) => Promise<ApolloQueryResult<any>>;
  fetchMore: <TFetchData = any, TFetchVars extends OperationVariables = any>(
    fetchMoreOptions: FetchMoreQueryOptions<TFetchVars, TFetchData> & {
      updateQuery?: (
        previousQueryResult: any,
        options: {
          fetchMoreResult: TFetchData;
          variables: TFetchVars;
        }
      ) => any;
    }
  ) => Promise<ApolloQueryResult<TFetchData>>;
};

export type GetFilmSuccessResponseType = (data: {
  film: PlanetMovieType;
}) => void;

export type GetFilmsSuccessResponseType = (data: GetFilmsDataType) => void;

export type GetPlanetsSuccessResponseType = (data: AllPlanetsType) => void;

export interface LaunchResponseDataType {
  id: string;
  launch_year: string;
  mission_name: string;
  rocket: {
    rocket_name: string;
    rocket: {
      cost_per_launch: number;
      description: string;
      mass: {
        kg: number;
      };
    };
  };
}

export interface RocketType {
  rocketName: string;
  rocket: {
    costPerLaunch: number;
    description: string;
    mass: {
      kg: number;
    };
  };
}

export interface LaunchType {
  id: string;
  launchYear: string;
  missionName: string;
  rocket: RocketType;
}
