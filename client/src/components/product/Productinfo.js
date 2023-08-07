import { Button, Card, CardContent, Typography } from '@mui/material'
import axios from 'axios';
import React from 'react'
import { useSelector  , useDispatch} from 'react-redux';
import { addToCart, setCartItems } from '../../redux/actions/cartActions';
import { useParams } from 'react-router-dom';

const Productinfo = () => { 
    const { productId } = useParams();
    const dispatch = useDispatch()
    const product = useSelector((state) => state.product);
    const cartItems = useSelector((state) => state.cart.cartItems);

    const {  title, price, category, description } = product;

    const cartHandler = async (item) => {
        try {
          
          const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
          const selectedProduct = response.data;
          dispatch(addToCart(selectedProduct));
          console.log(selectedProduct)
        } catch (err) {
          console.log('Error fetching cart items:', err);
        }
      };
  return (
    <div>
    <CardContent>
    <Typography gutterBottom variant="h4" component="div">
      {title}
    </Typography>
    <Typography variant="body2" color="text.primary">
      ${price}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {category}
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {description}
    </Typography>
    <Button variant="contained" onClick={() => cartHandler(product )}> Add To Cart</Button>
   {/* Since the product details (title, price, category, description, etc.) 
      are required to add the product to the cart, we pass the product object to the
     cartHandler function.*/}
  </CardContent>
</div>
  )
}

export default Productinfo