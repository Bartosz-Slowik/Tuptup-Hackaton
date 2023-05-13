import { getToken } from "./auth";

const apiUrl = "http://localhost:5000";

const fetchApi = async (path: string, options: RequestInit) => {
  if (!options.headers) {
    options.headers = {};
  }
  options.headers = {
    ...options.headers,
    "Content-Type": "application/json",
    Authentication: `Bearer ${getToken()}`,
  };
  const url = `${apiUrl}${path}`;
  const response = await fetch(url, options);
  return response;
};

export default fetchApi;
