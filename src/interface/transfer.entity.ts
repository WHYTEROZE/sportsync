export interface ITransfer{
    name:string,
    playerId: number,
    position:{
        label: string,
        key: string,
    },
    transferDate:string,
    fromClub:string,
    fromClubId:number,
    toClub:string,
    toClubId:number,
    fee:{
        feeText:string,
        localizedFeedText:string,
        value: number | null
    },
    transferType:{
        text:string,
        localizationKey:string
    },
    contractExtension:boolean,
    onLoan:boolean,
    fromDate:string,
    toDate:string,
    marketValue:number
}