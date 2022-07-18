import { Wrapper } from 'layouts/Wrapper';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header} id="header">
      <Wrapper id="header-wrapper">
        <div className={styles.container}>Yemeksepeti</div>
      </Wrapper>
    </header>
  );
};
