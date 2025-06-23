import { IFixtureCoverage } from "./fixtureCoverage.entity";
export interface ICoverage {
    fixtures: IFixtureCoverage;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
  }