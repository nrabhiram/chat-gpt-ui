import { describe, expect, it } from 'vitest';
import { Speaker, Race } from '../src/chat-gpt/models/speaker';
import { Conversation } from '../src/chat-gpt/models/conversation';

describe('Speaker', () => {
  it('When a speaker speaks in a conversation, their speech is the latest one in it', () => {
    const speaker = new Speaker(Race.HUMAN);
    const conversation = new Conversation();
    speaker.speak('Hey there', conversation);
    const lastIndex = conversation.speeches.length - 1;
    expect(conversation.speeches[lastIndex].speaker).toEqual(speaker);
  });
});
