import styles from './SpeechBubble.module.css';
import Loader from '../../assets/loading.gif';
import { motion } from 'framer-motion';

export const SpeechBubble: React.FC<{
  speaker: string;
  text: string;
  loading?: boolean;
  animate: boolean;
  delay?: number;
}> = (props) => {
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

  if (props.animate) {
    return (
      <motion.div
        className={styles[containerClass]}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 60, opacity: 0 }}
        transition={{ duration: 0.5 + (props.delay ? props.delay : 0) }}
      >
        <div className="grow"></div>
        <div className={styles[speechBubbleClass]}>{content}</div>
      </motion.div>
    );
  } else {
    return (
      <div className={styles[containerClass]}>
        <div className="grow"></div>
        <div className={styles[speechBubbleClass]}>{content}</div>
      </div>
    );
  }
};
