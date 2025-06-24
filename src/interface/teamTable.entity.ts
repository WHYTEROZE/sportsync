export interface ITeamTable {
    name: string;
    shortName: string;
    id: number;
    pageUrl: string;
    deduction: number | null;
    ongoing: boolean | null;
    played: number;
    wins: number;
    draws: number;
    losses: number;
    scoresStr: string;
    goalConDiff: number;
    pts: number;
    idx: number;
    qualColor: string;
}
