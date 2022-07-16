import { useState } from 'react';
import 'styles/globals.scss';

import styles from './App.module.scss';

const App: React.FC = () => {
  const [name, setName] = useState('');
  return (
    <div>
      <h1 className={styles.title}>DH Frontend Case</h1>
      <br />
      <input value={name} onChange={(e) => setName(e.target.value)} />
    </div>
  );
};

export default App;
