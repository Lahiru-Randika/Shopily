import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ()=>{

    const [value, setValue] = useState(0,60000);
    const [value2, setValue2] = useState(0);

    return(
            <div className="sidebar">
                <div className="box">
                    <h6>PRODUCT CATEGORIES</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Men"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Women"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Men"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Women"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Men"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Women"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="box">
                    <h6>FILTER BY PRICE</h6>
                    <div className='rangeof-price'>
                        <div className='min'>
                            <p>Min<br/><span className="rs">Rs{value[0]}</span></p><input></input>
                        </div>
                        <div className='min'>
                            <p>Max<br/><span className="rs">Rs{value[1]}</span></p><input></input>
                        </div>
                    </div>  
                </div>

                <div className="box">
                    <h6>BRAND NAMES</h6>
                    <div className='scroll'>
                        <ul>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 1"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 2"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 3"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 4"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 5"/>
                            </li>
                            <li>
                                <FormControlLabel className="form_" control={<Checkbox/>} label="Brand 6"/>
                            </li>
                        </ul>
                    </div>  
                </div>

                <Link to="#"><img src='http://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif' className='w-100'/></Link>
            </div>
    )
}
export default Sidebar;