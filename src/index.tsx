import React from "react";
import ReactDOM from "react-dom/client";

import reportWebVitals from "./reportWebVitals";

import { router } from "./router";
import { RouterProvider } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);

reportWebVitals();
