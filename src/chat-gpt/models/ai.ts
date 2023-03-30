import { Prompt } from './prompt';
import { Race, Speaker } from './speaker';
import { Temperature } from './temperature';
import { Token } from './token';

export class AI extends Speaker {
  temperature: Temperature;
  token: Token;
  prompt: Prompt;

  constructor(temp: Temperature, token: Token, prompt: Prompt) {
    super(Race.AI);
    this.temperature = temp;
    this.token = token;
    this.prompt = prompt;
  }

  configure(temperature: Temperature, token: Token, prompt: Prompt) {
    this.temperature = this.temperature.update(temperature);
    this.token = this.token.update(token);
    this.prompt = this.prompt.update(prompt);
  }
}
