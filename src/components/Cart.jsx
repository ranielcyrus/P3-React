import React, { useContext, useState, useEffect } from 'react';
import Navbar from './Navbar';
import { ItemContext } from './ItemContext';
import {useNavigate} from 'react-router-dom';
import './Cart.css'

const Cart = () => {
  const navigate = useNavigate();
  const [payment, setPayment] = useState(0);
  const { cart, removeFromCart, updateCartItem, clearCart } = useContext(ItemContext);

  const handleQuantityChange = (id, size, newQty) => {
    if (newQty <= 0) {
      alert('Quantity must be greater than 0');
    } else {
      updateCartItem(id, size, newQty);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  const handleGoBack = () => {
    navigate(-1)
  }

  const handlePayment = () => {
    if(payment===0){
      alert('no payment detected!')
    } else if(totalPrice>payment) {
      alert('insufficient funds!')
    } else {
      const change = payment - totalPrice;
      alert(`Order Success! your change is ${change}`);
      clearCart(); 
    }
  }

  return (
    <>
      <Navbar />
      <section id='cart-section'>
        <h1>Cart</h1>
        <div className='cart-wrapper'>
          <div className='cart-content'>
            {cart.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : 
            (
              <div>
                <button className='cart-buttons' onClick={handleGoBack}>Go Back</button>
                <ul>
                  {cart.map((item) => (
                    <li className='cart-item' key={`${item.id}-${item.size}`}>
                      <img src={item.image} alt={item.name} id='img-cart' className='cart-details'/>
                      <p className='cart-details'>{item.name}</p>
                      <p className='cart-details'>Price: ${item.price}</p>
                      <p className='cart-details'>Size: {item.size}</p>
                      <label className='cart-details' id='qty-cart'>Quantity: 
                        <p className='qty-detail' onClick={() => handleQuantityChange(item.id, item.size, item.qty - 1)}>-</p>
                        <p className='qty-detail'>{item.qty}</p>
                        <p className='qty-detail'onClick={() => handleQuantityChange(item.id, item.size, item.qty + 1)}>+</p>
                      </label>
                      <button className='cart-buttons' onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
                    </li>
                  ))}
                </ul>

                <div className='totalprice-payment-section'>
                  <div className='price-clear'>
                    <h3>Total Price: ${totalPrice.toFixed(2)}</h3> {/* Display total price */}
                    <button className='cart-buttons' onClick={clearCart}>Clear Cart</button>
                  </div>
                  <div className='payment'>
                    <input id='payment-input' type="text" placeholder='Enter Payment'onChange={(e)=> setPayment(e.target.value)}/>
                    <button className='cart-buttons' onClick={handlePayment}>Payment</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;