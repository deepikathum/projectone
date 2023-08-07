import { ActionTypes } from "../constants/action-types";

// src/redux/reducers.js
const initialState = {
    
    cartItems: [], // Make sure to initialize as an empty array here
  };
  
   export const cartReducer = (state = initialState,{type, payload}) => {
    // ... rest of the reducer code
  
  
    switch (type) {
     /* case ActionTypes.SET_PRODUCTS:
        return {
          ...state,
          products: payload,
        };*/
        
          case ActionTypes.ADD_TO_CART:
            const existingProductIndex = state.cartItems.findIndex(
              (item) => item.id === payload.id
            );
            if (existingProductIndex !== -1) {
              //If the element is not found, it returns -1. So, existingProductIndex !== -1 checks
              // if the product already exists in the cartItems array. If the product is not found,
              // existingProductIndex will be -1, and the condition will evaluate to true.
              // If the product already exists in the cart, update its quantity
              const updatedCartItems = state.cartItems.map((item, index) =>
                index === existingProductIndex
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              );
              return {  
                ...state,
                cartItems: updatedCartItems,
              };
            } else {
              // If the product doesn't exist in the cart, add it with quantity = 1
              return {
                ...state,
                cartItems: [...state.cartItems, { ...payload, quantity: 1 }],
              };
            }
      
      /*case ActionTypes.SET_CART_ITEMS:
        return {
          ...state,
          cartItems: payload,
        };*/
        case ActionTypes.INCREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
        
      };

    case ActionTypes.DECREMENT_ITEM_QUANTITY:
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === payload && item.quantity > 0
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };

        
      default:
        return state;
    }
  };


   
      
  

  