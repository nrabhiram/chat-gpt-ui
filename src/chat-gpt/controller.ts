import { AI } from './models/ai';
import { Conversation } from './models/conversation';
import { Human } from './models/human';
import { Prompt } from './models/prompt';
import { Temperature } from './models/temperature';
import { Token } from './models/token';
import { Parser } from './parser';
import { RenderedSpeech, Renderer } from './renderer';

export class Controller {
  newConvo(speeches: RenderedSpeech[]) {
    const convos = this.readConversations();
    const parser = new Parser();
    const newConvo = parser.conversation(speeches);
    convos.push(newConvo);
    this.writeConversations(convos);
  }

  async prompt(convoId: number, prompt: string) {
    const convos = this.readConversations();
    const curConvo = convos[convoId];
    const human = new Human();
    const ai = this.readAI();
    const speech = human.speak(prompt);
    human.add(speech, curConvo);
    const response = await ai.think(curConvo);
    ai.add(response, curConvo);
    this.writeConversations(convos);
    return response;
  }

  configure(temperature: number, token: number, prompt: string) {
    const parser = new Parser();
    const renderer = new Renderer();
    const ai = parser.ai({
      race: 'AI',
      temperature: temperature,
      token: token,
      prompt: prompt,
    });
    this.writeAI(ai);
    return {
      temperature: renderer.temperature(ai.temperature),
      token: renderer.token(ai.token),
      prompt: renderer.prompt(ai.prompt),
    };
  }

  convos() {
    const convos = this.readConversations();
    const renderer = new Renderer();
    return renderer.conversations(convos);
  }

  settings() {
    const ai = this.readAI();
    const renderer = new Renderer();
    return renderer.ai(ai);
  }

  private readConversations() {
    const JSONParsedConvos = JSON.parse(localStorage.getItem('conversations') as string);
    const parser = new Parser();
    const conversations: Conversation[] = [];
    if (JSONParsedConvos) {
      for (let i = 0; i < JSONParsedConvos.length; i++) {
        const renderedConvo = JSONParsedConvos[i] as RenderedSpeech[];
        const convo = parser.conversation(renderedConvo);
        conversations.push(convo);
      }
    }
    return conversations;
  }

  private writeConversations(convos: Conversation[]) {
    const renderer = new Renderer();
    const conversations = renderer.conversations(convos);
    localStorage.setItem('conversations', JSON.stringify(conversations));
  }

  private readAI() {
    const JSONParsedAI = JSON.parse(localStorage.getItem('AI') as string);
    const parser = new Parser();
    let ai: AI;
    if (JSONParsedAI) {
      ai = parser.ai(JSONParsedAI);
    } else {
      ai = new AI(new Temperature(0), new Token(2048), new Prompt());
    }
    return ai;
  }

  private writeAI(ai: AI) {
    const renderer = new Renderer();
    const renderedAI = renderer.ai(ai);
    localStorage.setItem('AI', JSON.stringify(renderedAI));
  }
}
