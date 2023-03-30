import { describe, expect, it } from 'vitest';
import { Temperature } from '../src/chat-gpt/models/temperature';

describe('Temperature', () => {
  it('The maximum temperature is clamped to 2', () => {
    const temp = new Temperature(3);
    expect(temp.value).toBe(2);
  });

  it('The minimum temperature is clamped to 0', () => {
    const temp = new Temperature(-1);
    expect(temp.value).toBe(0);
  });
});
