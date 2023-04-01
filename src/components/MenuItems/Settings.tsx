import { useContext, useState } from 'react';
import { Dropdown } from '../Dropdown/Dropdown';
import { MenuButton } from './MenuButton';
import { MenuItem } from './MenuItem';
import styles from './Settings.module.css';
import { AIContext } from '../../context/ai-context';

export const Settings: React.FC<
  React.PropsWithChildren<{ open: boolean; clickHandler: () => void; drawerHandler: () => void }>
> = (props) => {
  const [clickedOutside, setClickedOutside] = useState(false);
  const aiContext = useContext(AIContext);

  return (
    <MenuItem>
      <MenuButton clickHandler={props.clickHandler} clickedOutside={clickedOutside}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 mr-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
          />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </MenuButton>
      <Dropdown
        open={props.open}
        clickHandler={props.drawerHandler}
        setClickedOutside={(value: boolean) => setClickedOutside(value)}
      >
        <div className={styles['settings-container']}>
          <div className={styles['settings-label-container']}>
            <label htmlFor="temperature" className={styles['settings-label']}>
              Temperature
            </label>
            <div className={styles['spacer']}></div>
            <input
              type="number"
              name="temperature"
              min="0"
              max="2"
              step="0.01"
              value={aiContext.temperature}
              onChange={(e) => aiContext.configure(parseFloat(e.target.value), aiContext.token, aiContext.prompt)}
              className={styles['num-input']}
            />
          </div>
          <p className={styles['settings-description']}>Increase the value to get more creative responses</p>
          <input
            type="range"
            name="temperature"
            min={0}
            max={2}
            step={0.01}
            value={aiContext.temperature}
            onChange={(e) => aiContext.configure(parseFloat(e.currentTarget.value), aiContext.token, aiContext.prompt)}
            className={styles['range']}
          />
        </div>
        <div className={styles['settings-container']}>
          <div className={styles['settings-label-container']}>
            <label htmlFor="tokens" className={styles['settings-label']}>
              Tokens
            </label>
            <div className={styles['spacer']}></div>
            <input
              type="number"
              name="tokens"
              value={aiContext.token}
              onChange={(e) => aiContext.configure(aiContext.temperature, parseInt(e.target.value), aiContext.prompt)}
              className={styles['num-input']}
            />
          </div>
          <p className={styles['settings-description']}>The maximum number of tokens to generate in the completion.</p>
        </div>
        <div className={styles['settings-container']}>
          <label htmlFor="prompt" className={styles['settings-label']}>
            System Prompt
          </label>
          <p className={styles['settings-description']}>
            The base prompt to which the conversation is appended in order to generate a completion.
          </p>
          <textarea
            rows={8}
            value={aiContext.prompt}
            onChange={(e) => aiContext.configure(aiContext.temperature, aiContext.token, e.target.value)}
            className={styles['textarea']}
          />
        </div>
      </Dropdown>
    </MenuItem>
  );
};
