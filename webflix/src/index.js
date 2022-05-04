import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

reportWebVitals();
