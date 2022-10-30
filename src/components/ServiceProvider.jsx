import * as React from "react";

export const ServiceContext = React.createContext({
  blogService: null,
});

export const ServiceProvider = ({ children, services }) => (
  <ServiceContext.Provider value={services}>{children}</ServiceContext.Provider>
);
