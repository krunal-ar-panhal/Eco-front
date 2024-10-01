import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Collection from "./Pages/Collection";
import Order from "./Pages/Order";
import PlaceOrder from "./Pages/PlaceOrder";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Product from "./Pages/Product";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Searchbox from "./Components/Searchbox";
import {Toaster} from 'react-hot-toast'

const App = () => {
  return (
    <BrowserRouter>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Toaster position="bottom-right" />
        <Navbar/>
        <Searchbox/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/order" element={<Order />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/product/:productId" element={<Product />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
