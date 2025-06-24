import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({
        "leagues": [
            {
                "isGroup": true,
                "groupName": "C",
                "ccode": "INT",
                "id": 896317,
                "primaryId": 78,
                "name": "FIFA Club World Cup Grp. C",
                "matches": [
                    {
                        "id": 4685725,
                        "leagueId": 896317,
                        "time": "24.06.2025 21:00",
                        "home": {
                            "id": 8523,
                            "score": 0,
                            "name": "Auckland City FC",
                            "longName": "Auckland City FC"
                        },
                        "away": {
                            "id": 10077,
                            "score": 0,
                            "name": "Boca Juniors",
                            "longName": "Boca Juniors"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-24T19:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750791600000
                    },
                    {
                        "id": 4685724,
                        "leagueId": 896317,
                        "time": "24.06.2025 21:00",
                        "home": {
                            "id": 9772,
                            "score": 0,
                            "name": "Benfica",
                            "longName": "Benfica"
                        },
                        "away": {
                            "id": 9823,
                            "score": 0,
                            "name": "Bayern München",
                            "longName": "Bayern München"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-24T19:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750791600000
                    }
                ],
                "parentLeagueId": 78,
                "parentLeagueName": "FIFA Club World Cup",
                "internalRank": 0,
                "liveRank": 99,
                "simpleLeague": false,
                "localRank": 8
            },
            {
                "isGroup": true,
                "groupName": "D",
                "ccode": "INT",
                "id": 896318,
                "primaryId": 78,
                "name": "FIFA Club World Cup Grp. D",
                "matches": [
                    {
                        "id": 4685731,
                        "leagueId": 896318,
                        "time": "25.06.2025 03:00",
                        "home": {
                            "id": 8153,
                            "score": 0,
                            "name": "Espérance",
                            "longName": "Espérance"
                        },
                        "away": {
                            "id": 8455,
                            "score": 0,
                            "name": "Chelsea",
                            "longName": "Chelsea"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-25T01:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750813200000
                    },
                    {
                        "id": 4685730,
                        "leagueId": 896318,
                        "time": "25.06.2025 03:00",
                        "home": {
                            "id": 1841,
                            "score": 0,
                            "name": "León",
                            "longName": "Leon"
                        },
                        "away": {
                            "id": 9770,
                            "score": 0,
                            "name": "Flamengo",
                            "longName": "Flamengo"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 106,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-25T01:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "cancelled": true,
                            "started": false,
                            "finished": false,
                            "reason": {
                                "short": "Can",
                                "shortKey": "cancelled_short",
                                "long": "Cancelled",
                                "longKey": "cancelled"
                            }
                        },
                        "timeTS": 1750813200000
                    },
                    {
                        "id": 4798446,
                        "leagueId": 896318,
                        "time": "25.06.2025 03:00",
                        "home": {
                            "id": 867280,
                            "score": 0,
                            "name": "LAFC",
                            "longName": "Los Angeles FC"
                        },
                        "away": {
                            "id": 9770,
                            "score": 0,
                            "name": "Flamengo",
                            "longName": "Flamengo"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-25T01:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750813200000
                    }
                ],
                "parentLeagueId": 78,
                "parentLeagueName": "FIFA Club World Cup",
                "internalRank": 0,
                "liveRank": 99,
                "simpleLeague": false,
                "localRank": 8
            },
            {
                "isGroup": true,
                "groupName": "B",
                "ccode": "INT",
                "id": 898924,
                "primaryId": 298,
                "name": "CONCACAF Gold Cup Grp. B",
                "matches": [
                    {
                        "id": 4772426,
                        "leagueId": 898924,
                        "time": "25.06.2025 04:00",
                        "home": {
                            "id": 5810,
                            "score": 0,
                            "name": "Canada",
                            "longName": "Canada"
                        },
                        "away": {
                            "id": 6327,
                            "score": 0,
                            "name": "El Salvador",
                            "longName": "El Salvador"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-25T02:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750816800000
                    },
                    {
                        "id": 4772427,
                        "leagueId": 898924,
                        "time": "25.06.2025 04:00",
                        "home": {
                            "id": 5808,
                            "score": 0,
                            "name": "Honduras",
                            "longName": "Honduras"
                        },
                        "away": {
                            "id": 287981,
                            "score": 0,
                            "name": "Curacao",
                            "longName": "Curacao"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-25T02:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750816800000
                    }
                ],
                "parentLeagueId": 298,
                "parentLeagueName": "CONCACAF Gold Cup",
                "internalRank": 0,
                "liveRank": 100,
                "simpleLeague": false,
                "localRank": 35
            },
            {
                "isGroup": true,
                "groupName": "C",
                "ccode": "INT",
                "id": 898925,
                "primaryId": 298,
                "name": "CONCACAF Gold Cup Grp. C",
                "matches": [
                    {
                        "id": 4772435,
                        "leagueId": 898925,
                        "time": "25.06.2025 01:00",
                        "home": {
                            "id": 5757,
                            "score": 0,
                            "name": "Guadeloupe",
                            "longName": "Guadeloupe"
                        },
                        "away": {
                            "id": 5858,
                            "score": 0,
                            "name": "Guatemala",
                            "longName": "Guatemala"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-24T23:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750806000000
                    },
                    {
                        "id": 4772436,
                        "leagueId": 898925,
                        "time": "25.06.2025 01:00",
                        "home": {
                            "id": 5922,
                            "score": 0,
                            "name": "Panama",
                            "longName": "Panama"
                        },
                        "away": {
                            "id": 5806,
                            "score": 0,
                            "name": "Jamaica",
                            "longName": "Jamaica"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "3",
                        "status": {
                            "utcTime": "2025-06-24T23:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750806000000
                    }
                ],
                "parentLeagueId": 298,
                "parentLeagueName": "CONCACAF Gold Cup",
                "internalRank": 0,
                "liveRank": 100,
                "simpleLeague": false,
                "localRank": 35
            },
            {
                "ccode": "COL",
                "id": 900475,
                "primaryId": 274,
                "name": "Primera A Apertura Final Stage",
                "matches": [
                    {
                        "id": 4818754,
                        "leagueId": 900475,
                        "time": "25.06.2025 02:30",
                        "home": {
                            "id": 7818,
                            "score": 0,
                            "name": "Santa Fe",
                            "longName": "Santa Fe"
                        },
                        "away": {
                            "id": 2528,
                            "score": 0,
                            "name": "Independiente Medellin",
                            "longName": "Independiente Medellin"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "final",
                        "status": {
                            "utcTime": "2025-06-25T00:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750811400000
                    }
                ],
                "parentLeagueId": 274,
                "internalRank": 0,
                "liveRank": 0,
                "simpleLeague": false
            },
            {
                "ccode": "FIN",
                "id": 899367,
                "primaryId": 143,
                "name": "Cup",
                "matches": [
                    {
                        "id": 4812018,
                        "leagueId": 899367,
                        "time": "24.06.2025 11:00",
                        "home": {
                            "id": 2160,
                            "score": 0,
                            "name": "Klubi 04",
                            "longName": "Klubi 04"
                        },
                        "away": {
                            "id": 9861,
                            "score": 0,
                            "name": "HJK",
                            "longName": "HJK"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1/4",
                        "status": {
                            "utcTime": "2025-06-24T09:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750755600000
                    },
                    {
                        "id": 4812020,
                        "leagueId": 899367,
                        "time": "24.06.2025 17:00",
                        "home": {
                            "id": 4449,
                            "score": 0,
                            "name": "AC Oulu",
                            "longName": "AC Oulu"
                        },
                        "away": {
                            "id": 162162,
                            "score": 0,
                            "name": "SJK",
                            "longName": "SJK"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1/4",
                        "status": {
                            "utcTime": "2025-06-24T15:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750777200000
                    },
                    {
                        "id": 4812019,
                        "leagueId": 899367,
                        "time": "24.06.2025 17:00",
                        "home": {
                            "id": 7870,
                            "score": 0,
                            "name": "Haka",
                            "longName": "Haka"
                        },
                        "away": {
                            "id": 1693,
                            "score": 0,
                            "name": "KuPS",
                            "longName": "KuPS"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1/4",
                        "status": {
                            "utcTime": "2025-06-24T15:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750777200000
                    },
                    {
                        "id": 4812021,
                        "leagueId": 899367,
                        "time": "24.06.2025 17:30",
                        "home": {
                            "id": 162142,
                            "score": 0,
                            "name": "EIF",
                            "longName": "EIF"
                        },
                        "away": {
                            "id": 8473,
                            "score": 0,
                            "name": "FF Jaro",
                            "longName": "FF Jaro"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1/4",
                        "status": {
                            "utcTime": "2025-06-24T15:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750779000000
                    }
                ],
                "parentLeagueId": 143,
                "internalRank": 8,
                "liveRank": 0,
                "simpleLeague": false
            },
            {
                "ccode": "LTU",
                "id": 228,
                "primaryId": 228,
                "name": "A Lyga",
                "matches": [
                    {
                        "id": 4733368,
                        "leagueId": 228,
                        "time": "24.06.2025 17:30",
                        "home": {
                            "id": 254228,
                            "score": 0,
                            "name": "Dainava Alytus",
                            "longName": "Dainava Alytus"
                        },
                        "away": {
                            "id": 169157,
                            "score": 0,
                            "name": "Banga Gargzdai",
                            "longName": "Banga Gargzdai"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "17",
                        "status": {
                            "utcTime": "2025-06-24T15:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750779000000
                    },
                    {
                        "id": 4733369,
                        "leagueId": 228,
                        "time": "24.06.2025 17:30",
                        "home": {
                            "id": 4616,
                            "score": 0,
                            "name": "Zalgiris Vilnius",
                            "longName": "Zalgiris Vilnius"
                        },
                        "away": {
                            "id": 736555,
                            "score": 0,
                            "name": "Hegelmann",
                            "longName": "Hegelmann"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "17",
                        "status": {
                            "utcTime": "2025-06-24T15:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750779000000
                    },
                    {
                        "id": 4733367,
                        "leagueId": 228,
                        "time": "24.06.2025 18:00",
                        "home": {
                            "id": 439132,
                            "score": 0,
                            "name": "FK Kauno Zalgiris",
                            "longName": "FK Kauno Zalgiris"
                        },
                        "away": {
                            "id": 479143,
                            "score": 0,
                            "name": "FK Panevezys",
                            "longName": "FK Panevezys"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "17",
                        "status": {
                            "utcTime": "2025-06-24T16:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750780800000
                    }
                ],
                "internalRank": 0,
                "liveRank": 0,
                "simpleLeague": false
            },
            {
                "ccode": "SWE",
                "id": 899272,
                "primaryId": 171,
                "name": "Cup",
                "matches": [
                    {
                        "id": 4780900,
                        "leagueId": 899272,
                        "time": "24.06.2025 19:00",
                        "home": {
                            "id": 161430,
                            "score": 0,
                            "name": "IK Gauthiod",
                            "longName": "IK Gauthiod"
                        },
                        "away": {
                            "id": 1433718,
                            "score": 0,
                            "name": "IK Zenith",
                            "longName": "IK Zenith"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1",
                        "status": {
                            "utcTime": "2025-06-24T17:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750784400000
                    },
                    {
                        "id": 4780901,
                        "leagueId": 899272,
                        "time": "24.06.2025 19:30",
                        "home": {
                            "id": 1225382,
                            "score": 0,
                            "name": "FC Järfälla",
                            "longName": "FC Järfälla"
                        },
                        "away": {
                            "id": 627698,
                            "score": 0,
                            "name": "IK Franke",
                            "longName": "IK Franke"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1",
                        "status": {
                            "utcTime": "2025-06-24T17:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750786200000
                    },
                    {
                        "id": 4780880,
                        "leagueId": 899272,
                        "time": "24.06.2025 19:30",
                        "home": {
                            "id": 916701,
                            "score": 0,
                            "name": "IFK Stocksund",
                            "longName": "IFK Stocksund"
                        },
                        "away": {
                            "id": 303472,
                            "score": 0,
                            "name": "Karlbergs BK",
                            "longName": "Karlbergs BK"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1",
                        "status": {
                            "utcTime": "2025-06-24T17:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750786200000
                    },
                    {
                        "id": 4780902,
                        "leagueId": 899272,
                        "time": "24.06.2025 19:30",
                        "home": {
                            "id": 1869,
                            "score": 0,
                            "name": "IFK Tidaholm",
                            "longName": "IFK Tidaholm"
                        },
                        "away": {
                            "id": 161431,
                            "score": 0,
                            "name": "Nässjö FF",
                            "longName": "Nässjö FF"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1",
                        "status": {
                            "utcTime": "2025-06-24T17:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750786200000
                    },
                    {
                        "id": 4780903,
                        "leagueId": 899272,
                        "time": "24.06.2025 19:30",
                        "home": {
                            "id": 627678,
                            "score": 0,
                            "name": "Räppe GOIF",
                            "longName": "Räppe GOIF"
                        },
                        "away": {
                            "id": 1965,
                            "score": 0,
                            "name": "Kristianstad FC",
                            "longName": "Kristianstad FC"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "1",
                        "status": {
                            "utcTime": "2025-06-24T17:30:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750786200000
                    }
                ],
                "parentLeagueId": 171,
                "internalRank": 5,
                "liveRank": 0,
                "simpleLeague": false
            },
            {
                "ccode": "URU",
                "id": 899582,
                "primaryId": 9122,
                "name": "Segunda Division",
                "matches": [
                    {
                        "id": 4811736,
                        "leagueId": 899582,
                        "time": "25.06.2025 00:00",
                        "home": {
                            "id": 1319664,
                            "score": 0,
                            "name": "La Luz",
                            "longName": "La Luz"
                        },
                        "away": {
                            "id": 181912,
                            "score": 0,
                            "name": "Atenas",
                            "longName": "Atenas"
                        },
                        "eliminatedTeamId": null,
                        "statusId": 1,
                        "tournamentStage": "7",
                        "status": {
                            "utcTime": "2025-06-24T22:00:00.000Z",
                            "halfs": {},
                            "periodLength": 45,
                            "started": false,
                            "cancelled": false,
                            "finished": false
                        },
                        "timeTS": 1750802400000
                    }
                ],
                "parentLeagueId": 9122,
                "internalRank": 0,
                "liveRank": 0,
                "simpleLeague": false
            }
        ],
        "date": "20250624"
    });
}