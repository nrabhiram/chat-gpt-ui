import { describe, expect, it } from 'vitest';
import { Prompt } from '../src/chat-gpt/models/prompt';

describe('Prompt', () => {
  it("The default prompt is used if one isn't provided", () => {
    const prompt = new Prompt();
    expect(prompt.content).toBe('You are a friendly AI assistant having a conversation with a human user.');
  });
});
