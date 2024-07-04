import {Entity} from './entity';

export class Actions extends Entity {
    componentid: string;
    name: string;
    description: string;
    active: boolean;
    input: any[];
    validation: any[];
  }
  