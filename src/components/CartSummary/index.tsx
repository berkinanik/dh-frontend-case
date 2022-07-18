import cn from 'classnames';
import { Link, useHistory } from 'react-router-dom';

import styles from './CartSummary.module.scss';

interface CartSummaryProps {
  className?: string;
  onCartPage?: boolean;
}

export const CartSummary: React.FC<CartSummaryProps> = ({ className, onCartPage = false }) => {
  const history = useHistory();
  return (
    <section className={cn(styles.container, className)} id="cart-summary">
      <header
        className={cn(styles.header, {
          [styles.header + '--on-page']: onCartPage,
        })}
      >
        {onCartPage ? (
          <>
            <button type="button" onClick={() => history.goBack()} className={styles.header__back}>
              {'<'} Geri
            </button>
            <h1 className={styles.header__label}>YEMEK SEPETİM</h1>
          </>
        ) : (
          <Link to="/sepet" className={cn(styles.header__label, styles.header__label + '--link')}>
            YEMEK SEPETİM
          </Link>
        )}
      </header>
      <article className={styles.address} id="current-address">
        Şişli (Esentepe Mah. - Plazalar.)
      </article>
      <article
        className={cn(styles.content__container, {
          [styles.content__container + '--on-page']: onCartPage,
        })}
        id="cart-content"
      >
        <img src="icons/basket.svg" alt="Basket Icon" width={47} height={37} />
        <span className={styles.content__empty}>Sepetiniz Henüz Boş</span>
      </article>
    </section>
  );
};
