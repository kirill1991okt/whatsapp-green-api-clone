import React from 'react';
import { Avatar } from '@mui/material';
import { stringRandomGeneration } from '../../utils/stringRandomGeneration';

import styles from './sidebarChat.module.scss';

type ChatPropsType = {
  addNewChat?: () => void;
};

const SidebarChat: React.FC<ChatPropsType> = ({ addNewChat }) => {
  const [seed, setSeed] = React.useState<string>('');

  React.useEffect(() => {
    setSeed(stringRandomGeneration());
  }, []);

  const createChat = () => {
    const roomName = prompt('Please enter name for chat');
    if (roomName) {
      //add information
    }
  };
  return !addNewChat ? (
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
  ) : (
    <div className={styles.chat} onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
