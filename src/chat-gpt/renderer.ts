import { AI } from './models/ai';
import { Conversation } from './models/conversation';
import { Prompt } from './models/prompt';
import { Speaker } from './models/speaker';
import { Temperature } from './models/temperature';
import { Token } from './models/token';
import { Speech } from './utils';

export type RenderedSpeech = {
  speaker: string;
  content: string;
};

export class Renderer {
  conversation(convo: Conversation) {
    const renderedConvosArr: RenderedSpeech[] = [];
    for (let i = 0; i < convo.speeches.length; i++) {
      const speech = this.speech(convo.speeches[i]);
      renderedConvosArr.push(speech);
    }
    return renderedConvosArr;
  }

  speech(speech: Speech) {
    return {
      speaker: this.speaker(speech.speaker).race.valueOf(),
      content: speech.content,
    };
  }

  speaker(speaker: Speaker) {
    return { race: speaker.race };
  }

  ai(ai: AI) {
    return {
      race: this.speaker(ai).race.valueOf(),
      temperature: this.temperature(ai.temperature),
      token: this.token(ai.token),
      prompt: this.prompt(ai.prompt),
    };
  }

  temperature(temp: Temperature) {
    return temp.value;
  }

  token(token: Token) {
    return token.length;
  }

  prompt(prompt: Prompt) {
    return prompt.content;
  }

  AIPrompt(ai: AI, convo: Conversation) {
    let prompt = ai.prompt.content;
    for (let i = 0; i < convo.speeches.length; i++) {
      const speech = `${this.speaker(convo.speeches[i].speaker).race.valueOf()}: ${convo.speeches[i].content}`;
      prompt = `${prompt} ${speech}`;
    }
    return prompt;
  }
}
