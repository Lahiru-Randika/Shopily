import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import img1 from "../../assets/images/thumbnail-1.jpg";
import axios from 'axios';

const UserprofileSidebar = () => {
    const name = localStorage.getItem('cus_name');
    const email = localStorage.getItem('cusemail');
    const [cusphone, setCusphone] = useState("");

    const handleClick = async (e) => {
        console.log("Logout is pressed");
    };
    
    useEffect(() => {
        const fetchCustomerPhone = async () => {
            try {
                const response = await axios.get("/api/user/getcustomerphone", {
                    params: { cusemail: email }
                });
                console.log(response.data)
                setCusphone(response.data);
            } catch (error) {
                console.error('Error fetching customer phone number:', error);
            }
        };

        if (email) { 
            fetchCustomerPhone();
        }
    }, [email]);

    return (
        <div className='dashSide dashSideUser'>
            <ul>
                <li className='imgli'>
                    <Button className={`w-100 d-flex align-items-center justify-content-center`}>
                        <img src={img1} className='userimage' alt="User" />
                    </Button>
                </li>
                <li>
                    <Button className={`w-100`}>
                        <span>{name}</span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100`}>
                        <span>{email}</span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100`}>
                        <span>0{cusphone}</span>
                    </Button>
                </li>
                <Link to='#' onClick={() => handleClick()}>
                    <li className='logOutSection'>
                        <div className='logOut'>
                            <Button type="submit">LOGOUT</Button>
                        </div>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default UserprofileSidebar;
