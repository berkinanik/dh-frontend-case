import { CartSummary } from 'components/CartSummary';
import { ProductItem } from 'components/Product/ProductItem';
import { ProductList } from 'components/Product/ProductList';
import { RestaurantHeader } from 'components/RestaurantHeader';
import { Wrapper } from 'layouts/Wrapper';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail: React.FC = () => {
  return (
    <Wrapper id="restaurant-detail-wrapper" className={styles.container}>
      <CartSummary className={styles.cart} />
      <section className={styles.detail} id="restaurant-detail">
        <RestaurantHeader
          name="Restaurant Name Restaurant Name Restaurant Name Restaurant Name"
          address="Mustafa Kemal Paşa Mah."
          minimumPrice={50}
          deliveryTime={30}
          speed={8.7}
          flavour={8.7}
          serving={8.7}
          tags={['İstanbul Yemek Siparişi', 'Burger']}
        />
        <ProductList title="Burgerler">
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
        </ProductList>
        <ProductList title="Burgerler">
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
          <ProductItem
            title="Hamburger"
            description="Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)"
            price={12.5}
          />
        </ProductList>
      </section>
    </Wrapper>
  );
};
