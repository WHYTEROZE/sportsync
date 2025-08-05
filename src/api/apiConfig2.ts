import axios from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URLFotMob2 ;

export const apiClientFotMob = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "key":"user-agent","value":"Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Mobile Safari/537.36",
    "x-client-version":"production:318f308489abf9e1a630afdc6389b7535860e6fa-undefined",
    "x-mas":"eyJib2R5Ijp7InVybCI6Ii9hcGkvZGF0YS9tYXRjaGVzP2RhdGU9MjAyNTA4MDQmdGltZXpvbmU9QW1lcmljYSUyRkxpbWEmY2NvZGUzPVBFUiIsImNvZGUiOjE3NTQzNTAyMTA0NzYsImZvbyI6InByb2R1Y3Rpb246OGJmYWYxZmJjODRhNWUxNTA2YTY3ZDE2ZWIxZGRmMzA4NjQ0OGQ0NS11bmRlZmluZWQifSwic2lnbmF0dXJlIjoiRkRFOTBBOEM3NUZFM0MwRjU4NDc2ODA1MzU1NzI2MTgifQ=="
  },
});
