import { useState } from "react";
import img1 from "../../assets/images/logo-white.png";
import { Link, useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from "@mui/material/Button";
import { FcManager, FcBusinessman } from "react-icons/fc";
import axios from "axios";
import { TiTick } from "react-icons/ti";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import TermsAndConditions from "../../Components/TermsAndConditions/termsandconditions";

const Register = () => {
    const [open, setOpen] = useState(false);
    const [activeTabs, setActiveTabs] = useState(0);
    const [inputsforCus, setInputsforCus] = useState({
        cusname: "",
        cusphonenum: "",
        cusemail: "",
        cusaddress: "",
        cuspassword: "",
    });
    const [inputsforSel, setInputsforSel] = useState({
        selname: "",
        selphonenum: "",
        selemail: "",
        seladdress: "",
        selshoptype:"",
        selpassword: "",
    });

    const [err, setError] = useState(null);
    const [clicked,setClicked] = useState(null);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

    const handleChangecus = (e) => {
        setInputsforCus({ ...inputsforCus, [e.target.name]: e.target.value });
    }
    const handleChangesel = (e) => {
        setInputsforSel({ ...inputsforSel, [e.target.name]: e.target.value });
    }

    const passlenError= ()=>{
        setClicked(false)
        setError(false)
    }

    const navigate = useNavigate();

    const handleSubmitcus = async (e) => {
        e.preventDefault();
        console.log(inputsforCus)
        localStorage.setItem('cusemail', inputsforCus.cusemail);
        // const endpoint = activeTabs === 0 ? "/api/user/create/user" : "/api/user/create/seller";
        if (inputsforCus.cuspassword.length<8 && clicked){
            setError("Password must have atleast 8 characters")
        }else{
            try {
                await axios.post("/api/user/create/user", inputsforCus, {
                    headers: { 'Content-Type': 'application/json' }
                    });
                console.log("OTP is sent");
                navigate('/register/waitforotp/customer')
            } catch (err) {
                console.log("Error!!", err);
                setError(err.response.data);
            }
        }
    }


    const handleSubmitsel = async (e) => {
        e.preventDefault();
        console.log(inputsforSel)
        localStorage.setItem('selemail', inputsforSel.selemail);
        // const endpoint = activeTabs === 0 ? "/api/user/create/user" : "/api/user/create/seller";
        if (inputsforSel.selpassword.length<8 && clicked){
            setError("Password must have atleast 8 characters")
        }else{
            try {
                await axios.post("/api/user/create/seller", inputsforSel);
                console.log("OTP is sent");
                navigate('/register/waitforotp/seller')
            } catch (err) {
                console.log("Error!!", err);
                setError(err.response.data);
            }
        } 
    }


    return (
        <section className='section signin register'>
            <div className="container">
                <div className="card shadow box">
                    <div className="text-center">
                        <img src={img1} alt="logo" />
                        <p className="mb-0">SHOPILY</p>
                    </div>
                    <form className="mt-3" onSubmit={activeTabs === 0 ? handleSubmitcus: handleSubmitsel}>
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
                                            <TextField id='standard-basic' label='Name' type='text' required variant='standard' className="input-box" name='cusname' onChange={handleChangecus} disabled={activeTabs !== 0} />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Phone No' type='text' required variant='standard' className="input-box" name='cusphonenum' onChange={handleChangecus} disabled={activeTabs !== 0} />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Email' type='email' required variant='standard' className="input-box" name='cusemail' onChange={handleChangecus} disabled={activeTabs !== 0} />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Address' type='text' required variant='standard' className="input-box" name='cusaddress' onChange={handleChangecus} disabled={activeTabs !== 0} />
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Password' type='password' required variant='standard' className="input-box" name='cuspassword' onClick={passlenError} onChange={handleChangecus} disabled={activeTabs !== 0} />
                                </div>
                                <Link onClick={handleClickOpen}>Terms and Conditions</Link>
                                <Dialog
                                    open={open}
                                    id='dialogBox'
                                    onClose={handleClose}
                                    PaperProps={{
                                        component: 'form',
                                        onSubmit: (event) => {
                                            event.preventDefault();
                                            handleClose();
                                        },
                                    }}
                                >
                                    <DialogContent>
                                        <DialogContentText>
                                            <p className="topictext">Shopily Terms and Conditions</p>
                                        </DialogContentText>
                                        <TermsAndConditions />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type='submit tick' className='send' onClick={handleClose}>
                                            <TiTick />
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Button type="submit" className="w-100" onClick={()=>setClicked(true)}>Register</Button>
                                {
                                    clicked ===true && err ? <p className="text-danger">{err}</p> :""
                                }
                                <div className="registerSection">
                                    <p>Already have an account?</p>
                                    <Link to='/login'>Sign In</Link>
                                </div>
                            </div>

                            <div className={`tab02 ${activeTabs === 1 ? 'active' : ''}`}>
                                <div className="row d-flex">
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Name' type='text' required variant='standard' className="input-box" name='selname' onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <TextField id='standard-basic' label='Phone No' type='text' required variant='standard' className="input-box" name='selphonenum' onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Email' type='email' required variant='standard' className="input-box" name='selemail' onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Address' type='text' required variant='standard' className="input-box" name='seladdress' onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Shop Type' type='text' required variant='standard' className="input-box" name='selshoptype' onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                </div>
                                <div className="form-group">
                                    <TextField id='standard-basic' label='Password' type='password' required variant='standard' className="input-box" name='selpassword' onClick={passlenError} onChange={handleChangesel} disabled={activeTabs !== 1}/>
                                </div>
                                <Link onClick={handleClickOpen}>Terms and Conditions</Link>
                                <Dialog
                                    open={open}
                                    id='dialogBox'
                                    onClose={handleClose}
                                    PaperProps={{
                                        component: 'form',
                                        onSubmit: (event) => {
                                            event.preventDefault();
                                            handleClose();
                                        },
                                    }}
                                >
                                    <DialogContent>
                                        <DialogContentText>
                                            <p className="topictext">Shopily Terms and Conditions</p>
                                        </DialogContentText>
                                        <TermsAndConditions />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button type='submit tick' className='send' onClick={handleClose}>
                                            <TiTick />
                                        </Button>
                                    </DialogActions>
                                </Dialog>

                                <Button type="submit" className="w-100" onClick={()=>setClicked(true)}>Register</Button>
                                {
                                    clicked ===true && err ? <p className="text-danger">{err}</p> :""
                                }
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
