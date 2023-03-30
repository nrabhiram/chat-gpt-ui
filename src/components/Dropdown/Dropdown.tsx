import { useEffect, useRef } from 'react';
import styles from './Dropdown.module.css';
import { motion } from 'framer-motion';

let firstRender = true;

export const Dropdown: React.FC<
  React.PropsWithChildren<{ open: boolean; setClickedOutside: (value: boolean) => void; clickHandler: () => void }>
> = (props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    firstRender = false;
  }, []);

  useEffect(() => {
    props.setClickedOutside(false);
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && props.open && !ref.current.contains(event.target as HTMLElement)) {
        props.setClickedOutside(true);
        props.clickHandler();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [props.open, props.setClickedOutside, props.clickHandler]);

  return (
    <motion.div
      ref={ref}
      className={styles['container']}
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      animate={props.open ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      initial={
        props.open ? { scale: 0, opacity: 0 } : firstRender ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 }
      }
    >
      {props.children}
    </motion.div>
  );
};
