import axios from "axios";

export const event = axios.create({
    baseURL: "http://localhost:4000/api/events"
  });

  // export const featuredCategory = axios.create({
  //   baseURL: "http://localhost:8000/api/category/",
  //   params: {featured: true}
  // });

