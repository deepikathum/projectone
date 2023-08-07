import './App.css';
import React from 'react';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signin from './components/Signin';
import Header from './components/Header';
import Product from './components/product/Product';
import { useSelector } from 'react-redux';
import Cart from './components/product/Cart';

//import SearchResults from './components/SearchResults';
import SearchResultPage from './components/search/SearchResultPage';
import Categories from '../src/components/categories/Categories';
import CategoryProducts from './components/categories/CategoryProduct';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={isAuthenticated ? <Home /> : <Navigate to="/signin" replace />}
          />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          {/* Move the Signin route inside the Routes component */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/search" element={<SearchResultPage />} />
          <Route path="/category/:category" element={<CategoryProducts/>} />
        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
