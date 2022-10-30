import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { ServiceProvider } from "./components/ServiceProvider";
import reportWebVitals from "./reportWebVitals";
import { buildServices } from "./services";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
const localService = buildServices();
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ServiceProvider services={localService}>
        <ChakraProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ChakraProvider>
      </ServiceProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
