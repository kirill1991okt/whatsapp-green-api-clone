import React from 'react';

import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

import styles from './app.module.scss';

const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <div className={styles.body}>
        <Sidebar />
        <Chat />
      </div>
    </div>
  );
};

export default App;
