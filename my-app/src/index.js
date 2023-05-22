import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import {BrowserRouter} from "react-router-dom";
import ContextProvider, {productContext} from "./contexts/contextProvider";

// Call make Server
makeServer();
export {productContext};

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
