import Button from '@mui/material/Button'
import { MdDashboard, MdMessage } from 'react-icons/md'
import { FaAngleRight, FaProductHunt, FaCartArrowDown, FaBell } from 'react-icons/fa6'
import { IoIosSettings } from 'react-icons/io'
import { useState } from 'react'
import { Link } from "react-router-dom";


const Sidebar = ()=>{

    const [activeTab, setactiveTab] = useState(0)
    const [isToggleSubmenu, setisToggleSubmenu] = useState(false)

    const isOpenSubmenu=(index)=>{
        setactiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu);
    }

    return(
        <div className='dashSide'> 
            <ul>
                <li>
                    <Link to='/dashboard'>
                        <Button className={`w-100 ${activeTab===0 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(0)}>
                            <span className='icon'><MdDashboard/></span>
                            <span>Dashboard</span> 
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===1 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(1)}>
                        <span className='icon icon2'><FaProductHunt/></span>
                        <span>Products</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                    <div className={`subMenuWrapper ${activeTab ===1 && isToggleSubmenu===true ? 'colapse':'colapsed'}`}>
                        <ul className='subMenu'>
                            <Button><li>Product List</li></Button>
                            <Button><li>Product Update</li></Button>
                            <Button><li>Product Upload</li></Button>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===2 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(2)} >
                        <span className='icon'><FaCartArrowDown/></span>
                        <span>Orders</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===3 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(3)}>
                        <span className='icon'><MdMessage/></span>
                        <span>Messages</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===4 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(4)}>
                        <span className='icon'><FaBell/></span>
                        <span>Notifications</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===5 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(5)}>
                        <span className='icon'><IoIosSettings/></span>
                        <span>Settings</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===6 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(6)}>
                        <span className='icon'><FaBell/></span>
                        <span>Notifications</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===7 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(7)}>
                        <span className='icon'><IoIosSettings/></span>
                        <span>Settings</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===8 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(8)}>
                        <span className='icon'><FaBell/></span>
                        <span>Notifications</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===9 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(9)}>
                        <span className='icon'><IoIosSettings/></span>
                        <span>Settings</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab===10 && isToggleSubmenu===true ? 'active': ' '}`} onClick={()=>isOpenSubmenu(10)}>
                        <span className='icon'><FaBell/></span>
                        <span>Notifications</span> 
                        <span className='arrow'><FaAngleRight/></span>
                    </Button>
                </li>
                
                <Link to='/'>
                    <li className='logOutSection'>
                        <dive className='logOut'>
                            <Button>LOGOUT</Button>
                        </dive>
                    </li>
                </Link>
                
            </ul>
        </div>
    )
}

export default Sidebar;