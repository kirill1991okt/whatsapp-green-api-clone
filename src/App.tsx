import React from 'react';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import Login from './components/Login';

import { useAppSelector } from './redux/hooks';
import { selectUser } from './redux/slices/userSlice';

import styles from './app.module.scss';

const App: React.FC = () => {
  const user = useAppSelector(selectUser);

  console.log(user);

  return (
    <div className={styles.app}>
      {!user.id ? (
        <Login />
      ) : (
        <div className={styles.body}>
          <Sidebar />
          <Chat />
        </div>
      )}
    </div>
  );
};

export default App;
