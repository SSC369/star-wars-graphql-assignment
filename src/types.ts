import {
  ApolloError,
  ApolloQueryResult,
  OperationVariables,
} from "@apollo/client";

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
