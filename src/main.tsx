import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from "./App.tsx";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import DesignerContextProvider from "./pages/settings/forms/components/context/DesignerContext.tsx";
import { ReactQueryDevtools } from "react-query/devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <DesignerContextProvider>
          <App />
          <ToastContainer />
        </DesignerContextProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  </React.StrictMode>
);
