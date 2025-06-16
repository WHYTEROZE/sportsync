import {apiClient} from "./apiConfig";
export const getLeagues = async () => {
    const payload = {}
    return apiClient.post("/leagues", payload);
  };