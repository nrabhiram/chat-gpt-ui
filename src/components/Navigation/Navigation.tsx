import { Chat } from '../MenuItems/Chat';
import styles from './Navigation.module.css';
import { Settings } from '../MenuItems/Settings';
import Logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav className={styles['nav-bar']}>
      <NavLink to="/">
        <div className={styles['logo']}>
          <img src={Logo} width={30} height={30} className="mr-2" alt="openai" />
          <span className={styles['title']}>chat-gpt</span>
        </div>
      </NavLink>
      <div className="grow"></div>
      <Settings />
      <Chat />
    </nav>
  );
};
