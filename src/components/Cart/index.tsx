import cn from 'classnames';

import styles from './Cart.module.scss';

interface CartProps {
  className?: string;
}

export const Cart: React.FC<CartProps> = ({ className }) => {
  return <div className={cn(styles.container, className)}>Cart</div>;
};
