import { ILeague } from "./league.entity";
import { ICountry } from "./country.entity";
import { ISeason } from "./season.entity";

export interface ILeagueFull {
    league: ILeague;
    country: ICountry;
    seasons: ISeason[];
  }