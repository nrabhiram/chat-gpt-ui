import { Button } from '../../components/Button/Button';
import Hero from '../../assets/hero.png';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../components/Card/Card';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const navigate = useNavigate();
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
          <Button level="primary" fullWidth={false} clickHandler={() => navigate('/chat/1')}>
            Start Talking!
          </Button>
          <div className="mx-1"></div>
          <Button level="secondary" fullWidth={false} clickHandler={() => navigate('/about')}>
            Learn More
          </Button>
        </div>
      </motion.div>
      {/* <div className={styles['secondary-section']}>
        <h2 className={styles['secondary-heading']}>Need an icebreaker?</h2>
        <div className={styles['prompts-container']}>
          <Card direction="row">
            <p className={styles['prompt-text']}>Explain quantum computing in simple terms</p>
          </Card>
          <Card direction="row">
            <p className={styles['prompt-text']}>Got any creative ideas for a 10 year old's birthday?</p>
          </Card>
          <Card direction="row">
            <p className={styles['prompt-text']}>How do I make an HTTP request in Javascript?</p>
          </Card>
        </div>
      </div> */}
    </div>
  );
};
