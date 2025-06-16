import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ;

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "x-apisports-key": "37635e32f8f35d558f61757aeee17b66",
    "x-rapidapi-host": "v3.football.api-sports.io"
  },
});