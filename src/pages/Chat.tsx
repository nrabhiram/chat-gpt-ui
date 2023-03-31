import { useContext, useState } from 'react';
import { ChatInput } from '../components/ChatInput/ChatInput';
import { SpeechBubble } from '../components/SpeechBubble/SpeechBubble';
import { AIContext } from '../context/ai-context';
import { useParams } from 'react-router';
import { Card } from '../components/Card/Card';
import styles from './Chat.module.css';

export const ChatPage = () => {
  const [input, setInput] = useState('');
  const params = useParams() as any;
  const aiContext = useContext(AIContext);

  const convoId = params.chatId as number;

  const onInputChange = (input: string) => {
    setInput(input);
  };

  return (
    <>
      {aiContext.conversations[convoId].length === 0 && (
        <div className={styles['secondary-section']}>
          <h2 className={styles['secondary-heading']}>Need an icebreaker?</h2>
          <div className={styles['prompts-container']}>
            <Card direction="row">
              <p className={styles['prompt-text']}>Explain quantum computing in simple terms</p>
            </Card>
            <Card direction="row">
              <p className={styles['prompt-text']}>Got any creative ideas for a 10 year old's birthday?</p>
            </Card>
            <Card direction="row">
              <p className={styles['prompt-text']}>How do I make an HTTP request in Javascript?</p>
            </Card>
          </div>
        </div>
      )}
      {aiContext.conversations[convoId].length > 0 && (
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
        </>
      )}
      <ChatInput convoId={convoId} input={input} inputChangeHandler={onInputChange} />
    </>
  );
};
