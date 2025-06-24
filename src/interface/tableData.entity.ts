import { ITeamTable } from "./teamTable.entity"
export interface ITableData{
    data:{
        table:{
            all: ITeamTable[]
        }
    }
}