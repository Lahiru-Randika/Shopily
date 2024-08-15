import Rating from "@mui/material/Rating";
import { TfiFullscreen } from "react-icons/tfi";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import { MyContext } from "../../../App";

const Productitem= ()=>{

    const context = useContext(MyContext)

    const viewProduc = (id)=>{
        context.setisOpenProduct(true)

    }

    return(
        <div>
            <div className='item productitem'>
                <div className="imageWrapper">
                    <img src="http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-3-346x310.jpg" alt="Product" className="w-100" />
                    <span className="badge">20%</span>
                    <div className="actionbtn">
                        <Button onClick={()=>viewProduc(1)}><TfiFullscreen/></Button>
                    </div>
                </div>
                <div className="info">
                    <h5>Creamy Cookies</h5>
                    <span className="text">In stock</span>
                    <Rating  className=" mt-2 mb-2" name="read-only" value={5} readonly size="small" precision={0.5}/>
                    <div className="price">
                        <span className="oldprice">rs 200.00</span>
                        <span className="newprice">rs 180.00</span>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Productitem;