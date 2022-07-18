import { Link } from 'react-router-dom';

import { Wrapper } from 'layouts/Wrapper';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.header} id="header">
      <Wrapper id="header-wrapper">
        <div className={styles.container}>
          <Link to="/">
            <img className={styles.logo} src="images/logo.png" alt="Yemeksepeti Logo" />
          </Link>
          <Link className={styles.cart} to="/sepet">
            Sepet
          </Link>
        </div>
      </Wrapper>
    </header>
  );
};
