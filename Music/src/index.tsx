import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";
import RecentPlayed from "./Component/Recentplayed";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={Store}>
      <App />
      {/* <RecentPlayed /> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
