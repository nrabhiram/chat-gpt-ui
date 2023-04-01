import styles from './Button.module.css';

export const Button: React.FC<
  React.PropsWithChildren<{
    level: 'primary' | 'secondary';
    fullWidth: boolean;
    clickHandler?: () => void;
    submitting?: boolean;
  }>
> = (props) => {
  let btnStyle;
  if (props.level === 'primary') {
    if (props.submitting) {
      btnStyle = styles['primary-disabled'];
    } else {
      btnStyle = styles['primary'];
    }
  } else {
    if (props.submitting) {
      btnStyle = styles['secondary-disabled'];
    } else {
      btnStyle = styles['secondary'];
    }
  }
  return (
    <button
      onClick={props.clickHandler}
      onKeyDown={props.clickHandler}
      className={`${styles['btn']} ${btnStyle} ${props.fullWidth ? styles['full-width'] : ''}`}
      disabled={props.submitting ? props.submitting : false}
    >
      {props.children}
    </button>
  );
};
