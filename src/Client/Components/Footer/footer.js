import { LuShirt } from "react-icons/lu"
import { TbTruckDelivery } from "react-icons/tb";
import { TbDiscount } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = ()=>{
    return(
        <footer>
            <div className="container">
                <div className="topinfo row">
                    <div className="col">
                        <span><LuShirt/></span>
                        <span className="ml-2">Every clothings</span>
                    </div>
                    <div className="col">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Fresh deliveries</span>
                    </div>
                    <div className="col">
                        <span><TbDiscount/></span>
                        <span className="ml-2">Daily mega discounts</span>
                    </div>
                    <div className="col">
                        <span><CiBadgeDollar /></span>
                        <span className="ml-2">Best prices on the market</span>
                    </div>
                </div>

                <div className="row mt-4 linkWrapper">
                    <div className="col">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Link 1</Link></li>
                            <li><Link to="#">Link 2</Link></li>
                            <li><Link to="#">Link 3</Link></li>
                            <li><Link to="#">Link 4</Link></li>
                            <li><Link to="#">Link 5</Link></li>
                            <li><Link to="#">Link 6</Link></li>
                            <li><Link to="#">Link 7</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Link 1</Link></li>
                            <li><Link to="#">Link 2</Link></li>
                            <li><Link to="#">Link 3</Link></li>
                            <li><Link to="#">Link 4</Link></li>
                            <li><Link to="#">Link 5</Link></li>
                            <li><Link to="#">Link 6</Link></li>
                            <li><Link to="#">Link 7</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Link 1</Link></li>
                            <li><Link to="#">Link 2</Link></li>
                            <li><Link to="#">Link 3</Link></li>
                            <li><Link to="#">Link 4</Link></li>
                            <li><Link to="#">Link 5</Link></li>
                            <li><Link to="#">Link 6</Link></li>
                            <li><Link to="#">Link 7</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Link 1</Link></li>
                            <li><Link to="#">Link 2</Link></li>
                            <li><Link to="#">Link 3</Link></li>
                            <li><Link to="#">Link 4</Link></li>
                            <li><Link to="#">Link 5</Link></li>
                            <li><Link to="#">Link 6</Link></li>
                            <li><Link to="#">Link 7</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>FRUITS AND VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Link 1</Link></li>
                            <li><Link to="#">Link 2</Link></li>
                            <li><Link to="#">Link 3</Link></li>
                            <li><Link to="#">Link 4</Link></li>
                            <li><Link to="#">Link 5</Link></li>
                            <li><Link to="#">Link 6</Link></li>
                            <li><Link to="#">Link 7</Link></li>
                        </ul>
                    </div>
                </div>
                <div className="copyright mt-3  pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2024. All rights reserved</p>
                    <ul className="list list-inline ml-auto mb-0">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebook/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaInstagram/></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;