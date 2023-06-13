import React from 'react';
import { Avatar, IconButton } from '@mui/material';
import { stringRandomGeneration } from '../../utils/stringRandomGeneration';

import styles from './chat.module.scss';
import { SearchOutlined } from '@mui/icons-material';
import { MoreVert } from '@mui/icons-material';

const Chat: React.FC = () => {
  const [input, setInput] = React.useState<string>('');
  const [seed, setSeed] = React.useState<string>('');

  React.useEffect(() => {
    setSeed(stringRandomGeneration());
  }, []);

  const onSendMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('there is: ' + input);

    setInput('');
  };
  return (
    <div className={styles.chat}>
      <div className={styles.header}>
        <Avatar
          src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`}
        />
        <div className={styles.headerInfo}>
          <h3>Room name</h3>
          <p>Last seen at ...</p>
        </div>

        <div className={styles.headerRight}>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className={styles.body}>
        <p className={`${styles.message} ${true && styles.receiver}`}>
          <span className={styles.name}>Kirill Lev</span>
          Hello
          <span className={styles.timestamp}>3:52</span>
        </p>
        <p className={styles.message}>Hello</p>
      </div>

      <div className={styles.footer}>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder='Type a message'
            type='text'
          />
          <button type='submit' onClick={onSendMessage}>
            Send a message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
