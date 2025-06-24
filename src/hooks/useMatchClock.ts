import { useEffect, useState } from "react";

type Halfs = {
  firstHalfStarted: string;
  firstHalfEnded: string;
  secondHalfStarted: string;
  secondHalfEnded: string;
  firstExtraHalfStarted: string;
  secondExtraHalfStarted: string;
  gameEnded: string;
};

function parseDate(dateStr: string): number | null {
    if (!dateStr) return null;
  
    const [day, month, yearAndTime] = dateStr.split(".");
    if (!day || !month || !yearAndTime) return null;
  
    const [year, time] = [yearAndTime.slice(0, 4), yearAndTime.slice(5)];
  
    const isoString = `${year}-${month}-${day}T${time}`;
    const timestamp = new Date(isoString).getTime();
  
    return isNaN(timestamp) ? null : timestamp;
  }

function formatClock(seconds: number): string {
  const min = Math.floor(seconds / 60);
  const sec = seconds % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

export function useMatchClock(halfs: Halfs) {
  const [clock, setClock] = useState("00:00");
  const [phase, setPhase] = useState("Previa");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();

      const getElapsed = (start: number, offsetMin: number): number => {
        const elapsed = Math.floor((now - start) / 1000);
        return elapsed >= 0 ? elapsed + offsetMin * 60 : 0;
      };
      console.log(halfs);
      const firstStart = parseDate(halfs.firstHalfStarted);
      const firstEnd = parseDate(halfs.firstHalfEnded);
      const secondStart = parseDate(halfs.secondHalfStarted);
      const secondEnd = parseDate(halfs.secondHalfEnded);
      const extra1Start = parseDate(halfs.firstExtraHalfStarted);
      const extra2Start = parseDate(halfs.secondExtraHalfStarted);
      const gameEnded = parseDate(halfs.gameEnded);

      let newClock = "00:00";
      let newPhase = "Previa";

      if (halfs.firstExtraHalfStarted != "") {
        newPhase = "Primer Tiempo";
        
      } if (halfs.firstHalfEnded != "" && halfs.secondHalfStarted=="") {
        newPhase = "Descanso";
      } if (halfs.secondHalfStarted!="") {
        newPhase = "Segundo Tiempo";
      } if (halfs.firstExtraHalfStarted!= "") {
        newPhase = "Primer Tiempo Extra";
      } if (halfs.secondExtraHalfStarted) {
        newPhase = "Segundo Tiempo Extra";
      } if (halfs.gameEnded!="") {
        newPhase = "Finalizado";
        newClock = formatClock(120 * 60); // o calcula desde start real
      }

      setClock(newClock);
      setPhase(newPhase);
    }, 1000);

    return () => clearInterval(interval);
  }, [halfs]);

  return { clock, phase };
}
