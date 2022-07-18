import styles from './CartItem.module.scss';

interface CartItemProps {
  item: { id: string; amount: number; name: string; description: string; price: number };
}

export const CartItem: React.FC<CartItemProps> = ({ item: { id, amount, name, description, price } }) => {
  return (
    <li className={styles.container}>
      x{amount} {name}
    </li>
  );
};
