import { IGoal } from "./goal.entity";
export interface IGoalMap {
    [playerLastName: string]: IGoal[];
  }