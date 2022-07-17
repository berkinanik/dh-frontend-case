import { Header } from 'components/Header';

import styles from './DefaultLayout.module.scss';

interface LayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main id="content" role="main" className={styles.content}>
        {children}
      </main>
    </>
  );
};
