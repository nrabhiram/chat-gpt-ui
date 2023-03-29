import { Button } from '../Button/Button';
import styles from './ChatInput.module.css';

export const ChatInput = () => {
  const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>, height: number) => {
    const target = event.target;
    target.style.height = `${height}px`;
    target.style.height = `${target.scrollHeight}px`;
  };
  return (
    <form className={styles['container']}>
      <textarea
        placeholder="Enter your prompt here..."
        onChange={(event) => onChangeHandler(event, 80)}
        style={{ height: '76px' }}
        className={styles['input']}
      />
      <div className="mx-1"></div>
      <Button level="primary" fullWidth={false}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 sm:w-6 sm:h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </Button>
    </form>
  );
};
