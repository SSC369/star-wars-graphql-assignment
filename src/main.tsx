import { createRoot } from "react-dom/client";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import "./index.css";
import App from "./App.tsx";

const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://swapi-graphql.netlify.app/.netlify/functions/index", // Replace with your GraphQL API URL
  }),
  cache: new InMemoryCache(), // Initializes the Apollo cache
});

createRoot(document.getElementById("root")!).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);
