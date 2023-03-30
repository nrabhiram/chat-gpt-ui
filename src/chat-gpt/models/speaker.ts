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

  speak(content: string, conversation: Conversation) {
    const speech = {
      speaker: this,
      content: content,
    };
    conversation.add(speech);
  }
}
