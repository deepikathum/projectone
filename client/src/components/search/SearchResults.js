import React from 'react';
import { Grid, Typography } from '@mui/material';
import './searchResults.css';


const SearchResults = ({ searchResults, filterCategory }) => {
 
  const filteredResults =
    filterCategory && searchResults
      ? searchResults.filter((product) => product.category === filterCategory)
      : searchResults;

  return (
    <div className="root">
     
      <Typography variant="h5">Search Results:</Typography>
      {filteredResults && filteredResults.length > 0 ? (
        <Grid container spacing={2} justifyContent="center">
          {filteredResults.map(({ id, title, image, price }) => (
            <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
              <div className="imageListItem">
                <img src={image} alt={title} className="image" />
                <Typography variant="subtitle1">{title}</Typography>
                <Typography variant="subtitle2">{price}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      ) : (
      <Typography variant="body1">No search results found.</Typography>
      )}
    </div>
  );
};

export default SearchResults;
