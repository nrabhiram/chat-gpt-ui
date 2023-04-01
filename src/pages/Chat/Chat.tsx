import { useContext, useEffect, useState } from 'react';
import { ChatInput } from '../../components/ChatInput/ChatInput';
import { SpeechBubble } from '../../components/SpeechBubble/SpeechBubble';
import { AIContext } from '../../context/ai-context';
import { useNavigate, useParams } from 'react-router';
import { Card } from '../../components/Card/Card';
import styles from './Chat.module.css';
import { RenderedConversation } from '../../chat-gpt/renderer';
import { motion } from 'framer-motion';

const promptTemplates = [
  'Explain quantum computing in simple terms',
  "Got any creative ideas for a 10 year old's birthday?",
  'How do I make an HTTP request in Javascript?',
];

export const ChatPage = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [conversation, setConversation] = useState<RenderedConversation | undefined>();
  const { chatId } = useParams() as any;
  const { sendPrompt, conversations } = useContext(AIContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (conversations[chatId]) {
      setConversation(conversations[chatId]);
    } else {
      navigate('/');
    }
  }, [conversations, chatId]);

  const onInputChange = (input: string) => {
    setError('');
    setInput(input);
  };

  const onTemplateClicked = (template: string) => {
    setInput(template);
  };

  const onInputSubmit = async (prompt: string) => {
    setError('');
    if (prompt.trim().length > 0) {
      try {
        setLoading(true);
        await sendPrompt(chatId, prompt);
        setInput('');
      } catch (err) {
        setError('Oops...an error has occurred. Please try again.');
      }
      setLoading(false);
    }
  };

  return (
    <>
      {conversation && conversation.speeches.length === 0 && (
        <div className={styles['secondary-section']}>
          <h2 className={styles['secondary-heading']}>Need an icebreaker?</h2>
          <motion.div
            className={styles['prompts-container']}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            {promptTemplates.map((prompt, id) => (
              <button key={id} onClick={() => onTemplateClicked(prompt)}>
                <Card direction="row">
                  <p className={styles['prompt-text']}>{prompt}</p>
                </Card>
              </button>
            ))}
          </motion.div>
        </div>
      )}
      {conversation && conversation.speeches.length > 0 && (
        <div className={styles['chat-container']}>
          {conversation.speeches.map((speech, id) => {
            const speaker = speech.speaker === 'HUMAN' ? 'user' : 'ai';
            let animate = false;
            if (id === conversation.speeches.length - 1) {
              animate = true;
            }
            return <SpeechBubble key={id} speaker={speaker} text={speech.content} animate={animate} />;
          })}
          {loading && <SpeechBubble speaker="ai" text="" loading={true} animate={true} delay={0.5} />}
          {error && <div className={styles['error-container']}>{error}</div>}
        </div>
      )}
      <ChatInput
        input={input}
        inputChangeHandler={onInputChange}
        inputSubmitHandler={onInputSubmit}
        submitting={loading}
      />
    </>
  );
};
