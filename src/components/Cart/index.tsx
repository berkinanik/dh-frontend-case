import cn from 'classnames';
import { Link, useHistory } from 'react-router-dom';

import { Button } from 'components/Button';
import { Product } from 'components/Product';

import styles from './Cart.module.scss';

interface CartProps {
  className?: string;
  onCartPage?: boolean;
}

export const Cart: React.FC<CartProps> = ({ className, onCartPage = false }) => {
  const cartItems: { id: string; name: string; description: string; price: number }[] = [
    {
      id: 'asdf',
      name: 'Hamburger',
      description:
        'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
      price: 12.5,
    },
  ];
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
            <Button className={styles.header__back} type="button" onClick={() => history.goBack()} mode="text">
              {'<'} Geri
            </Button>
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
        className={cn(styles.content, {
          [styles.content + '--empty']: cartItems.length === 0,
          [styles.content + '--on-page']: onCartPage,
        })}
        id="cart-content"
      >
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => (
              <Product key={item.id} item={item} onCart onCartPage={onCartPage} />
            ))}
          </ul>
        ) : (
          <>
            <img src="icons/basket.svg" alt="Basket Icon" width={47} height={37} />
            <span className={styles.content__empty}>Sepetiniz Henüz Boş</span>
          </>
        )}
      </article>
    </section>
  );
};
