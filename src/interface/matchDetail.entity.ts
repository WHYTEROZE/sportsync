import { ITeam, IEvents } from "./index";
export interface IMatchDetail{
    header:{
        teams: ITeam[];
        status: {
            utcTime: string;
            numberOfHomeRedCards: number;
            numberOfAwayRedCards: number;
            halfs: {
              firstHalfStarted: string;
              firstHalfEnded: string;
              secondHalfStarted: string;
              secondHalfEnded: string;
              firstExtraHalfStarted: string;
              secondExtraHalfStarted: string;
              gameEnded: string;
            };
            finished: boolean;
            started: boolean;
            cancelled: boolean;
            ongoing: boolean;
            scoreStr: string;
            liveTime: {
              short: string;
              shortKey: string;
              long: string;
              longKey: string;
              maxTime: number;
              penalties: null | any;
              addedTime: number;
            };
          };
        events:IEvents
    }
}