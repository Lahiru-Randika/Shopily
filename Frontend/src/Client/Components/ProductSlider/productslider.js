import Slider from "react-slick";
import { useContext, useRef, useState } from "react";
import { MyContext } from "../../../App";
import { Button } from "@mui/material";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import { IoCloseCircleSharp } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { MdChangeCircle } from "react-icons/md";

const ProductSlider =()=>{
    const context = useContext(MyContext)
    const zoomSlider = useRef()
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);
    const [open4, setOpen4] = useState(false);

    var settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        sliedsToShow: 5,
        slidesToScroll: 1,
        fade: false,
        arrows:true
    }

    const handleImageClick1 = () => {
        context.setIsImgClicked(true);
    };
    const handleButtonClick1 = ()=>{
        setOpen1(true);
        context.setIsImgClicked(false);
    }
    const handleImageClick2 = () => {
        context.setIsImgClicked(true);
    };
    const handleButtonClick2 = ()=>{
        setOpen2(true);
        context.setIsImgClicked(false);
    }
    const handleImageClick3 = () => {
        context.setIsImgClicked(true);
    };
    const handleButtonClick3 = ()=>{
        setOpen3(true);
        context.setIsImgClicked(false);
    }
    const handleImageClick4 = () => {
        context.setIsImgClicked(true);
    };
    const handleButtonClick4 = ()=>{
        setOpen4(true);
        context.setIsImgClicked(false);
    }
    const handleCloseClick1 = () => {
        context.setIsImgClicked(false);
        setOpen1(false);
    };
    const handleCloseClick2 = () => {
        context.setIsImgClicked(false);
        setOpen2(false);
    };
    const handleCloseClick3 = () => {
        context.setIsImgClicked(false);
        setOpen3(false);
    };
    const handleCloseClick4 = () => {
        context.setIsImgClicked(false);
        setOpen4(false);
    };

    return(
        <Slider {...settings} className="zoomSlider" ref={zoomSlider}>
            <div className='item'>
                <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'  onClick={handleImageClick1}/>
                <div className={`clicked ${context.isImgClicked === true ? 'yes':''}`} >
                    <Button className='w-100 btnopen' onClick={handleButtonClick1}>Try Change Me option options</Button>
                    <Dialog
                        open={open1}
                        id= 'dialogBox'
                        onClose={handleCloseClick1}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            handleCloseClick1();
                        },
                        }}
                    >
                        <DialogContent>
                            <DialogContentText>
                                <p  className="topictext">Not the best? Try Change Me option 
                                    <Button className="closeme">
                                        <IoCloseCircleSharp onClick={handleCloseClick1}/>
                                    </Button>
                                </p>
                            </DialogContentText>
                            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="image"/>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit' className='send change' onClick={handleCloseClick1}>
                                <MdChangeCircle/>
                                ChangeMe
                            </Button>
                            <Button type='submit' className='send delete' onClick={handleCloseClick1}>
                                <MdDelete />
                                Delete Me
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className="item">
            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'  onClick={handleImageClick2}/>
                <div className={`clicked ${context.isImgClicked === true ? 'yes':''}`} >
                    <Button className='w-100 btnopen' onClick={handleButtonClick2}>Try Change Me option options</Button>
                    <Dialog
                        open={open2}
                        id= 'dialogBox'
                        onClose={handleCloseClick2}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            handleCloseClick2();
                        },
                        }}
                    >
                        <DialogContent>
                            <DialogContentText>
                                <p  className="topictext">Not the best? Try Change Me option
                                    <Button className="closeme">
                                        <IoCloseCircleSharp onClick={handleCloseClick2}/>
                                    </Button>
                                </p>
                            </DialogContentText>
                            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="image"/>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit' className='send change' onClick={handleCloseClick2}>
                                <MdChangeCircle/>
                                ChangeMe
                            </Button>
                            <Button type='submit' className='send delete' onClick={handleCloseClick2}>
                                <MdDelete />
                                Delete Me
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className="item">
            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'  onClick={handleImageClick3}/>
                <div className={`clicked ${context.isImgClicked === true ? 'yes':''}`} >
                    <Button className='w-100 btnopen' onClick={handleButtonClick3}>Try Change Me option options</Button>
                    <Dialog
                        open={open3}
                        id= 'dialogBox'
                        onClose={handleCloseClick3}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            handleCloseClick3();
                        },
                        }}
                    >
                        <DialogContent>
                            <DialogContentText>
                                <p  className="topictext">Not the best? Try Change Me option
                                    <Button className="closeme">
                                        <IoCloseCircleSharp onClick={handleCloseClick3}/>
                                    </Button>
                                </p>
                            </DialogContentText>
                            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="image"/>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit' className='send change' onClick={handleCloseClick3}>
                                <MdChangeCircle/>
                                ChangeMe
                            </Button>
                            <Button type='submit' className='send delete' onClick={handleCloseClick3}>
                                <MdDelete />
                                Delete Me
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
            <div className="item">
            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className='w-100'  onClick={handleImageClick4}/>
                <div className={`clicked ${context.isImgClicked === true ? 'yes':''}`} >
                    <Button className='w-100 btnopen' onClick={handleButtonClick4}>Try Change Me option options</Button>
                    <Dialog
                        open={open4}
                        id= 'dialogBox'
                        onClose={handleCloseClick4}
                        PaperProps={{
                        component: 'form',
                        onSubmit: (event) => {
                            event.preventDefault();
                            handleCloseClick4();
                        },
                        }}
                    >
                        <DialogContent>
                            <DialogContentText>
                                <p  className="topictext">Not the best? Try Change Me option
                                    <Button className="closeme">
                                        <IoCloseCircleSharp onClick={handleCloseClick4}/>
                                    </Button>
                                </p>
                            </DialogContentText>
                            <img src={`http://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="image"/>
                        </DialogContent>
                        <DialogActions>
                            <Button type='submit' className='send change' onClick={handleCloseClick4}>
                                <MdChangeCircle/>
                                ChangeMe
                            </Button>
                            <Button type='submit' className='send delete' onClick={handleCloseClick4}>
                                <MdDelete />
                                Delete Me
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </Slider>
    )
}
export default ProductSlider;

