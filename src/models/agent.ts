import {Entity} from './entity';

export class Agent extends Entity {
    name: string = "";
    description: string = "";
    url: string = "";
    status: string = ""; //available, busy, error.
    
  }