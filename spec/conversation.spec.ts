import { beforeEach, describe, expect, it } from 'vitest';
import { Conversation, Speaker, Speech, Race } from '../src/utils';

let conversation: Conversation;
let speaker: Speaker;
let speech: Speech;

describe('Conversation', () => {
  beforeEach(() => {
    conversation = {
      speeches: [],
      add: function (speech) {
        this.speeches.push(speech);
      },
    };

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
