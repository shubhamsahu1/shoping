import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";
//import ReactDOM, { render } from "react-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import store, { history } from "./store";
import App from "./component/app";
import "./scss/index.scss";

const target = document.querySelector("#root");

/*if (process.env.NODE_ENV !== "production") {
  var axe = require("react-axe");
  axe(React, ReactDOM, 1000);
}*/

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <I18nextProvider i18n={i18n}>
        <App />
      </I18nextProvider>
    </ConnectedRouter>
  </Provider>,
  target
);
