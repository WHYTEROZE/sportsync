import {apiClient} from "./apiConfig";
export const getFixtures = async () => {
    const payload = {}
    return apiClient.post("/fixtures?live=all", payload);
  };
  export const getFixturesByDate = async (date: string) => {
    const payload = {}
    let dateSearch = date;
    if(date==="today"){
      dateSearch = new Date().toISOString().split('T')[0];
    }
    return apiClient.post(`/fixtures?date=${dateSearch}`, payload);
  };