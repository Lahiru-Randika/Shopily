import Button from "@mui/material/Button";
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css'
import 'swiper/css/navigation'
import { Pagination, Navigation } from "swiper/modules";
import Productitems from "../../../Components/Productitem/productitem.js";


const RelatedProducts=(props)=>{
    return(
        <div className="related">
            <div className="para-set">
                <div className="info w-75">
                    <h3>{props.title}</h3>
                </div>
            </div>

            <div className="product_row w-100 mt-4">
                <Swiper 
                    slidesPerView={5}
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
                </Swiper>                        
            </div>
        </div>
    )
}
export default RelatedProducts;