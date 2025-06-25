import { apiClientFotMob } from "./apiConfig2";

export const getAudio = async (id:string) => {
  const url = `/audio-live-stream?id=${id}&acceptLangs=es-ES&userLang=es`;
  return apiClientFotMob.get(url);
};