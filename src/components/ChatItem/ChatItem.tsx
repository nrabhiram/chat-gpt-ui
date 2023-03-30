import { Link } from 'react-router-dom';
import styles from './ChatItem.module.css';

export const ChatItem = () => {
  return (
    <Link to="/">
      <div className={styles['card']}>
        <h4 className={styles['title']}>Chat Summarized Title</h4>
        <p className={styles['description']}>A 30-50 word summary of the conversation...</p>
      </div>
    </Link>
  );
};
