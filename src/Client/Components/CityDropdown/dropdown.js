//import { ListItemAvatar, ListItemButton } from '@mui/material';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa6"
import Dialog from '@mui/material/Dialog';
import { IoSearch } from "react-icons/io5"
import { MdClose } from 'react-icons/md';
import React, { useContext, useEffect, useState } from 'react';
//import { MyContext } from '../../App';
import {cityList} from "./cities.js";

const CityDropdown=()=>{

    const [isOpenModal, setisOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [city,setCity] = useState({city:""});

    const filterList = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCitySelect = (selectedCity) => {
        setCity({ city: selectedCity });
        setisOpenModal(false); 
    };

    const filteredCityItems = cityList
    .filter((city) => city[2].toLowerCase().includes(searchTerm.toLowerCase()))
    .map((filteredCity, index) => (
        <li key={index}>
            <Button onClick={() => handleCitySelect(filteredCity[2])} name="city">
                {filteredCity[2]}
            </Button>
        </li>
    ));

    
    console.log(city)

    return(
        <div>
            <Button className="cityDropdown" onClick={()=>setisOpenModal(true)}>
                <div className="info">
                    <span className='label'>Your Location</span>
                    <span className='name'>{city.city || 'Click here'}</span>
                    
                </div>
                <span className='ml-auto'><FaAngleDown/></span>
            </Button>

            <Dialog open={isOpenModal} onClose={()=>setisOpenModal(false)} className='location'>
                <h3>Select your area</h3>
                <p>Enter your address. We can find your area</p>
                <Button className='close_' onClick={()=>setisOpenModal(false)}><MdClose/></Button>
                <div className="headersearch w-100">
                    <input type="text" placeholder="Search your area" onClick={filterList}></input>
                    <Button><IoSearch/></Button>
                </div>
                <ul className='locationlist mt-3'>
                    {filteredCityItems}
                </ul>
            </Dialog>
        </div>
    )
}

export default CityDropdown;