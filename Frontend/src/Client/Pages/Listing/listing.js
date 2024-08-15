import { Link } from "react-router-dom";
import Sidebar from "../../Components/Sidebar/sidebar";
import img1 from '../../assets/images/banner2.jpg'
import Button from "@mui/material/Button";
import { GoDotFill } from "react-icons/go";
import { CgMenuGridR } from 'react-icons/cg';
import { HiViewGrid } from 'react-icons/hi';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi'
import Productitem from "../../Components/Productitem/productitem";
import { useState } from "react";
import Pagination from '@mui/material/Pagination'

const Listing = () => {

    const [productView, setProductView] = useState('four')

    return (
        <section className="listing_page">
            <div className="container">
                <div className="products">
                    <Sidebar />
                    <div className="right">
                        <Link to="#"><img src={img1} className="w-100 pageBanner" /></Link>

                        <div className="showby mt-3 mb-3">
                            <div className="btnWrapper">
                                <Button onClick={() => setProductView('one')}><GoDotFill /></Button>
                                <Button onClick={() => setProductView('two')}><HiViewGrid /></Button>
                                <Button onClick={() => setProductView('three')}><CgMenuGridR /></Button>
                                <Button onClick={() => setProductView('four')}><TfiLayoutGrid4Alt /></Button>
                            </div>
                        </div>

                        <div className={`productListing ${productView}`}>
                            <Productitem />
                            <Productitem />
                            <Productitem />
                            <Productitem />
                            <Productitem />
                            <Productitem />
                            <Productitem />
                            <Productitem />
                        </div>

                        <div className="d-flex align-items-center justify-content-center">
                            <Pagination count={10} color='primary'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Listing;
