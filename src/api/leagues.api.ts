import { apiClient } from "./apiConfig";
import { apiClient2 } from "./apiConfigFotMob";
import { apiClientFotMob } from "./apiConfig2";
export const getLeagues = async () => {
  const payload = {}
  return apiClient.post("/leagues", payload);
};
export const getAllLeagues = async () => {
  const payload = {}
  return apiClientFotMob.get("/allLeagues", payload);
};
export const getLeagueById = async (id:number) => {
  const payload = {}
  return apiClientFotMob.get("/leagues?id="+id+"&ccode3=PER", payload);
};
