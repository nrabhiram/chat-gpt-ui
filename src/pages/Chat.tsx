import { useContext, useState } from 'react';
import { ChatInput } from '../components/ChatInput/ChatInput';
import { SpeechBubble } from '../components/SpeechBubble/SpeechBubble';
import { AIContext } from '../context/ai-context';
import { useParams } from 'react-router';
import { Card } from '../components/Card/Card';
import styles from './Chat.module.css';

export const ChatPage = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const params = useParams() as any;
  const aiContext = useContext(AIContext);

  const convoId = params.chatId as number;

  const onInputChange = (input: string) => {
    setInput(input);
  };

  const onInputSubmit = async (id: number, prompt: string) => {
    try {
      setLoading(true);
      await aiContext.sendPrompt(id, prompt);
    } catch (err) {
      setError('Oops...an error has occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <>
      {aiContext.conversations[convoId].speeches.length === 0 && (
        <div className={styles['secondary-section']}>
          <h2 className={styles['secondary-heading']}>Need an icebreaker?</h2>
          <div className={styles['prompts-container']}>
            <Card direction="row">
              <p className={styles['prompt-text']}>Explain quantum computing in simple terms</p>
            </Card>
            <Card direction="row">
              <p className={styles['prompt-text']}>Got any creative ideas for a 10 year old&apos;s birthday?</p>
            </Card>
            <Card direction="row">
              <p className={styles['prompt-text']}>How do I make an HTTP request in Javascript?</p>
            </Card>
          </div>
        </div>
      )}
      {aiContext.conversations[convoId].speeches.length > 0 && (
        <div className="pb-[160px]">
          {aiContext.conversations[convoId].speeches.map((speech, id) => {
            const speaker = speech.speaker === 'HUMAN' ? 'user' : 'ai';
            return <SpeechBubble key={id} speaker={speaker} text={speech.content} />;
          })}
          {loading && <SpeechBubble speaker="ai" text="" loading={true} />}
          {error && <div className="bg-red-200 text-red-400 p-4 rounded-md">{error}</div>}
        </div>
      )}
      <ChatInput
        convoId={convoId}
        input={input}
        inputChangeHandler={onInputChange}
        inputSubmitHandler={onInputSubmit}
      />
    </>
  );
};
