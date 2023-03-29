import styles from './Dropdown.module.css';

export const Dropdown: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={styles['container']} role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
      {props.children}
    </div>
  );
};
