import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_TMDB_API_URL ?? "https://api.themoviedb.org/3",
  timeout: 8000,
});

httpClient.interceptors.request.use((config) => {
  const token = import.meta.env.VITE_TMDB_TOKEN;
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  if (apiKey) {
    config.params = {
      ...config.params,
      api_key: apiKey,
    };
  }

  return config;
});
