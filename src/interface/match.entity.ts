export interface IMatch {
    id: number;
    leagueId: number | null;
    time: string | null;
    round: string | null,
    pageUrl: string | null,
    home: {
        id: number;
        score: number | null;
        name: string;
        longName: string | null;
        shortName: string | null
    };
    away: {
        id: number;
        score: number | null;
        name: string;
        longName: string | null;
        shortName: string | null
    };
    eliminatedTeamId: number | null;
    statusId: number | null;
    tournamentStage: string | null;
    status: {
        utcTime: string;
        halfs: object | null;
        periodLength: number | null;
        started: boolean;
        cancelled: boolean;
        finished: boolean;
        liveTime: {
            short: string | null,
            shortKey: string | null,
            long: string | null,
            longKey: string | null,
            maxTime: number | null,
            addedTime: number | null
        } | null
    };
    timeTS: number | null;
}