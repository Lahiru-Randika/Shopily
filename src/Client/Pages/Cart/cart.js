import { Rating } from "@mui/material";
import { Link } from "react-router-dom";
import Quantity from "../../Components/Quantity/quantity";
import { IoIosClose } from 'react-icons/io';
import Button from "@mui/material/Button";
import { useState, useEffect } from "react";
import { IoCartOutline } from "react-icons/io5";

const Cart = () => {
  const [listLength, setListLength] = useState(0);

  const listLengthProvider = (newLength) => {
    setListLength(newLength);
  };

  // This effect runs when the component mounts, you can adjust it to suit your needs
  useEffect(() => {
    const numberOfProducts = 5; // Replace this with the actual number of products
    listLengthProvider(numberOfProducts);
  }, []);

  console.log(listLength);

  return (
    <section className='section cartPage'>
      <div className="container">
        <h2 className="hd mb-0">Your Cart</h2>
        <p>There are <b>{listLength}</b> products in your cart</p>
        <div className="row">
          <div className="col-md-9">
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th width='45%'>Product</th>
                    <th className="unit-price" width='10%'>Unit price</th>
                    <th width='20%'>Quantity</th>
                    <th width='10%'>Subtotal</th>
                    <th width='15%'>Remove Me</th>
                  </tr>
                </thead>
                <tbody>
                  {Array.from({ length: listLength }).map((_, index) => (
                    <tr key={index}>
                      <td width='45%'>
                        <Link to='/product/1'>
                          <div className="imageSection">
                            <div className="imagewrapper">
                              <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100" />
                            </div>
                            <div className="info px-3">
                              <h6>Product Name</h6>
                              <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly />
                            </div>
                          </div>
                        </Link>
                      </td>
                      <td className="balance " width='10%'>
                        <h6 className="balanceMe"> Rs 180</h6>
                      </td>
                      <td className="quantityList balance" width='20%'>
                        <div className="balanceMe">
                          <Quantity />
                        </div>
                      </td>
                      <td className="balance" width='10%'>
                        <h6 className="balanceMe"> Rs 180</h6>
                      </td>
                      <td className="balance" width='15%'>
                        <div className="balanceMe remove">
                          <Button className="cutMe"><IoIosClose /></Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card shadow cartfullTot">
              <h4>Your Net Total</h4>

              <div className="info">
                <span className="topic">Subtotal</span>
                <span>Rs 5000</span>
              </div>
              <div className="info">
                <span className="topic">Delivery</span>
                <span>Rs 500</span>
              </div>
              <div className="info">
                <span className="topic">Delivery Address</span>
                <span>123/A, Colombo 07 , Colombo</span>
              </div>
              <div className="info">
                <span className="topic">Final total</span>
                <span>Rs 5500</span>
              </div>

              <br/>

              <Button className="ml-3"><IoCartOutline />Check Out</Button>
            </div>
            {listLength > 2 &&
              <div className="banner">
                <img src="http://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className="w-100" />
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  )
}
export default Cart;


// import { Rating } from "@mui/material";
// import { Link } from "react-router-dom";
// import Quantity from "../../Components/Quantity/quantity";
// import { IoIosClose } from 'react-icons/io';
// import Button from "@mui/material/Button";
// import { useState } from "react";
 

// const Cart=()=>{

//     const [listLength,setListLength] = useState(0);

//     const listLengthProvider=()=>{
//         const i=0;
//         for (i;i<i+1;i++){
//             setListLength(i)
//         }
//     }
//     console.log(listLength);
//     return(
//         <sectio className='section cartPage'>
//             <div className="container">
//             <h2 className="hd mb-0">Your Cart</h2>
//             <p>There are <b>5</b> products in your cart</p>
//                 <div className="row">
//                     <div className="col-md-9">
//                         <div className="table-responsive">
//                             <table className="table table-striped">
//                                 <thead>
//                                     <tr>
//                                         <th width='45%'>Product</th>
//                                         <th className="unit-price" width='10%'>Unit price</th>
//                                         <th width='20%'>Quantity</th>
//                                         <th width='10%'>Subtotal</th>
//                                         <th width='15%'>Remove Me</th>
//                                     </tr>
//                                 </thead>
//                                 <tbody>
//                                     <tr>
//                                         <td width='45%'>
//                                             <Link to='/product/1'>
//                                                 <div className="imageSection">
//                                                     <div className="imagewrapper">
//                                                         <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100"/>
//                                                     </div>
//                                                     <div className="info px-3">
//                                                         <h6>Product Name</h6>
//                                                         <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly/>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </td>
//                                         <td className="balance " width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>
//                                         <td className="quantityList balance" width='20%'>
//                                             <div className="balanceMe">
//                                                 <Quantity/>
//                                             </div>
//                                         </td>
//                                         <td className="balance" width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>  
//                                         <td className="balance" width='15%'>
//                                             <div  className="balanceMe remove">
//                                                 <Button  className="cutMe"><IoIosClose/></Button>
//                                             </div>
//                                         </td> 
//                                     </tr>

//                                     <tr className={()=>{listLengthProvider()}}>
//                                         <td width='45%'>
//                                             <Link to='/product/1'>
//                                                 <div className="imageSection">
//                                                     <div className="imagewrapper">
//                                                         <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100"/>
//                                                     </div>
//                                                     <div className="info px-3">
//                                                         <h6>Product Name</h6>
//                                                         <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly/>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </td>
//                                         <td className="balance " width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>
//                                         <td className="quantityList balance" width='20%'>
//                                             <div className="balanceMe">
//                                                 <Quantity/>
//                                             </div>
//                                         </td>
//                                         <td className="balance" width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>  
//                                         <td className="balance" width='15%'>
//                                             <div  className="balanceMe remove">
//                                                 <Button  className="cutMe"><IoIosClose/></Button>
//                                             </div>
//                                         </td> 
//                                     </tr>

//                                     <tr className={()=>{listLengthProvider()}}>
//                                         <td width='45%'>
//                                             <Link to='/product/1'>
//                                                 <div className="imageSection">
//                                                     <div className="imagewrapper">
//                                                         <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100"/>
//                                                     </div>
//                                                     <div className="info px-3">
//                                                         <h6>Product Name</h6>
//                                                         <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly/>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </td>
//                                         <td className="balance " width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>
//                                         <td className="quantityList balance" width='20%'>
//                                             <div className="balanceMe">
//                                                 <Quantity/>
//                                             </div>
//                                         </td>
//                                         <td className="balance" width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>  
//                                         <td className="balance" width='15%'>
//                                             <div  className="balanceMe remove">
//                                                 <Button  className="cutMe"><IoIosClose/></Button>
//                                             </div>
//                                         </td> 
//                                     </tr>

//                                     <tr className={()=>{listLengthProvider()}}>
//                                         <td width='45%'>
//                                             <Link to='/product/1'>
//                                                 <div className="imageSection">
//                                                     <div className="imagewrapper">
//                                                         <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100"/>
//                                                     </div>
//                                                     <div className="info px-3">
//                                                         <h6>Product Name</h6>
//                                                         <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly/>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </td>
//                                         <td className="balance " width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>
//                                         <td className="quantityList balance" width='20%'>
//                                             <div className="balanceMe">
//                                                 <Quantity/>
//                                             </div>
//                                         </td>
//                                         <td className="balance" width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>  
//                                         <td className="balance" width='15%'>
//                                             <div  className="balanceMe remove">
//                                                 <Button  className="cutMe"><IoIosClose/></Button>
//                                             </div>
//                                         </td> 
//                                     </tr>

//                                     <tr className={()=>{listLengthProvider()}}>
//                                         <td width='45%'>
//                                             <Link to='/product/1'>
//                                                 <div className="imageSection">
//                                                     <div className="imagewrapper">
//                                                         <img src='http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg' className="w-100"/>
//                                                     </div>
//                                                     <div className="info px-3">
//                                                         <h6>Product Name</h6>
//                                                         <Rating name='read-only' size='small' value={4.5} precision={0.5} readOnly/>
//                                                     </div>
//                                                 </div>
//                                             </Link>
//                                         </td>
//                                         <td className="balance " width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>
//                                         <td className="quantityList balance" width='20%'>
//                                             <div className="balanceMe">
//                                                 <Quantity/>
//                                             </div>
//                                         </td>
//                                         <td className="balance" width='10%'>
//                                             <h6 className="balanceMe"> Rs 180</h6>
//                                         </td>  
//                                         <td className="balance" width='15%'>
//                                             <div  className="balanceMe remove">
//                                                 <Button  className="cutMe"><IoIosClose/></Button>
//                                             </div>
//                                         </td> 
//                                     </tr>
//                                 </tbody>
//                             </table>
//                         </div>
//                     </div>



//                     <div className="col-md-3">
//                         <div className="card shadow cartfullTot">
//                             <h4>Your Net Total</h4>

//                             <div className="info">
//                                 <span className="topic">Subtotal</span>
//                                 <span>Rs 5000</span>
//                             </div>
//                             <div className="info">
//                                 <span className="topic">Delivery</span>
//                                 <span>Rs 500</span>
//                             </div>
//                             <div className="info">
//                                 <span className="topic">Delivery Address</span>
//                                 <span>123/A, Colombo 07 , Colombo</span>
//                             </div>
//                             <div className="info">
//                                 <span className="topic">Final total</span>
//                                 <span>Rs 5500</span>
//                             </div>
//                         </div>
//                         {
//                             listLength>1 && 
//                             <div className="banner">
//                                 <img src="http://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" class="w-100"/>
//                             </div>
//                         }
//                     </div>
//                 </div>
//             </div>
//         </sectio>
//     )
// }
// export default Cart;