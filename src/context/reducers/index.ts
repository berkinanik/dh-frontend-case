import { CartActionTypes, CartState, CartAction } from 'context/types';

export const cartReducer = (state: CartState, action: CartAction): CartState => {
  let cartItems = state.items;
  let cartTotal = state.cartTotal;
  switch (action.type) {
    case CartActionTypes.ADD_ITEM:
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.payload.id) {
          cartItems[i].amount += action.payload.amount;
          cartTotal += action.payload.amount * cartItems[i].price;
          return {
            ...state,
            items: cartItems,
            cartTotal,
          };
        }
      }
      cartItems.push(action.payload);
      cartTotal += action.payload.amount * action.payload.price;
      return {
        ...state,
        items: cartItems,
        cartTotal,
      };
    case CartActionTypes.REMOVE_ITEM:
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.payload.id) {
          const newAmount = cartItems[i].amount - action.payload.amount;
          if (newAmount > 0) {
            cartItems[i].amount = newAmount;
            cartTotal -= action.payload.amount * cartItems[i].price;
          } else {
            cartTotal -= action.payload.amount * cartItems[i].price;
            cartItems = cartItems.filter((item) => item.id !== action.payload.id);
          }
          return {
            ...state,
            items: cartItems,
            cartTotal,
          };
        }
      }
      return state;
    case CartActionTypes.REMOVE_ITEM_COMPLETELY:
      for (let i = 0; i < cartItems.length; i++) {
        if (cartItems[i].id === action.payload.id) {
          cartTotal -= cartItems[i].amount * cartItems[i].price;
          cartItems = cartItems.filter((item) => item.id !== action.payload.id);
          return {
            ...state,
            items: cartItems,
            cartTotal,
          };
        }
      }
      return state;
    case CartActionTypes.SET_INITIAL_RESTAURANT_DATA:
      return {
        ...state,
        restaurant: action.payload.restaurant,
        address: action.payload.address,
      };
    default:
      return state;
  }
};
