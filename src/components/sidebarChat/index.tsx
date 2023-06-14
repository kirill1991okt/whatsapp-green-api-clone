import React from 'react';
import { Avatar } from '@mui/material';
import { stringRandomGeneration } from '../../utils/stringRandomGeneration';

import styles from './sidebarChat.module.scss';

const SidebarChat: React.FC = () => {
  const [seed, setSeed] = React.useState<string>('');

  React.useEffect(() => {
    setSeed(stringRandomGeneration());
  }, []);

  return (
    <div className={styles.chat}>
      <Avatar
        className={styles.avatar}
        src={`https://api.dicebear.com/6.x/adventurer/svg?seed=${seed}`}
      />
      <div className={styles.info}>
        <h2>Room name</h2>
        <p>Last message...</p>
      </div>
    </div>
  );
};

export default SidebarChat;
