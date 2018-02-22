import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloLink,
  split
} from "apollo-client-preset";
import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// console.log(process.env.GRAPHQL_SERVER);

const link = createUploadLink({
  uri: `${process.env.REACT_APP_GRAPHQL_SERVER}`,
  headers: {
    Authorization: process.env.REACT_APP_TOKEN ? `Bearer ${process.env.REACT_APP_TOKEN}` : ""
  }
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

registerServiceWorker();
