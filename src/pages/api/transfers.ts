import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    return res.status(200).json({
        "transfers": [
            {
                "name": "Alberto Moleiro",
                "playerId": 1184694,
                "position": {
                    "label": "LW",
                    "key": "leftwinger_short"
                },
                "transferDate": "2025-06-21T01:34:30Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Las Palmas",
                "fromClubId": 8306,
                "toClub": "Villarreal",
                "toClubId": 10205,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 16000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 28000000
            },
            {
                "name": "Kevin Danso",
                "playerId": 754126,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-06-21T01:20:53Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Lens",
                "fromClubId": 8588,
                "toClub": "Tottenham",
                "toClubId": 8586,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 25000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 27000000
            },
            {
                "name": "Florian Wirtz",
                "playerId": 1152455,
                "position": {
                    "label": "AM",
                    "key": "centerattackingmidfielder_short"
                },
                "transferDate": "2025-06-20T20:09:01Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Leverkusen",
                "fromClubId": 8178,
                "toClub": "Liverpool",
                "toClubId": 8650,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 125000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-21T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 140000000
            },
            {
                "name": "Joan Garcia",
                "playerId": 1167220,
                "position": {
                    "label": "GK",
                    "key": "keeper"
                },
                "transferDate": "2025-06-19T16:09:19Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Espanyol",
                "fromClubId": 8558,
                "toClub": "Barcelona",
                "toClubId": 8634,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 25000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2031-06-30T00:00:00Z",
                "marketValue": 24500000
            },
            {
                "name": "Mathys Tel",
                "playerId": 1288111,
                "position": {
                    "label": "LW",
                    "key": "leftwinger_short"
                },
                "transferDate": "2025-06-15T11:09:36Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Bayern München",
                "fromClubId": 9823,
                "toClub": "Tottenham",
                "toClubId": 8586,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 36000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2031-06-30T00:00:00Z",
                "marketValue": 36000000
            },
            {
                "name": "Odilon Kossounou",
                "playerId": 1014496,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-06-13T22:27:05Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Leverkusen",
                "fromClubId": 8178,
                "toClub": "Atalanta",
                "toClubId": 8524,
                "fee": null,
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-14T00:00:00Z",
                "toDate": "2029-06-30T00:00:00Z",
                "marketValue": 28000000
            },
            {
                "name": "Franco Mastantuono",
                "playerId": 1607566,
                "position": {
                    "label": "RW",
                    "key": "rightwinger_short"
                },
                "transferDate": "2025-06-13T15:11:26Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "River Plate",
                "fromClubId": 10076,
                "toClub": "Real Madrid",
                "toClubId": 8633,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 45000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-08-14T00:00:00Z",
                "toDate": "2031-06-30T00:00:00Z",
                "marketValue": 28000000
            },
            {
                "name": "Charalampos Kostoulas",
                "playerId": 1561249,
                "position": {
                    "label": "AM",
                    "key": "centerattackingmidfielder_short"
                },
                "transferDate": "2025-06-12T22:19:44Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Olympiacos",
                "fromClubId": 8638,
                "toClub": "Brighton",
                "toClubId": 10204,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 35000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 12500000
            },
            {
                "name": "Leroy Sané",
                "playerId": 530859,
                "position": {
                    "label": "LW",
                    "key": "leftwinger_short"
                },
                "transferDate": "2025-06-12T11:22:53Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Bayern München",
                "fromClubId": 9823,
                "toClub": "Galatasaray",
                "toClubId": 8637,
                "fee": {
                    "feeText": "free transfer",
                    "localizedFeeText": "transfer_type_free_transfer"
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "marketValue": 33000000
            },
            {
                "name": "Tijjani Reijnders",
                "playerId": 868344,
                "position": {
                    "label": "DM",
                    "key": "centerdefensivemidfielder_short"
                },
                "transferDate": "2025-06-11T13:15:15Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Milan",
                "fromClubId": 8564,
                "toClub": "Man City",
                "toClubId": 8456,
                "fee": null,
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-10T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 50000000
            },
            {
                "name": "Rayan Cherki",
                "playerId": 1104053,
                "position": {
                    "label": "RW",
                    "key": "rightwinger_short"
                },
                "transferDate": "2025-06-10T20:40:35Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Lyon",
                "fromClubId": 9748,
                "toClub": "Man City",
                "toClubId": 8456,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 36500000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-10T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 40000000
            },
            {
                "name": "Jobe Bellingham",
                "playerId": 1287373,
                "position": {
                    "label": "DM",
                    "key": "centerdefensivemidfielder_short"
                },
                "transferDate": "2025-06-10T17:38:37Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Sunderland",
                "fromClubId": 8472,
                "toClub": "Dortmund",
                "toClubId": 9789,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 30600000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-10T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 25000000
            },
            {
                "name": "Rayan Ait Nouri",
                "playerId": 933845,
                "position": {
                    "label": "LWB",
                    "key": "leftwingback_short"
                },
                "transferDate": "2025-06-09T19:28:32Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Wolves",
                "fromClubId": 8602,
                "toClub": "Man City",
                "toClubId": 8456,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 36800000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-09T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 35200000
            },
            {
                "name": "Jean-Clair Todibo",
                "playerId": 955214,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-06-06T15:13:47Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Nice",
                "fromClubId": 9831,
                "toClub": "West Ham",
                "toClubId": 8654,
                "fee": null,
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "marketValue": 35000000
            },
            {
                "name": "Pierre Kalulu",
                "playerId": 1131217,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-06-06T13:12:34Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Milan",
                "fromClubId": 8564,
                "toClub": "Juventus",
                "toClubId": 9885,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 14500000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2029-06-30T00:00:00Z",
                "marketValue": 27000000
            },
            {
                "name": "Nuno Tavares",
                "playerId": 957118,
                "position": {
                    "label": "LB",
                    "key": "leftback_short"
                },
                "transferDate": "2025-06-05T17:03:40Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Arsenal",
                "fromClubId": 9825,
                "toClub": "Lazio",
                "toClubId": 8543,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 9000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2029-06-30T00:00:00Z",
                "marketValue": 25100000
            },
            {
                "name": "Liam Delap",
                "playerId": 1113903,
                "position": {
                    "label": "ST",
                    "key": "striker_short"
                },
                "transferDate": "2025-06-05T02:24:38Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Ipswich",
                "fromClubId": 9902,
                "toClub": "Chelsea",
                "toClubId": 8455,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 35500000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-04T00:00:00Z",
                "toDate": "2031-06-30T00:00:00Z",
                "marketValue": 38000000
            },
            {
                "name": "Matheus Cunha",
                "playerId": 863098,
                "position": {
                    "label": "AM",
                    "key": "centerattackingmidfielder_short"
                },
                "transferDate": "2025-06-01T17:30:04Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Wolves",
                "fromClubId": 8602,
                "toClub": "Man United",
                "toClubId": 10260,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 74000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-30T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 57000000
            },
            {
                "name": "Jeremie Frimpong",
                "playerId": 966018,
                "position": {
                    "label": "RWB",
                    "key": "rightwingback_short"
                },
                "transferDate": "2025-05-30T18:58:16Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Leverkusen",
                "fromClubId": 8178,
                "toClub": "Liverpool",
                "toClubId": 8650,
                "fee": null,
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "marketValue": 52000000
            },
            {
                "name": "Trent Alexander-Arnold",
                "playerId": 760712,
                "position": {
                    "label": "RB",
                    "key": "rightback_short"
                },
                "transferDate": "2025-05-30T12:43:17Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Liverpool",
                "fromClubId": 8650,
                "toClub": "Real Madrid",
                "toClubId": 8633,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 10000000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-06-01T00:00:00Z",
                "toDate": "2031-06-30T00:00:00Z",
                "marketValue": 72000000
            },
            {
                "name": "Jonathan Tah",
                "playerId": 469700,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-05-29T10:43:53Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Leverkusen",
                "fromClubId": 8178,
                "toClub": "Bayern München",
                "toClubId": 9823,
                "fee": {
                    "feeText": "free transfer",
                    "localizedFeeText": "transfer_type_free_transfer"
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2029-06-30T00:00:00Z",
                "marketValue": 32000000
            },
            {
                "name": "Dean Huijsen",
                "playerId": 1367619,
                "position": {
                    "label": "CB",
                    "key": "centerback_short"
                },
                "transferDate": "2025-05-18T06:18:51Z",
                "transferText": [
                    null,
                    null,
                    null
                ],
                "fromClub": "Bournemouth",
                "fromClubId": 8678,
                "toClub": "Real Madrid",
                "toClubId": 8633,
                "fee": {
                    "feeText": "fee",
                    "localizedFeeText": "transfer_fee",
                    "value": 59500000
                },
                "transferType": {
                    "text": "contract",
                    "localizationKey": "contract"
                },
                "contractExtension": false,
                "onLoan": false,
                "fromDate": "2025-07-01T00:00:00Z",
                "toDate": "2030-06-30T00:00:00Z",
                "marketValue": 45000000
            }
        ],
        "hits": 22
    });
}