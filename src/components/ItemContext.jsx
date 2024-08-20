import f1 from '../assets/f1.png'
import f3 from '../assets/f3.png'
import f4 from '../assets/f4.png'
import m1 from '../assets/m1.png'
import m3 from '../assets/m3.png'
import m5 from '../assets/m5.png'
import { createContext, useState, useReducer } from "react";
import { CartReducer, actionTypes, initialState } from './CartReducer';

export const ItemContext = createContext();

export const ItemProvider = ({children}) => {

  const [state, dispatch] = useReducer(CartReducer, initialState);

  const [data] = useState (
      [
        {
          id: 1,
          name: 'f1 shoe',
          image: f1,
          category: 'women',
          price: 100,
          url: "/f1.glb",
          fov: 10,
          pos: 50
        },
        {
          id: 2,
          name: 'f3 shoe',
          image: f3,
          category: 'women',
          price: 150,
          url: "/f3.glb",
          fov: 10,
          pos: 50
        },
        {
          id: 3,
          name: 'f4 shoe',
          image: f4,
          category: 'women',
          price: 120,
          url: "/f4.glb",
          fov: 10,
          pos: 50
        },
        {
          id: 4,
          name: 'm1 shoe',
          image: m1,
          category: 'men',
          price: 200,
          pos: 600,
          url: "/m1.glb",
          fov: 50,
          pos: 600
        },
        {
          id: 5,
          name: 'm3 shoe',
          image: m3,
          category: 'men',
          price: 115,
          url: "/m3.glb",
          fov: 2,
          pos: 100
        },
        {
          id: 6,
          name: 'm5 shoe',
          image: m5,
          category: 'men',
          price: 50,
          url: "/m5.glb",
          fov: 10,
          pos: 0.5
        }
    ]
  )

  const addToCart = (item, qty, size) => {
    dispatch({ type: actionTypes.ADD_TO_CART, payload: { item, qty, size } });
  };

  const removeFromCart = (id, size) => {
    dispatch({ type: actionTypes.REMOVE_FROM_CART, payload: { id, size } });
  };

  const updateCartItem = (id, size, qty) => {
    dispatch({ type: actionTypes.UPDATE_CART_ITEM, payload: { id, size, qty } });
  };

  const clearCart = () => {
    dispatch({ type: actionTypes.CLEAR_CART });
  };

  return (
    <ItemContext.Provider value={{data, cart: state.cart, addToCart, removeFromCart, updateCartItem, clearCart }}>
      {children}
    </ItemContext.Provider>
  )
}