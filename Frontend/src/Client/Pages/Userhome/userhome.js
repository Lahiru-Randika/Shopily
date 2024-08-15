import { Button} from "@mui/material";
import { useContext,useState, useEffect } from "react";
import { FaEye, FaPencilAlt } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { MyContext } from '../../../App'
import { Link } from "react-router-dom";


import { IoArrowBackCircle } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import UserprofileSidebar from "../../Components/UserProfSide/userprofilesidebar";

const UserHome = ()=> {

  const context = useContext(MyContext)


  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className='dashboard dashboardUser w-100'>
      <div className={`d-flex sidebarDash ${context.isToggleSidebar=== true? 'toggle':''}`}>
        <UserprofileSidebar/>
      </div>
      
      <div className={`content-right d-flex ${context.isToggleSidebar=== true? 'toggle':''}`}>
        <div className="greetings">
          <h3>Hello Lahiru</h3>
        </div>
        <div className="table-responsive tb w-100">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Order_ID</th>
                  <th>Details</th>
                  <th>Seller</th>
                  <th>Status</th>
                  <th>Order Date</th>
                  <th>Expected Date</th>
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
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>On the Way</td>
                  <td>1</td>
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
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>OnthaWay</td>
                  <td>1</td>
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
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>OnthaWay</td>
                  <td>1</td>
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
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>OnthaWay</td>
                  <td>1</td>
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
                  <td>Keells</td>
                  <td className="info align-items-center">
                    <span className="oldprice tbl">150.00</span>
                    <span className="newprice tbl">100.00</span>
                  </td>
                  <td>OnthaWay</td>
                  <td>1</td>
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
            
        </div>

      </div> 
    </div>
  );
}

export default UserHome;