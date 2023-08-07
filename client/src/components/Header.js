import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setSearchResults, setCategories } from '../redux/actions/searchActions';
import { Drawer, MenuItem, Select } from '@mui/material';
import Categories from './categories/Categories';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Header = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const categories = useSelector((state) => state.search.categories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  
  const handleSearch = async() => {
    // Construct the API URL with the searchTerm and selectedCategory
    const apiUrl =  `https://fakestoreapi.com/products/products?search=${searchTerm}`
  
    axios
      .get(apiUrl)
      .then((response) => {
        let searchResults = response.data;
        dispatch(setSearchResults(searchResults));
      })
      
        // Sort the search results based on the selected sorting option
       /* if (sortOption === 'alphabetical') {
          searchResults.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortOption === 'price-asc') {
          searchResults.sort((a, b) => a.price - b.price);
        } else if (sortOption === 'price-desc') {
          searchResults.sort((a, b) => b.price - a.price);
        }
  
        const categories = [...new Set(searchResults.map((product) => product.category))];
        dispatch(setCategories(categories));
        dispatch(setSearchResults(searchResults));
        navigate('/search');
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });*/
  };

// Function to handle opening the Categories drawer
const handleDrawerOpen = () => {
  setIsDrawerOpen(true);
};

// Function to handle closing the Categories drawer
const handleDrawerClose = () => {
  setIsDrawerOpen(false);
};

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
            <MenuIcon />
          </IconButton>

          {/* Categories Drawer */}
          <Drawer
            anchor="left"
            open={isDrawerOpen}
            onClose={handleDrawerClose}
          >
            <Categories />
          </Drawer>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SHOPPING
          </Typography>
          <Search>
  <SearchIconWrapper>
    <SearchIcon />
  </SearchIconWrapper>
  <StyledInputBase
    placeholder="Search…"
    inputProps={{ 'aria-label': 'search' }}
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
  {/*<Select // or RadioGroup
    value={sortOption}
    onChange={(e) => setSortOption(e.target.value)}
    label="Sort by"
  >
    <MenuItem value="">None</MenuItem>
    <MenuItem value="alphabetical">Alphabetical</MenuItem>
    <MenuItem value="price-asc">Price (Low to High)</MenuItem>
  <MenuItem value="price-desc">Price (High to Low)</MenuItem>
  </Select> */}
  <Button color="inherit" onClick={handleSearch}>
    Search
  </Button>
</Search>
<Link to="/cart">
  <div className="cart">
     <span>{cartItems.reduce((a, c) => a + c.quantity, 0)}</span>{' '}
  </div>
 <AddShoppingCartIcon />
  </Link>
  <Button color="inherit">{isAuthenticated ? 'Sign Out' : 'Sign In'}</Button>
  
    </Toolbar>
   </AppBar>
</Box>
  );
};

export default Header;