import img1 from "../../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField'
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Login=()=>{

    const [role,setRole] = useState("Select your role *")
    const [open,setOpen] = useState (false)

    const [inputs,setInputs] = useState({
        email:"",
        hisrole: "Select your role *",
        password:"",
    })
    const [err,setError] = useState(null);
    const [clicked,setClicked] = useState(null);

    useEffect(() => {
        setInputs(prevInputs => ({
            ...prevInputs,
            hisrole: role
        }));
    }, [role]);

    const handleChange = (e) =>{
        setInputs({...inputs, [e.target.name]: e.target.value})
    }
    const passlenError= ()=>{
        setClicked(false)
        setError(false)
    }
    
    const navigate = useNavigate();

    const openMe = ()=>{
        setOpen(true)
    }
    const Cusclose = ()=>{
        setRole("Customer")
        setOpen(false)
    }
    const Selclose = ()=>{
        setRole("Seller")
        setOpen(false)
    }

    const handleSubmit = async e => {
        e.preventDefault(); 
        console.log("Submitting with inputs:", inputs);
        if (inputs.password.length < 8 && clicked) {
            setError("Your password must have at least 8 characters");
        } else {
            try {
                const response = await axios.post("/api/user/login", inputs);
                console.log("User logged in successfully");
                if(role==="Customer"){
                    navigate('/');
                    try {
                        const response = await axios.get("/api/user/getcustomer", {
                            params: { cusemail: inputs.email }
                        });
                        localStorage.setItem('cus_name', response.data); 
                    } catch (error) {
                        console.error('Error fetching customer name:', error);
                    }
                }else if(role==="Seller"){
                    navigate('/dashboard');
                    try {
                        const response = await axios.get("/api/user/getseller", {
                            params: { selemail: inputs.email }
                        });
                        localStorage.setItem('sel_name', response.data); 
                    } catch (error) {
                        console.error('Error fetching customer name:', error);
                    }
                }else{
                    navigate('/areulost')
                }
            } catch (error) {
                console.log("Error!!", error);
                if (error.response) {
                    console.log("Error Response:", error.response);
                    setError("An error occurred while logging in.");
                } else if (error.request) {
                    // Request was made but no response received
                    console.log("Error Request:", error.request);
                    setError("No response received from the server.");
                } else {
                    // Something happened in setting up the request
                    console.log("Error Message:", error.message);
                    setError("Error in request setup.");
                }
            }
        }     
    }
    

    return(
        <section className='section signin'>
            <div className="shape-bottom">
                
                <div className="container">
                    <div className="card shadow box">
                        <div className="text-center">
                            <img src={img1} alt="logo"/>
                            <p className="mb-0">SHOPILY</p>
                        </div>

                        <form className="mt-3" onSubmit={handleSubmit}>
                            <h2> Sign In</h2>

                            <div className="form-group">
                                <TextField id='standard-basic' label='Email' type='email' required varient='standard' className="input-box" name="email" onChange={handleChange}/>
                            </div>
                            <div className="form-group select">
                                <span className="selectme" onClick={()=>openMe()}>{role}</span>
                                {
                                    open? 
                                        <div className="popup">
                                            <ul className="list list-inline">
                                                <li onClick={()=>Cusclose()}>Customer</li>
                                                <li onClick={()=>Selclose()}>Seller</li>
                                            </ul>
                                        </div>
                                    :<></>
                                }
                            </div>
                            <div className="form-group">
                                <TextField id='standard-basic' label='Password' type='password' required varient='standard' className="input-box" name="password" onClick={passlenError} onChange={handleChange}/>
                            </div>

                            <Link to='#'>Forgot Password?</Link>
                            
                            <Button type="submit" className="w-100" onClick={()=>setClicked(true)}>Sign In</Button>
                            {
                                clicked ===true && err ? <p className="text-danger">{err}</p> :""
                            }
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