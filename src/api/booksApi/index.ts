import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const API_KEY = import.meta.env.VITE_GOOGLE_BOOKS_API_KEY;

// const env = "import.meta.env.VITE_GOOGLE_BOOKS_API_KEY";

export const api = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});
