import { ChatInput } from '../components/ChatInput/ChatInput';
import { SpeechBubble } from '../components/SpeechBubble/SpeechBubble';

export const ChatPage = () => {
  return (
    <>
      <SpeechBubble
        speaker="user"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <SpeechBubble speaker="ai" text="Yes, I am doing really well. Thank you for asking" />
      <SpeechBubble
        speaker="user"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <SpeechBubble speaker="ai" text="Yes, I am doing really well. Thank you for asking" />
      <SpeechBubble
        speaker="user"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <SpeechBubble speaker="ai" text="Yes, I am doing really well. Thank you for asking" />
      <SpeechBubble
        speaker="user"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <SpeechBubble speaker="ai" text="Yes, I am doing really well. Thank you for asking" />
      <SpeechBubble
        speaker="user"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
      />
      <SpeechBubble speaker="ai" text="Yes, I am doing really well. Thank you for asking" />
      <ChatInput />
    </>
  );
};
