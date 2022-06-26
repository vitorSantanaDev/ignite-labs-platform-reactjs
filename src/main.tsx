import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "@apollo/client";

import { client } from "./lib/apollo";

import App from "./App";

import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
