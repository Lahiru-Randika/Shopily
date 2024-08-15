import { useContext, useState } from "react";
import { MyContext } from "../../../App";
import Sidebar from "../../components/Sidebar/sidebar";
import ProductSlider from "../../../Client/Components/ProductSlider/productslider";
import { MdBrandingWatermark } from "react-icons/md";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsCalendar2DateFill } from "react-icons/bs";
import { FaTags } from "react-icons/fa6";
import { AiFillDollarCircle } from "react-icons/ai";
import { FaSortAmountUpAlt } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { IoInformationCircle } from "react-icons/io5";
import { Button } from "@mui/material";

const EditableField = ({ value, multiline = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(value);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return isEditing ? (
    multiline ? (
      <textarea
        className="editable-textarea"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        onBlur={handleBlur}
        autoFocus
        rows="4"
        cols="50"
      />
    ) : (
      <input
        className="editable-input"
        type="text"
        value={newValue}
        onChange={(e) => setNewValue(e.target.value)}
        onBlur={handleBlur}
        autoFocus
      />
    )
  ) : (
    <span onClick={handleEdit}>{newValue}</span>
  );
};

const ProductEdit = () => {

  const context = useContext(MyContext);

  return (
    <div className='dashboard AdminDetails editProductPage'>
      <div className={`d-flex sidebarDash ${context.isToggleSidebar ? 'toggle' : ''}`}>
        <Sidebar/>
      </div>
      <div className={`content-right d-flex ${context.isToggleSidebar ? 'toggle' : ''}`}>
        <div className="topic w-100">
          <h4>Edit your product details</h4>
          <p>Just click and edit</p>
        </div>
        <div className="adminSlider">
          <ProductSlider className='slider' />
        </div>
        <div className="Mydetails w-100">
          <h2 className="name mb-5 mt-4">
            <EditableField value="ProductName" />
          </h2>

          <div className="subdetails">
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><MdBrandingWatermark /></span>
                <span className="name">Brand</span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <EditableField value="name" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><BiSolidCategoryAlt /></span>
                <span className="name">Category </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <EditableField value="Cat 01" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><BsCalendar2DateFill /></span>
                <span className="name">Published</span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>10/10/2050</span>
                <span className="cross"><IoInformationCircle />
                    <p className="message"> You can't edit this field</p>
                </span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><FaTags /></span>
                <span className="name">Tags </span>
              </div>
              <div className="col-sm-7 d-flex align-items-center gap">
                <span>:</span>
                <span className="tags"><EditableField value="tag1" /></span>
                <span className="tags"><EditableField value="tag2" /></span>
                <span className="tags"><EditableField value="tag3" /></span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><AiFillDollarCircle /></span>
                <span className="name">Old Price</span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <EditableField className="oldprice" value="rs 180" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><AiFillDollarCircle /></span>
                <span className="name">New Price </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <EditableField className='newprice' value="rs 200" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><FaSortAmountUpAlt /></span>
                <span className="name">Stocks </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <EditableField value="100 pieces" />
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-sm-4 d-flex align-items-center set1">
                <span className="icon"><MdReviews /></span>
                <span className="name">Reviews </span>
              </div>
              <div className="col-sm-5 d-flex align-items-center gap">
                <span>:</span>
                <span>3 reviews</span>
                <span className="cross"><IoInformationCircle />
                    <p className="message"> You can't edit this field</p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={`d-flex topic descriptionSet w-100 mt-3 ${context.isToggleSidebar ? 'toggle' : ''}`}>
          <div className="w-100 pb-3">
            <h4>Description</h4>
          </div>
          <div className="para">
            <EditableField  multiline value="Here we can write any description about the product like its main qualities, max qualities, etc. 
              Amidst the bustling streets, neon signs flickered like distant stars. The aroma of freshly brewed coffee 
              hung in the air, mingling with the soft hum of conversations. In this urban tapestry, strangers brushed 
              past, each carrying their own stories, weaving a transient connection before disappearing into the crowd." />
          </div>
        </div>
        <div className="btn btn-rounded savechanges mt-3">
          <Button>
              Save Changes
              <div className="bubbles">
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
                  <div className="bubble"></div>
              </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductEdit;
