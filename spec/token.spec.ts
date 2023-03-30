import { describe, expect, it } from 'vitest';
import { Token } from '../src/chat-gpt/models/token';

describe('Token', () => {
  it('The maximum length is clamped to 2048', () => {
    const token = new Token(3000);
    expect(token.length).toBe(2048);
  });

  it('The minimum length is clamped to 0', () => {
    const token = new Token(-100);
    expect(token.length).toBe(0);
  });
});
