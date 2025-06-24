import { apiClient2 } from "./apiConfigFotMob";
export const getTransfers = async () => {
    const payload = {}
    return apiClient2.post("/transfers", payload);
  };