import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppPreferencesProvider } from "./context/AppPreferences";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppPreferencesProvider>
      <App />
    </AppPreferencesProvider>
  </React.StrictMode>
);
