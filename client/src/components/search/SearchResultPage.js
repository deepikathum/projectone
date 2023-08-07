import { useSelector } from 'react-redux';
import SearchResults from './SearchResults';
import { useState } from 'react';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const SearchResultPage = () => {
  const searchResults = useSelector((state) => state.search.searchResults);
  const categories = useSelector((state) => state.search.categories);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    const minValue = e.target.value;
    // Ensure the input is a valid number or an empty string
    if (minValue === '' || !isNaN(minValue)) {
      setMinPrice(minValue);
    }
  };

  const handleMaxPriceChange = (e) => {
    const maxValue = e.target.value;
    // Ensure the input is a valid number or an empty string
    if (maxValue === '' || !isNaN(maxValue)) {
      setMaxPrice(maxValue);
    }
  };

  const filterProductsByPrice = (products) => {
    if (!minPrice && !maxPrice) return products;

    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    return products.filter((product) => {
      const productPrice = parseFloat(product.price);
      return (isNaN(min) || productPrice >= min) && (isNaN(max) || productPrice <= max);
    });
  };

  const filteredSearchResults = filterProductsByPrice(
    selectedCategory
      ? searchResults.filter((product) => product.category === selectedCategory)
      : searchResults
  );

  
return (
  <div>
    {/*<h3>Categories:</h3>
    <FormControl fullWidth variant="outlined">
      <InputLabel>Select Category</InputLabel>
      <Select
        value={selectedCategory}
        onChange={handleCategoryChange}
        label="Select Category"
>*/}
        {/*<MenuItem value="">All Categories</MenuItem>*/}
        {searchResults.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
     
   {/*</FormControl>

    <div>
      <TextField
        type="number"
        value={minPrice}
        onChange={handleMinPriceChange}
        label="Min Price"
        variant="outlined"
        fullWidth
      />
      <TextField
        type="number"
        value={maxPrice}
        onChange={handleMaxPriceChange}
        label="Max Price"
        variant="outlined"
        fullWidth
      />
        </div>*/}

    <SearchResults searchResults={filteredSearchResults} />
   
  </div>
  
);
};

export default SearchResultPage;
