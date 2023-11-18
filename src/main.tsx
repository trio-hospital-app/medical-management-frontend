import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import DesignerContextProvider from "./pages/settings/forms/components/context/DesignerContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <DesignerContextProvider>
        <App />
      </DesignerContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
