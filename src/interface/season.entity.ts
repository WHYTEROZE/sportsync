import { ICoverage } from "./coverage.entity";
export interface ISeason {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: ICoverage;
  }