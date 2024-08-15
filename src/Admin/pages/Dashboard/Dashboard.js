import Sidebar from "../../components/Sidebar/sidebar";
import { FaUserCircle } from 'react-icons/fa'
import { IoMdCart } from "react-icons/io";
import { MdShoppingBag } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { Button, Pagination} from "@mui/material";
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import { useContext,useState, useEffect } from "react";
import Menu  from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { IoIosTimer } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import Select from'@mui/material/Select'
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MyContext } from '../../../App'
import { Link } from "react-router-dom";


import { IoArrowBackCircle } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const Dashboard = ()=> {

  const context = useContext(MyContext)

  // To show the arrow in the cards
  const [grow, setGrow] = useState(false);
  const [currentMonth, setCurrentMonth] = useState(0);
  const [lastMonth, setLastMonth] = useState(0);

  useEffect(() => {
    setCurrentMonth(500);
    setLastMonth(300);
    setGrow(currentMonth > lastMonth);
  }, [currentMonth, lastMonth]);


  //To show the menu in three dots
  const [green, setgreen] = useState(null)
  const [purple, setpurple] = useState(null)
  const [blue, setblue] = useState(null)
  const [yellow, setyellow] = useState(null)

  const opengreen = Boolean(green);
  const openpurple = Boolean(purple);
  const openblue = Boolean(blue);
  const openyellow = Boolean(yellow);

  const handleOpengreen = (event)=>{
    setgreen(event.currentTarget)
  }
  const handleClosegreen= ()=>{
      setgreen(null)
  }

  const handleOpenpurple = (event)=>{
    setpurple(event.currentTarget)
  }
  const handleClosepurple= ()=>{
    setpurple(null)
  }

  const handleOpenblue = (event)=>{
    setblue(event.currentTarget)
  }
  const handleCloseblue= ()=>{
    setblue(null)
  }

  const handleOpenyellow = (event)=>{
    setyellow(event.currentTarget)
  }
  const handleCloseyellow= ()=>{
    setyellow(null)
  }

  //To handle card filters
  const [showBy, setShowBy]= useState('');

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='dashboard w-100'>
      <div className={`d-flex sidebarDash ${context.isToggleSidebar=== true? 'toggle':''}`}>
        <Sidebar/>
      </div>
      
      <div className={`content-right d-flex ${context.isToggleSidebar=== true? 'toggle':''}`}>
        <div className="greetings">
          <h3>Hello Lahiru</h3>
        </div>
        <div className="dashboardBox green green-glow">
          <div className="box">
            <div className="info">
              <h5>Total Users</h5>
              <FaUserCircle className="icon"/>
            </div>
            <span className="number">{currentMonth}</span>
            <br/><br/><br/>
            <div className="moreInfo">
              <p className="time"> This month</p>
              <Button><MoreVertIcon className="icon" onClick={handleOpengreen}/></Button>
              <Menu 
                anchorEl={green}
                id='account-menu'
                open={opengreen}
                onClose={ handleClosegreen}
                onClick={ handleClosegreen}
                transformOrigin={{ horizontal: 'right', vertical:'top'}}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom'}}
              >

                <MenuItem onClick={ handleClosegreen}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Day</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleClosegreen}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Week</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleClosegreen}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Month</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            
            {
              grow ?
                <span className="chart"><TrendingUpIcon/></span>
              :
                <span className="chart"><TrendingDownIcon/></span>
            }
          </div>
              
        </div>

        <div className="dashboardBox purple green-glow purple-glow" >
          <div className="box">
            <div className="info">
              <h5>Total Orders</h5>
              <IoMdCart className="icon"/>
            </div>
            <span className="number">{currentMonth}</span>
            <br/><br/><br/>
            <div className="moreInfo">
              <p className="time"> This month</p>
              <Button><MoreVertIcon className="icon" onClick={handleOpenpurple}/></Button>
              <Menu 
                anchorEl={purple}
                id='account-menu'
                open={openpurple}
                onClose={ handleClosepurple}
                onClick={ handleClosepurple}
                transformOrigin={{ horizontal: 'right', vertical:'top'}}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom'}}
              >

                <MenuItem onClick={ handleClosepurple}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Day</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleClosepurple}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Week</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleClosepurple}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Month</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            
            {
              grow ?
                <span className="chart"><TrendingUpIcon/></span>
              :
                <span className="chart"><TrendingDownIcon/></span>
            }
          </div>
                
        </div>

        <div className="dashboardBox blue green-glow blue-glow">
          <div className="box">
            <div className="info">
              <h5>Total Products</h5>
              <MdShoppingBag className="icon"/>
            </div>
            <span className="number">{currentMonth}</span>
            <br/><br/><br/>
            <div className="moreInfo">
              <p className="time"> This month</p>
              <Button><MoreVertIcon className="icon" onClick={handleOpenblue}/></Button>
              <Menu 
                anchorEl={blue}
                id='account-menu'
                open={openblue}
                onClose={ handleCloseblue}
                onClick={ handleCloseblue}
                transformOrigin={{ horizontal: 'right', vertical:'top'}}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom'}}
              >

                <MenuItem onClick={ handleCloseblue}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Day</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleCloseblue}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Week</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleCloseblue}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Month</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            
            {
              grow ?
                <span className="chart"><TrendingUpIcon/></span>
              :
                <span className="chart"><TrendingDownIcon/></span>
            }
          </div>
              
        </div>

        <div className="dashboardBox yellow green-glow yellow-glow">
          <div className="box">
            <div className="info">
              <h5>Total Starts</h5>
              <GiStarsStack className="icon"/>
            </div>
            <span className="number">{currentMonth}</span>
            <br/><br/><br/>
            <div className="moreInfo">
              <p className="time"> This month</p>
              <Button><MoreVertIcon className="icon" onClick={handleOpenyellow}/></Button>
              <Menu 
                anchorEl={yellow}
                id='account-menu'
                open={openyellow}
                onClose={ handleCloseyellow}
                onClick={ handleCloseyellow}
                transformOrigin={{ horizontal: 'right', vertical:'top'}}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom'}}
              >

                <MenuItem onClick={ handleCloseyellow}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Day</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleCloseyellow}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Week</p>
                  </div>
                </MenuItem>
                <MenuItem onClick={ handleCloseyellow}>
                  <div className="infoComesD">
                    <p className="dropdownAdmin"><IoIosTimer className="set-set1"/>Last Month</p>
                  </div>
                </MenuItem>
              </Menu>
            </div>
            
            {
              grow ?
                <span className="chart"><TrendingUpIcon/></span>
              :
                <span className="chart"><TrendingDownIcon/></span>
            }

          </div>    
        </div>


        <div className="dashboardBox dashboardBoxBig big-glow">
          <div className="box">
            <div className="info">
              <h5>Total Sales</h5>
              <AiFillDollarCircle className="icon"/>
            </div>
            <span className="number">Rs 240 000</span>
            <p className="time"> This month Rs 100 000</p>
            </div>
        </div>



        <div className="mt-4 w-100 bottomSet">
          <h3 className=" greetings tableContent pb-2">Best Selling Products</h3>

          <div className="row cardFilter">
            <div className="col">
              <h4>Show By</h4>
              <Select
                value={showBy}
                onChange={(e)=>setShowBy(e.target.value)}
                displayEmpty
                inputProps={{'aria-label':'Without lable'}}
                className="filter"
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Most Sold</MenuItem>
                <MenuItem value={20}>Stars</MenuItem>
                <MenuItem value={30}>Reviews</MenuItem>
              </Select>
            </div>
          </div>

          <div className="table-responsive tb">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>UID</th>
                  <th>Product</th>
                  <th>Category</th>
                  <th>Brand</th>
                  <th>Price <span className="currency">(Rs)</span></th>
                  <th>Stock</th>
                  <th>Rating</th>
                  <th>Orders</th>
                  <th>Sales</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>1</td>
                  <td className="name">
                    <img src='https://online.uom.lk/pluginfile.php/1/theme_moove/logo/1712888565/University_of_Moratuwa_logo.png'/>
                    <p className="nameMe">Top Crust Bread 200g</p>
                  </td>
                  <td> cat1</td>
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>55</td>
                  <td>4.5</td>
                  <td>20</td>
                  <td>75</td>
                  <td>
                    <div className="actions d-flex align-items-center justify-content-center">
                      <Link to='/dashboard/product/details'>
                        <Button className="btn1"><FaEye className="icon1"/></Button>
                      </Link>
                      <Link to='/dashboard/product/edit'>
                        <Button className="btn2"><FaPencilAlt className="icon2"/></Button>
                      </Link>
                      <Button className="btn3" color='error' onClick={handleClickOpen}><MdDelete className="icon3"/></Button>
                      <Dialog
                        open={open}
                        id= 'dialogBox'
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
                              <p  className="topictext">Do you want to permenently delete this product?</p>
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button type='submit' className='send change mb-2' onClick={handleClose}>
                            <IoArrowBackCircle /> Back
                          </Button>
                          <Button type='submit' className='send delete mb-2' onClick={handleClose}>
                            <MdDelete /> Delete
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
            
            <div className="d-flex align-items-center justify-content-center">
              <Pagination className='table-footer' count={10} color='primary'/>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Dashboard;