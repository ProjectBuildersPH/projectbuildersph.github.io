import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import "./index.css";

import favicon from "./assets/tablogo.png";

document.title = "ProjectBuildersPH";

// Set favicon
const faviconLink = document.createElement("link");

faviconLink.rel = "icon";
faviconLink.type = "image/png";
faviconLink.sizes = "60x60";
faviconLink.href = favicon;

document.head.appendChild(faviconLink);

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);