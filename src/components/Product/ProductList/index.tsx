import { ProductProps } from '../';

import styles from './ProductList.module.scss';

export interface ProductListProps {
  children?: React.ReactElement<ProductProps> | React.ReactElement<ProductProps>[];
  title: string;
}

export const ProductList: React.FC<ProductListProps> = ({ children, title }) => {
  return (
    <article className={styles.container}>
      <header className={styles.title}>{title}</header>
      {children}
    </article>
  );
};
