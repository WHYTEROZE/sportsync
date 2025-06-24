import { apiClient2 } from "./apiConfigFotMob";
export const getMatches = async () => {
    const payload = {}
    return apiClient2.post("/matches", payload);
  };