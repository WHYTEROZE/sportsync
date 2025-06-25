import { apiClientFotMob } from "./apiConfig2";

export const getMatches = async () => {
  const today = new Date();

  // Obtener la fecha local en formato YYYYMMDD
  const date = `${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`;

  const url = `/matches?date=${date}&timezone=America%2FLima&ccode3=PER`;

  return apiClientFotMob.get(url);
};
export const getMatchDetail = async (id:string) => {
  const url = `/matchDetails?matchId=`+id;
  return apiClientFotMob.get(url);
};