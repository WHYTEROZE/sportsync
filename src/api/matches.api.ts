import { apiClientFotMob } from "./apiConfig2";

export const getMatches = async () => {
  // Generar la fecha actual en formato YYYYMMDD
  const today = new Date();
  const date = today.toISOString().slice(0, 10).replace(/-/g, ''); // Ej: "20250624"

  const url = `/matches?date=${date}&timezone=America%2FLima&ccode3=PER`;

  return apiClientFotMob.get(url);
};
export const getMatchDetail = async (id:string) => {
  const url = `/matchDetails?matchId=`+id;
  return apiClientFotMob.get(url);
};