import cn from 'classnames';
import { Link, useHistory } from 'react-router-dom';

import { CartActionTypes } from 'context/types';
import { useCartContext } from 'context';

import { Button } from 'components/Button';
import { formatMoney } from 'utils';
import { Product } from 'components/Product';

import styles from './Cart.module.scss';

interface CartProps {
  className?: string;
  onCartPage?: boolean;
}

export const Cart: React.FC<CartProps> = ({ className, onCartPage = false }) => {
  const {
    cartState: { address, cartItems, cartTotal, restaurant },
    cartDispatch,
  } = useCartContext();
  const history = useHistory();

  const onClear = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    cartDispatch({
      type: CartActionTypes.CLEAR_CART,
    });
  };

  return (
    <section className={cn(styles.container, className)} id="cart-summary">
      <header
        className={cn(styles.header, {
          [styles.header + '--on-page']: onCartPage,
        })}
      >
        {onCartPage ? (
          <>
            <Button
              className={styles.header__back}
              type="button"
              onClick={() => history.goBack()}
              mode="text"
              title="Restoran Sayfasına Dön"
            >
              {'<'} Geri
            </Button>
            <h1 className={styles.header__label}>YEMEK SEPETİM</h1>
          </>
        ) : (
          <Link to="/sepet" className={cn(styles.header__label, styles.header__label + '--link')} title="Sepete Git">
            YEMEK SEPETİM
          </Link>
        )}
      </header>
      <article className={styles.address} id="current-address" title={address ?? ''}>
        {onCartPage && 'Seçili Adres: '}
        {address}
      </article>
      {onCartPage && (
        <article className={styles.restaurant} id="current-restaurant" title={restaurant ?? ''}>
          Restoran: {restaurant}
        </article>
      )}
      <article
        className={cn(styles.content, {
          [styles.content + '--empty']: cartItems.length === 0,
          [styles.content + '--on-page']: onCartPage,
        })}
        id="cart-content"
      >
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item, index) => (
              <Product
                key={item.id}
                item={item}
                onCart
                onCartPage={onCartPage}
                amountOnCart={item.amount}
                lastItem={index === cartItems.length - 1}
              />
            ))}
          </ul>
        ) : (
          <>
            <img src="icons/basket.svg" alt="Basket Icon" width={47} height={37} />
            <span className={styles.content__empty}>Sepetiniz Henüz Boş</span>
          </>
        )}
      </article>
      {cartItems.length > 0 && (
        <article className={styles.total} id="cart-total">
          <span className={styles.total__text}>Sepet Toplamı: </span>
          <span className={styles.total__price}>{formatMoney(cartTotal)}</span>
          <Button
            className={styles.total__clear}
            type="button"
            mode="text"
            onClick={onClear}
            title="Sepetten Tüm Ürünleri Kaldır"
          >
            Sepeti Temizle
          </Button>
        </article>
      )}
    </section>
  );
};
