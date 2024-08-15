import { useContext, useState } from "react";
import { MyContext } from "../../../App";
import Sidebar from "../../components/Sidebar/sidebar";
import ProductSlider from "../../../Client/Components/ProductSlider/productslider";
import Rating from "@mui/material/Rating";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTags } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Button } from "@mui/material";
import { IoSend } from "react-icons/io5";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

const reviews = [
    {
      id: 1,
      name: "Lahiru Randika",
      date: "10/10/2010",
      rating: 4.5,
      comment: "Certainly! Here’s a concise 50-word paragraph:“Amidst the bustling streetsneon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air,mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past,each carrying their own stories, weaving a transient connection before disappearing into thecrowd.”Feel free to ask for more or anything else you’d like!",
      replyDate: "10/10/2010",
      replyComment: "Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the space it gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the spaceit gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.",
      replyName: "Me"
    },
    {
        id: 2,
        name: "Gayan Randika",
        date: "10/10/2010",
        rating: 4.5,
        comment: "Certainly! Here’s a concise 50-word paragraph:“Amidst the bustling streetsneon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air,mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past,each carrying their own stories, weaving a transient connection before disappearing into thecrowd.”Feel free to ask for more or anything else you’d like!",
        replyDate: "10/10/2010",
        replyComment: "Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the space it gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the spaceit gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.",
        replyName: "Me"
    },
    {
        id: 3,
        name: "Chamod Randika",
        date: "10/10/2010",
        rating: 4.5,
        comment: "Certainly! Here’s a concise 50-word paragraph:“Amidst the bustling streetsneon signs flickered like distant stars. The aroma of freshly brewed coffee hung in the air,mingling with the soft hum of conversations. In this urban tapestry, strangers brushed past,each carrying their own stories, weaving a transient connection before disappearing into thecrowd.”Feel free to ask for more or anything else you’d like!",
        replyDate: "10/10/2010",
        replyComment: "Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the space it gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.Hey! Thank You for your kind comment. Here I just want to test that the text is breaking according to the spaceit gets. This can be little difficult to achive because we must chech various cases like max-width, max word size etc.",
        replyName: "Me"
      },
  ];
  

const Productdetails = () => {
  const context = useContext(MyContext);

  const [open, setOpen] = useState(false);
  const [rocket, setRocket] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setRocket(false);
  };

  const handleClose = () => {
    setOpen(false);
    setRocket(true);
  };

  return (
    <div className='dashboard AdminDetails'>
      <div className={`d-flex sidebarDash ${context.isToggleSidebar === true ? 'toggle' : ''}`}>
        <Sidebar />
      </div>
      <div className={`content-right d-flex ${context.isToggleSidebar === true ? 'toggle' : ''}`}>
        <div className="topic w-100 pb-3">
          <h4>View products</h4>
        </div>
        <div className="adminSlider">
          <ProductSlider className='slider' />
        </div>
        <div className="Mydetails w-100">
          <h2 className="name mb-5 mt-4">PRODUCT NAME</h2>

          <div className="subdetails ">
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><MdBrandingWatermark /></span>
                <span className="name">Brand</span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>name</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><BiSolidCategoryAlt /></span>
                <span className="name">Category </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>Cat 01</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><BsCalendar2DateFill /></span>
                <span className="name">Published</span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>10/10/2029</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><FaTags /></span>
                <span className="name">Tags </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center gap">
                <span>:</span>
                <span className="tags">tag 01</span>
                <span className="tags">tag 01</span>
                <span className="tags">tag 01</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><AiFillDollarCircle /></span>
                <span className="name">Price </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span className="oldprice">rs 180</span>
                <span className='newprice'>rs 200</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><FaSortAmountUpAlt /></span>
                <span className="name">Stocks </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>100 pieces</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-3 d-flex align-items-center set1">
                <span className="icon"><MdReviews /></span>
                <span className="name">Reviews </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>3 reviews</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex topic descriptionSet w-100 mt-3 ${context.isToggleSidebar === true ? 'toggle' : ''}`}>
          <div className="w-100 pb-3">
            <h4>Description</h4>
          </div>
          <div className="para">
            <p>Here we can write any description about the
              product like its main qualities, max qualities etc..................
              Amidst the bustling streets, neon signs flickered like distant stars. The aroma
              of freshly brewed coffee hung in the air, mingling with the soft hum of
              conversations. In this urban tapestry, strangers brushed past, each carrying their
              own stories, weaving a transient connection before disappearing into the crowd</p>
          </div>
        </div>
        <div className={`d-flex reviewSection w-100 mt-3 ${context.isToggleSidebar === true ? 'toggle' : ''}`}>
            <div className="w-100 topic">
                <h4>Reviews of the Product</h4>
            </div>
            <div className="reviewBox d-flex flex-column w-100">
                {reviews.map((review, index) => (
                    <div key={review.id} className={`reviewPair ${index % 2 === 0 ? 'reviewPaircol1' : 'reviewPaircol2'}`}>
                        <div className='reviewCard '>
                            <div className='image'>
                                <div className='rounded-circle'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                </div>
                                <span className='name'>{review.name}</span>
                            </div>
                            <div className='info'>
                                <div className='date-section'>
                                    <h5>{review.date}</h5>
                                    <div className="d-flex stars">
                                        <h6><b>Replied with</b></h6>
                                        <Rating className="custom-rating" name="half-rating-read" value={4.5} precision={0.5} readOnly />
                                    </div>     
                                </div>
                                <p>{review.comment}</p>
                            </div>
                        </div>
                        <div className='replyCard reviewCard d-flex'>
                            <div>
                                <h5>{review.replyDate}</h5>
                                <p>{review.replyComment}</p>
                            </div>
                            <div className='image'>
                                <div className='rounded-circle'>
                                    <img src='https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png' />
                                </div>
                                <span className='name'>{review.replyName}</span>
                            </div>
                        </div>
                        <form className='reviewForm'>
                            <Button className='post' onClick={handleClickOpen}>Reply</Button>
                            <Dialog
                                open={open}
                                id= 'dialogBox'
                                onClose={handleClose}
                                PaperProps={{
                                component: 'form',
                                onSubmit: (event) => {
                                    event.preventDefault();
                                    handleClose();
                                },
                                }}
                            >
                                <DialogContent>
                                    <DialogContentText>
                                        <p  className="topictext">These comments are stored with us to keep the better customer service service</p>
                                    </DialogContentText>
                                    <textarea className='form-control' placeholder='Write a Review..' name="review"></textarea>
                                </DialogContent>
                                <DialogActions>
                                    <Button type='submit' className='send' onClick={handleClose}>
                                        <IoSend />
                                    </Button>
                                    {
                                      rocket === true ? <div class="stars">
                                          
                                      </div>
                                      :''
                                    }
                                </DialogActions>
                            </Dialog>
                        </form>
                    </div>
                ))}
            </div>
            </div>
      </div>
    </div>
  )
}

export default Productdetails;
