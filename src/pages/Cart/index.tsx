import { CartSummary } from 'components/CartSummary';
import { Wrapper } from 'layouts/Wrapper';

export const Cart: React.FC = () => {
  return (
    <Wrapper>
      <CartSummary onCartPage />
    </Wrapper>
  );
};
