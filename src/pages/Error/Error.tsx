import { Container } from '../../components/Container/Container';
import Hero from '../../assets/hero.png';
import styles from './Error.module.css';
import { Button } from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className={styles['container']}>
        <img src={Hero} alt="hero" />
        <p className={styles['error-txt']}>Oops...this page doesn&apos;t exist. What would you like to do?</p>
        <div className={styles['btn-container']}>
          <Button level="primary" fullWidth={false} clickHandler={() => navigate('/chat/1')}>
            New Chat
          </Button>
          <div className="mx-1"></div>
          <Button level="secondary" fullWidth={false} clickHandler={() => navigate('/')}>
            Go Home
          </Button>
        </div>
      </div>
    </Container>
  );
};
