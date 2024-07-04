import {Entity} from './entity';

export class Results extends Entity {
    name: string;
    runid: string;
    testcaseid: string;
    suiteid: string;
    stepid: string;
    stepresult: stepResult[];
    status: string;
    reasonOfFalure: string;
    comments: string;
  }

export class stepResult {
    status: string;
    type: string;
    message: string;
  }