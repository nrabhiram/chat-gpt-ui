import { useContext, useState } from 'react';
import { ChatInput } from '../../components/ChatInput/ChatInput';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';
import { AIContext } from '../../context/ai-context';
import { useParams } from 'react-router';
import { Card } from '../../components/Card/Card';
import styles from './Chat.module.css';

const promptTemplates = [
  'Explain quantum computing in simple terms',
  "Got any creative ideas for a 10 year old's birthday?",
  'How do I make an HTTP request in Javascript?',
];

export const ChatPage = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const params = useParams() as any;
  const aiContext = useContext(AIContext);

  const convoId = params.chatId as number;

  const onInputChange = (input: string) => {
    setError('');
    setInput(input);
  };

  const onTemplateClicked = (template: string) => {
    setInput(template);
  };

  const onInputSubmit = async (id: number, prompt: string) => {
    if (input.trim().length > 0) {
      try {
        setLoading(true);
        await aiContext.sendPrompt(id, prompt);
      } catch (err) {
        setError('Oops...an error has occurred. Please try again.');
      }
      setInput('');
      setLoading(false);
    }
  };

  return (
    <>
      {aiContext.conversations[convoId].speeches.length === 0 && (
        <div className={styles['secondary-section']}>
          <h2 className={styles['secondary-heading']}>Need an icebreaker?</h2>
          <div className={styles['prompts-container']}>
            {promptTemplates.map((prompt, id) => (
              <button key={id} onClick={() => onTemplateClicked(prompt)}>
                <Card direction="row">
                  <p className={styles['prompt-text']}>{prompt}</p>
                </Card>
              </button>
            ))}
          </div>
        </div>
      )}
      {aiContext.conversations[convoId].speeches.length > 0 && (
        <div className={styles['chat-container']}>
          {aiContext.conversations[convoId].speeches.map((speech, id) => {
            const speaker = speech.speaker === 'HUMAN' ? 'user' : 'ai';
            let animate = false;
            if (speaker === 'user' && id === aiContext.conversations[convoId].speeches.length - 1) {
              animate = true;
            }
            return <SpeechBubble key={id} speaker={speaker} text={speech.content} animate={animate} />;
          })}
          {loading && <SpeechBubble speaker="ai" text="" loading={true} animate={true} delay={0.5} />}
          {error && <div className={styles['error-container']}>{error}</div>}
        </div>
      )}
      <ChatInput
        convoId={convoId}
        input={input}
        inputChangeHandler={onInputChange}
        inputSubmitHandler={onInputSubmit}
        submitting={loading}
      />
    </>
  );
};
