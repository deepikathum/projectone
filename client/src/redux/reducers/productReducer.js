import { ActionTypes } from "../constants/action-types";

const intialState = {
    products:[],
    isAuthenticated: false
}

export const productsReducer = (state = intialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return{...state, products: payload}
            default:
                return state;
           
    }
}

export const selectedProductReducer = (state = {}, {type, payload})=>{
    console.log(type);
    switch (type) {
        case ActionTypes.SELECTED_PRODUCT:
            return{...state, ...payload}
         case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return{};   
            default:
                return state;
           
    }
}

export const authReducer = (state = intialState, {type, payload})=>{
    switch (type) {
        case ActionTypes.SIGNIN_SUCCESS:
            return{
                isAuthenticated:true,
            }  
        case ActionTypes.SIGNOUT_SUCCESS:
            return{
                isAuthenticated: false,
            }
        case ActionTypes.SET_AUTHENTICATION:
            return{
                isAuthenticated: payload,
            }
    
        default:
            return state
        }
}