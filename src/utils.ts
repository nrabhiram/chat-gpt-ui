export interface Conversation {
  speeches: Speech[];
  add: (speech: Speech) => void;
}

export interface Speech {
  speaker: Speaker;
  content: string;
}

export interface Speaker {
  race: Race;
}

export enum Race {
  HUMAN = 'HUMAN',
  AI = 'AI',
}
