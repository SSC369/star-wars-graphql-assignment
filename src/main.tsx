import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import { persistCache } from "apollo3-cache-persist";
import { offsetLimitPagination } from "@apollo/client/utilities";

import "./index.css";
import App from "./App.tsx";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        launches: {
          ...offsetLimitPagination([]),
        },
      },
    },
  },
});

persistCache({
  cache,
  storage: window.localStorage,
});

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://spacex-production.up.railway.app/", // Replace with your GraphQL API URL
  }),
  cache,
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
