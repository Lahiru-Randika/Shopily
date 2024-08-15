import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog"
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating'
import { useContext} from "react";
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
//import InnerImageZoom from 'react-inner-image-zoom'
// import { useState } from "react";
// import img1 from "../../assets/images/banner1.jpg"
import Quantity from "../Quantity/quantity";
import { IoIosHeartEmpty } from 'react-icons/io'
import { IoCartOutline } from "react-icons/io5";
import { MyContext } from "../../../App";
import ProductSlider from "../ProductSlider/productslider";
import { Link } from "react-router-dom";

const ProductPopup = ()=>{

    const context = useContext(MyContext)

    // var settings2 = {
    //     dots: false,
    //     infinite: false,
    //     speed: 700,
    //     sliedsToShow: 1,
    //     slidesToScroll: 1,
    //     fade: false,
    //     arrows:false,
    // }

    // const goto =(index)=>{
    //     zoomSlider.current.slickGoTo(index);
    //     zoomSliderBig.current.slickGoTo(index);
    // }

    return(
        <div className="productpopup">
            <Dialog open={true} className='productModel' onClose={()=>context.setisOpenProduct(false)}>
                <Button className='close_' onClick={()=> context.setisOpenProduct(false)}><MdClose/></Button>
                <h4 className="mb-0">Name of the product</h4>
                <div className="small-info">
                    <div className="info">
                        <span>Brand: </span>
                        <span className="ml-2">Harischandra</span>
                    </div>
                    <Rating name="read-only" value={5} size="small" precision={0.5} readOnly/>
                </div>

                <hr/>

                <div className="row mt-2 details">
                    <div className="col-md-5">
                        {/* <div className="productZoom">
                            <Slider {...settings2} className="zoomSliderBig" ref={zoomSliderBig}>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={img1}/>
                                </div>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={img1}/>
                                </div>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={img1}/>
                                </div>
                                <div className="item">
                                    <InnerImageZoom zoomType="hover" zoomScale={1} src={img1}/>
                                </div>
                            </Slider>
                        </div> */}

                        <ProductSlider/>
                    </div>

                    <div className="col-md-7 full-info">
                        <div className="d-flex info align-items-center position-relative">
                            <span className="oldprice lg">rs200</span>
                            <span className="newprice lg">rs180</span>
                            <div className="badge discount"><p className="percent">25%</p></div>
                        </div>
                        <span className="badge">IN STOCK</span>
                        <p className="mt-3 description">Here we can write any description about the product like its main qualities, max qualities etc.........................Amidst the bustling streets, neon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air, mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past, each carrying their own stories, weaving a transient connection before disappearing into the crowd</p>

                        <div className="addtocart">
                            <Quantity/>

                            <Button className="ml-3"><IoCartOutline />ADD TO CART</Button>
                            <Button className="btn-round markMeFav" varient='outlined'><IoIosHeartEmpty/>ADD TO WISHLIST</Button>
                        </div>
                        
                        <Link to="/product/:id" className="moreInfo" onClick={()=> context.setisOpenProduct(false)}>
                            <Button className="btn btn-round">
                                <span>More info</span>
                            </Button>
                        </Link>
                        
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
export default ProductPopup;