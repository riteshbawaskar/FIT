import {Entity} from './entity';
import {TestStep} from './test-step';

export class Step extends Entity{
  testcaseid: string;
  step: TestStep[];
}




