import { AI } from './models/ai';
import { Conversation } from './models/conversation';
import { Prompt } from './models/prompt';
import { Race, Speaker } from './models/speaker';
import { Temperature } from './models/temperature';
import { Token } from './models/token';
import { RenderedSpeech } from './renderer';
import { Speech } from './utils';

export class Parser {
  conversation(convo: RenderedSpeech[]) {
    const speeches: Speech[] = [];
    for (let i = 0; i < convo.length; i++) {
      let speaker: Speaker;
      if (convo[i].speaker === 'HUMAN') {
        speaker = new Speaker(Race.HUMAN);
      } else {
        speaker = new Speaker(Race.AI);
      }
      speeches.push({ speaker: speaker, content: convo[i].content });
    }
    return new Conversation(speeches);
  }

  speech(speech: { speaker: Race; content: string }) {
    return {
      speaker: this.speaker(speech.speaker),
      content: speech.content,
    };
  }

  speaker(race: Race) {
    return new Speaker(race);
  }

  ai(ai: { race: string; temperature: number; token: number; prompt: string }) {
    const temperature = this.temperature(ai.temperature);
    const token = this.token(ai.token);
    const prompt = this.prompt(ai.prompt);
    return new AI(temperature, token, prompt);
  }

  temperature(value: number) {
    return new Temperature(value);
  }

  token(length: number) {
    return new Token(length);
  }

  prompt(content: string) {
    return new Prompt(content);
  }
}
