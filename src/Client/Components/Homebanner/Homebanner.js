import React from 'react';
import Slider from 'react-slick';
import img1 from "../../assets/images/banner1.jpg"
import img2 from "../../assets/images/banner2.jpg"
import img3 from "../../assets/images/banner3.jpg"

const Homebanner=()=>{

    //Using react-slick and these settings we can use banners
    var settings={
        dots: true,
        infinite: true,
        speed: 500,
        slideToShow: 1,
        slidesToScroll: 1,
        arrow: true,
        autoplay: true
    }
    return(
        <div className='container mt-3'>
            <div className="homebanner">
                <Slider {...settings}>
                    <div className='item'>
                        <img src={img1} className='w-100 banner'></img>
                    </div>
                    <div className='item'>
                        <img src={img2} className='w-100 banner'></img>
                    </div>
                    <div className='item'>
                        <img src={img3} className='w-100 banner'></img>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
 export default Homebanner;