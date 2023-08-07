import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/ProductsAtions';

const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  

  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      dispatch(setProducts(response.data));
      console.log(response.data);
    } catch (err) {
      console.log("Err: ", err);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 3,
            width: 300,
            height: 300,
            border: 2
          },
        }}
      >
        { products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={product.image} alt={product.title} style={{ width: '100%', height: '100%' }} />
            </Link>
          </div>
        ))}
      </Box>
    </div>
  )
}

export default Home;
