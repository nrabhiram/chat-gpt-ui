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

  it('An unsummarized conversation has a title of "Untitled Conversation"', () => {
    const AISpeaker = new Speaker(Race.AI);

    const AISpeech = {
      speaker: AISpeaker,
      content: 'Hello there',
    };

    conversation.add(AISpeech);
    expect(conversation.title()).toBe('Untitled Conversation');
  });

  it('An unsummarized conversation has a description of "This conversation hasn\'t been summarized."', () => {
    const AISpeaker = new Speaker(Race.AI);

    const AISpeech = {
      speaker: AISpeaker,
      content: 'Hello there',
    };

    conversation.add(AISpeech);
    expect(conversation.description()).toBe("This conversation hasn't been summarized.");
  });

  it('A summarized conversation with a blank title in the summary still has a title of "Untitled Conversation"', () => {
    const AISpeaker = new Speaker(Race.AI);

    const AISpeech = {
      speaker: AISpeaker,
      content: 'Hello there',
    };

    conversation.add(AISpeech);
    conversation.summarize({ title: '', description: '' });
    expect(conversation.title()).toBe('Untitled Conversation');
  });

  it('A summarized conversation with a blank description in the summary still has the same unsummarized description', () => {
    const AISpeaker = new Speaker(Race.AI);

    const AISpeech = {
      speaker: AISpeaker,
      content: 'Hello there',
    };

    conversation.add(AISpeech);
    conversation.summarize({ title: '', description: '' });
    expect(conversation.description()).toBe("This conversation hasn't been summarized.");
  });

  it('A conversation with lesser than 2 speeches cannot be summarized', () => {
    conversation.summarize({ title: 'New Title', description: 'New Description.' });
    expect(conversation.title()).toBe('Untitled Conversation');
    expect(conversation.description()).toEqual("This conversation hasn't been summarized.");
  });
});
