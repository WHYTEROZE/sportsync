import { apiClient } from "./apiConfig";
import { apiClient2 } from "./apiConfigFotMob";
export const getLeagues = async () => {
  const payload = {}
  return apiClient.post("/leagues", payload);
};
export const getAllLeagues = async () => {
  const payload = {}
  return apiClient2.get("/allLeagues", payload);
};