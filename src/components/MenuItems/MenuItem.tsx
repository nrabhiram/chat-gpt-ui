import styles from './MenuItem.module.css';

export const MenuItem: React.FC<React.PropsWithChildren> = (props) => {
  return <div className={styles['item-container']}>{props.children}</div>;
};
