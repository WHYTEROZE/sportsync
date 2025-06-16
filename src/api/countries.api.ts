import {apiClient} from "./apiConfig";
export const getCountries = async () => {
    const payload = {}
    return apiClient.post("/countries", payload);
  };