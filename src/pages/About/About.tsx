import { Card } from '../../components/Card/Card';
import { Container } from '../../components/Container/Container';
import styles from './About.module.css';

export const AboutPage = () => {
  return (
    <Container>
      <div className={styles['container']}>
        <Card direction="column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 stroke-teal-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
            />
          </svg>
          <h3 className={styles['card-title']}>Capabilities</h3>
          <p className={styles['card-text']}>
            The models are packed with features that make it appropriate for public usage. They remember what the user
            said earlier in the conversation, allow the user to provide follow-up corrections, and are trained to
            decline inappropriate requests
          </p>
        </Card>
        <div className="mx-0 sm:mx-1"></div>
        <Card direction="column">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            className="w-6 h-6 stroke-teal-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          <h3 className={styles['card-title']}>Limitations</h3>
          <p className={styles['card-text']}>
            Unfortunately, the models come with some drawbacks. They may occasionally generate incorrect information,
            harmful instructions, or biased content, and have limited knowledge of world and events after 2021.
          </p>
        </Card>
      </div>
    </Container>
  );
};
