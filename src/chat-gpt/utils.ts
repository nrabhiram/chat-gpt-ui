import { Speaker } from './models/speaker';

export interface Speech {
  speaker: Speaker;
  content: string;
}

export interface Summary {
  title: string;
  description: string;
}
