import { useContext, useEffect } from "react";
import  { MyContext } from '../../../App.js';
import img1 from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";

const Login=()=>{

    const context = useContext(MyContext)

    useEffect(()=>{
        context.setisHeadFootShow(false);
    },[])

    return(
        <section className='section signin'>
            <div className="shape-bottom">
                {/* shape here */}
                <div className="container">
                    <div className="card shadow box">
                        <div className="text-center">
                            <img src={img1} alt="logo"/>
                        </div>
                        
                        <form className="mt-3">
                            <h2> Sign In</h2>

                            <div className="form-group">
                                <TextField id='standard-basic' label='Email' type='email' required varient='standard' className="input-box"/>
                            </div>
                            <div className="form-group">
                                <TextField id='standard-basic' label='Password' type='password' required varient='standard' className="input-box"/>
                            </div>

                            <Link to='#'>Forgot Password?</Link>
                            
                            <Button className="w-100">Sign In</Button>

                            <div className="registerSection">
                                <p>Don't you have an account? </p>
                                <Link to='/register'>Register</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section> 
    )
}
 export default Login;