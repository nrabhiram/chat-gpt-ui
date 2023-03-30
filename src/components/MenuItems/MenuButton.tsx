import styles from './MenuButton.module.css';

export const MenuButton: React.FC<React.PropsWithChildren<{ clickHandler: () => void; clickedOutside: boolean }>> = (
  props,
) => {
  const clickHandler = () => {
    if (!props.clickedOutside) {
      props.clickHandler();
    }
  };
  return (
    <button
      type="button"
      className={styles['menu-btn']}
      id="menu-button"
      aria-expanded="true"
      aria-haspopup="true"
      onClick={clickHandler}
    >
      {props.children}
    </button>
  );
};
