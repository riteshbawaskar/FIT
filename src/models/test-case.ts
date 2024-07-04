import {Entity} from './entity';

export class TestCase extends Entity {
    name: string;
    testsuiteid: string;
    description: string;
    tags: string[];
    active: boolean;
  }
