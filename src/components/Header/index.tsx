import { Link } from 'react-router-dom';

import { formatMoney } from 'utils';
import { useCartContext } from 'context';
import { Wrapper } from 'layouts/Wrapper';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
  const {
    cartState: { cartTotal, cartItems },
  } = useCartContext();

  return (
    <header className={styles.header} id="header">
      <Wrapper id="header-wrapper">
        <div className={styles.container}>
          <Link to="/">
            <img className={styles.logo} src="images/logo.png" alt="Yemeksepeti Logo" width={214} height={42} />
          </Link>
          <Link className={styles.cart} to="/sepet" title={cartTotal > 0 ? formatMoney(cartTotal) : ''}>
            Sepet
            {cartItems.length > 0 &&
              ` (${cartItems.reduce((prevSum, nextItem) => (prevSum += nextItem.amount), 0)} ürün)`}
          </Link>
        </div>
      </Wrapper>
    </header>
  );
};
