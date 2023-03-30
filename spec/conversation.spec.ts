import { beforeEach, describe, expect, it } from 'vitest';
import { Conversation } from '../src/chat-gpt/models/conversation';
import { Speaker, Speech, Race } from '../src/chat-gpt/utils';

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

    speaker = {
      race: Race.HUMAN,
    };
  });

  it('When a speech is added in a new conversation, the number of speeches is 1', () => {
    conversation.add(speech);
    expect(conversation.speeches.length).toBe(1);
  });
});
