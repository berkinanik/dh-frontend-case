export interface CartState {
  restaurant: string | null;
  address: string | null;
  cartItems: {
    id: string;
    amount: number;
    name: string;
    description: string;
    price: number;
  }[];
  cartTotal: number;
}

export enum CartActionTypes {
  ADD_ITEM = 'ADD_ITEM',
  REMOVE_ITEM = 'REMOVE_ITEM',
  REMOVE_ITEM_COMPLETELY = 'REMOVE_ITEM_COMPLETELY',
  SET_INITIAL_RESTAURANT_DATA = 'SET_INITIAL_RESTAURANT_DATA',
  CLEAR_CART = 'CLEAR_CART',
}

interface AddItemAction {
  type: CartActionTypes.ADD_ITEM;
  payload: {
    id: string;
    amount: number;
    name: string;
    description: string;
    price: number;
  };
}

interface RemoveItemAction {
  type: CartActionTypes.REMOVE_ITEM;
  payload: {
    id: string;
    amount: number;
  };
}

interface RemoveItemCompletelyAction {
  type: CartActionTypes.REMOVE_ITEM_COMPLETELY;
  payload: {
    id: string;
  };
}

interface SetRestaurantDataAction {
  type: CartActionTypes.SET_INITIAL_RESTAURANT_DATA;
  payload: {
    restaurant: string;
    address: string;
  };
}

interface ClearCartAction {
  type: CartActionTypes.CLEAR_CART;
}

export type CartAction =
  | AddItemAction
  | RemoveItemAction
  | RemoveItemCompletelyAction
  | SetRestaurantDataAction
  | ClearCartAction;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const checkObjectIsValidCartState = (object: any, key?: string): object is CartState => {
  const valid = 'address' in object && 'restaurant' in object && 'cartItems' in object && 'cartTotal' in object;
  if (!valid && key) {
    localStorage.removeItem(key);
  }
  return valid;
};
