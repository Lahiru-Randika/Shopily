import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Client/Pages/Home/home.js';
import Header from './Client/Components/Header/header';
import Footer from "./Client/Components/Footer/footer.js";
import { createContext, useEffect, useState } from 'react';
// import axios from 'axios'
// import Productitem from './Components/Productitem/productitem.js';
import ProductPopup from './Client/Components/ProductPopup/productpopup.js'
import Listing from './Client/Pages/Listing/listing.js';
import SingleProduct from './Client/Pages/SingleProduct/singleproduct.js';
import Cart from './Client/Pages/Cart/cart.js';
import Login from './Client/Pages/Login/login.js';
import Register from './Client/Pages/Register/register.js';

import Dashboard from './Admin/pages/Dashboard/Dashboard.js';
import HeaderAdmin from './Admin/components/Header/Header.js';

const MyContext = createContext();

function App() {

  const [isOpenProduct, setisOpenProduct] = useState (false);
  const [isHeadFootShow, setisHeadFootShow] = useState(true);
  const [isLogin,setisLogin] = useState(false);
  const [isHeaderFooterAdmin, setisHeaderFooterAdmin] = useState(false);

  const values={
    isOpenProduct,
    setisOpenProduct,
    isHeadFootShow,
    setisHeadFootShow,
    isLogin,
    setisLogin,
    isHeaderFooterAdmin,
    setisHeaderFooterAdmin
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeadFootShow === true && <Header/> 
        }
        {
          isHeaderFooterAdmin === true && <HeaderAdmin/> 
        }
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
          <Route path="/cat/:id" exact={true} element={<Listing/>}/>
          <Route path="/product/:id" exact={true} element={<SingleProduct/>}/>
          <Route path="/cart" exact={true} element={<Cart/>}/>
          <Route path="/login" exact={true} element={<Login/>}/>
          <Route path="/register" exact={true} element={<Register/>}/>


          <Route path="/dashboard" exact={true} element={<Dashboard/>}/>
        </Routes>

        {
          isHeadFootShow === true && <Footer/>
        }
        
        {
          isOpenProduct == true && <ProductPopup/>  
        }
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
