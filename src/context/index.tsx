import { createContext, Dispatch, PropsWithChildren, useContext, useReducer } from 'react';

import { cartReducer } from './reducers';
import { CartAction, CartState } from './types';

export { CartActionTypes } from './types';

const initialCartState: CartState = {
  restaurant: null,
  address: null,
  items: [],
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
  const [state, dispatch] = useReducer(cartReducer, initialCartState);
  return <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>{children}</CartContext.Provider>;
};
