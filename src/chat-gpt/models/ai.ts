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
    const response = await this.request(this.prompt, conversation, this.token.length, this.temperature.value);
    return response;
  }

  async summarize(conversation: Conversation) {
    const titlePrompt = new Prompt("Summarize the following conversation with a title that doesn't exceed 20 letters");
    const descriptionPrompt = new Prompt('Describe the following conversation in less than 50 words.');
    const title = await this.request(titlePrompt, conversation, 100, 0);
    const description = await this.request(descriptionPrompt, conversation, 100, 0);
    conversation.summarize({ title: title.content, description: description.content });
  }

  private async request(prompt: Prompt, conversation: Conversation, tokens: number, temperature: number) {
    const renderer = new Renderer();
    const configuration = new Configuration({
      apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);
    const parameters = {
      model: 'text-davinci-003',
      prompt: renderer.AIPrompt(prompt, conversation),
      max_tokens: tokens,
      temperature: temperature,
    };
    const response = await openai.createCompletion(parameters);
    if (response.data.choices[0].text) {
      return this.speak(response.data.choices[0].text);
    } else {
      throw new Error('There was an error. Please try again.');
    }
  }
}
