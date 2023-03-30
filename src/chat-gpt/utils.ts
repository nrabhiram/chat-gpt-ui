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
