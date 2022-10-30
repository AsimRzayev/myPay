import { HttpClient } from "./httpClient";

const httpClient = new HttpClient();
export class BlogService {
  getBlogs = () => {
    return httpClient.get("/blogs");
  };
}
