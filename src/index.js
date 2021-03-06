import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientid = process.env.REACT_APP_AUTH_CLIENTID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientid}
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
