import { Cart } from 'components/Cart';
import { Product } from 'components/Product';
import { RestaurantHeader } from 'components/RestaurantHeader';
import { Wrapper } from 'layouts/Wrapper';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail: React.FC = () => {
  return (
    <Wrapper id="restaurant-detail-wrapper" className={styles.container}>
      <Cart className={styles.cart} />
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
        <Product.List title="Burgerler">
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
        </Product.List>
        <Product.List title="Burgerler">
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
          <Product
            item={{
              id: Math.random().toString(),
              name: 'Hamburger',
              description:
                'Griddle smashed köfte, cheddar peyniri, marul, domates, soğan küpleri (Burger köfteleri, orta pişmiş olarak servis edilmektedir.)',
              price: 12.5,
            }}
          />
        </Product.List>
      </section>
    </Wrapper>
  );
};
