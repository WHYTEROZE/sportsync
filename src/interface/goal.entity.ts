import { IPlayer } from "./player.entity";
export interface IGoal{
    reactKey: string;
    type: string;
    time: number;
    player: IPlayer;
}