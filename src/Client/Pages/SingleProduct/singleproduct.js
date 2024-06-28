import  Rating  from "@mui/material/Rating";
import ProductSlider from "../../Components/ProductSlider/productslider";
import Quantity from "../../Components/Quantity/quantity";
import Button from "@mui/material/Button";
import { IoCartOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from 'react-icons/io'
import { useState } from "react";
import RelatedProducts from "./RelatedProducts/relatedproducts";

const SingleProduct = ()=>{

    const [activeTabs, setActiveTabs] = useState(0);

    return(
        <section className="productdetails section">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <ProductSlider className='slider'/>
                    </div>
                    <div className="col-md-7">
                        <h2 className="name">PRODUCT NAME</h2>
                        <ul className="list list-inline detailsList">
                            <div className="subdetails">
                                <li className="list-inline-item">Brand : </li>
                                <span>name</span>
                            </div>
                            <li className="list-inline-item">
                                <div className="pl">
                                    <Rating name='read-only' value={4.5} precision={0.5} size='small' readOnly/>
                                    <span className="reviews"> 1 review</span>
                                </div>
                            </li>
                        </ul>

                        <div className="price">
                            <span className="oldprice">rs 200.00</span>
                            <span className="newprice">rs 180.00</span>
                        </div>
                        <span className="badge">IN STOCK</span>
                        <p className="mt-3 description"> Here we can write any description about the product like its main qualities, max qualities etc..................Amidst the bustling streets, neon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air, mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past, each carrying their own stories, weaving a transient connection before disappearing into the crowd</p>

                        <div className="d-flex align-items-center mt-3 quantityList">
                            <Quantity/>
                            <Button className="addme"><IoCartOutline />ADD TO CART</Button>
                            <Button className="btn-round markMeFav" varient='outlined'><IoIosHeartEmpty/>ADD TO WISHLIST</Button>
                        </div>
                    </div>
                </div>
                
                <div className='card mt-5 p-5 detailsPageTabs'>
                    <div className='customTabs'>
                        <ul className='list list-inline'>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {setActiveTabs(0)}}>
                                    Description
                                </Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {setActiveTabs(1)}}>
                                    Additional info
                                </Button>
                            </li>
                            <li className='list-inline-item'>
                                <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {setActiveTabs(2)}}>
                                    Reviews (2)
                                </Button>
                            </li>
                        </ul>

                        <hr />
                        <br/>

                        {
                            activeTabs === 0 && <div className='tabContent'>
                                <p>Certainly! Here’s a concise 50-word paragraph:
                                “Amidst the bustling streets, neon signs flickered like distant stars. 
                                The aroma of freshly brewed coffee hung in the air, mingling with the soft hum of conversations. 
                                In this urban tapestry, strangers brushed past, each carrying their own stories, 
                                weaving a transient connection before disappearing into the crowd.”
                                Feel free to ask for more or anything else you’d like! 😊</p>
                            </div>
                        }
                        {
                            activeTabs === 1 && <div className='tabContent'>
                                <div className='table-responsive'>
                                    <table className='table'>
                                        <tbody>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <th className="tablehead">Stand Up</th>
                                                <td className="tabledata">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        }
                        {
                            activeTabs === 2 && <div className='tabContent'>
                                <h4>Customer questions & answers</h4>
                                <div className='card p-4 reviewsCard flex-row'>
                                    <div className='image'>
                                        <div className='rounded-circle'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png'/>
                                        </div>
                                        <span className='name'>Lahiru Randika</span>
                                    </div>

                                    <div className='info'>
                                        <div className='date-section'>
                                            <h5>10/10/2010</h5>
                                            <div>
                                                <Rating name="half-rating-read" value={4.5} precision={0.5} size='small' readOnly />
                                            </div>
                                        </div>
                                        <p>Certainly! Here’s a concise 50-word paragraph:“Amidst the bustling streets, 
                                            neon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air, 
                                            mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past, 
                                            each carrying their own stories, weaving a transient connection before disappearing into the 
                                            crowd.”Feel free to ask for more or anything else you’d like!
                                        </p>
                                    </div>
                                </div>
                                <div className='card p-4 reviewsCard flex-row'>
                                    <div className='image'>
                                        <div className='rounded-circle'>
                                            <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png'/>
                                        </div>
                                        <span className='name'>Lahiru Randika</span>
                                    </div>

                                    <div className='info'>
                                        <div className='date-section'>
                                            <h5>10/10/2010</h5>
                                            <div>
                                                <Rating name="half-rating-read" value={4.5} precision={0.5} size='small' readOnly />
                                            </div>
                                        </div>
                                        <p>Certainly! Here’s a concise 50-word paragraph:“Amidst the bustling streets, 
                                            neon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air, 
                                            mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past, 
                                            each carrying their own stories, weaving a transient connection before disappearing into the 
                                            crowd.”Feel free to ask for more or anything else you’d like!
                                        </p>
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-md-8'>
                                        <form className='reviewForm'>
                                            <h4>Add a review</h4>
                                            <div className='form-group'>
                                                <textarea className='form-control' placeholder='Write a Review..' name="review" ></textarea>
                                            </div>

                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <input type='text' className='form-control1' placeholder='Name' name='userName'/>
                                                    </div>
                                                </div>

                                                <div className='col-md-6'>
                                                    <div className='form-group'>
                                                        <p>Mark your experience</p>
                                                        <Rating  className='rating' name="rating" value={4} precision={0.5}/>
                                                    </div>
                                                </div>

                                                <div className='form-group'>
                                                    <Button type='submit' className='button'>Submit Review</Button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>

                                    <div className='col-md-4 pl-5 reviewBox'>
                                        <h4>Customer reviews</h4>
                                        <div className='d-flex align-items-center mt-2'>
                                            <p>We care your reviews</p>
                                        </div>
                                        <div className="progressBox">
                                            <Rating name="half-rating-read" defaultValue={5} readOnly />
                                            <h6>Greate </h6>
                                        </div>
                                        <div className="progressBox">
                                            <Rating name="half-rating-read" defaultValue={4} readOnly />
                                            <h6>Good </h6>
                                        </div>
                                        <div className="progressBox">
                                            <Rating name="half-rating-read" defaultValue={3} readOnly />
                                            <h6>Average </h6>
                                        </div>
                                        <div className="progressBox">
                                            <Rating name="half-rating-read" defaultValue={2} readOnly />
                                            <h6>Bad</h6>
                                        </div>
                                        <div className="progressBox">
                                            <Rating name="half-rating-read" defaultValue={1} readOnly />
                                            <h6>Poor</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>

                <RelatedProducts title='Related products'/>

                <RelatedProducts title='Recently viewed products'/>
            </div>
        </section>
    )
}
export default SingleProduct;