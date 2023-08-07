import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { useSelector } from "react-redux";

const CategoryProducts = () => {
 
  const { category } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products based on the selected category
    const apiUrl = `https://fakestoreapi.com/products?category=${category}`;
    axios
      .get(apiUrl)
      .then((response) => {
        console.log("API response:", response.data); // Log the API response for debugging
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("API error:", error); // Log the error for debugging
      });
  }, [category]);

  return (
    <div>
      <h2>Products in {category} category:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id} ${product.category}`}>
              <img src={product.image} alt={product.title} />
              {product.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryProducts;
