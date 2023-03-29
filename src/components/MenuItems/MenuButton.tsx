import styles from './MenuButton.module.css';

export const MenuButton: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <button type="button" className={styles['menu-btn']} id="menu-button" aria-expanded="true" aria-haspopup="true">
      {props.children}
    </button>
  );
};
