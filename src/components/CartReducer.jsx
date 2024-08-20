export const actionTypes = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  CLEAR_CART: 'CLEAR_CART',
};

export const initialState = {
  cart: []
};

export const CartReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      const { item, qty, size } = action.payload;
      const existingItem = state.cart.find(cartItem => cartItem.id === item.id && cartItem.size === size);

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map(cartItem =>
            cartItem.id === item.id && cartItem.size === size
              ? { ...cartItem, qty: cartItem.qty + qty }
              : cartItem
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...item, qty, size }]
        };
      }
    }

    case actionTypes.REMOVE_FROM_CART: {
      const { id, size } = action.payload;
      return {
        ...state,
        cart: state.cart.filter(cartItem => !(cartItem.id === id && cartItem.size === size))
      };
    }

    case actionTypes.UPDATE_CART_ITEM: {
      const { id, size, qty } = action.payload;
      return {
        ...state,
        cart: state.cart.map(cartItem =>
          cartItem.id === id && cartItem.size === size
            ? { ...cartItem, qty }
            : cartItem
        )
      };
    }

    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: []
      };

    default:
      return state;
  }
};