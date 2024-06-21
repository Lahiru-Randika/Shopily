import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo.svg";
import "bootstrap"
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi'
import { IoBagOutline } from 'react-icons/io5'
import { IoSearch } from "react-icons/io5"
import Navigation from "./Navigation/nav.js";
import { useContext } from "react";
import { MyContext } from "../../App.js";
import CityDropdown from "../CityDropdown/dropdown.js";

const Header=()=>{

const context = useContext(MyContext);

    return(
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">We are offering <b>OFFERS</b></p>
                </div>
            </div>

            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="logoWrapper col-sm-2">
                            <Link to={'/'}> <img src={img1} alt="logo"/></Link>
                        </div>
                        <div className="col-sm-10 part2">
                            {
                                <CityDropdown/>
                            }
                            
                            <div className="headersearch ml-3 mr-3">
                                <input type="text" placeholder="Search"></input>
                                <Button><IoSearch/></Button>
                            </div>

                            <div className="part3">
                                <Button className="circle mr-3"><FiUser/></Button>
                                <div className="ml-auto cartTab">
                                    <span className="price">$3.29</span>
                                    <div className="bucket">
                                        <Button className="circle ml-2"><IoBagOutline/></Button>
                                        <span className="count">1</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header> 

            <Navigation/>

        </div> 
    )
}
 export default Header;