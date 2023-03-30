import { Speech } from '../utils';
import { Conversation } from './conversation';

export enum Race {
  HUMAN = 'HUMAN',
  AI = 'AI',
}

export class Speaker {
  readonly race: Race;

  constructor(race: Race) {
    this.race = race;
  }

  speak(content: string) {
    const speech = {
      speaker: this,
      content: content,
    };
    return speech;
  }

  add(speech: Speech, conversation: Conversation) {
    if (speech.speaker.race === this.race) {
      conversation.add(speech);
    }
  }
}
