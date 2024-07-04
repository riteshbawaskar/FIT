import {Entity} from './entity';

export class Execution extends Entity {
    runid: string;
    name: string;
    tag: string[];
    agent: string;
    environment: string;
    suiteid: string;
    projectid: string;
    schedule: string; //now, once , daily , weekly , monthly
    date: Date;
    testcasefilter: string[];
    teststepfilter: string[];
    continueprevexecution: boolean;
    option: string; // All , Failed
    runby: string;
    total: number;
    pass: number;
    fail: number;
    status: string; //scheduled , running , completed
  }
