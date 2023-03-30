import { Speech } from '../utils';

export class Conversation {
  speeches: Speech[];

  constructor(speeches?: Speech[]) {
    if (speeches) {
      this.speeches = speeches;
    } else {
      this.speeches = [];
    }
  }

  add(speech: Speech) {
    this.speeches.push(speech);
  }
}
