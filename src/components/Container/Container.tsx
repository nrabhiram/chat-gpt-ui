import styles from './Container.module.css';
import { Navigation } from '../Navigation/Navigation';

export const Container: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={styles['background']}>
      <Navigation />
      <div className={styles['container']}>{props.children}</div>
    </div>
  );
};
