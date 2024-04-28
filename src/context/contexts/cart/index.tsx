import { createContext, Dispatch, PropsWithChildren, useContext, useEffect, useReducer } from 'react';

import { cartReducer } from 'context/reducers';
import { CartAction, CartState, checkObjectIsValidCartState } from 'context/types';

const getInitialCartStateFromStorage = (): CartState => {
  const cartState = localStorage.getItem('cartState');
  return cartState && checkObjectIsValidCartState(JSON.parse(cartState), 'cartState')
    ? JSON.parse(cartState)
    : initialCartState;
};

const initialCartState: CartState = {
  restaurant: null,
  address: null,
  cartItems: [],
  cartTotal: 0,
};

interface CartContextProps {
  cartState: CartState;
  cartDispatch: Dispatch<CartAction>;
}

const CartContext = createContext<CartContextProps>({
  cartState: initialCartState,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  cartDispatch: () => {},
});

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, getInitialCartStateFromStorage());
  useEffect(() => {
    state && localStorage.setItem('cartState', JSON.stringify(state));
  }, [state]);
  return <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>{children}</CartContext.Provider>;
};
