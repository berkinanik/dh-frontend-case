import { CartSummary } from 'components/CartSummary';
import { Wrapper } from 'layouts/Wrapper';

import styles from './RestaurantDetail.module.scss';

export const RestaurantDetail: React.FC = () => {
  return (
    <Wrapper id="restaurant-detail-wrapper" className={styles.container}>
      <CartSummary className={styles.cart} />
      <div style={{ height: '2000px' }}>RestaurantDetail</div>
    </Wrapper>
  );
};
