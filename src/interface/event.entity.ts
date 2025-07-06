import { IPlayer } from "./player.entity";

export interface IEvent {
    reactKey: string;
    type: string;
    time: number;
    player: IPlayer | null;
    swap: IPlayer[] | null;
    card: string | null;
}