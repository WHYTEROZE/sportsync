import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URLFotMob ;

export const apiClient2 = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});