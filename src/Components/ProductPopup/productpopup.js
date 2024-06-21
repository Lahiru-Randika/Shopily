import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog"
import { MdClose } from "react-icons/md";
import Rating from '@mui/material/Rating'
import Slider from "react-slick";
import { useRef } from "react";
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
// import { useState } from "react";
import img1 from "../../assets/images/banner1.jpg"

const ProductPopup = (props)=>{

    const zoomSliderBig = useRef()
    const zoomSlider = useRef()

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        sliedsToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows:true
    }

    // var settings2 = {
    //     dots: false,
    //     infinite: false,
    //     speed: 700,
    //     sliedsToShow: 1,
    //     slidesToScroll: 1,
    //     fade: false,
    //     arrows:false,
    // }

    const goto =(index)=>{
        zoomSlider.current.slickGoTo(index);
        zoomSliderBig.current.slickGoTo(index);
    }

    return(
        <div className="productpopup">
            <Dialog open={true} className='productModel' onClose={()=>props.closeProduct() }>
                <Button className='close_' onClick={()=> props.closeProduct()}><MdClose/></Button>
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

                        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
                            <div className="item">
                            {/* <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100' onClick={()=> goto(0)}/> */}
                                <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'/>
                            </div>
                            <div className="item">
                                <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'/>
                            </div>
                            <div className="item">
                                <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'/>
                            </div>
                            <div className="item">
                                <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'/>
                            </div>
                        </Slider>
                    </div>

                    <div className="col-md-7">
                        <div className="d-flrx info align-items-center">
                            <span className="oldprice lg">rs200</span>
                            <span className="newprice lg">rs180</span>
                        </div>
                    </div>
                </div>
            </Dialog>
        </div>
    )
}
export default ProductPopup;