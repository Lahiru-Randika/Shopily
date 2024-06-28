import { useContext, useEffect, useState } from "react";
import { MyContext } from '../../../App.js';
import img1 from "../../assets/images/logo.svg";
import { Link, useLocation } from "react-router-dom";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import { FcManager } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";

const Register = () => {
    const context = useContext(MyContext);
    const location = useLocation;
    const [activeTabs, setActiveTabs] = useState(0);

    useEffect(() => {
        const pathsWithoutHeaderFooter = ["/register", "/login"];
        if (pathsWithoutHeaderFooter.includes(location.pathname)) {
            context.setIsHeadFootShow(false);
        } else {
            context.setIsHeadFootShow(true);
        }
    }, [location.pathname, context])

   

    return (
        <section className='section signin register'>
            <div className="container">
                <div className="card shadow box">
                    <div className="text-center">
                        <img src={img1} alt="logo" />
                    </div>
                    <form className="mt-3">
                        <div className='customTabs'>
                            <h2>Register</h2>
                            <ul className='list list-inline'>
                                <li className='list-inline-item customer'>
                                    <Button className={`button01 ${activeTabs === 0 ? 'active' : ''}`} onClick={() => setActiveTabs(0)}>
                                        <FcManager />Customer
                                    </Button>
                                </li>
                                <li className='list-inline-item seller'>
                                    <Button className={`button02 ${activeTabs === 1 ? 'active' : ''}`} onClick={() => setActiveTabs(1)}>
                                        <FcBusinessman />Seller
                                    </Button>
                                </li>
                            </ul>

                            <div className={`tab01 ${activeTabs === 0 ? 'active' : ''}`}>
                                <div className="row d-flex">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Name' type='text' required variant='standard' className="input-box" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Phone No' type='text' required variant='standard' className="input-box" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Email' type='email' required variant='standard' className="input-box" />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Address' type='text' required variant='standard' className="input-box" />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Password' type='password' required variant='standard' className="input-box" />
                                </div>
                                <Link to='#'>Terms and Conditions</Link>
                                <Button className="w-100">Register</Button>
                                <div className="registerSection">
                                    <p>Already have an account?</p>
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>

                            <div className={`tab02 ${activeTabs === 1 ? 'active' : ''}`}>
                                <div className="row d-flex">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Name' type='text' required variant='standard' className="input-box" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Phone No' type='text' required variant='standard' className="input-box" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Email' type='email' required variant='standard' className="input-box" />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Address' type='text' required variant='standard' className="input-box" />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Shop Type' type='text' required variant='standard' className="input-box" />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Password' type='password' required variant='standard' className="input-box" />
                                
                                </div>
                                <Link to='#'>Terms and Conditions</Link>
                                <Button className="w-100">Register</Button>
                                <div className="registerSection">
                                    <p>Already have an account?</p>
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Register;
