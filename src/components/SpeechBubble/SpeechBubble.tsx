import styles from './SpeechBubble.module.css';
import Loader from '../../assets/loading.gif';

export const SpeechBubble: React.FC<{ speaker: string; text: string; loading?: boolean }> = (props) => {
  let speechBubbleClass: string;
  let containerClass: string;

  if (props.speaker === 'ai') {
    speechBubbleClass = 'ai';
    containerClass = 'ai-container';
  } else {
    speechBubbleClass = 'user';
    containerClass = 'user-container';
  }

  const content = props.loading ? <img src={Loader} width={40} alt="Loading" /> : <p>{props.text}</p>;

  return (
    <div className={styles[containerClass]}>
      <div className="grow"></div>
      <div className={styles[speechBubbleClass]}>{content}</div>
    </div>
  );
};
