import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import App from "./Components/App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="Container">
    <App />
    </div>
  </React.StrictMode>
);

reportWebVitals();
