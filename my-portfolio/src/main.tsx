import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.scss";
import "./styles/global.scss";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom"; // import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
