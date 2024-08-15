import img1 from "../../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

const OTPverificationSel =()=>{

    const [otp,setOtp] = useState(new Array(4).fill(""))
    const [err,setErr] = useState(null)

    const handleChange=(e, index)=>{
        if (isNaN(e.target.value)) return false
        setOtp([...otp.map((data,ind)=>(ind === index? e.target.value:data))])

        //Move the cursor automatically to the next sibling if amnextSibling exists
        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
        }
    }

    const navigate = useNavigate();

    const selemail = localStorage.getItem('selemail')
    const sendme = { otp: otp.join(''), selemail };

    const handleSubmit=async e=>{
        e.preventDefault() 
        console.log(`OTP code: ${otp} `)
        try{
            await axios.post('/api/user/create/otpconform/seller',sendme)
            console.log("Registration successful")
            navigate('/login')
        }catch(error){
            console.log("Error!!",error);
            setErr(error.response?.data?.message || "An error occurred");
        }
    }

    const resendotp = async e=>{
        try{
            await axios.post('/api/user/create/otpconform/seller/resend')
            console.log("Resent")
        }catch(error){
            console.log("Error!!",error);
            setErr(error.response?.data?.message || "An error occurred");
        }
    }

     return(
        <section className='section signin otp'>
            <div className="shape-bottom">
                
                <div className="container">
                    <div className="card shadow box">
                        <div className="text-center">
                            <img src={img1} alt="logo"/>
                            <p className="mb-0">SHOPILY</p>
                        </div>

                        <form className="mt-3 form" onSubmit={handleSubmit}>
                                <h2> Enter Your OTP</h2>
                                <span className="mailsection">
                                    <span className="description">We sent you an OTP. Plz check your mail </span>
                                    <b>{selemail}</b>
                                </span>
                                <div className="otpbox">
                                    {
                                        otp.map((data,i)=>{
                                            return <input key={i} id='standard-basic' value={data} maxLength={1} required  className="input-box" onChange={(e)=>handleChange(e,i)}/>
                                        })
                                    }
                                </div>

                                <span className="description des">Didn't get the message? Check spam section, or </span>
                                <Link to='#' onClick={resendotp}>Resend email</Link>
                            
                            <Button type="submit" className="w-100">Conform</Button>
                            {err && <span className="error">{JSON.stringify(err)}</span>}
                        </form>
                    </div>
                </div>
            </div>

        </section>
     )
}
export default OTPverificationSel;