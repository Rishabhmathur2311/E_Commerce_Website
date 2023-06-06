import React from "react";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products"
import Cart from "./Cart";
import SingleProduct from "./SingleProduct";
import ErrorPage from  "./ErrorPage";
import Header from "./components/Header";
import {GlobalStyle} from "./GlobalStyle";

import { BrowserRouter as Router,  Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="*" element={<ErrorPage />} />
        </Routes>
        <hr />
        
      </Router>
      
  );
};

export default App;
