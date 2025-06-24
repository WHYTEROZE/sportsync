import { ILeagueView } from "./leagueView.entity"
export interface ICountryView{
    ccode:string,
    name:string,
    localizedName:string,
    leagues:ILeagueView[]
}