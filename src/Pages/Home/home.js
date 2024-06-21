import React from "react";
import Homebanner from "../../Components/Homebanner/Homebanner";
import img1 from "../../assets/images/slider-1.png";
import Button from "@mui/material/Button";
import { IoIosArrowRoundForward } from 'react-icons/io';
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import { Pagination, Navigation } from "swiper/modules";
import Productitems from "../../Components/Productitem/productitem.js";
import img2 from "../../assets/images/banner2.jpg"
import img3 from "../../assets/images/banner3.jpg"
import img4 from "../../assets/images/banner4.jpg"
import img5 from "../../assets/images/newsletter.png"
import { IoMailOutline } from "react-icons/io5";


const Home = () => {
    return (
        <div>
            <Homebanner />
            <section className="homeproducts">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 bar">
                            <div className="banner">
                                <img src={img4} alt="Banner" className='cursor' />
                            </div>
                        </div>
                        <div className="col-md-9 product-row">
                            <div className="para-set">
                                <div className="info w-75">
                                    <h3>BEST SELLERS</h3>
                                    <p className="text-light text-small text">Do not miss the current offers until the end of March</p>
                                </div>
                                <Button className="viewall">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper 
                                    slidesPerView={4}
                                    spaceBetween={5}
                                    //navigation= {true}
                                    slidesPerGroup={1}
                                    pagination= {{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>
                                </Swiper>                        
                            </div>
                        </div>


                        <div className="col-md-3 bar mt-4">
                             <div className="banner">
                                <img src={img1} alt="Banner" className='cursor' />
                            </div>
                        </div>
                        <div className="col-md-9 product-row mt-5">
                            <div className="para-set">
                                <div className="info w-75">
                                    <h3>More Products</h3>
                                    <p className="text-light text-small text">Name a thing. Guess what? We have it  :)</p>
                                </div>
                                <Button className="viewall">View All<IoIosArrowRoundForward /></Button>
                            </div>

                            <div className="product_row w-100 mt-4">
                                <Swiper 
                                    slidesPerView={4}
                                    spaceBetween={5}
                                    pagination= {{
                                        clickable: true,
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <Productitems/> 
                                    </SwiperSlide>

                                </Swiper>                        
                            </div>

                            <div className="banners mt-4 mb-5 bannersection">
                                <div className="banner">
                                    <img src={img2} className="cursor w-100"/>
                                </div>
                                <div className="banner">
                                    <img src={img3} className="cursor w-100"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="newsletter mt-3 mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p className="text1 mb-1">Win amaizing offers for the first order</p>
                            <h4 className="text2">Join our newsletter...</h4>
                            <p className="text3">Join our email subscription now to get updates<br/> on promotions and coupns.</p>
                            <form>
                                <IoMailOutline className="mail-icon"/>
                                <input type="text" placeholder="Type you email...."/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src={img5}/>
                        </div>
                    </div>
                </div>

            </section>
            <br/>
        </div>
    );
};

export default Home;

