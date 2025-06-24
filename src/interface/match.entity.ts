export interface IMatch{
    id: number;
    leagueId: number;
    time: string;
    home: {
        id: number;
        score: number;
        name: string;
        longName: string;
    };
    away: {
        id: number;
        score: number;
        name: string;
        longName: string;
    };
    eliminatedTeamId: number | null;
    statusId: number;
    tournamentStage: string;
    status: {
        utcTime: string;
        halfs: object;
        periodLength: number;
        started: boolean;
        cancelled: boolean;
        finished: boolean;
    };
    timeTS: number;
}