import styles from './Button.module.css';

export const Button: React.FC<
  React.PropsWithChildren<{ level: 'primary' | 'secondary'; fullWidth: boolean; clickHandler?: () => void }>
> = (props) => {
  return (
    <button
      onClick={props.clickHandler}
      onKeyDown={props.clickHandler}
      className={`${styles['btn']} ${props.level === 'primary' ? styles['primary'] : styles['secondary']} ${
        props.fullWidth ? styles['full-width'] : ''
      }`}
    >
      {props.children}
    </button>
  );
};
