import React, { useEffect } from 'react';
import SidebarChat from '../sidebarChat';
import { Avatar, IconButton } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';

import styles from './sidebar.module.scss';

const Sidebar: React.FC = () => {
  const [rooms, setRooms] = React.useState([]);

  useEffect(() => {}, []);

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <Avatar />
        <div className={styles.headerRight}>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className={styles.search}>
        <div className={styles.searchContainer}>
          <SearchOutlined className={styles.searchSvg} />
          <input type='text' placeholder='Search or start new chat' />
        </div>
      </div>

      <div className={styles.chats}>
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
};

export default Sidebar;
