import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo.svg";
import "bootstrap"
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi'
import { IoBagOutline } from 'react-icons/io5'
import { IoSearch } from "react-icons/io5"
import { MdOutlineMenu } from 'react-icons/md'

const Header=()=>{

    return(
        <div className="headerWrapper">
            <div className="top-strip bg-blue">
                <div className="container">
                    <p className="mb-0 mt-0 text-center">Your Business <b>PARTNER</b></p>
                </div>
            </div>
            <header className="header">
                <div className="container-fluid">
                    <div className="row">
                        <div className="adminWrapper container-fluid">
                            <div className="logoWrapper logoWrapperAdmin col-sm-2">
                                <Link to={'/'}> <img src={img1} alt="logo"/></Link>
                            </div>

                            <div className="col-x5-3 d-flex align-items-center">
                                <Button className="rounded-circle">
                                    <MdOutlineMenu/>
                                </Button>
                            </div>
                            <div className="col-sm-10 part2"> 
                                <div className="headersearch ml-3 mr-3 admin">
                                    <input type="text" placeholder="Search"></input>
                                    <Button><IoSearch/></Button>
                                </div>

                                <div className="part3 admin">
                                    <Link to='/login'>
                                        <Button className="circle mr-3"><FiUser/></Button>
                                    </Link>

                                    <div className="ml-auto cartTab">
                                        
                                        <div className="bucket">
                                            <Link to='/cart'>
                                                <Button className="circle ml-2"><IoBagOutline/></Button>
                                                <span className="count">1</span>
                                            </Link>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>
                </div>
            </header> 
        </div> 
    )
}
 export default Header;