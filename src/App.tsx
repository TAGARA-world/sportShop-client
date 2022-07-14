import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// Components
import Home from "./components/Home/Home";
import Login from "./routes/Login";
import Details from "./components/Details/Details";
import Cart from "./components/Cart/Cart";
import Subcategory from './components/Subcategory/Subcategory'
import Products from "./components/Products/Products";
import UserProfile from "./routes/UserProfile";
import About from "./components/About/About";
import Favorites from "./components/Favorites/Favorites";
import HomeAdmin from "./components/Admin/home/HomeAdmin";
import AddProduct from "./components/Admin/Forms/AddProduct";
import Purchase from "./components/Purchase/Purchase";
import EditProduct from "./components/Admin/Forms/CreateProduct";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/user/profile" element={<UserProfile />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route path="/purchase" element={<Purchase/>} />

        <Route path='/:category' element={<Subcategory/>} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Details />} />

        <Route path="/about" element={<About />} />


        {/* ADMIN */}
        <Route path="/admin" element={<HomeAdmin />} />
        <Route path='/admin/addProduct' element={<AddProduct />} />
        <Route path="/admin/editProduct" element={<EditProduct />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
