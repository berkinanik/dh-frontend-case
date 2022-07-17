import { useState } from 'react';
import 'styles/globals.scss';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [name, setName] = useState('');
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>DH Frontend Case</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div className={styles.image}></div>
    </div>
  );
};

export default App;
