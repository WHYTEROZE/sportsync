import { IMatch } from "./match.entity";
export interface ILeagueMatch{
    isGroup: boolean,
    groupName: string,
    ccode: string,
    id: number,
    primaryId: number,
    name: string,
    matches: IMatch[]
}