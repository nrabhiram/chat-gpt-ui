import { describe, expect, it } from 'vitest';
import { Speaker, Race } from '../src/chat-gpt/models/speaker';
import { Conversation } from '../src/chat-gpt/models/conversation';

describe('Speaker', () => {
  it('When a speaker adds their speech to a conversation, it is the latest addition', () => {
    const speaker = new Speaker(Race.HUMAN);
    const conversation = new Conversation();
    const speech = speaker.speak('Hey there');
    speaker.add(speech, conversation);
    const lastIndex = conversation.speeches.length - 1;
    expect(conversation.speeches[lastIndex].speaker).toEqual(speaker);
  });

  it('A speech is added by a speaker to a conversation only if their race spoke it', () => {
    const speaker = new Speaker(Race.HUMAN);
    const conversation = new Conversation();
    const speech = {
      speaker: new Speaker(Race.AI),
      content: 'Hey there',
    };
    speaker.add(speech, conversation);
    expect(conversation.speeches.length).toBe(0);
  });
});
