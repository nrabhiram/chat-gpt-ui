export class Prompt {
  content: string;

  constructor(content?: string) {
    if (content && content.trim().length > 0) {
      this.content = content;
    } else {
      this.content = 'You are a friendly AI assistant having a conversation with a human user.';
    }
  }

  update(prompt: Prompt) {
    return new Prompt(prompt.content);
  }
}
