import Slider from "react-slick";
import { useContext, useRef } from "react";
import { MyContext } from "../../../App";

const ProductSlider =()=>{
    const context = useContext(MyContext)
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

    return(
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
    )
}
export default ProductSlider;