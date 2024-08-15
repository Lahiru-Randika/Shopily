import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo-white.png";
import img2 from "../../assets/images/logo-black.png";
import "bootstrap";
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import { IoSearch } from "react-icons/io5";
import Navigation from "./Navigation/nav.js";
import { useContext, useEffect } from "react";
import { MyContext } from "../../../App.js";
import CityDropdown from "../CityDropdown/dropdown.js";
import { CiLight } from 'react-icons/ci';
import { MdDarkMode } from 'react-icons/md';
import { useState } from "react";

const Header = () => {
    const context = useContext(MyContext);
    const [isPressed, setIsPressed] = useState(false);
    const [cusName, setCusName] = useState(null);

    const clickForLight = () => {
        if (isPressed === false) {
            setIsPressed(true);
            context.setTheme('dark');
        } else if (isPressed === true) {
            setIsPressed(false);
            context.setTheme('light');
        }
    };

    useEffect(() => {
        const name = localStorage.getItem('cus_name');
        setCusName(name);
    }, []);

    return (
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
                            {
                                isPressed === false ?
                                    <Link to={'/'}> <img src={img1} alt="logo" /></Link>
                                    :
                                    <Link to={'/'}> <img src={img2} alt="logo" /></Link>
                            }
                            <p>SHOPILY</p>
                        </div>
                        <div className="col-sm-10 part2">
                            {
                                <CityDropdown />
                            }

                            <div className="headersearch ml-3 mr-3">
                                <input type="text" placeholder="Search"></input>
                                <Button><IoSearch /></Button>
                            </div>

                            <div className="part3">
                                {
                                    isPressed === false ?
                                        <Button className="circle m-3" onClick={clickForLight}><CiLight /></Button>
                                        :
                                        <Button className="circle m-3" onClick={clickForLight}><MdDarkMode /></Button>
                                }
                                {
                                    cusName === null ? 
                                        <Link to='/login'>
                                            <Button className="circle mr-3"><FiUser /></Button>
                                        </Link>
                                    : 
                                        <Link to='/user/1'>
                                            <Button className="circle mr-3">{cusName}</Button>
                                        </Link>
                                }

                                <div className="ml-auto cartTab">
                                    <span className="price">$3.29</span>
                                    <div className="bucket">
                                        <Link to='/cart'>
                                            <Button className="circle ml-2"><IoBagOutline /></Button>
                                            <span className="count">1</span>
                                        </Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <Navigation />

        </div>
    );
};

export default Header;
