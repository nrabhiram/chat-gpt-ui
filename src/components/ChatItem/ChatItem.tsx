import styles from './ChatItem.module.css';
import { RenderedConversation } from '../../chat-gpt/renderer';

export const ChatItem: React.FC<React.PropsWithChildren<{ convo: RenderedConversation }>> = (props) => {
  const format = (text: string, length: number) => {
    const shouldBeTruncated = text.length >= length;
    if (shouldBeTruncated) {
      return `${text.substring(0, length)}...`;
    } else {
      return text;
    }
  };

  return (
    <div className={styles['card']}>
      <h4 className={styles['title']}>{format(props.convo.title, 20)}</h4>
      <p className={styles['description']}>{format(props.convo.description, 40)}</p>
    </div>
  );
};
