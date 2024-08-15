import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Client/Pages/Home/home.js';
import Header from './Client/Components/Header/header';
import Footer from "./Client/Components/Footer/footer.js";
import { createContext, useEffect, useState } from 'react';
import ProductPopup from './Client/Components/ProductPopup/productpopup.js';
import Listing from './Client/Pages/Listing/listing.js';
import SingleProduct from './Client/Pages/SingleProduct/singleproduct.js';
import Cart from './Client/Pages/Cart/cart.js';
import Login from './Client/Pages/Login/login.js';
import Register from './Client/Pages/Register/register.js';
import Dashboard from './Admin/pages/Dashboard/Dashboard.js';
import HeaderAdmin from './Admin/components/Header/Header.js';
import FooterAdmin from './Admin/components/Footer/footer.js'
import P404 from './Client/Pages/404Page/404.js';
import Productdetails from './Admin/pages/ProductDetails/productdetails.js';
import ProductEdit from './Admin/pages/ProductEdit/productedit.js';
import OTPverificationCus from './Client/Pages/OTPverification/otpverificationCus.js';
import OTPverificationSel from './Client/Pages/OTPverification/otpverificationSel.js';
import UserHome from './Client/Pages/Userhome/userhome.js';

const MyContext = createContext();

function App() {
  const initialTheme = localStorage.getItem('Theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    document.body.classList.add(theme);
  }, []);

  useEffect(() => {
    document.body.classList.remove('light', 'dark');
    document.body.classList.add(theme);
    localStorage.setItem('Theme', theme);
  }, [theme]);

  const [isOpenProduct, setisOpenProduct] = useState(false);
  const [isLogin, setisLogin] = useState(false);
  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [isImgClicked, setIsImgClicked] = useState(false);

  const values = {
    isOpenProduct,
    setisOpenProduct,
    isLogin,
    setisLogin,
    isToggleSidebar,
    setIsToggleSidebar,
    theme,
    setTheme,
    isImgClicked,
    setIsImgClicked
  };

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Routes>

          <Route path="/" exact={true}
            element={<>
              <Header />
              <Home />
              <Footer />
            </>} 
          />

          <Route path="/cat/:id" exact={true}
            element={<>
              <Header />
              <Listing />
              <Footer />
            </>} 
          />

          <Route path="/product/:id" exact={true}
            element={<>
              <Header />
              <SingleProduct />
              <Footer />
            </>} 
          />

          <Route path="/user/:id" exact={true}
            element={<>
              <HeaderAdmin />
              <UserHome />
              <Footer />
            </>} 
          />

          <Route path="/cart" exact={true}
            element={<>
              <Header />
              <Cart />
              <Footer />
            </>} 
          />

          <Route path="/login" exact={true} element={<Login />} />
          <Route path="/register" exact={true} element={<Register />} />
          <Route path="/register/waitforotp/customer" exact={true} element={<OTPverificationCus/>} />
          <Route path="/register/waitforotp/seller" exact={true} element={<OTPverificationSel/>} />

          <Route path="/dashboard" exact={true}
            element={<>
              <HeaderAdmin />
              <Dashboard />
              <FooterAdmin/>
            </>} 
          />

            <Route path="/dashboard/product/details" exact={true} 
              element={<>
                <HeaderAdmin />
                <Productdetails />
                <FooterAdmin/>
              </>} 
            />

            <Route path="/dashboard/product/edit" exact={true} 
              element={<>
                <HeaderAdmin />
                <ProductEdit />
                <FooterAdmin/>
              </>} 
            />

            <Route path="/areulost" exact={true} element={<P404 />} />
        </Routes>
        {isOpenProduct && <ProductPopup />}
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export { MyContext };
