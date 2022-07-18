import { ProductItemProps } from '../ProductItem';

import styles from './ProductList.module.scss';

interface ProductListProps {
  children?: React.ReactElement<ProductItemProps> | React.ReactElement<ProductItemProps>[];
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
