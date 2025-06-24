import { IDetailLeague,ITeamTable,ITransfer, IMatch, ITableData } from "./index"
export interface IInfoLeague {
    details: IDetailLeague
    table: ITableData[],
    transfers:{
        type:string,
        data: ITransfer[]
    },
    matches:{
        allMatches: IMatch[]
    }
}