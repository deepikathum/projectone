import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined';

import { incrementItemQuantity, decrementItemQuantity } from '../../redux/actions/cartActions' 
    
const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch()

  const calculateSubtotal = () => {
    return cartItems.reduce((subtotal, item) => subtotal + item.price * item.quantity, 0);
  };
  
  const incrementhandler = (items) => {
    dispatch(incrementItemQuantity(items.id)); // Dispatch the increment action with item id
  };

  const decrementhandler = (items) => {
    dispatch(decrementItemQuantity(items.id)); // Dispatch the decrement action with item id
  };

  return (
    <div>
      <h2>Cart Items</h2>
      {cartItems.map((item ,id) => (
        <div  key={id}>
           <img className='cartlist' src={item.image} alt="" />
            
          <h3>{item.title}</h3>
          <h3>{item.category}</h3>
          <h3>{item.price}</h3>
          <AddCircleOutlineOutlinedIcon onClick={() => incrementhandler(item)} />
          
          <RemoveCircleOutlineOutlinedIcon onClick={() => decrementhandler(item)} />
          <h3>Quantity: {item.quantity}</h3>
        </div>
      ))}
      <h2>Subtotal: ${calculateSubtotal()}</h2>
    </div>
  );
};

export default Cart;
