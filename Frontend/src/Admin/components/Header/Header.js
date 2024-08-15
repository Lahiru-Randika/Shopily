import { Link } from "react-router-dom";
import img1 from "../../assets/images/logo-white.png";
import img2 from "../../assets/images/logo-black.png";
import "bootstrap";
import Button from '@mui/material/Button';
import { FiUser } from 'react-icons/fi';
import { IoBagOutline } from 'react-icons/io5';
import { MdDarkMode, MdOutlineMenu, MdEmail, MdMenuOpen } from 'react-icons/md';
import Searchbox from "../Searchbox/searchbox";
import { CiLight } from 'react-icons/ci';
import { FaRegBell } from 'react-icons/fa6';
import React, { useContext, useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import { IoShieldHalfSharp } from "react-icons/io5";
import Logout from "@mui/icons-material/Logout";
import { Divider } from "@mui/material";
import { MyContext } from "../../../App";

const Header = () => {
  const context = useContext(MyContext);

  const [notificationDr, setNotificationDr] = useState(null);
  const [orderDr, setOrderDr] = useState(null);
  const [profileDr, setProfileDr] = useState(null);

  const opennotificationDr = Boolean(notificationDr);
  const openorderDr = Boolean(orderDr);
  const openprofileDr = Boolean(profileDr);

  const handleOpenNotificationDr = (event) => {
    setNotificationDr(event.currentTarget);
  };
  const handleOpenOrderDr = (event) => {
    setOrderDr(event.currentTarget);
  };
  const handleOpenProfileDr = (event) => {
    setProfileDr(event.currentTarget);
  };

  const handleCloseNotificationDr = () => {
    setNotificationDr(null);
  };
  const handleCloseOrdersDr = () => {
    setOrderDr(null);
  };
  const handleCloseProfilesDr = () => {
    setProfileDr(null);
  };

  const clickForLight = () => {
    if (context.theme === 'light') {
      context.setTheme('dark');
    } else {
      context.setTheme('light');
    }
  };

  return (
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
                {
                    localStorage.getItem('Theme') === 'dark' ?
                    <Link to={'/'}> <img src={img1} alt="logo"/></Link>
                    :
                    <Link to={'/'}> <img src={img2} alt="logo"/></Link>
                }
                <p>SHOPILY</p>
              </div>
              <div className="col-x5-3 d-flex align-items-center">
                <Button className="rounded-circle" onClick={() => context.setIsToggleSidebar(!context.isToggleSidebar)}>
                  {context.isToggleSidebar === false ? <MdMenuOpen /> : <MdOutlineMenu />}
                </Button>
              </div>
              <div className="col-sm-10 part2">
                <Searchbox />
                <div className="part3 admin d-flex align-items-center justify-content-end">
                  <Button className="circle mr-3" onClick={clickForLight}>
                    {context.theme === 'light' ? <CiLight /> : <MdDarkMode />}
                  </Button>
                  <div className="ml-auto cartTab">
                    <div className="bucket">
                      <Link to='#' onClick={handleOpenNotificationDr}>
                        <Button className="circle mr-3"><FaRegBell /></Button>
                        <span className="count">1</span>
                      </Link>
                      <Menu
                        anchorEl={notificationDr}
                        id='account-menu'
                        open={opennotificationDr}
                        onClose={handleCloseNotificationDr}
                        onClick={handleCloseNotificationDr}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <h5 className="p-2 topic">You have (12) new messages</h5>
                        <MenuItem onClick={ handleCloseNotificationDr}>
                            <div  className="d-flex">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>User 01</b> added to his favourite list <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseNotificationDr}>
                            <div  className="d-flex">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>User 01</b> added to his favourite list <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseNotificationDr}>
                            <div  className="d-flex">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>User 01</b> added to his favourite list <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseNotificationDr}>
                            <div  className="d-flex">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>User 01</b> added to his favourite list <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseNotificationDr}>
                            <div  className="d-flex">
                                <div className="userImg">
                                    <span className="rounded-circle">
                                        <img src='https://mironcoder-hotash.netlify.app/images/avatar/01.webp'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>User 01</b> added to his favourite list <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <Link to='#' className="d-flex justify-content-center">
                                <Button>View All</Button>
                            </Link>  
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="ml-auto cartTab">
                    <div className="bucket">
                      <Link to='#' onClick={handleOpenOrderDr}>
                        <Button className="circle ml-2"><IoBagOutline /></Button>
                        <span className="count">1</span>
                      </Link>
                      <Menu
                        anchorEl={orderDr}
                        id='account-menu'
                        open={openorderDr}
                        onClose={handleCloseOrdersDr}
                        onClick={handleCloseOrdersDr}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                      >
                        <h5 className="p-3">You have (5) new orders</h5>
                        <MenuItem onClick={ handleCloseOrdersDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>New order</b> has beenn placed on <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseOrdersDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>New order</b> has beenn placed on <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseOrdersDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>New order</b> has beenn placed on <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseOrdersDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>New order</b> has beenn placed on <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem onClick={ handleCloseOrdersDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="dropdownAdmin">
                                        <b>New order</b> has beenn placed on <b>Leather belt US</b>
                                    </p>
                                    <p className="time">Few seconds ago</p>
                                </div>
                            </div>
                        </MenuItem>
                        <MenuItem>
                            <Link to='#' className="d-flex justify-content-center">
                                <Button>View All</Button>
                            </Link>  
                        </MenuItem>
                      </Menu>
                    </div>
                  </div>
                  <div className="ProfileWrapper">
                    <Link to='#'>
                      <Button className="circle mr-3" onClick={handleOpenProfileDr}><FiUser /></Button>
                    </Link>
                    <Menu
                      anchorEl={profileDr}
                      id='account-menu'
                      open={openprofileDr}
                      onClose={handleCloseProfilesDr}
                      onClick={handleCloseProfilesDr}
                      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={ handleCloseProfilesDr}>
                            <div  className="d-flex">
                                <div className="userImg productImg">
                                    <span className="rounded-circle">
                                        <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg'/>
                                    </span>
                                </div>
                                <div className="infoComesD">
                                    <p className="Accountinfo">
                                        Hi <b>Lahiru Randika</b>
                                    </p>
                                </div>
                            </div>
                        </MenuItem>
                        <div className="d-flex align-items-center justify-content-center">
                            <Divider className="divideMe"/>
                        </div>
                        <MenuItem onClick={ handleCloseProfilesDr}>
                            <ListItemIcon>
                                <IoShieldHalfSharp fontSize="small" className="icon actions"/>
                            </ListItemIcon>
                            <p className="actions">Reset Password</p>
                        </MenuItem>
                        <Link to="/" className="logout">
                            <MenuItem onClick={ handleCloseProfilesDr}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                <p className="actions">Logout</p>
                            </MenuItem>
                        </Link>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
