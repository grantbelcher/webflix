import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "normalize.css";
import { GlobalStyles } from "./global-styles";
import reportWebVitals from "./reportWebVitals";

console.log(
  "Your environment variable TWILIO_ACCOUNT_SID has the value: ",
  process.env.REACT_APP_JWT_KEY
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyles />
    <App />
  </>
);

reportWebVitals();
