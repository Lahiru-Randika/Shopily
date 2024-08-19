import Button from '@mui/material/Button';
import { useState } from 'react';
import { FaAngleDown } from "react-icons/fa6";
import { IoIosMenu } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa6'


const Navigation = () => {

  const [isopensidebarval, setisopensidebarval] = useState(false)

  return (
    <nav>
      <div className="container fluid">
        <div className="navpart1">
          <div className='catWrapper'>
            <Button className="allCatTab" onClick={()=>setisopensidebarval(!isopensidebarval)}>
              <span className='item1 mr-2'><IoIosMenu/></span>
              <span className="text">All Categories</span>
              <span className='item2 ml-2'><FaAngleDown/></span>
            </Button>
            <div className={`sidebarNav ${isopensidebarval===true? 'open':''}`}>
              <ul>
                <li>
                  <Link to="/"><Button className='fluid' onClick={()=>setisopensidebarval(!isopensidebarval)}>set1<FaAngleRight className='icon'/></Button></Link>
                  <div className='submenu'>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub1</Button></Link></li>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub2</Button></Link></li>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub3</Button></Link></li>
                  </div>
                </li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set2</Button></Link></li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set3</Button></Link></li>
                <li>
                  <Link to="/"><Button className='fluid' onClick={()=>setisopensidebarval(!isopensidebarval)}>set4<FaAngleRight className='icon'/></Button></Link>
                  <div className='submenu'>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub1</Button></Link></li>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub2</Button></Link></li>
                    <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>setsub3</Button></Link></li>
                  </div>
                </li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set5</Button></Link></li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set6</Button></Link></li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set7</Button></Link></li>
                <li><Link to="/"><Button onClick={()=>setisopensidebarval(!isopensidebarval)}>set8</Button></Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navpart2">
          <ul className='list list-inline ml-alto'>
            <li className='list-inline-item'>
              <Link to="/"><Button className="navButton">Home<FaAngleDown className='gap'/></Button></Link>
              <div className='submenu shadow'>
                <Link to="/"><Button>set1</Button></Link>
                <Link to="/"><Button>set2</Button></Link>
                <Link to="/"><Button>set3</Button></Link>
              </div>
            </li>
            <li className='list-inline-item'>
              <Link to="/"><Button className="navButton">Grocery<FaAngleDown className='gap'/></Button></Link>
            </li>
            <li className='list-inline-item'>
              <Link to="/"><Button className="navButton">Meat & Seafood<FaAngleDown className='gap'/></Button></Link>
              <div className='submenu shadow'>
                <Link to="/"><Button>set1</Button></Link>
                <Link to="/"><Button>set2</Button></Link>
                <Link to="/"><Button>set3</Button></Link>
              </div>
            </li>
            <li className='list-inline-item'>
              <Link to="/"><Button className="navButton">Bakery<FaAngleDown className='gap'/></Button></Link>
            </li>
            <li className='list-inline-item'>
              <Link to="/"><Button className="navButton">Fashion<FaAngleDown className='gap'/></Button></Link>
              <div className='submenu shadow'>
                <Link to="/"><Button>set1</Button></Link>
                <Link to="/"><Button>set2</Button></Link>
                <Link to="/"><Button>set3</Button></Link>
              </div>
            </li>
            <li className='list-inline-item'>
              <Link to="/contact-us"><Button className="navButton">Contact Us<FaAngleDown className='gap'/></Button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
