import { useContext } from "react";

import { ServiceContext } from "../components/ServiceProvider";
import { BlogService } from "./BlogService";

export function buildServices() {
  const blogService = new BlogService();
  return {
    blogService: blogService,
  };
}

export function useServices() {
  return useContext(ServiceContext);
}
