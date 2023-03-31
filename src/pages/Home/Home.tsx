import { Button } from '../../components/Button/Button';
import Hero from '../../assets/hero.png';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AIContext } from '../../context/ai-context';

export const HomePage = () => {
  const navigate = useNavigate();
  const aiContext = useContext(AIContext);

  const newChatHandler = () => {
    const id = aiContext.conversations.length;
    aiContext.newConvo();
    navigate(`/chat/${id}`);
  };

  return (
    <div className={styles['container']}>
      <motion.img
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 2 }}
        src={Hero}
        className={styles['hero-img']}
        alt="hero"
      />
      <motion.div
        className={styles['hero-section']}
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: 60, opacity: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <div className={styles['hero-text']}>
          <h1 className={styles['primary-heading']}>Your personal AI assistant</h1>
          <p className={styles['subtitle']}>
            Lorem ipsum about the cta&apos;s for the user. Lorem ipsum about the cta&apos;s for the user.
          </p>
        </div>
        <div className={styles['hero-btn-container']}>
          <Button level="primary" fullWidth={false} clickHandler={newChatHandler}>
            Start Talking!
          </Button>
          <div className="mx-1"></div>
          <Button level="secondary" fullWidth={false} clickHandler={() => navigate('/about')}>
            Learn More
          </Button>
        </div>
      </motion.div>
    </div>
  );
};
