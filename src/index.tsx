import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./components/App";

import GlobalStyle from "./components/themes/GlobalStyle";
import store from "./redux/store";

ReactDOM.render(
    <Provider store={store}>
      <GlobalStyle/>
      <App />
    </Provider>,
  document.getElementById("root")
);
