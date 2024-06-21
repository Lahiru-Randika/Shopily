import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Home from './Pages/Home/home.js';
import Header from './Components/Header/header';
import Footer from "./Components/Footer/footer.js";
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'

const MyContext = createContext();

function App() {

  const values={
    
  }

  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header/>
        <Routes>
          <Route path="/" exact={true} element={<Home/>}/>
        </Routes>
        <Footer/>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
