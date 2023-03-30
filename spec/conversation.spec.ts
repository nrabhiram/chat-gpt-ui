import { beforeEach, describe, expect, it } from 'vitest';
import { Conversation } from '../src/chat-gpt/models/conversation';
import { Speaker, Race } from '../src/chat-gpt/models/speaker';
import { Speech } from '../src/chat-gpt/utils';

let conversation: Conversation;
let speaker: Speaker;
let speech: Speech;

describe('Conversation', () => {
  beforeEach(() => {
    conversation = new Conversation();

    speech = {
      speaker: speaker,
      content: 'Hello there',
    };

    speaker = new Speaker(Race.HUMAN);
  });

  it('When a speech is added in a new conversation, the number of speeches is 1', () => {
    conversation.add(speech);
    expect(conversation.speeches.length).toBe(1);
  });

  it('When a human speech is added to a conversation, the latest speaker is of the human race', () => {
    conversation.add(speech);
    const lastIndex = conversation.speeches.length - 1;
    expect(conversation.speeches[lastIndex].speaker.race).toBe(Race.HUMAN);
  });

  it('When an AI speech is added to a conversation, the latest speaker is of the AI race', () => {
    const AISpeaker = new Speaker(Race.AI);

    const AISpeech = {
      speaker: AISpeaker,
      content: 'Hello there',
    };

    conversation.add(AISpeech);
    const lastIndex = conversation.speeches.length - 1;
    expect(conversation.speeches[lastIndex].speaker.race).toBe(Race.AI);
  });
});
