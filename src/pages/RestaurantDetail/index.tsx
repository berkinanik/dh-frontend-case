import { CartSummary } from 'components/CartSummary';
import { RestaurantHeader } from 'components/RestaurantHeader';
import { Wrapper } from 'layouts/Wrapper';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail: React.FC = () => {
  return (
    <Wrapper id="restaurant-detail-wrapper" className={styles.container}>
      <CartSummary className={styles.cart} />
      <section id="restaurant-detail">
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
      </section>
    </Wrapper>
  );
};
