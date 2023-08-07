import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, selectedProduct } from '../../redux/actions/ProductsAtions';
import { Button, Card, CardActionArea, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import axios from 'axios';
import Productinfo from './Productinfo';

const Product = () => {
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image } = product;
  const dispatch = useDispatch();
  const theme = useTheme();
  const isExtraSmall = useMediaQuery(theme.breakpoints.down('xs'));

  const fetchProduct = async() => {
    
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      // For example, fetch product details based on the 'productId'
      dispatch(selectedProduct(response.data));
    } catch (err) {
      console.log("Err: ", err);
    };
  }
  

  useEffect(() => {
    if (productId && productId !== "") {
      fetchProduct(productId);
    } else {
      dispatch(removeSelectedProduct());
    }
  }, [productId, dispatch]);

  // Show a loading or error message when there is no product to display
  if (!productId || !product) {
    return <div>Loading...</div>; // or show an error message
  }

 

  return (
   
    <div style={{display:'flex'}}>
      <Card sx={{ height: '70vh', maxWidth: 500, margin: 8, display: 'flex', justifyContent: 'center', alignItems: isExtraSmall ? 'center' : 'flex-start', flexDirection: isExtraSmall ? 'column' : 'row',border:1 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="500"
            image={image}
            alt=""
          />
        </CardActionArea>
        </Card>
        <Card sx={{ height: '50vh', maxWidth: 500, margin: 8, display: 'flex', justifyContent: 'center', alignItems: isExtraSmall ? 'center' : 'flex-start', flexDirection: isExtraSmall ? 'column' : 'row',border:1 }}> <Productinfo productId={productId} /></Card>
        
    </div>
    
  );
}

export default Product;
