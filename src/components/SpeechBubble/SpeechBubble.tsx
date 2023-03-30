import styles from './SpeechBubble.module.css';

export const SpeechBubble: React.FC<{ speaker: string; text: string }> = (props) => {
  let speechBubbleClass: string;
  let containerClass: string;

  if (props.speaker === 'ai') {
    speechBubbleClass = 'ai';
    containerClass = 'ai-container';
  } else {
    speechBubbleClass = 'user';
    containerClass = 'user-container';
  }

  return (
    <div className={styles[containerClass]}>
      <div className="grow"></div>
      <div className={styles[speechBubbleClass]}>
        <p>{props.text}</p>
      </div>
    </div>
  );
};
