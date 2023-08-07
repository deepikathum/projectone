// components/Cart.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const [cartItemsData, setCartItemsData] = useState([]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

 

  const fetchCartItemsData = async () => {
    try {
      // Replace 'your-third-party-api-url' with the actual URL of the third-party API
      const response = await fetch('https://fakestoreapi.com/carts');
      const data = await response.json();
      setCartItemsData(data);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };
  useEffect(() => {
    // Fetch cart items from the third-party API when the component mounts
    fetchCartItemsData();
  }, []);

  const handleAddToCart = (item) => {
    // Dispatch the addToCart action to add the item to the Redux store
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    // Dispatch the removeFromCart action to remove the item from the Redux store
    dispatch(removeFromCart(itemId));
  };

  return (
    <div>
      <h2>Cart</h2>
      {cartItemsData.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItemsData.map((item) => (
            <li key={item.id}>
              {item.name} - ${item.price}
              {cartItems.some((cartItem) => cartItem.id === item.id) ? (
                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              ) : (
                <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
