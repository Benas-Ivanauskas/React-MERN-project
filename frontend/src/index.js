import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";
import { HouseContextProvider } from "./context/HousesContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <HouseContextProvider>
      <App />
      </HouseContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
