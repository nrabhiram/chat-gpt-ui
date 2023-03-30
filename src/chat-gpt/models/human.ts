import { Race, Speaker } from './speaker';

export class Human extends Speaker {
  constructor() {
    super(Race.HUMAN);
  }
}
