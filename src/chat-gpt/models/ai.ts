import { Renderer } from '../renderer';
import { Conversation } from './conversation';
import { Prompt } from './prompt';
import { Race, Speaker } from './speaker';
import { Temperature } from './temperature';
import { Token } from './token';
import { Configuration, OpenAIApi } from 'openai';

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

  async think(conversation: Conversation) {
    const renderer = new Renderer();
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const parameters = {
      model: 'text-davinci-003',
      prompt: renderer.AIPrompt(this, conversation),
      max_tokens: this.token.length,
      temperature: this.temperature.value,
    };
    const response = await openai.createCompletion(parameters);
    if (response.data.choices[0].text) {
      return this.speak(response.data.choices[0].text);
    } else {
      throw new Error('There was an error. Please try again.');
    }
  }
}
