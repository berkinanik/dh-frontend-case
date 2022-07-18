import { Cart as CartComp } from 'components/Cart';
import { Wrapper } from 'layouts/Wrapper';

export const Cart: React.FC = () => {
  return (
    <Wrapper>
      <CartComp onCartPage />
    </Wrapper>
  );
};
